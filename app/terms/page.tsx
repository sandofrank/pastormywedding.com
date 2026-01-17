import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Pastor My Wedding - Read our terms and conditions for using our website and wedding officiant services.",
  alternates: {
    canonical: "https://www.pastormywedding.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main>
      <section className="min-h-[40vh] flex items-center justify-center text-center bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-6">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <h1 className="!text-white text-4xl md:text-5xl mb-4 animate-fade-in-up">
            Terms of Service
          </h1>
          <p className="text-xl opacity-90 animate-fade-in-up-delay">Last Updated: December 11, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-text-light leading-relaxed mb-6">
              By accessing and using the Pastor My Wedding website (pastormywedding.com), you accept
              and agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our website or services.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">2. Description of Services</h2>
            <p className="text-text-light leading-relaxed mb-6">
              Pastor My Wedding provides wedding officiant services in the Temecula Valley,
              Southern California, and The Villages, Florida (32162). Our website provides information
              about our services, pricing, and allows potential clients to contact us regarding their
              wedding ceremonies.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">3. Use License</h2>
            <p className="text-text-light leading-relaxed mb-4">
              Permission is granted to temporarily view and access the materials on our website for
              personal, non-commercial use only. This license does not include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light mb-6">
              <li>Modifying or copying our materials</li>
              <li>Using materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software on the website</li>
              <li>Removing any copyright or proprietary notations</li>
              <li>Transferring materials to another person or mirroring materials on another server</li>
            </ul>
            <p className="text-text-light leading-relaxed mb-6">
              This license shall automatically terminate if you violate any of these restrictions.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">4. Wedding Services</h2>
            <h3 className="text-xl text-primary mt-6 mb-3">Booking and Payment</h3>
            <ul className="list-disc pl-6 space-y-2 text-text-light mb-6">
              <li>
                Wedding dates are secured upon receipt of payment via Zelle as indicated
                on our website.
              </li>
              <li>
                Pricing is subject to change; however, once a booking is confirmed with payment,
                the agreed-upon price will be honored.
              </li>
              <li>
                A receipt will be provided via email upon payment.
              </li>
            </ul>

            <h3 className="text-xl text-primary mt-6 mb-3">Cancellation Policy</h3>
            <ul className="list-disc pl-6 space-y-2 text-text-light mb-6">
              <li>
                Cancellations must be communicated in writing (email or text) as soon as possible.
              </li>
              <li>
                Refund policies will be determined on a case-by-case basis depending on the timing
                and circumstances of the cancellation.
              </li>
            </ul>

            <h3 className="text-xl text-primary mt-6 mb-3">Ceremony Customization</h3>
            <p className="text-text-light leading-relaxed mb-6">
              Pastor Jeff will work with each couple to customize the ceremony to their preferences.
              Sample vows and ceremony elements are provided as examples and can be modified to suit
              your needs.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">5. Disclaimer</h2>
            <p className="text-text-light leading-relaxed mb-4">
              The information provided on this website is for general informational purposes only.
              While we strive to keep information accurate and up-to-date, we make no representations
              or warranties of any kind, express or implied, about the completeness, accuracy,
              reliability, or suitability of the information.
            </p>
            <p className="text-text-light leading-relaxed mb-6">
              The materials on this website are provided on an &quot;as is&quot; basis. Pastor My Wedding
              makes no warranties, expressed or implied, and hereby disclaims all other warranties
              including, without limitation, implied warranties of merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-text-light leading-relaxed mb-6">
              In no event shall Pastor My Wedding or its service providers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the materials on our website,
              even if we have been notified of the possibility of such damage.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">7. Third-Party Links</h2>
            <p className="text-text-light leading-relaxed mb-6">
              Our website may contain links to third-party websites, including payment processors
              (Zelle). These links are provided for your convenience. We do not endorse or
              assume responsibility for the content, privacy policies, or practices of any third-party
              sites. You access third-party websites at your own risk.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">8. Intellectual Property</h2>
            <p className="text-text-light leading-relaxed mb-6">
              All content on this website, including text, images, logos, and design elements, is
              the property of Pastor My Wedding or its content suppliers and is protected by
              copyright and other intellectual property laws. Unauthorized use of any materials may
              violate copyright, trademark, and other laws.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">9. Privacy</h2>
            <p className="text-text-light leading-relaxed mb-6">
              Your use of our website is also governed by our Privacy Policy. Please review our
              Privacy Policy to understand our practices regarding your personal information.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">10. Modifications to Terms</h2>
            <p className="text-text-light leading-relaxed mb-6">
              Pastor My Wedding reserves the right to revise these Terms of Service at any time
              without notice. By using this website, you agree to be bound by the current version
              of these Terms of Service. We encourage you to review this page periodically for any
              changes.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">11. Governing Law</h2>
            <p className="text-text-light leading-relaxed mb-6">
              These Terms of Service are governed by and construed in accordance with the laws of
              the State of California or the State of Florida, depending on the location of the
              services provided. For California services, you submit to the exclusive jurisdiction
              of the courts in Riverside County, California. For Florida services, you submit to
              the exclusive jurisdiction of the courts in Sumter County, Florida.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">12. Severability</h2>
            <p className="text-text-light leading-relaxed mb-6">
              If any provision of these Terms of Service is found to be unenforceable or invalid,
              that provision shall be limited or eliminated to the minimum extent necessary so that
              these Terms of Service shall otherwise remain in full force and effect.
            </p>

            <h2 className="text-2xl text-primary mt-8 mb-4">13. Contact Information</h2>
            <p className="text-text-light leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none space-y-2 text-text-light mb-6">
              <li>
                <strong className="text-primary">Phone:</strong> (951) 218-5925
              </li>
              <li>
                <strong className="text-primary">Email:</strong> email@pastormywedding.com
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
