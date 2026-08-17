# Watchlist Digest — Send-Ready Content

**Send status:** hold until current price tracking populates snapshots. This is a prepared, urgency-aware digest; it intentionally does not invent prices or recommendations.

**Subject A:** Your TicketScan watchlist update: 20 events need a price check  
**Subject B:** Tickets are on your radar. We’re watching the clock.  
**Preview:** You’re tracking 62 future events. Twenty happen within 14 days; here’s what needs attention.

## Message template

Hi {{first_name}},

You’re tracking **{{event_count}} events** on TicketScan. We’re keeping an eye on them, including **{{urgent_event_count}} happening within 14 days**.

Today’s honest status: we don’t have a fresh price snapshot for these events yet, so we’re not going to make up a fake “BUY NOW” signal. Ticket prices are slippery little creatures. Once a current comparison lands, we’ll show whether each event moved down, moved up, or stayed steady.

{{event_rows}}

**Set a target price** for the events you care about most. That gives TicketScan a real trigger for a price-drop alert.

[View my watchlist](https://ticketscan.io/watchlist)

Cheers,  
TicketScan — fewer guessy ticket purchases.

## Personalization queue

Use the following rows for `{{event_rows}}`. All listed prices/recommendations are **pending current snapshot**. “Urgent” means the event date is within 14 days of 2026-08-17.

| Recipient | Events tracked | Digest rows |
|---|---:|---|
| 014v564bv@mozmail.com | 1 | Harry Styles: Together, Together — Sep 18 — price check pending |
| alishaoverstreet@live.com | 1 | The Red Clay Strays — Aug 29 — urgent; price check pending |
| alyssawhiterox@gmail.com | 1 | The R&B Tour - Starring Usher Raymond & Chris Brown — Sep 18 — price check pending |
| bjlstorm3@gmail.com | 3 | New York Giants vs. Dallas Cowboys — Sep 13; New York Giants vs. Tennessee Titans — Sep 27; New York Giants vs. Arizona Cardinals — Oct 04 — price checks pending |
| chungvungocminh@gmail.com | 1 | MAMAMOO 2026 US TOUR — Aug 18 — urgent; price check pending |
| cutekitten1234@icloud.com | 7 | Harry Styles: Together, Together — Aug 26, Aug 28, Aug 29, Sep 02, Sep 04, Sep 05, Sep 09 — first 3 urgent; price checks pending |
| deathcump@gmail.com | 1 | The Neighbourhood THE WORLD TOUR — Nov 16 — price check pending |
| drawicz@gmail.com | 2 | San Diego Padres vs. Miami Marlins — Sep 19; San Francisco 49ers vs. Miami Dolphins — Sep 20 — price checks pending |
| dsh1105@gmail.com | 1 | BTS WORLD TOUR 'ARIRANG' IN LOS ANGELES — Sep 06 — price check pending |
| eemorkeviciute@gmail.com | 1 | Preseason Game 2: Buffalo Bills v Pittsburgh Steelers — Aug 27 — urgent; price check pending |
| fnziman@gmail.com | 1 | Ishay Ribo with The Israel Philharmonic Orchestra — Aug 27 — urgent; price check pending |
| ginacmccarty@gmail.com | 1 | Jason Aldean: Songs About Us Tour 2026 — Aug 29 — urgent; price check pending |
| goldpassconcierge@gmail.com | 1 | Forfait 2 jours Coupe Davis - La Coupe du monde du tennis — Sep 19 — price check pending |
| gpappas97@gmail.com | 1 | Texas Longhorns Football vs. Ohio State Football — Sep 12 — price check pending |
| guyncognito@duck.com | 4 | Philadelphia 76ers vs. Detroit Pistons — Oct 25; vs. Chicago Bulls — Nov 02; vs. Toronto Raptors — Nov 12; vs. Indiana Pacers — Nov 15 — price checks pending |
| ibmztrdqkxtwibiuqg@onldm.net | 1 | Seattle Seahawks vs. Chicago Bears — Nov 02 — price check pending |
| jerrykielbasa@gmail.com | 1 | Florida Gators Football vs. Florida Atlantic University Owls Football — Sep 05 — price check pending |
| karenmreich@gmail.com | 1 | KATSEYE: THE WILDWORLD TOUR — Oct 22 — price check pending |
| kevinshall87@gmail.com | 1 | Matt Rife: Stay Golden World Tour — Sep 26 — price check pending |
| mattfleischer4@gmail.com | 2 | Men’s/Women’s Round of 16 — Sep 06, Sep 07 — price checks pending |
| mdawg1981@aol.com | 1 | Twenty One Pilots - Ohio Stadium — Oct 17 — price check pending |
| mfishman93@gmail.com | 1 | Baltimore Ravens v Cincinnati Bengals — Oct 25 — price check pending |
| notwgirl8@gmail.com | 1 | Ed Sheeran: LOOP Tour — Sep 19 — price check pending |
| ones-unsaved5g@icloud.com | 1 | STING 3.0 Tour — Nov 09 — price check pending |
| raylenekfowler@gmail.com | 1 | BTS WORLD TOUR 'ARIRANG' IN LOS ANGELES — Sep 05 — price check pending |
| rck2001@hotmail.ca | 2 | Olivia Rodrigo: The Unraveled Tour — Oct 26, Oct 27 — price checks pending |
| rgbarrasso@gmail.com | 1 | Bruno Mars Wed 8/26/26 — Aug 26 — urgent; price check pending |
| ruvinsmanagement@gmail.com | 1 | Colorado Avalanche vs. Utah Mammoth — Sep 20 — price check pending |
| savsaurusrex@gmail.com | 1 | My Chemical Romance The Black Parade 2026 — Aug 27 — urgent; price check pending |
| spcoog83@gmail.com | 1 | Olivia Dean: The Art Of Loving Live — Aug 25 — urgent; price check pending |
| sunny_d27@yahoo.com | 1 | Backstreet Boys: Into The Millennium — Aug 20 — urgent; price check pending |
| taranimeramaro@gmail.com | 3 | Bruno Mars - The Romantic Tour — Aug 21, Aug 22, Aug 25 — all urgent; price checks pending |
| themodestduckling@gmail.com | 1 | My Chemical Romance The Black Parade 2026 — Aug 30 — urgent; price check pending |
| tosophiameyer@gmail.com | 11 | Harry Styles: Together, Together — Aug 26, Aug 28 (2 listings), Aug 29, Sep 02, Sep 04, Sep 05, Sep 09, Sep 11, Sep 12, Sep 16 — first 4 urgent; price checks pending |
| wbgoodman77@gmail.com | 1 | KATSEYE: THE WILDWORLD TOUR — Oct 20 — price check pending |
| webbercycle@gmail.com | 1 | Malcolm Todd: Do That Again Tour (moved to The Salt Shed Outdoors) — Oct 06 — price check pending |

## Send QA

- Replace `{{first_name}}`, `{{event_count}}`, and `{{urgent_event_count}}` before sending.
- Do not render “price check pending” as a price, trend, or recommendation.
- Confirm the CTA resolves to the authenticated watchlist experience.
- Add unsubscribe footer and sender identity through the existing Nodemailer template.
