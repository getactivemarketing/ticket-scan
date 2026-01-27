require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

// Rate limiters for security
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: { success: false, error: 'Too many attempts, please try again in 15 minutes' },
  standardHeaders: true,
  legacyHeaders: false,
});

const generalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute
  message: { success: false, error: 'Too many requests, please slow down' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Email transporter setup
const smtpPort = parseInt(process.env.SMTP_PORT || '587');
const emailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465, // true for SSL (465), false for TLS (587)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Send welcome email to new users
async function sendWelcomeEmail(userEmail) {
  if (!process.env.SMTP_USER) {
    console.log('📧 Email not configured, skipping welcome email for:', userEmail);
    return false;
  }

  try {
    await emailTransporter.sendMail({
      from: `"Ticket Scan" <${process.env.SMTP_USER}>`,
      to: userEmail,
      subject: 'Welcome to Ticket Scan! 🎫',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🎫 Welcome to Ticket Scan!</h1>
          </div>
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-top: 0;">You're all set to find the best ticket deals</h2>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              Thanks for signing up! Ticket Scan helps you compare prices across Ticketmaster, SeatGeek, and other major ticket sites so you never overpay for tickets again.
            </p>

            <div style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb;">
              <h3 style="color: #1f2937; margin-top: 0;">Here's what you can do:</h3>
              <ul style="color: #4b5563; padding-left: 20px; line-height: 1.8;">
                <li><strong>Search Events</strong> - Find concerts, sports, and shows in any city</li>
                <li><strong>Compare Prices</strong> - See prices from multiple ticket sites at once</li>
                <li><strong>Track Prices</strong> - Add events to your watchlist and set target prices</li>
                <li><strong>Get Alerts</strong> - We'll email you when prices drop below your target</li>
                <li><strong>Save Favorites</strong> - Save your favorite teams and artists</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://ticketscan.io/dashboard" style="display: inline-block; background: #7c3aed; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
                Start Searching Events
              </a>
            </div>

            <div style="background: #faf5ff; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #7c3aed;">
              <h4 style="color: #6b21a8; margin-top: 0;">💡 Pro Tip</h4>
              <p style="color: #6b7280; margin-bottom: 0; font-size: 14px;">
                Ticket prices often drop 2-3 weeks before an event. Set a price alert on your watchlist and we'll notify you when it's the perfect time to buy!
              </p>
            </div>

            <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
              Questions? Just reply to this email - we're here to help!<br><br>
              Happy ticket hunting!<br>
              <strong>The Ticket Scan Team</strong>
            </p>
          </div>
          <div style="background: #1f2937; padding: 20px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              <a href="https://ticketscan.io" style="color: #a78bfa; text-decoration: none;">ticketscan.io</a> |
              <a href="https://ticketscan.io/blog" style="color: #a78bfa; text-decoration: none;">Ticket Tips Blog</a> |
              <a href="https://ticketscan.io/privacy" style="color: #a78bfa; text-decoration: none;">Privacy Policy</a>
            </p>
          </div>
        </div>
      `,
    });
    console.log(`📧 Welcome email sent to ${userEmail}`);
    return true;
  } catch (error) {
    console.error('Welcome email send error:', error.message);
    return false;
  }
}

// Send price drop alert email
async function sendPriceDropEmail(userEmail, eventName, currentPrice, targetPrice, eventDate) {
  if (!process.env.SMTP_USER) {
    console.log('📧 Email not configured, skipping alert for:', eventName);
    return false;
  }

  try {
    await emailTransporter.sendMail({
      from: `"Ticket Scan" <${process.env.SMTP_USER}>`,
      to: userEmail,
      subject: `🎫 Price Drop Alert: ${eventName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">🎫 Ticket Scan</h1>
          </div>
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-top: 0;">Price Drop Alert!</h2>
            <p style="color: #4b5563; font-size: 16px;">Great news! The ticket price for an event you're tracking has dropped below your target price.</p>

            <div style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb;">
              <h3 style="color: #1f2937; margin-top: 0;">${eventName}</h3>
              <p style="color: #6b7280; margin: 5px 0;">📅 ${new Date(eventDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
              <div style="margin-top: 15px;">
                <span style="background: #10b981; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold; font-size: 18px;">
                  Now: $${currentPrice}
                </span>
                <span style="color: #6b7280; margin-left: 10px;">Your target: $${targetPrice}</span>
              </div>
            </div>

            <a href="https://ticketscan.io/watchlist" style="display: inline-block; background: #7c3aed; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 10px;">
              View on Ticket Scan
            </a>

            <p style="color: #9ca3af; font-size: 12px; margin-top: 30px;">
              You're receiving this because you set a price alert on Ticket Scan.
            </p>
          </div>
        </div>
      `,
    });
    console.log(`📧 Price drop email sent to ${userEmail} for ${eventName}`);
    return true;
  } catch (error) {
    console.error('Email send error:', error.message);
    return false;
  }
}

// ========== EMAIL DRIP CAMPAIGN ==========

// Drip email schedule: [email_number, days_after_signup]
const DRIP_SCHEDULE = [
  { emailNumber: 1, daysAfter: 3 },   // Day 3: Watchlist & Alerts
  { emailNumber: 2, daysAfter: 7 },   // Day 7: Best time to buy
  { emailNumber: 3, daysAfter: 14 },  // Day 14: Compare prices
  { emailNumber: 4, daysAfter: 21 },  // Day 21: Venue guides
  { emailNumber: 5, daysAfter: 30 },  // Day 30: Re-engagement
];

// Email templates for drip campaign
const DRIP_EMAILS = {
  1: {
    subject: '🎯 Never Miss a Price Drop - Set Up Alerts',
    getHtml: () => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🎯 Track Prices Like a Pro</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Did you know you can get notified when prices drop?</h2>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            Our users save an average of <strong>$127 per ticket</strong> by tracking prices and buying at the right time.
          </p>

          <div style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb;">
            <h3 style="color: #1f2937; margin-top: 0;">How to set up price alerts:</h3>
            <ol style="color: #4b5563; padding-left: 20px; line-height: 2;">
              <li>Search for an event you want to attend</li>
              <li>Click <strong>"Add to Watchlist"</strong></li>
              <li>Set your <strong>target price</strong> - the max you want to pay</li>
              <li>We'll email you instantly when prices drop below your target!</li>
            </ol>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://ticketscan.io/dashboard" style="display: inline-block; background: #7c3aed; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
              Find Events to Track
            </a>
          </div>

          <div style="background: #faf5ff; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #7c3aed;">
            <h4 style="color: #6b21a8; margin-top: 0;">💡 Pro Tip</h4>
            <p style="color: #6b7280; margin-bottom: 0; font-size: 14px;">
              Set your target price 15-20% below the current price. Ticket prices fluctuate constantly, and you might snag a deal!
            </p>
          </div>
        </div>
        <div style="background: #1f2937; padding: 20px; text-align: center;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            <a href="https://ticketscan.io" style="color: #a78bfa; text-decoration: none;">ticketscan.io</a> |
            <a href="https://ticketscan.io/how-it-works" style="color: #a78bfa; text-decoration: none;">How It Works</a>
          </p>
        </div>
      </div>
    `,
  },
  2: {
    subject: '⏰ When Is the Best Time to Buy Tickets?',
    getHtml: () => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">⏰ Timing Is Everything</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">The secret to getting the best ticket prices</h2>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            Most people buy tickets at the wrong time and overpay. Here's what the data shows:
          </p>

          <div style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb;">
            <h3 style="color: #1f2937; margin-top: 0;">🎫 Best Times to Buy:</h3>
            <ul style="color: #4b5563; padding-left: 20px; line-height: 2;">
              <li><strong>2-3 weeks before:</strong> Sweet spot for most events - resellers start dropping prices</li>
              <li><strong>Day of the event:</strong> Last-minute deals (risky but can be cheap)</li>
              <li><strong>Tuesdays & Wednesdays:</strong> Less buyer competition = lower prices</li>
            </ul>

            <h3 style="color: #1f2937; margin-top: 20px;">❌ Worst Times to Buy:</h3>
            <ul style="color: #4b5563; padding-left: 20px; line-height: 2;">
              <li><strong>Right when tickets go on sale:</strong> Prices are at their peak</li>
              <li><strong>Fridays & weekends:</strong> More competition drives prices up</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://ticketscan.io/blog/best-time-to-buy-tickets" style="display: inline-block; background: #7c3aed; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
              Read the Full Guide
            </a>
          </div>
        </div>
        <div style="background: #1f2937; padding: 20px; text-align: center;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            <a href="https://ticketscan.io" style="color: #a78bfa; text-decoration: none;">ticketscan.io</a> |
            <a href="https://ticketscan.io/blog" style="color: #a78bfa; text-decoration: none;">More Tips</a>
          </p>
        </div>
      </div>
    `,
  },
  3: {
    subject: '💰 Are You Comparing Prices? (You Should Be)',
    getHtml: () => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">💰 Same Seat, Different Prices</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">The same ticket can cost 30% more on one site vs another</h2>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            That's why we built Ticket Scan - to show you prices from multiple platforms in one place.
          </p>

          <div style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb;">
            <h3 style="color: #1f2937; margin-top: 0;">We compare prices from:</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
              <span style="background: #f3f4f6; padding: 8px 16px; border-radius: 20px; color: #4b5563;">Ticketmaster</span>
              <span style="background: #f3f4f6; padding: 8px 16px; border-radius: 20px; color: #4b5563;">SeatGeek</span>
              <span style="background: #f3f4f6; padding: 8px 16px; border-radius: 20px; color: #4b5563;">StubHub</span>
              <span style="background: #f3f4f6; padding: 8px 16px; border-radius: 20px; color: #4b5563;">Vivid Seats</span>
              <span style="background: #f3f4f6; padding: 8px 16px; border-radius: 20px; color: #4b5563;">+ More</span>
            </div>
          </div>

          <div style="background: #dcfce7; border-radius: 12px; padding: 20px; margin: 20px 0;">
            <p style="color: #166534; margin: 0; font-size: 16px;">
              <strong>Real example:</strong> Lakers vs Celtics tickets were $189 on Ticketmaster but only $156 on SeatGeek for the same section. That's $33 saved per ticket!
            </p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://ticketscan.io/compare" style="display: inline-block; background: #7c3aed; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
              Compare Prices Now
            </a>
          </div>
        </div>
        <div style="background: #1f2937; padding: 20px; text-align: center;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            <a href="https://ticketscan.io" style="color: #a78bfa; text-decoration: none;">ticketscan.io</a> |
            <a href="https://ticketscan.io/faq" style="color: #a78bfa; text-decoration: none;">FAQ</a>
          </p>
        </div>
      </div>
    `,
  },
  4: {
    subject: '🏟️ Know Your Venue Before You Buy',
    getHtml: () => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🏟️ Venue Insider Tips</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Not all seats are created equal</h2>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            Before you buy tickets, know which sections offer the best value at each venue. We've put together guides for the most popular arenas.
          </p>

          <div style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb;">
            <h3 style="color: #1f2937; margin-top: 0;">Popular Venue Guides:</h3>
            <ul style="color: #4b5563; padding-left: 0; list-style: none; line-height: 2.5;">
              <li>🏀 <a href="https://ticketscan.io/venues/msg" style="color: #7c3aed; text-decoration: none;">Madison Square Garden</a> - Knicks, Rangers, concerts</li>
              <li>🏀 <a href="https://ticketscan.io/venues/crypto-arena" style="color: #7c3aed; text-decoration: none;">Crypto.com Arena</a> - Lakers, Clippers, Kings</li>
              <li>🏀 <a href="https://ticketscan.io/venues/united-center" style="color: #7c3aed; text-decoration: none;">United Center</a> - Bulls, Blackhawks</li>
              <li>🏀 <a href="https://ticketscan.io/venues/kaseya-center" style="color: #7c3aed; text-decoration: none;">Kaseya Center</a> - Miami Heat</li>
              <li>🏀 <a href="https://ticketscan.io/venues/kia-center" style="color: #7c3aed; text-decoration: none;">Kia Center</a> - Orlando Magic</li>
            </ul>
          </div>

          <div style="background: #faf5ff; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #7c3aed;">
            <h4 style="color: #6b21a8; margin-top: 0;">💡 Pro Tip</h4>
            <p style="color: #6b7280; margin-bottom: 0; font-size: 14px;">
              Upper level corner seats often have better sightlines than lower level seats behind the stage or goal. Check our guides before buying!
            </p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://ticketscan.io/blog" style="display: inline-block; background: #7c3aed; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
              Read All Venue Guides
            </a>
          </div>
        </div>
        <div style="background: #1f2937; padding: 20px; text-align: center;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            <a href="https://ticketscan.io" style="color: #a78bfa; text-decoration: none;">ticketscan.io</a> |
            <a href="https://ticketscan.io/blog" style="color: #a78bfa; text-decoration: none;">All Guides</a>
          </p>
        </div>
      </div>
    `,
  },
  5: {
    subject: '🎫 Any Events Coming Up? We Can Help',
    getHtml: () => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🎫 We Miss You!</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Got any events on your radar?</h2>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            It's been a month since you signed up, and we wanted to check in. Whether it's a concert, sports game, or show - we're here to help you find the best deal.
          </p>

          <div style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb;">
            <h3 style="color: #1f2937; margin-top: 0;">What's hot right now:</h3>
            <ul style="color: #4b5563; padding-left: 20px; line-height: 2;">
              <li>🏀 NBA season in full swing</li>
              <li>🏒 NHL games every week</li>
              <li>🎤 Major concert tours on sale</li>
              <li>🎭 Broadway & theater shows</li>
            </ul>
          </div>

          <div style="background: #fef3c7; border-radius: 12px; padding: 20px; margin: 20px 0;">
            <p style="color: #92400e; margin: 0; font-size: 16px;">
              <strong>Remember:</strong> Add events to your watchlist and set price alerts. We'll do the monitoring so you don't have to!
            </p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://ticketscan.io/dashboard" style="display: inline-block; background: #7c3aed; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
              Search for Events
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 14px; text-align: center; margin-top: 30px;">
            Questions or feedback? Just reply to this email!<br>
            <strong>- The Ticket Scan Team</strong>
          </p>
        </div>
        <div style="background: #1f2937; padding: 20px; text-align: center;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            <a href="https://ticketscan.io" style="color: #a78bfa; text-decoration: none;">ticketscan.io</a> |
            <a href="https://ticketscan.io/dashboard" style="color: #a78bfa; text-decoration: none;">Dashboard</a>
          </p>
        </div>
      </div>
    `,
  },
};

// Send World Cup announcement email
async function sendWorldCupEmail(userEmail) {
  if (!process.env.SMTP_USER) {
    console.log('📧 Email not configured, skipping World Cup email for:', userEmail);
    return false;
  }

  try {
    await emailTransporter.sendMail({
      from: `"Ticket Scan" <${process.env.SMTP_USER}>`,
      to: userEmail,
      subject: '⚽ 2026 World Cup Tickets - Compare Prices Across All 16 Stadiums',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #16a34a 0%, #059669 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">⚽ FIFA World Cup 2026</h1>
            <p style="color: #bbf7d0; margin-top: 10px; font-size: 16px;">The Biggest World Cup Ever is Coming</p>
          </div>
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-top: 0;">Get Ready for World Cup Tickets</h2>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              The 2026 FIFA World Cup will be hosted across <strong>USA, Canada, and Mexico</strong> with 48 teams and 104 matches. It's the biggest World Cup ever - and tickets will be in massive demand.
            </p>

            <div style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb;">
              <h3 style="color: #1f2937; margin-top: 0;">📍 16 Host Stadiums</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 14px; color: #4b5563;">
                <div>🇺🇸 New York - MetLife</div>
                <div>🇺🇸 Los Angeles - SoFi</div>
                <div>🇺🇸 Miami - Hard Rock</div>
                <div>🇺🇸 Dallas - AT&T Stadium</div>
                <div>🇺🇸 Atlanta - Mercedes-Benz</div>
                <div>🇺🇸 Seattle - Lumen Field</div>
                <div>🇨🇦 Toronto - BMO Field</div>
                <div>🇲🇽 Mexico City - Azteca</div>
              </div>
              <p style="color: #6b7280; font-size: 12px; margin-top: 10px; margin-bottom: 0;">+ 8 more venues</p>
            </div>

            <div style="background: #dcfce7; border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="color: #166534; margin-top: 0;">🎫 How Ticket Scan Helps</h3>
              <ul style="color: #166534; padding-left: 20px; line-height: 1.8; margin-bottom: 0;">
                <li>Compare prices across StubHub, Ticketmaster, SeatGeek</li>
                <li>Set price alerts for your target budget</li>
                <li>Get notified when tickets drop</li>
                <li>Find the best deals for any match</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://ticketscan.io/world-cup-2026" style="display: inline-block; background: #16a34a; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
                Explore World Cup Venues
              </a>
            </div>

            <div style="background: #faf5ff; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #7c3aed;">
              <h4 style="color: #6b21a8; margin-top: 0;">📅 Key Dates</h4>
              <p style="color: #6b7280; margin-bottom: 0; font-size: 14px;">
                <strong>Tournament:</strong> June 11 - July 19, 2026<br>
                <strong>Ticket Sales:</strong> Expected late 2025<br>
                <strong>Resale Market:</strong> Track prices now on Ticket Scan
              </p>
            </div>

            <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
              Happy ticket hunting!<br>
              <strong>The Ticket Scan Team</strong>
            </p>
          </div>
          <div style="background: #1f2937; padding: 20px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              <a href="https://ticketscan.io" style="color: #a78bfa; text-decoration: none;">ticketscan.io</a> |
              <a href="https://ticketscan.io/world-cup-2026" style="color: #a78bfa; text-decoration: none;">World Cup Guide</a> |
              <a href="https://ticketscan.io/blog" style="color: #a78bfa; text-decoration: none;">Blog</a>
            </p>
          </div>
        </div>
      `,
    });
    console.log(`📧 World Cup email sent to ${userEmail}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to send World Cup email to ${userEmail}:`, error.message);
    return false;
  }
}

// Send a single drip email
async function sendDripEmail(userEmail, emailNumber) {
  if (!process.env.SMTP_USER) {
    console.log(`📧 Email not configured, skipping drip email #${emailNumber} for:`, userEmail);
    return false;
  }

  const emailTemplate = DRIP_EMAILS[emailNumber];
  if (!emailTemplate) {
    console.error(`❌ No template found for drip email #${emailNumber}`);
    return false;
  }

  try {
    await emailTransporter.sendMail({
      from: `"Ticket Scan" <${process.env.SMTP_USER}>`,
      to: userEmail,
      subject: emailTemplate.subject,
      html: emailTemplate.getHtml(),
    });
    console.log(`📧 Drip email #${emailNumber} sent to ${userEmail}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to send drip email #${emailNumber} to ${userEmail}:`, error.message);
    return false;
  }
}

// Process drip campaign - check all users and send due emails
async function processDripCampaign(pool) {
  console.log('📧 Processing drip email campaign...');

  try {
    // Get all users
    const usersResult = await pool.query('SELECT id, email, created_at FROM users');
    const users = usersResult.rows;

    let emailsSent = 0;

    for (const user of users) {
      const daysSinceSignup = Math.floor((Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60 * 24));

      // Check each drip email in the schedule
      for (const { emailNumber, daysAfter } of DRIP_SCHEDULE) {
        // Skip if not time yet
        if (daysSinceSignup < daysAfter) continue;

        // Check if already sent
        const sentCheck = await pool.query(
          'SELECT id FROM drip_emails_sent WHERE user_id = $1 AND email_number = $2',
          [user.id, emailNumber]
        );

        if (sentCheck.rows.length > 0) continue; // Already sent

        // Send the email
        const success = await sendDripEmail(user.email, emailNumber);

        if (success) {
          // Record that we sent it
          await pool.query(
            'INSERT INTO drip_emails_sent (user_id, email_number) VALUES ($1, $2)',
            [user.id, emailNumber]
          );
          emailsSent++;
        }
      }
    }

    console.log(`📧 Drip campaign complete. Sent ${emailsSent} emails.`);
    return emailsSent;
  } catch (error) {
    console.error('❌ Drip campaign error:', error.message);
    return 0;
  }
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['https://ticketscan.io', 'https://www.ticketscan.io', 'http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-key'],
  credentials: true,
}));
app.use(express.json());

// Apply general rate limiting to all API routes
app.use('/api/', generalLimiter);

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Database connection error:', err.message);
  } else {
    console.log('✅ Database connected at:', res.rows[0].now);
  }
});

// API Keys
const TICKETMASTER_API_KEY = process.env.TICKETMASTER_API_KEY || '';
const SEATGEEK_CLIENT_ID = process.env.SEATGEEK_CLIENT_ID || '';
const VIVIDSEATS_API_KEY = process.env.VIVIDSEATS_API_KEY || '';
const STUBHUB_APP_KEY = process.env.STUBHUB_APP_KEY || '';
const STUBHUB_API_KEY = process.env.STUBHUB_API_KEY || '';
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error('FATAL: JWT_SECRET environment variable is required');
  process.exit(1);
}

// StubHub OAuth Token Cache
let stubhubAccessToken = null;
let stubhubTokenExpiry = null;

// Get StubHub access token (cached with auto-refresh)
async function getStubHubAccessToken() {
  // Return cached token if still valid (with 5 min buffer)
  if (stubhubAccessToken && stubhubTokenExpiry && Date.now() < stubhubTokenExpiry - 300000) {
    return stubhubAccessToken;
  }

  if (!STUBHUB_APP_KEY || !STUBHUB_API_KEY) {
    throw new Error('StubHub API keys not configured');
  }

  try {
    const credentials = Buffer.from(`${STUBHUB_APP_KEY}:${STUBHUB_API_KEY}`).toString('base64');

    const response = await axios.post('https://account.stubhub.com/oauth2/token',
      'grant_type=client_credentials&scope=read:events',
      {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    stubhubAccessToken = response.data.access_token;
    stubhubTokenExpiry = Date.now() + (response.data.expires_in * 1000);

    console.log('✅ StubHub access token obtained, expires in', response.data.expires_in, 'seconds');
    return stubhubAccessToken;
  } catch (error) {
    console.error('❌ Failed to get StubHub access token:', error.response?.data || error.message);
    throw error;
  }
}

// ========== AUTH MIDDLEWARE ==========

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ success: false, error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// ========== ROUTES ==========

// Health check
app.get('/', (req, res) => {
  res.json({
    status: '🎫 Ticket Scan API is running!',
    timestamp: new Date().toISOString(),
    version: '2.0.0',
    endpoints: {
      health: 'GET /',
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login',
        me: 'GET /api/auth/me (protected)'
      },
      watchlist: {
        add: 'POST /api/watchlist (protected)',
        list: 'GET /api/watchlist (protected)',
        remove: 'DELETE /api/watchlist/:id (protected)'
      },
      events: {
        search: 'GET /api/events/search?city=Orlando&keyword=concert&startDate=2026-01-01&endDate=2026-12-31',
        compare: 'GET /api/events/compare?city=Orlando&keyword=concert',
        ticketmaster: 'GET /api/test/ticketmaster',
        seatgeek: 'GET /api/test/seatgeek',
        stubhub: 'GET /api/test/stubhub?query=Lakers&city=Los Angeles',
        vividseats: 'GET /api/test/vividseats'
      }
    }
  });
});

// ========== AUTH ROUTES ==========

// Register new user (rate limited: 5 attempts per 15 minutes)
app.post('/api/auth/register', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password are required'
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        error: 'Password must be at least 8 characters'
      });
    }

    // Check if user already exists
    const existingUser = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email.toLowerCase()]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        success: false,
        error: 'Email already registered'
      });
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create user
    const result = await pool.query(
      'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email, created_at',
      [email.toLowerCase(), passwordHash]
    );

    const user = result.rows[0];

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Send welcome email (async, non-blocking)
    sendWelcomeEmail(user.email).catch(err => {
      console.error('Failed to send welcome email:', err.message);
    });

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.created_at
      },
      token
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Registration failed',
      details: error.message
    });
  }
});

