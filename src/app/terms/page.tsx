import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Ticket Scan',
  description: 'Terms of Service for Ticket Scan. Read our terms and conditions for using our ticket comparison service.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm mb-8">
          <Link href="/" className="text-purple-600 hover:text-purple-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Terms of Service</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2026</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing or using Ticket Scan (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Ticket Scan is a ticket price comparison platform that helps users:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Search and compare ticket prices across multiple platforms</li>
                <li>Track price changes for specific events</li>
                <li>Receive alerts when ticket prices drop</li>
              </ul>
              <p className="text-gray-600 mt-4">
                <strong>Important:</strong> Ticket Scan does not sell tickets directly. We aggregate information from third-party ticket sellers. All ticket purchases are made through those third-party platforms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 mb-4">To use certain features, you must create an account. You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your password</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-600 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools to scrape or collect data without permission</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Impersonate others or provide false information</li>
                <li>Use the Service to send spam or unsolicited messages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Price Information Disclaimer</h2>
              <p className="text-gray-600">
                Ticket prices displayed on Ticket Scan are obtained from third-party sources and may not reflect real-time availability or pricing. Prices may change at any time. We do not guarantee the accuracy, completeness, or timeliness of price information. Always verify the final price on the ticket seller&apos;s website before purchasing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
              <p className="text-gray-600">
                The Service contains links to third-party ticket sellers. These links are provided for your convenience. We are not responsible for the content, terms, or privacy practices of these third-party sites. Your use of third-party sites is at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600">
                The Service and its original content, features, and functionality are owned by Ticket Scan and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our content without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by law, Ticket Scan shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, resulting from your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-gray-600">
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-600">
                We may terminate or suspend your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We will provide notice of material changes by posting the updated terms on this page. Your continued use of the Service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-600">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about these Terms of Service, please contact us at legal@ticketscan.io.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
