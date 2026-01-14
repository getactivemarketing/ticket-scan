import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Ticket Scan',
  description: 'Privacy Policy for Ticket Scan. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm mb-8">
          <Link href="/" className="text-purple-600 hover:text-purple-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Privacy Policy</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2026</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                When you use Ticket Scan, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Account Information:</strong> Email address and password when you create an account</li>
                <li><strong>Usage Data:</strong> Events you search for, track, and add to your watchlist</li>
                <li><strong>Device Information:</strong> Browser type, IP address, and device identifiers</li>
                <li><strong>Newsletter:</strong> Email address if you subscribe to our newsletter</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide and improve our ticket comparison services</li>
                <li>Send you price drop alerts for events you&apos;re tracking</li>
                <li>Send newsletter updates (if subscribed)</li>
                <li>Analyze usage patterns to improve our service</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> Companies that help us operate our service (hosting, email delivery)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement industry-standard security measures to protect your data, including encrypted connections (HTTPS), secure password hashing, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and associated data</li>
                <li>Unsubscribe from marketing emails</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Cookies</h2>
              <p className="text-gray-600">
                We use cookies and similar technologies to maintain your session, remember your preferences, and analyze how our service is used. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
              <p className="text-gray-600">
                Our service may contain links to third-party ticket sellers (Ticketmaster, SeatGeek, etc.). We are not responsible for their privacy practices. Please review their privacy policies before providing information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-600">
                Ticket Scan is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this privacy policy or our data practices, please contact us at privacy@ticketscan.io.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