// Login (rate limited: 5 attempts per 15 minutes)
app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password are required'
      });
    }

    // Find user
    const result = await pool.query(
      'SELECT id, email, password_hash, created_at FROM users WHERE email = $1',
      [email.toLowerCase()]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password'
      });
    }

    const user = result.rows[0];

    // Verify password
    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password'
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.created_at
      },
      token
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Login failed'
    });
  }
});

// Get current user (protected route)
app.get('/api/auth/me', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, email, created_at FROM users WHERE id = $1',
      [req.user.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const user = result.rows[0];

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.created_at
      }
    });
  } catch (error) {
    console.error('Get user error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to get user'
    });
  }
});

// ========== WATCHLIST ROUTES ==========

// Add event to watchlist
app.post('/api/watchlist', authenticateToken, async (req, res) => {
  try {
    const { eventId, eventName, eventDate, venue, city, targetPrice } = req.body;
    const userId = req.user.userId;

    if (!eventId || !eventName) {
      return res.status(400).json({
        success: false,
        error: 'eventId and eventName are required'
      });
    }

    // Check if already in watchlist
    const existing = await pool.query(
      'SELECT id FROM watchlist WHERE user_id = $1 AND event_id = $2',
      [userId, eventId]
    );

    if (existing.rows.length > 0) {
      return res.status(409).json({
        success: false,
        error: 'Event already in watchlist'
      });
    }

    const result = await pool.query(
      `INSERT INTO watchlist (user_id, event_id, event_name, event_date, venue, city, target_price)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, event_id, event_name, event_date, venue, city, target_price, created_at`,
      [userId, eventId, eventName, eventDate || null, venue || null, city || null, targetPrice || null]
    );

    res.status(201).json({
      success: true,
      message: 'Event added to watchlist',
      item: result.rows[0]
    });
  } catch (error) {
    console.error('Add to watchlist error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to add to watchlist'
    });
  }
});

