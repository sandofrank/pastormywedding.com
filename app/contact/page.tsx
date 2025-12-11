"use client";

import { FormEvent } from "react";
import Image from "next/image";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const partner = formData.get("partner") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const rehearsalDate = formData.get("rehearsalDate") as string;
    const rehearsalTime = formData.get("rehearsalTime") as string;
    const venue = formData.get("venue") as string;
    const packageType = formData.get("package") as string;
    const message = formData.get("message") as string;
    const referral = formData.get("referral") as string;

    const subject = `Wedding Inquiry - ${name} & ${partner} - ${date}`;

    const body = `Hello Pastor Jeff,

We would like to check your availability for our wedding.

COUPLE INFORMATION:
- Bride's Name: ${name}
- Groom's Name: ${partner}
- Email: ${email}
- Phone: ${phone}

WEDDING DETAILS:
- Wedding Date: ${date}
- Ceremony Time: ${time || "TBD"}
- Rehearsal Date: ${rehearsalDate || "N/A"}
- Rehearsal Time: ${rehearsalTime || "N/A"}
- Venue: ${venue || "TBD"}
- Package Interest: ${packageType || "Not selected"}

ADDITIONAL DETAILS:
${message || "None provided"}

How we heard about you: ${referral || "Not specified"}

Thank you!
${name} & ${partner}`;

    const mailtoLink = `mailto:email@pastormywedding.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main>
      <section className="page-hero-image page-hero-contact">
        <div className="container">
          <h1>Schedule Your Wedding</h1>
          <p>Book Pastor Jeff in Temecula Wine Country or The Villages, FL</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Left: Form */}
            <div className="contact-form-side">
              <h2>Check Availability</h2>
              <p className="form-intro">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Bride&apos;s Name *</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="partner">Groom&apos;s Name *</label>
                    <input type="text" id="partner" name="partner" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Wedding Date *</label>
                    <input type="date" id="date" name="date" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Ceremony Time</label>
                    <input type="time" id="time" name="time" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="rehearsalDate">Rehearsal Date (if applicable)</label>
                    <input type="date" id="rehearsalDate" name="rehearsalDate" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rehearsalTime">Rehearsal Time</label>
                    <input type="time" id="rehearsalTime" name="rehearsalTime" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="venue">Venue Name &amp; Location</label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    placeholder="e.g., Faulkner Winery, Temecula"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="package">Package Interest</label>
                    <select id="package" name="package">
                      <option value="">Select a package...</option>
                      <option value="ceremony">Wedding Ceremony ($400)</option>
                      <option value="ceremony-rehearsal">Wedding + Rehearsal ($500)</option>
                      <option value="extended">Extended Package ($600)</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="referral">How did you hear about us?</label>
                    <select id="referral" name="referral">
                      <option value="">Select...</option>
                      <option value="google">Google Search</option>
                      <option value="wedding-wire">Wedding Wire</option>
                      <option value="the-knot">The Knot</option>
                      <option value="referral">Friend/Family Referral</option>
                      <option value="venue">Venue Recommendation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your wedding plans or any questions..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-block">
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Right: Info */}
            <div className="contact-info-side">
              <div className="info-block">
                <h3>Contact Directly</h3>
                <a href="tel:951-218-5925" className="contact-link">
                  (951) 218-5925
                </a>
                <a href="mailto:email@pastormywedding.com" className="contact-link">
                  email@pastormywedding.com
                </a>
              </div>

              <div className="info-block">
                <h3>Pricing</h3>
                <ul className="pricing-list-simple">
                  <li><span>Wedding Ceremony</span><strong>$400</strong></li>
                  <li><span>Wedding + Rehearsal</span><strong>$500</strong></li>
                  <li><span>Extended Package</span><strong>$600</strong></li>
                </ul>
              </div>

              <div className="info-block">
                <h3>Payment</h3>
                <p>Secure your date with Zelle.</p>
                <div className="qr-codes-inline">
                  <div className="qr-item">
                    <Image src="/images/qr-zelle.png" alt="Zelle QR Code" width={100} height={100} />
                    <span>Zelle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
