import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Pastor My Wedding - Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.pastormywedding.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: December 11, 2025</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Introduction</h2>
            <p>
              Pastor My Wedding (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
              committed to protecting the personal information you share with us. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit
              our website pastormywedding.com or use our wedding officiant services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Names (yours and your partner&apos;s)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Wedding date and venue information</li>
              <li>Any additional details you provide in your inquiry</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your
              device, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses minimal, essential cookies necessary for the website to function
              properly. We use local storage to save your cookie consent preferences. We do not use
              third-party tracking cookies or analytics services that track your browsing behavior
              across other websites.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries about our wedding officiant services</li>
              <li>Schedule and coordinate your wedding ceremony</li>
              <li>Communicate with you about your upcoming wedding</li>
              <li>Process payments for our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information only in the following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal requirements or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or merger</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from
              unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the
              purposes for which it was collected, including to satisfy legal, accounting, or
              reporting requirements.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>California Privacy Rights</h2>
            <p>
              If you are a California resident, you have additional rights under the California
              Consumer Privacy Act (CCPA), including the right to know what personal information we
              collect, the right to delete your information, and the right to opt out of the sale of
              your personal information. We do not sell personal information.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed to individuals under 18 years of age. We do
              not knowingly collect personal information from children under 18.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (such as payment processors).
              We are not responsible for the privacy practices of these external sites. We encourage
              you to review their privacy policies.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be
              indicated by an updated &quot;Last Updated&quot; date at the top of this page. We encourage you
              to review this Privacy Policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please
              contact us:
            </p>
            <ul>
              <li>
                <strong>Phone:</strong> (951) 218-5925
              </li>
              <li>
                <strong>Email:</strong> email@pastormywedding.com
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