// Get user's watchlist
app.get('/api/watchlist', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const result = await pool.query(
      `SELECT id, event_id, event_name, event_date, venue, city, target_price, created_at
       FROM watchlist
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [userId]
    );

    res.json({
      success: true,
      count: result.rows.length,
      watchlist: result.rows
    });
  } catch (error) {
    console.error('Get watchlist error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to get watchlist'
    });
  }
});

// Remove from watchlist
app.delete('/api/watchlist/:id', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const itemId = req.params.id;

    const result = await pool.query(
      'DELETE FROM watchlist WHERE id = $1 AND user_id = $2 RETURNING id',
      [itemId, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Watchlist item not found'
      });
    }

    res.json({
      success: true,
      message: 'Event removed from watchlist'
    });
  } catch (error) {
    console.error('Remove from watchlist error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to remove from watchlist'
    });
  }
});

// ========== FAVORITES ROUTES ==========

// Get user's favorites
app.get('/api/favorites', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const result = await pool.query(
      'SELECT * FROM user_favorites WHERE user_id = $1 ORDER BY favorite_type, favorite_name',
      [userId]
    );

    res.json({
      success: true,
      favorites: result.rows
    });
  } catch (error) {
    console.error('Get favorites error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to get favorites'
    });
  }
});

// Add a favorite
app.post('/api/favorites', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { type, name } = req.body;

    if (!type || !name) {
      return res.status(400).json({
        success: false,
        error: 'Type and name are required'
      });
    }

    // Validate type
    const validTypes = ['team', 'artist', 'venue'];
    if (!validTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid favorite type. Must be team, artist, or venue'
      });
    }

    const result = await pool.query(
      `INSERT INTO user_favorites (user_id, favorite_type, favorite_name)
       VALUES ($1, $2, $3)
       ON CONFLICT (user_id, favorite_type, favorite_name) DO NOTHING
       RETURNING *`,
      [userId, type, name.trim()]
    );

    if (result.rows.length === 0) {
      return res.json({
        success: true,
        message: 'Already in favorites'
      });
    }

    res.json({
      success: true,
      favorite: result.rows[0]
    });
  } catch (error) {
    console.error('Add favorite error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to add favorite'
    });
  }
});

// Remove a favorite
app.delete('/api/favorites/:id', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const favoriteId = req.params.id;

    const result = await pool.query(
      'DELETE FROM user_favorites WHERE id = $1 AND user_id = $2 RETURNING id',
      [favoriteId, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Favorite not found'
      });
    }

    res.json({
      success: true,
      message: 'Favorite removed'
    });
  } catch (error) {
    console.error('Remove favorite error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to remove favorite'
    });
  }
});

// Search events based on user's favorites
app.get('/api/favorites/events', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    // Get user's favorites
    const favResult = await pool.query(
      'SELECT favorite_type, favorite_name FROM user_favorites WHERE user_id = $1',
      [userId]
    );

    if (favResult.rows.length === 0) {
      return res.json({
        success: true,
        events: [],
        message: 'No favorites set. Add teams or artists to see personalized events.'
      });
    }

    // Search for events matching favorites
    const allEvents = [];

    for (const fav of favResult.rows) {
      try {
        const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
          params: {
            apikey: TICKETMASTER_API_KEY,
            keyword: fav.favorite_name,
            size: 5,
            sort: 'date,asc',
            startDateTime: new Date().toISOString().split('.')[0] + 'Z'
          }
        });

        const events = (response.data._embedded?.events || []).map(e => ({
          id: e.id,
          name: e.name,
          type: e.classifications?.[0]?.segment?.name || 'Event',
          date: e.dates.start.localDate,
          time: e.dates.start.localTime || 'TBA',
          venue: e._embedded?.venues?.[0]?.name,
          city: e._embedded?.venues?.[0]?.city?.name,
          state: e._embedded?.venues?.[0]?.state?.stateCode,
          priceRanges: e.priceRanges?.[0] ? { min: e.priceRanges[0].min, max: e.priceRanges[0].max } : null,
          url: e.url,
          images: e.images?.find(img => img.ratio === '16_9')?.url || e.images?.[0]?.url,
          matchedFavorite: fav.favorite_name
        }));

        allEvents.push(...events);
      } catch (err) {
        console.error(`Error fetching events for ${fav.favorite_name}:`, err.message);
      }
    }

    // Deduplicate and sort by date
    const uniqueEvents = deduplicateEvents(allEvents);
    uniqueEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    res.json({
      success: true,
      events: uniqueEvents.slice(0, 20)
    });
  } catch (error) {
    console.error('Favorites events error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch favorite events'
    });
  }
});

// ========== DEDUPLICATION HELPER ==========

// Filter out duplicate/hospitality events (like "Jernigan's" packages)
function deduplicateEvents(events) {
  // Patterns to exclude (hospitality packages, reseller listings)
  const excludePatterns = [
    /jernigan/i,
    /hospitality/i,
    /vip package/i,
    /suite/i,
    /premium experience/i,
    /meet & greet/i,
    /meet and greet/i
  ];

  // First, filter out obvious hospitality packages
  const filtered = events.filter(event => {
    const name = event.name || '';
    return !excludePatterns.some(pattern => pattern.test(name));
  });

  // Then deduplicate by venue + date + normalized name
  const seen = new Map();

  return filtered.filter(event => {
    const venue = (event.venue || '').toLowerCase().trim();
    const date = event.date || '';

    // Normalize team names for comparison
    // "Orlando Magic vs. Indiana Pacers" and "Pacers vs Magic" should match
    const normalizedName = normalizeEventName(event.name || '');

    const key = `${venue}|${date}|${normalizedName}`;

    if (seen.has(key)) {
      // If we've seen this event, keep the one with the longer/more official name
      const existing = seen.get(key);
      if ((event.name || '').length > (existing.name || '').length) {
        seen.set(key, event);
        return false; // Will be replaced
      }
      return false;
    }

    seen.set(key, event);
    return true;
  });
}

// Normalize event names for deduplication
function normalizeEventName(name) {
  // Remove common suffixes and prefixes
  let normalized = name.toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();

  // Extract team names from various formats
  // "Orlando Magic vs. Indiana Pacers" -> ["magic", "pacers"]
  // "Pacers vs Magic" -> ["pacers", "magic"]
  const vsMatch = normalized.match(/(.+?)\s+(?:vs\.?|v\.?)\s+(.+)/i);

  if (vsMatch) {
    let team1 = vsMatch[1].replace(/orlando|indiana|miami|philadelphia|new orleans|charlotte|cleveland|toronto|brooklyn|chicago|boston|detroit|atlanta|washington|new york|milwaukee|denver|phoenix|sacramento|portland|utah|minnesota|oklahoma city|san antonio|dallas|houston|memphis|golden state|los angeles|la/gi, '').trim();
    let team2 = vsMatch[2].replace(/orlando|indiana|miami|philadelphia|new orleans|charlotte|cleveland|toronto|brooklyn|chicago|boston|detroit|atlanta|washington|new york|milwaukee|denver|phoenix|sacramento|portland|utah|minnesota|oklahoma city|san antonio|dallas|houston|memphis|golden state|los angeles|la/gi, '').trim();

    // Sort team names alphabetically for consistent matching
    const teams = [team1, team2].sort();
    return teams.join('|');
  }

  return normalized;
}

// ========== NEW EVENT SEARCH ROUTES ==========

// Unified event search with date filtering
app.get('/api/events/search', async (req, res) => {
  try {
    const { city = 'Orlando', keyword = '', startDate, endDate, size = 20 } = req.query;

    if (!TICKETMASTER_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'API keys not configured'
      });
    }

    // Default to today's date to filter out past events
    const today = new Date().toISOString().split('T')[0];
    const effectiveStartDate = startDate || today;

    // Build Ticketmaster params
    const tmParams = {
      apikey: TICKETMASTER_API_KEY,
      city: city,
      keyword: keyword,
      size: parseInt(size),
      sort: 'date,asc'
    };

    // Add date filtering for Ticketmaster (always filter from today if no startDate)
    tmParams.startDateTime = `${effectiveStartDate}T00:00:00Z`;
    if (endDate) {
      tmParams.endDateTime = `${endDate}T23:59:59Z`;
    }

    const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
      params: tmParams
    });

    const rawEvents = response.data._embedded?.events || [];

    // Map to our format first
    const mappedEvents = rawEvents.map(event => ({
      id: event.id,
      name: event.name,
      type: event.classifications?.[0]?.segment?.name || 'Event',
      date: event.dates.start.localDate,
      time: event.dates.start.localTime || 'TBA',
      venue: event._embedded?.venues?.[0]?.name,
      city: event._embedded?.venues?.[0]?.city?.name,
      state: event._embedded?.venues?.[0]?.state?.stateCode,
      priceRanges: event.priceRanges?.[0] || null,
      url: event.url,
      images: event.images?.[0]?.url,
      source: 'Ticketmaster'
    }));

    // Deduplicate events
    const events = deduplicateEvents(mappedEvents);

    res.json({
      success: true,
      source: 'Ticketmaster',
      count: events.length,
      query: { city, keyword, startDate, endDate },
      events
    });
  } catch (error) {
    console.error('Event search error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Compare events across multiple sources
app.get('/api/events/compare', async (req, res) => {
  try {
    const { city = 'Orlando', keyword = '', startDate, endDate } = req.query;

    // Default to today's date to filter out past events
    const today = new Date().toISOString().split('T')[0];
    const effectiveStartDate = startDate || today;

    // Build params for each API
    const tmParams = {
      apikey: TICKETMASTER_API_KEY,
      city: city,
      keyword: keyword,
      size: 10,
      sort: 'date,asc'
    };

    tmParams.startDateTime = `${effectiveStartDate}T00:00:00Z`;
    if (endDate) tmParams.endDateTime = `${endDate}T23:59:59Z`;

    // Fetch from all sources in parallel
    const results = await Promise.allSettled([
      // Ticketmaster
      axios.get('https://app.ticketmaster.com/discovery/v2/events.json', { params: tmParams }),
      // SeatGeek (if configured)
      SEATGEEK_CLIENT_ID ? axios.get('https://api.seatgeek.com/2/events', {
        params: {
          client_id: SEATGEEK_CLIENT_ID,
          'venue.city': city,
          q: keyword,
          per_page: 10,
          sort: 'datetime_local.asc'
        }
      }) : Promise.resolve({ data: { events: [] } })
    ]);

    // Parse Ticketmaster results
    const rawTmEvents = results[0].status === 'fulfilled'
      ? (results[0].value.data._embedded?.events || []).map(e => ({
          id: e.id,
          name: e.name,
          date: e.dates.start.localDate,
          time: e.dates.start.localTime || 'TBA',
          venue: e._embedded?.venues?.[0]?.name,
          city: e._embedded?.venues?.[0]?.city?.name,
          minPrice: e.priceRanges?.[0]?.min || null,
          maxPrice: e.priceRanges?.[0]?.max || null,
          priceRange: e.priceRanges?.[0] ? `$${e.priceRanges[0].min} - $${e.priceRanges[0].max}` : 'N/A',
          url: e.url,
          image: e.images?.[0]?.url,
          source: 'Ticketmaster'
        }))
      : [];

    // Deduplicate Ticketmaster events
    const tmEvents = deduplicateEvents(rawTmEvents);

    // Parse SeatGeek results
    const sgEvents = results[1].status === 'fulfilled'
      ? (results[1].value.data.events || []).map(e => ({
          id: String(e.id),
          name: e.title,
          date: e.datetime_local?.split('T')[0],
          time: e.datetime_local?.split('T')[1]?.substring(0, 5) || 'TBA',
          venue: e.venue?.name,
          city: e.venue?.city,
          minPrice: e.stats?.lowest_price || null,
          maxPrice: e.stats?.highest_price || null,
          avgPrice: e.stats?.average_price || null,
          listingCount: e.stats?.listing_count || 0,
          url: e.url,
          image: e.performers?.[0]?.image,
          source: 'SeatGeek'
        }))
      : [];

    res.json({
      success: true,
      query: { city, keyword, startDate, endDate },
      summary: {
        ticketmaster: { count: tmEvents.length, status: results[0].status },
        seatgeek: { count: sgEvents.length, status: results[1].status }
      },
      results: {
        ticketmaster: tmEvents,
        seatgeek: sgEvents
      }
    });
  } catch (error) {
    console.error('Compare error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ========== PUBLIC EVENTS API (No Auth Required - for SEO pages) ==========

// Public endpoint to get events for SEO pages
app.get('/api/public/events', async (req, res) => {
  try {
    const { venue, city, category, limit = 10 } = req.query;

    if (!TICKETMASTER_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'API not configured'
      });
    }

    // Build Ticketmaster params based on query
    const tmParams = {
      apikey: TICKETMASTER_API_KEY,
      size: Math.min(parseInt(limit), 20),
      sort: 'date,asc'
    };

    // Venue name mapping
    const venueNames = {
      'kia-center': 'Kia Center',
      'kaseya-center': 'Kaseya Center',
      'msg': 'Madison Square Garden',
      'crypto-arena': 'Crypto.com Arena',
      'united-center': 'United Center',
      'td-garden': 'TD Garden',
      'wells-fargo-center': 'Wells Fargo Center',
      'american-airlines-center': 'American Airlines Center',
      'toyota-center': 'Toyota Center',
      'footprint-center': 'Footprint Center',
      'chase-center': 'Chase Center',
      'ball-arena': 'Ball Arena',
      'state-farm-arena': 'State Farm Arena',
      'barclays-center': 'Barclays Center',
      'capital-one-arena': 'Capital One Arena',
      'little-caesars-arena': 'Little Caesars Arena',
      'fiserv-forum': 'Fiserv Forum',
      'target-center': 'Target Center',
      'smoothie-king-center': 'Smoothie King Center',
      'scotiabank-arena': 'Scotiabank Arena',
      't-mobile-arena': 'T-Mobile Arena',
      'climate-pledge-arena': 'Climate Pledge Arena',
      'prudential-center': 'Prudential Center',
      'golden-1-center': 'Golden 1 Center'
    };

    // City mapping
    const cityNames = {
      'orlando': 'Orlando',
      'miami': 'Miami',
      'new-york': 'New York',
      'los-angeles': 'Los Angeles',
      'chicago': 'Chicago',
      'boston': 'Boston',
      'philadelphia': 'Philadelphia',
      'dallas': 'Dallas',
      'houston': 'Houston',
      'phoenix': 'Phoenix',
      'san-francisco': 'San Francisco',
      'denver': 'Denver',
      'atlanta': 'Atlanta',
      'brooklyn': 'Brooklyn',
      'washington-dc': 'Washington',
      'detroit': 'Detroit',
      'milwaukee': 'Milwaukee',
      'minneapolis': 'Minneapolis',
      'new-orleans': 'New Orleans',
      'toronto': 'Toronto',
      'las-vegas': 'Las Vegas',
      'seattle': 'Seattle',
      'newark': 'Newark',
      'sacramento': 'Sacramento'
    };

    // Category mapping to Ticketmaster classification
    const categoryMapping = {
      'nba': { classificationName: 'Basketball', keyword: 'NBA' },
      'nhl': { classificationName: 'Hockey', keyword: 'NHL' },
      'mlb': { classificationName: 'Baseball', keyword: 'MLB' },
      'nfl': { classificationName: 'Football', keyword: 'NFL' },
      'concerts': { classificationName: 'Music' },
      'theater': { classificationName: 'Theatre' },
      'ufc': { keyword: 'UFC' },
      'wwe': { keyword: 'WWE' },
      'comedy': { classificationName: 'Comedy' },
      'festivals': { classificationName: 'Music', keyword: 'festival' },
      'soccer': { classificationName: 'Soccer', keyword: 'MLS' },
      'tennis': { classificationName: 'Tennis' },
      'family': { classificationName: 'Family' }
    };

    // Apply filters
    if (venue && venueNames[venue]) {
      tmParams.keyword = venueNames[venue];
    } else if (city && cityNames[city]) {
      tmParams.city = cityNames[city];
    } else if (category && categoryMapping[category]) {
      const cat = categoryMapping[category];
      if (cat.classificationName) {
        tmParams.classificationName = cat.classificationName;
      }
      if (cat.keyword) {
        tmParams.keyword = cat.keyword;
      }
    }

    // Default to future events
    tmParams.startDateTime = new Date().toISOString().split('.')[0] + 'Z';

    const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
      params: tmParams
    });

    const rawEvents = response.data._embedded?.events || [];

    // Map and deduplicate events
    const mappedEvents = rawEvents.map(event => ({
      id: event.id,
      name: event.name,
      type: event.classifications?.[0]?.segment?.name || 'Event',
      date: event.dates.start.localDate,
      time: event.dates.start.localTime || 'TBA',
      venue: event._embedded?.venues?.[0]?.name,
      city: event._embedded?.venues?.[0]?.city?.name,
      state: event._embedded?.venues?.[0]?.state?.stateCode,
      minPrice: event.priceRanges?.[0]?.min || null,
      maxPrice: event.priceRanges?.[0]?.max || null,
      url: event.url,
      image: event.images?.find(img => img.ratio === '16_9')?.url || event.images?.[0]?.url
    }));

    const events = deduplicateEvents(mappedEvents);

    // Cache headers for CDN/browser caching (1 hour)
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');

    res.json({
      success: true,
      query: { venue, city, category },
      count: events.length,
      events
    });
  } catch (error) {
    console.error('Public events API error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch events'
    });
  }
});

// ========== NEWSLETTER ==========

// Subscribe to newsletter
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { email, source = 'website' } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Valid email address required'
      });
    }

    // Check if already subscribed
    const existing = await pool.query(
      'SELECT id, is_active FROM newsletter_subscribers WHERE email = $1',
      [email.toLowerCase()]
    );

    if (existing.rows.length > 0) {
      if (existing.rows[0].is_active) {
        return res.json({
          success: true,
          message: 'You\'re already subscribed!'
        });
      } else {
        // Reactivate subscription
        await pool.query(
          'UPDATE newsletter_subscribers SET is_active = true, unsubscribed_at = NULL WHERE email = $1',
          [email.toLowerCase()]
        );
        return res.json({
          success: true,
          message: 'Welcome back! You\'ve been resubscribed.'
        });
      }
    }

    // Add new subscriber
    await pool.query(
      'INSERT INTO newsletter_subscribers (email, source) VALUES ($1, $2)',
      [email.toLowerCase(), source]
    );

    res.json({
      success: true,
      message: 'Thanks for subscribing! You\'ll receive our best ticket deals.'
    });
  } catch (error) {
    console.error('Newsletter subscribe error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to subscribe. Please try again.'
    });
  }
});

// Unsubscribe from newsletter
app.get('/api/newsletter/unsubscribe', async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).send('Email required');
    }

    await pool.query(
      'UPDATE newsletter_subscribers SET is_active = false, unsubscribed_at = NOW() WHERE email = $1',
      [email.toLowerCase()]
    );

    res.send(`
      <html>
        <head><title>Unsubscribed - Ticket Scan</title></head>
        <body style="font-family: Arial; text-align: center; padding: 50px;">
          <h1>You've been unsubscribed</h1>
          <p>You won't receive any more emails from Ticket Scan.</p>
          <a href="https://ticketscan.io">Return to Ticket Scan</a>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send('Error processing unsubscribe');
  }
});

// ========== ADMIN API ==========

// Admin authentication middleware
const ADMIN_SECRET = process.env.ADMIN_SECRET;
if (!ADMIN_SECRET) {
  console.error('FATAL: ADMIN_SECRET environment variable is required');
  process.exit(1);
}

const authenticateAdmin = (req, res, next) => {
  const adminKey = req.headers['x-admin-key'];

  if (!adminKey || adminKey !== ADMIN_SECRET) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  next();
};

// Admin: Get dashboard stats
app.get('/api/admin/stats', authenticateAdmin, async (req, res) => {
  try {
    const stats = {};

    // Total users
    const usersResult = await pool.query('SELECT COUNT(*) as count FROM users');
    stats.totalUsers = parseInt(usersResult.rows[0].count);

    // Users this week
    const weekUsersResult = await pool.query(
      "SELECT COUNT(*) as count FROM users WHERE created_at > NOW() - INTERVAL '7 days'"
    );
    stats.usersThisWeek = parseInt(weekUsersResult.rows[0].count);

    // Users today
    const todayUsersResult = await pool.query(
      "SELECT COUNT(*) as count FROM users WHERE created_at > NOW() - INTERVAL '1 day'"
    );
    stats.usersToday = parseInt(todayUsersResult.rows[0].count);

    // Total watchlist items
    const watchlistResult = await pool.query('SELECT COUNT(*) as count FROM watchlist');
    stats.totalWatchlistItems = parseInt(watchlistResult.rows[0].count);

    // Active price alerts (items with target price set)
    const alertsResult = await pool.query(
      'SELECT COUNT(*) as count FROM watchlist WHERE target_price IS NOT NULL'
    );
    stats.activeAlerts = parseInt(alertsResult.rows[0].count);

    // Newsletter subscribers (active)
    const newsletterResult = await pool.query(
      'SELECT COUNT(*) as count FROM newsletter_subscribers WHERE is_active = true'
    );
    stats.activeSubscribers = parseInt(newsletterResult.rows[0].count);

    // Total newsletter subscribers (including unsubscribed)
    const totalNewsletterResult = await pool.query(
      'SELECT COUNT(*) as count FROM newsletter_subscribers'
    );
    stats.totalSubscribers = parseInt(totalNewsletterResult.rows[0].count);

    // Favorites count
    const favoritesResult = await pool.query('SELECT COUNT(*) as count FROM user_favorites');
    stats.totalFavorites = parseInt(favoritesResult.rows[0].count);

    // Triggered alerts
    const triggeredResult = await pool.query('SELECT COUNT(*) as count FROM price_alerts');
    stats.triggeredAlerts = parseInt(triggeredResult.rows[0].count);

    res.json({ success: true, stats });
  } catch (error) {
    console.error('Admin stats error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to get stats' });
  }
});

// Admin: Get all users
app.get('/api/admin/users', authenticateAdmin, async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;

    const result = await pool.query(`
      SELECT
        u.id,
        u.email,
        u.created_at,
        (SELECT COUNT(*) FROM watchlist WHERE user_id = u.id) as watchlist_count,
        (SELECT COUNT(*) FROM watchlist WHERE user_id = u.id AND target_price IS NOT NULL) as alerts_count,
        (SELECT COUNT(*) FROM user_favorites WHERE user_id = u.id) as favorites_count
      FROM users u
      ORDER BY u.created_at DESC
      LIMIT $1 OFFSET $2
    `, [limit, offset]);

    const countResult = await pool.query('SELECT COUNT(*) as total FROM users');

    res.json({
      success: true,
      users: result.rows,
      total: parseInt(countResult.rows[0].total),
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    console.error('Admin users error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to get users' });
  }
});

// Admin: Get all watchlist items with user info
app.get('/api/admin/watchlist', authenticateAdmin, async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;

    const result = await pool.query(`
      SELECT
        w.id,
        w.event_id,
        w.event_name,
        w.event_date,
        w.venue,
        w.city,
        w.target_price,
        w.created_at,
        u.email as user_email
      FROM watchlist w
      JOIN users u ON w.user_id = u.id
      ORDER BY w.created_at DESC
      LIMIT $1 OFFSET $2
    `, [limit, offset]);

    const countResult = await pool.query('SELECT COUNT(*) as total FROM watchlist');

    res.json({
      success: true,
      watchlist: result.rows,
      total: parseInt(countResult.rows[0].total),
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    console.error('Admin watchlist error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to get watchlist' });
  }
});

// Admin: Get newsletter subscribers
app.get('/api/admin/newsletter', authenticateAdmin, async (req, res) => {
  try {
    const { limit = 50, offset = 0, active_only = 'false' } = req.query;

    let query = `
      SELECT id, email, source, is_active, subscribed_at, unsubscribed_at
      FROM newsletter_subscribers
    `;

    if (active_only === 'true') {
      query += ' WHERE is_active = true';
    }

    query += ' ORDER BY subscribed_at DESC LIMIT $1 OFFSET $2';

    const result = await pool.query(query, [limit, offset]);

    let countQuery = 'SELECT COUNT(*) as total FROM newsletter_subscribers';
    if (active_only === 'true') {
      countQuery += ' WHERE is_active = true';
    }
    const countResult = await pool.query(countQuery);

    res.json({
      success: true,
      subscribers: result.rows,
      total: parseInt(countResult.rows[0].total),
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    console.error('Admin newsletter error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to get subscribers' });
  }
});

// Admin: Get triggered price alerts
app.get('/api/admin/alerts', authenticateAdmin, async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;

    const result = await pool.query(`
      SELECT
        pa.id,
        pa.event_id,
        pa.triggered_price,
        pa.triggered_at,
        pa.email_sent,
        u.email as user_email,
        w.event_name,
        w.target_price
      FROM price_alerts pa
      JOIN users u ON pa.user_id = u.id
      JOIN watchlist w ON pa.watchlist_id = w.id
      ORDER BY pa.triggered_at DESC
      LIMIT $1 OFFSET $2
    `, [limit, offset]);

    const countResult = await pool.query('SELECT COUNT(*) as total FROM price_alerts');

    res.json({
      success: true,
      alerts: result.rows,
      total: parseInt(countResult.rows[0].total),
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    console.error('Admin alerts error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to get alerts' });
  }
});

// Admin: Get recent activity
app.get('/api/admin/activity', authenticateAdmin, async (req, res) => {
  try {
    const activity = [];

    // Recent signups (last 10)
    const signups = await pool.query(`
      SELECT 'signup' as type, email as detail, created_at as timestamp
      FROM users
      ORDER BY created_at DESC
      LIMIT 10
    `);
    activity.push(...signups.rows);

    // Recent watchlist adds (last 10)
    const watchlist = await pool.query(`
      SELECT 'watchlist' as type,
             w.event_name as detail,
             w.created_at as timestamp,
             u.email as user_email
      FROM watchlist w
      JOIN users u ON w.user_id = u.id
      ORDER BY w.created_at DESC
      LIMIT 10
    `);
    activity.push(...watchlist.rows);

    // Recent newsletter signups (last 10)
    const newsletter = await pool.query(`
      SELECT 'newsletter' as type, email as detail, subscribed_at as timestamp
      FROM newsletter_subscribers
      WHERE is_active = true
      ORDER BY subscribed_at DESC
      LIMIT 10
    `);
    activity.push(...newsletter.rows);

    // Sort by timestamp descending
    activity.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.json({
      success: true,
      activity: activity.slice(0, 20)
    });
  } catch (error) {
    console.error('Admin activity error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to get activity' });
  }
});

// Admin: Get popular events (most watched)
app.get('/api/admin/popular-events', authenticateAdmin, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        event_name,
        event_id,
        venue,
        city,
        COUNT(*) as watch_count,
        MIN(target_price) as min_target,
        MAX(target_price) as max_target,
        AVG(target_price)::numeric(10,2) as avg_target
      FROM watchlist
      GROUP BY event_name, event_id, venue, city
      ORDER BY watch_count DESC
      LIMIT 20
    `);

    res.json({
      success: true,
      events: result.rows
    });
  } catch (error) {
    console.error('Admin popular events error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to get popular events' });
  }
});

// Admin: Get drip campaign stats
app.get('/api/admin/drip-stats', authenticateAdmin, async (req, res) => {
  try {
    const stats = await pool.query(`
      SELECT
        email_number,
        COUNT(*) as sent_count,
        MAX(sent_at) as last_sent
      FROM drip_emails_sent
      GROUP BY email_number
      ORDER BY email_number
    `);

    const pending = await pool.query(`
      SELECT
        u.id,
        u.email,
        u.created_at,
        EXTRACT(DAY FROM NOW() - u.created_at) as days_since_signup,
        COALESCE(MAX(d.email_number), 0) as last_email_sent
      FROM users u
      LEFT JOIN drip_emails_sent d ON u.id = d.user_id
      GROUP BY u.id, u.email, u.created_at
      HAVING COALESCE(MAX(d.email_number), 0) < 5
      ORDER BY u.created_at DESC
      LIMIT 20
    `);

    res.json({
      success: true,
      stats: stats.rows,
      pendingUsers: pending.rows,
      schedule: DRIP_SCHEDULE
    });
  } catch (error) {
    console.error('Admin drip stats error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to get drip stats' });
  }
});

// Admin: Manually trigger drip campaign
app.post('/api/admin/drip-run', authenticateAdmin, async (req, res) => {
  try {
    const emailsSent = await processDripCampaign(pool);
    res.json({
      success: true,
      message: `Drip campaign complete. Sent ${emailsSent} emails.`,
      emailsSent
    });
  } catch (error) {
    console.error('Admin drip run error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to run drip campaign' });
  }
});

// Admin: Send World Cup email blast to all users
app.post('/api/admin/email-blast/world-cup', authenticateAdmin, async (req, res) => {
  try {
    // Get all users
    const usersResult = await pool.query('SELECT email FROM users');
    const users = usersResult.rows;

    let emailsSent = 0;
    let errors = 0;

    for (const user of users) {
      const success = await sendWorldCupEmail(user.email);
      if (success) {
        emailsSent++;
      } else {
        errors++;
      }
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    res.json({
      success: true,
      message: `World Cup email blast complete. Sent ${emailsSent} emails, ${errors} failed.`,
      emailsSent,
      errors,
      totalUsers: users.length
    });
  } catch (error) {
    console.error('World Cup email blast error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to send email blast' });
  }
});

// Admin: Clean up old database records (past events)
app.post('/api/admin/cleanup', authenticateAdmin, async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];

    // Delete watchlist items for past events
    const watchlistResult = await pool.query(`
      DELETE FROM watchlist
      WHERE event_date < $1
      RETURNING id
    `, [today]);

    // Delete price history for past events (keep last 7 days for analytics)
    const priceHistoryResult = await pool.query(`
      DELETE FROM price_history
      WHERE checked_at < NOW() - INTERVAL '7 days'
      RETURNING id
    `);

    // Delete old price alerts for past events
    const alertsResult = await pool.query(`
      DELETE FROM price_alerts
      WHERE sent_at < NOW() - INTERVAL '30 days'
      RETURNING id
    `);

    res.json({
      success: true,
      message: 'Database cleanup complete',
      deleted: {
        watchlistItems: watchlistResult.rowCount,
        priceHistoryRecords: priceHistoryResult.rowCount,
        oldAlerts: alertsResult.rowCount
      }
    });
  } catch (error) {
    console.error('Database cleanup error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========== LEGACY EVENT ROUTES ==========

// Test Ticketmaster API
app.get('/api/test/ticketmaster', async (req, res) => {
  try {
    const { city = 'Orlando', keyword = '', size = 10 } = req.query;
    
    if (!TICKETMASTER_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'TICKETMASTER_API_KEY not configured',
        hint: 'Get your free API key at https://developer.ticketmaster.com/'
      });
    }
    
    // Default to today to filter out past events
    const today = new Date().toISOString().split('T')[0];

    const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
      params: {
        apikey: TICKETMASTER_API_KEY,
        city: city,
        keyword: keyword,
        size: parseInt(size),
        startDateTime: `${today}T00:00:00Z`
      }
    });

    const events = response.data._embedded?.events || [];

    res.json({
      success: true,
      source: 'Ticketmaster',
      count: events.length,
      query: { city, keyword },
      events: events.map(event => ({
        id: event.id,
        name: event.name,
        type: event.classifications?.[0]?.segment?.name,
        date: event.dates.start.localDate,
        time: event.dates.start.localTime || 'TBA',
        venue: event._embedded?.venues?.[0]?.name,
        city: event._embedded?.venues?.[0]?.city?.name,
        state: event._embedded?.venues?.[0]?.state?.stateCode,
        priceRanges: event.priceRanges || null,
        url: event.url,
        images: event.images?.[0]?.url
      }))
    });
  } catch (error) {
    console.error('Ticketmaster API Error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: error.message,
      details: error.response?.data,
      hint: 'Check your TICKETMASTER_API_KEY in environment variables'
    });
  }
});

// Test SeatGeek API
app.get('/api/test/seatgeek', async (req, res) => {
  try {
    const { city = 'Orlando', query = '', per_page = 10 } = req.query;
    
    if (!SEATGEEK_CLIENT_ID) {
      return res.status(500).json({
        success: false,
        error: 'SEATGEEK_CLIENT_ID not configured',
        hint: 'Get your free Client ID at https://seatgeek.com/account/develop'
      });
    }
    
    const response = await axios.get('https://api.seatgeek.com/2/events', {
      params: {
        client_id: SEATGEEK_CLIENT_ID,
        'venue.city': city,
        q: query,
        per_page: parseInt(per_page)
      }
    });

    const events = response.data.events || [];
    
    res.json({
      success: true,
      source: 'SeatGeek (aggregates 60+ ticket sites including StubHub)',
      count: events.length,
      query: { city, keyword: query },
      events: events.map(event => ({
        id: event.id,
        title: event.title,
        type: event.type,
        datetime: event.datetime_local,
        venue: event.venue.name,
        city: event.venue.city,
        state: event.venue.state,
        pricing: {
          lowestPrice: event.stats.lowest_price,
          averagePrice: event.stats.average_price,
          highestPrice: event.stats.highest_price,
          listingCount: event.stats.listing_count
        },
        url: event.url,
        image: event.performers?.[0]?.image
      }))
    });
  } catch (error) {
    console.error('SeatGeek API Error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: error.message,
      details: error.response?.data,
      hint: 'Check your SEATGEEK_CLIENT_ID in environment variables'
    });
  }
});

// Test StubHub API
app.get('/api/test/stubhub', async (req, res) => {
  const { query = 'Lakers', city = 'Los Angeles' } = req.query;

  try {
    if (!STUBHUB_APP_KEY || !STUBHUB_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'StubHub API keys not configured',
        hint: 'Set STUBHUB_APP_KEY and STUBHUB_API_KEY in environment variables'
      });
    }

    const events = await searchStubHubEvents(query, city, 5);

    res.json({
      success: true,
      source: 'StubHub',
      query: { query, city },
      count: events.length,
      events: events.map(event => ({
        source: 'StubHub',
        name: event.name,
        date: event.date,
        venue: event.venue,
        city: event.city,
        priceRange: event.minPrice && event.maxPrice
          ? `$${event.minPrice} - $${event.maxPrice}`
          : event.minPrice
            ? `From $${event.minPrice}`
            : 'N/A',
        url: event.url
      }))
    });
  } catch (error) {
    console.error('StubHub API Error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: error.message,
      details: error.response?.data,
      hint: 'Check your STUBHUB_APP_KEY and STUBHUB_API_KEY in environment variables'
    });
  }
});

// Search all APIs and compare prices
app.get('/api/search', async (req, res) => {
  try {
    const { city = 'Orlando', keyword = '' } = req.query;

    // At least one API should be configured
    if (!TICKETMASTER_API_KEY && !SEATGEEK_CLIENT_ID && !(STUBHUB_APP_KEY && STUBHUB_API_KEY)) {
      return res.status(500).json({
        success: false,
        error: 'No API keys configured',
        missing: {
          ticketmaster: !TICKETMASTER_API_KEY,
          seatgeek: !SEATGEEK_CLIENT_ID,
          stubhub: !(STUBHUB_APP_KEY && STUBHUB_API_KEY)
        }
      });
    }

    console.log(`🔍 Searching for events: city="${city}", keyword="${keyword}"`);

    // Call all APIs in parallel
    const [ticketmasterResult, seatgeekResult, stubhubResult] = await Promise.allSettled([
      TICKETMASTER_API_KEY ? axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
        params: {
          apikey: TICKETMASTER_API_KEY,
          city: city,
          keyword: keyword,
          size: 5
        }
      }) : Promise.reject(new Error('Not configured')),
      SEATGEEK_CLIENT_ID ? axios.get('https://api.seatgeek.com/2/events', {
        params: {
          client_id: SEATGEEK_CLIENT_ID,
          'venue.city': city,
          q: keyword,
          per_page: 5
        }
      }) : Promise.reject(new Error('Not configured')),
      (STUBHUB_APP_KEY && STUBHUB_API_KEY) ? searchStubHubEvents(keyword, city, 5) : Promise.reject(new Error('Not configured'))
    ]);

    const ticketmasterEvents = ticketmasterResult.status === 'fulfilled'
      ? ticketmasterResult.value.data._embedded?.events || []
      : [];

    const seatgeekEvents = seatgeekResult.status === 'fulfilled'
      ? seatgeekResult.value.data.events || []
      : [];

    const stubhubEvents = stubhubResult.status === 'fulfilled'
      ? stubhubResult.value || []
      : [];

    res.json({
      success: true,
      query: { city, keyword },
      summary: {
        ticketmaster: {
          status: ticketmasterResult.status,
          count: ticketmasterEvents.length,
          error: ticketmasterResult.status === 'rejected' ? ticketmasterResult.reason.message : null
        },
        seatgeek: {
          status: seatgeekResult.status,
          count: seatgeekEvents.length,
          error: seatgeekResult.status === 'rejected' ? seatgeekResult.reason.message : null
        },
        stubhub: {
          status: stubhubResult.status,
          count: stubhubEvents.length,
          error: stubhubResult.status === 'rejected' ? stubhubResult.reason.message : null
        }
      },
      results: {
        ticketmaster: ticketmasterEvents.slice(0, 3).map(e => ({
          source: 'Ticketmaster',
          name: e.name,
          date: e.dates.start.localDate,
          time: e.dates.start.localTime || 'TBA',
          venue: e._embedded?.venues?.[0]?.name,
          priceRange: e.priceRanges?.[0] ? `$${e.priceRanges[0].min} - $${e.priceRanges[0].max}` : 'N/A',
          url: e.url
        })),
        seatgeek: seatgeekEvents.slice(0, 3).map(e => ({
          source: 'SeatGeek',
          title: e.title,
          datetime: e.datetime_local,
          venue: e.venue.name,
          lowestPrice: e.stats.lowest_price ? `$${e.stats.lowest_price}` : 'N/A',
          avgPrice: e.stats.average_price ? `$${e.stats.average_price}` : 'N/A',
          listingCount: e.stats.listing_count,
          url: e.url
        })),
        stubhub: stubhubEvents.slice(0, 3).map(e => ({
          source: 'StubHub',
          name: e.name,
          date: e.date,
          venue: e.venue,
          city: e.city,
          priceRange: e.minPrice && e.maxPrice
            ? `$${e.minPrice} - $${e.maxPrice}`
            : e.minPrice
              ? `From $${e.minPrice}`
              : 'N/A',
          url: e.url
        }))
      }
    });
  } catch (error) {
    console.error('Search Error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Database test - create tables
app.get('/api/setup/database', async (req, res) => {
  try {
    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Migration: Add password_hash column if it doesn't exist
    await pool.query(`
      ALTER TABLE users
      ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255)
    `);

    // Create watchlist table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS watchlist (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        event_id VARCHAR(255) NOT NULL,
        event_name VARCHAR(500),
        event_date TIMESTAMP,
        venue VARCHAR(255),
        city VARCHAR(100),
        target_price DECIMAL(10,2),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create price_history table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS price_history (
        id SERIAL PRIMARY KEY,
        event_id VARCHAR(255),
        source VARCHAR(50),
        min_price DECIMAL(10,2),
        avg_price DECIMAL(10,2),
        max_price DECIMAL(10,2),
        checked_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Add indexes for price history queries
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_price_history_event_date
      ON price_history(event_id, checked_at DESC)
    `);

    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_price_history_checked_at
      ON price_history(checked_at)
    `);

    // Create price_alerts table to track sent alerts
    await pool.query(`
      CREATE TABLE IF NOT EXISTS price_alerts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        watchlist_id INTEGER REFERENCES watchlist(id),
        event_id VARCHAR(255),
        triggered_price DECIMAL(10,2),
        sent_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create user_favorites table for teams/artists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS user_favorites (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        favorite_type VARCHAR(50) NOT NULL,
        favorite_name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(user_id, favorite_type, favorite_name)
      )
    `);

    // Create newsletter_subscribers table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        source VARCHAR(50) DEFAULT 'website',
        subscribed_at TIMESTAMP DEFAULT NOW(),
        unsubscribed_at TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      )
    `);

    // Create drip_emails_sent table for email campaign tracking
    await pool.query(`
      CREATE TABLE IF NOT EXISTS drip_emails_sent (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        email_number INTEGER NOT NULL,
        sent_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(user_id, email_number)
      )
    `);

    res.json({
      success: true,
      message: 'Database tables and indexes created successfully!',
      tables: ['users', 'watchlist', 'price_history', 'price_alerts', 'user_favorites', 'newsletter_subscribers', 'drip_emails_sent']
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ========== PRICE TRACKING CRON JOB ==========

// Fetch prices for an event from Ticketmaster
async function fetchTicketmasterEventPrice(eventId) {
  try {
    const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json`, {
      params: { apikey: TICKETMASTER_API_KEY }
    });

    const event = response.data;
    const priceRanges = event.priceRanges?.[0];

    return {
      source: 'ticketmaster',
      minPrice: priceRanges?.min || null,
      maxPrice: priceRanges?.max || null,
      avgPrice: priceRanges ? (priceRanges.min + priceRanges.max) / 2 : null
    };
  } catch (error) {
    console.error(`Error fetching Ticketmaster price for ${eventId}:`, error.message);
    return null;
  }
}

// Fetch prices for an event from SeatGeek (by matching event details)
async function fetchSeatGeekEventPrice(eventName, venue, eventDate) {
  if (!SEATGEEK_CLIENT_ID) return null;

  try {
    // Extract a simpler search term (team names or artist)
    const searchTerm = eventName.split(' vs')[0].split(' at ')[0].trim();

    const response = await axios.get('https://api.seatgeek.com/2/events', {
      params: {
        client_id: SEATGEEK_CLIENT_ID,
        q: searchTerm,
        'venue.name': venue,
        per_page: 5
      }
    });

    // Find matching event by date
    const events = response.data.events || [];
    const matchingEvent = events.find(e => {
      const sgDate = e.datetime_local?.split('T')[0];
      return sgDate === eventDate;
    });

    if (matchingEvent?.stats) {
      return {
        source: 'seatgeek',
        minPrice: matchingEvent.stats.lowest_price || null,
        maxPrice: matchingEvent.stats.highest_price || null,
        avgPrice: matchingEvent.stats.average_price || null,
        listingCount: matchingEvent.stats.listing_count || 0
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching SeatGeek price for ${eventName}:`, error.message);
    return null;
  }
}

// Fetch prices for an event from StubHub (by matching event details)
async function fetchStubHubEventPrice(eventName, venue, eventDate) {
  if (!STUBHUB_APP_KEY || !STUBHUB_API_KEY) return null;

  try {
    const token = await getStubHubAccessToken();

    // Extract a simpler search term (team names or artist)
    const searchTerm = eventName.split(' vs')[0].split(' at ')[0].trim();

    const response = await axios.get('https://api.stubhub.net/catalog/events/search', {
      params: {
        q: searchTerm,
        page: 1,
        page_size: 10
      },
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/hal+json'
      }
    });

    // Find matching event by date
    const events = response.data._embedded?.items || [];
    const matchingEvent = events.find(e => {
      const shDate = e.start_date?.split('T')[0];
      return shDate === eventDate;
    });

    if (matchingEvent) {
      return {
        source: 'stubhub',
        minPrice: matchingEvent.min_ticket_price?.amount || null,
        maxPrice: matchingEvent.max_ticket_price?.amount || null,
        avgPrice: matchingEvent.min_ticket_price?.amount && matchingEvent.max_ticket_price?.amount
          ? (matchingEvent.min_ticket_price.amount + matchingEvent.max_ticket_price.amount) / 2
          : null,
        eventId: matchingEvent.id,
        url: `https://www.stubhub.com/event/${matchingEvent.id}`
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching StubHub price for ${eventName}:`, error.message);
    return null;
  }
}

// Search StubHub events
async function searchStubHubEvents(query, city, limit = 20) {
  if (!STUBHUB_APP_KEY || !STUBHUB_API_KEY) return [];

  try {
    const token = await getStubHubAccessToken();

    const searchQuery = city ? `${query} ${city}` : query;

    const response = await axios.get('https://api.stubhub.net/catalog/events/search', {
      params: {
        q: searchQuery,
        page: 1,
        page_size: limit
      },
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/hal+json'
      }
    });

    const events = response.data._embedded?.items || [];

    return events.map(event => ({
      id: `stubhub-${event.id}`,
      stubhubId: event.id,
      name: event.name,
      date: event.start_date,
      venue: event.venue?.name || 'Unknown Venue',
      city: event.venue?.city || city || 'Unknown City',
      minPrice: event.min_ticket_price?.amount || null,
      maxPrice: event.max_ticket_price?.amount || null,
      currency: event.min_ticket_price?.currency_code || 'USD',
      url: `https://www.stubhub.com/event/${event.id}`,
      source: 'StubHub'
    }));
  } catch (error) {
    console.error('Error searching StubHub events:', error.message);
    return [];
  }
}

// Check and send price drop alerts
async function checkPriceAlerts(eventId, currentMinPrice) {
  try {
    // Get all users watching this event with a target price
    const watchlistResult = await pool.query(`
      SELECT w.id as watchlist_id, w.user_id, w.event_name, w.event_date, w.target_price, u.email
      FROM watchlist w
      JOIN users u ON w.user_id = u.id
      WHERE w.event_id = $1
        AND w.target_price IS NOT NULL
        AND w.target_price >= $2
        AND w.event_date > NOW()
    `, [eventId, currentMinPrice]);

    for (const item of watchlistResult.rows) {
      // Check if we already sent an alert for this price point
      const existingAlert = await pool.query(`
        SELECT id FROM price_alerts
        WHERE watchlist_id = $1 AND triggered_price <= $2
        AND sent_at > NOW() - INTERVAL '24 hours'
      `, [item.watchlist_id, currentMinPrice]);

      if (existingAlert.rows.length === 0) {
        // Send email alert
        const sent = await sendPriceDropEmail(
          item.email,
          item.event_name,
          currentMinPrice,
          item.target_price,
          item.event_date
        );

        if (sent) {
          // Record the alert
          await pool.query(`
            INSERT INTO price_alerts (user_id, watchlist_id, event_id, triggered_price)
            VALUES ($1, $2, $3, $4)
          `, [item.user_id, item.watchlist_id, eventId, currentMinPrice]);
        }
      }
    }
  } catch (error) {
    console.error('Price alert check error:', error.message);
  }
}

// Main price tracking function
async function trackWatchlistPrices() {
  console.log('📊 Starting price tracking job...');

  try {
    // Get unique events from watchlist
    const watchlistResult = await pool.query(`
      SELECT DISTINCT ON (event_id)
        event_id, event_name, venue, event_date
      FROM watchlist
      WHERE event_date > NOW()
      ORDER BY event_id
    `);

    const events = watchlistResult.rows;
    console.log(`Found ${events.length} events to track`);

    let tracked = 0;
    let alertsChecked = 0;

    for (const event of events) {
      let lowestPrice = null;
      console.log(`\n📍 Tracking: ${event.event_name} (${event.event_id})`);

      // Fetch from Ticketmaster
      const tmPrice = await fetchTicketmasterEventPrice(event.event_id);
      console.log(`  TM result:`, tmPrice ? `$${tmPrice.minPrice}-$${tmPrice.maxPrice}` : 'no prices');
      if (tmPrice && tmPrice.minPrice) {
        await pool.query(`
          INSERT INTO price_history (event_id, source, min_price, avg_price, max_price)
          VALUES ($1, $2, $3, $4, $5)
        `, [event.event_id, tmPrice.source, tmPrice.minPrice, tmPrice.avgPrice, tmPrice.maxPrice]);
        tracked++;
        lowestPrice = tmPrice.minPrice;
      }

      // Fetch from SeatGeek
      const eventDate = event.event_date ? new Date(event.event_date).toISOString().split('T')[0] : null;
      const sgPrice = await fetchSeatGeekEventPrice(event.event_name, event.venue, eventDate);
      console.log(`  SG result:`, sgPrice ? `$${sgPrice.minPrice}-$${sgPrice.maxPrice}` : 'no prices');
      if (sgPrice && sgPrice.minPrice) {
        await pool.query(`
          INSERT INTO price_history (event_id, source, min_price, avg_price, max_price)
          VALUES ($1, $2, $3, $4, $5)
        `, [event.event_id, sgPrice.source, sgPrice.minPrice, sgPrice.avgPrice, sgPrice.maxPrice]);
        tracked++;
        if (!lowestPrice || sgPrice.minPrice < lowestPrice) {
          lowestPrice = sgPrice.minPrice;
        }
      }

      // Check for price alerts if we have a price
      if (lowestPrice) {
        await checkPriceAlerts(event.event_id, lowestPrice);
        alertsChecked++;
      }

      // Small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log(`✅ Price tracking complete. Tracked ${tracked} price points. Checked ${alertsChecked} events for alerts.`);
  } catch (error) {
    console.error('❌ Price tracking error:', error.message);
  }
}

// Schedule price tracking every 4 hours
cron.schedule('0 */4 * * *', () => {
  trackWatchlistPrices();
});

// Schedule drip email campaign daily at 10 AM UTC
cron.schedule('0 10 * * *', () => {
  console.log('📧 Running daily drip email campaign...');
  processDripCampaign(pool);
});

// Also expose an endpoint to manually trigger price tracking
app.post('/api/prices/track', authenticateToken, async (req, res) => {
  // Only allow manual trigger in development or for testing
  trackWatchlistPrices();
  res.json({ success: true, message: 'Price tracking started' });
});

// Admin endpoint to trigger price tracking (with detailed results)
app.post('/api/admin/price-track', authenticateAdmin, async (req, res) => {
  try {
    console.log('📊 Admin triggered price tracking...');

    // Get unique events from watchlist
    const watchlistResult = await pool.query(`
      SELECT DISTINCT ON (event_id)
        event_id, event_name, venue, event_date
      FROM watchlist
      WHERE event_date > NOW()
      ORDER BY event_id
    `);

    const events = watchlistResult.rows;
    const results = [];
    let tracked = 0;

    for (const event of events) {
      const eventResult = { event_id: event.event_id, event_name: event.event_name, prices: {} };

      // Fetch from Ticketmaster
      const tmPrice = await fetchTicketmasterEventPrice(event.event_id);
      eventResult.prices.ticketmaster = tmPrice;
      if (tmPrice && tmPrice.minPrice) {
        await pool.query(`
          INSERT INTO price_history (event_id, source, min_price, avg_price, max_price)
          VALUES ($1, $2, $3, $4, $5)
        `, [event.event_id, tmPrice.source, tmPrice.minPrice, tmPrice.avgPrice, tmPrice.maxPrice]);
        tracked++;
      }

      // Fetch from SeatGeek
      const eventDate = event.event_date ? new Date(event.event_date).toISOString().split('T')[0] : null;
      const sgPrice = await fetchSeatGeekEventPrice(event.event_name, event.venue, eventDate);
      eventResult.prices.seatgeek = sgPrice;
      if (sgPrice && sgPrice.minPrice) {
        await pool.query(`
          INSERT INTO price_history (event_id, source, min_price, avg_price, max_price)
          VALUES ($1, $2, $3, $4, $5)
        `, [event.event_id, sgPrice.source, sgPrice.minPrice, sgPrice.avgPrice, sgPrice.maxPrice]);
        tracked++;
      }

      results.push(eventResult);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    res.json({
      success: true,
      message: `Tracked ${tracked} price points for ${events.length} events`,
      results
    });
  } catch (error) {
    console.error('Admin price tracking error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin endpoint to view price history data
app.get('/api/admin/price-history', authenticateAdmin, async (req, res) => {
  try {
    const { eventId, limit = 50 } = req.query;

    let query = `
      SELECT ph.*, w.event_name, w.venue
      FROM price_history ph
      LEFT JOIN watchlist w ON w.event_id = ph.event_id
      ORDER BY ph.checked_at DESC
      LIMIT $1
    `;
    let params = [parseInt(limit)];

    if (eventId) {
      query = `
        SELECT ph.*, w.event_name, w.venue
        FROM price_history ph
        LEFT JOIN watchlist w ON w.event_id = ph.event_id
        WHERE ph.event_id = $2
        ORDER BY ph.checked_at DESC
        LIMIT $1
      `;
      params = [parseInt(limit), eventId];
    }

    const result = await pool.query(query, params);
    res.json({ success: true, priceHistory: result.rows, total: result.rowCount });
  } catch (error) {
    console.error('Admin price history error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========== PRICE HISTORY ENDPOINTS ==========

// Get price history for an event
app.get('/api/prices/history/:eventId', authenticateToken, async (req, res) => {
  try {
    const { eventId } = req.params;
    const { days = 30 } = req.query;

    const result = await pool.query(`
      SELECT source, min_price, avg_price, max_price, checked_at
      FROM price_history
      WHERE event_id = $1
        AND checked_at > NOW() - INTERVAL '1 day' * $2
      ORDER BY checked_at ASC
    `, [eventId, parseInt(days)]);

    res.json({
      success: true,
      eventId,
      count: result.rows.length,
      priceHistory: result.rows
    });
  } catch (error) {
    console.error('Price history error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get price trend for an event
app.get('/api/prices/trend/:eventId', authenticateToken, async (req, res) => {
  try {
    const { eventId } = req.params;

    // Get latest and previous prices
    const result = await pool.query(`
      WITH recent_prices AS (
        SELECT min_price, avg_price, source, checked_at,
               ROW_NUMBER() OVER (PARTITION BY source ORDER BY checked_at DESC) as rn
        FROM price_history
        WHERE event_id = $1
      )
      SELECT
        source,
        min_price as current_min,
        avg_price as current_avg
      FROM recent_prices
      WHERE rn = 1
    `, [eventId]);

    // Get previous day's prices for comparison
    const previousResult = await pool.query(`
      SELECT source, min_price as previous_min
      FROM price_history
      WHERE event_id = $1
        AND checked_at < NOW() - INTERVAL '20 hours'
      ORDER BY checked_at DESC
      LIMIT 2
    `, [eventId]);

    // Calculate trend
    const currentPrices = result.rows;
    const previousPrices = previousResult.rows;

    let trend = { direction: 'stable', percentChange: 0 };

    if (currentPrices.length > 0 && previousPrices.length > 0) {
      const currentMin = Math.min(...currentPrices.map(p => parseFloat(p.current_min)));
      const previousMin = Math.min(...previousPrices.map(p => parseFloat(p.previous_min)));

      if (previousMin > 0) {
        const change = ((currentMin - previousMin) / previousMin * 100);
        trend = {
          direction: change > 1 ? 'up' : change < -1 ? 'down' : 'stable',
          percentChange: Math.round(change * 10) / 10,
          currentMinPrice: currentMin,
          previousMinPrice: previousMin
        };
      }
    }

    res.json({
      success: true,
      eventId,
      trend,
      sources: currentPrices
    });
  } catch (error) {
    console.error('Price trend error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get buy recommendation for an event
app.get('/api/prices/recommendation/:eventId', authenticateToken, async (req, res) => {
  try {
    const { eventId } = req.params;

    // Get event info and price statistics
    const eventInfo = await pool.query(
      'SELECT event_name, event_date, target_price FROM watchlist WHERE event_id = $1 LIMIT 1',
      [eventId]
    );

    const stats = await pool.query(`
      SELECT
        MIN(min_price) as lowest_ever,
        MAX(min_price) as highest_ever,
        AVG(min_price) as average_price
      FROM price_history
      WHERE event_id = $1
    `, [eventId]);

    const currentPrice = await pool.query(`
      SELECT min_price FROM price_history
      WHERE event_id = $1
      ORDER BY checked_at DESC
      LIMIT 1
    `, [eventId]);

    const event = eventInfo.rows[0];
    const priceStats = stats.rows[0];
    const current = currentPrice.rows[0]?.min_price;

    if (!current || !priceStats.lowest_ever) {
      return res.json({
        success: true,
        eventId,
        recommendation: {
          action: 'hold',
          confidence: 'low',
          reason: 'Not enough price history yet. Check back soon.',
          stats: null
        }
      });
    }

    const lowestEver = parseFloat(priceStats.lowest_ever);
    const highestEver = parseFloat(priceStats.highest_ever);
    const avgPrice = parseFloat(priceStats.average_price);
    const currentMin = parseFloat(current);

    // Calculate days until event
    let daysUntilEvent = null;
    if (event?.event_date) {
      daysUntilEvent = Math.ceil((new Date(event.event_date) - new Date()) / (1000 * 60 * 60 * 24));
    }

    // Recommendation logic
    let action = 'hold';
    let confidence = 'medium';
    let reason = 'Prices are within normal range.';

    if (currentMin <= lowestEver * 1.05) {
      action = 'buy_now';
      confidence = 'high';
      reason = 'Price is at or near the lowest recorded!';
    } else if (daysUntilEvent !== null && daysUntilEvent <= 3) {
      action = 'buy_now';
      confidence = 'medium';
      reason = 'Event is very soon - prices typically rise last minute.';
    } else if (daysUntilEvent !== null && daysUntilEvent <= 7) {
      action = 'buy_now';
      confidence = 'low';
      reason = 'Event is within a week. Consider buying soon.';
    } else if (currentMin >= avgPrice * 1.2) {
      action = 'wait';
      confidence = 'medium';
      reason = 'Current price is 20%+ above average. Wait for a drop.';
    } else if (currentMin >= highestEver * 0.95) {
      action = 'wait';
      confidence = 'high';
      reason = 'Price is near the highest recorded. Wait for better deals.';
    }

    // Check against target price
    if (event?.target_price && currentMin <= parseFloat(event.target_price)) {
      action = 'buy_now';
      confidence = 'high';
      reason = `Price is at or below your target of $${event.target_price}!`;
    }

    res.json({
      success: true,
      eventId,
      eventName: event?.event_name,
      recommendation: {
        action,
        confidence,
        reason,
        stats: {
          currentPrice: currentMin,
          lowestRecorded: lowestEver,
          highestRecorded: highestEver,
          averagePrice: Math.round(avgPrice * 100) / 100,
          daysUntilEvent,
          targetPrice: event?.target_price ? parseFloat(event.target_price) : null
        }
      }
    });
  } catch (error) {
    console.error('Recommendation error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get watchlist with current prices and trends
app.get('/api/watchlist/with-prices', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const result = await pool.query(`
      SELECT
        w.id,
        w.event_id,
        w.event_name,
        w.event_date,
        w.venue,
        w.city,
        w.target_price,
        w.created_at
      FROM watchlist w
      WHERE w.user_id = $1
      ORDER BY w.event_date ASC
    `, [userId]);

    // Enrich with price data
    const enrichedWatchlist = await Promise.all(result.rows.map(async (item) => {
      // Get latest price
      const latestPrice = await pool.query(`
        SELECT source, min_price, max_price, checked_at
        FROM price_history
        WHERE event_id = $1
        ORDER BY checked_at DESC
        LIMIT 1
      `, [item.event_id]);

      // Get price change
      const priceChange = await pool.query(`
        WITH prices AS (
          SELECT min_price, checked_at,
                 ROW_NUMBER() OVER (ORDER BY checked_at DESC) as rn
          FROM price_history
          WHERE event_id = $1
        )
        SELECT
          (SELECT min_price FROM prices WHERE rn = 1) as current_price,
          (SELECT min_price FROM prices WHERE rn = 2) as previous_price
      `, [item.event_id]);

      const current = priceChange.rows[0]?.current_price;
      const previous = priceChange.rows[0]?.previous_price;

      let percentChange = null;
      let direction = 'stable';
      if (current && previous) {
        percentChange = Math.round(((current - previous) / previous * 100) * 10) / 10;
        direction = percentChange > 1 ? 'up' : percentChange < -1 ? 'down' : 'stable';
      }

      return {
        ...item,
        current_min_price: latestPrice.rows[0]?.min_price || null,
        current_max_price: latestPrice.rows[0]?.max_price || null,
        source: latestPrice.rows[0]?.source || null,
        last_checked: latestPrice.rows[0]?.checked_at || null,
        percent_change: percentChange,
        trend_direction: direction
      };
    }));

    res.json({
      success: true,
      count: enrichedWatchlist.length,
      watchlist: enrichedWatchlist
    });
  } catch (error) {
    console.error('Watchlist with prices error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    availableEndpoints: {
      health: 'GET /',
      ticketmaster: 'GET /api/test/ticketmaster',
      seatgeek: 'GET /api/test/seatgeek',
      search: 'GET /api/search',
      setupDb: 'GET /api/setup/database'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 TicketHawk API Server Started`);
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔑 Ticketmaster API: ${TICKETMASTER_API_KEY ? '✅ Configured' : '❌ Missing'}`);
  console.log(`🔑 SeatGeek API: ${SEATGEEK_CLIENT_ID ? '✅ Configured' : '❌ Missing'}`);
  console.log(`🔑 StubHub API: ${STUBHUB_APP_KEY && STUBHUB_API_KEY ? '✅ Configured' : '❌ Missing'}`);
  console.log(`\n📖 API Documentation:`);
  console.log(`   Health Check: http://localhost:${PORT}/`);
  console.log(`   Test APIs: See http://localhost:${PORT}/ for endpoints\n`);
});

module.exports = app;
