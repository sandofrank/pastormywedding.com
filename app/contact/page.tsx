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
    const venue = formData.get("venue") as string;
    const packageType = formData.get("package") as string;
    const message = formData.get("message") as string;
    const referral = formData.get("referral") as string;

    const subject = `Wedding Inquiry - ${name} & ${partner} - ${date}`;

    const body = `Hello Pastor Jeff,

We would like to check your availability for our wedding.

COUPLE INFORMATION:
- Name: ${name}
- Partner's Name: ${partner}
- Email: ${email}
- Phone: ${phone}

WEDDING DETAILS:
- Wedding Date: ${date}
- Ceremony Time: ${time || "TBD"}
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
          <p>Book Pastor Jeff for your Temecula Wine Country ceremony</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-section">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Ready to book Pastor Jeff for your wedding? Fill out the form or contact us
                directly.
              </p>

              <h3 className="mt-4">Contact Information</h3>
              <p>
                <strong>Phone:</strong> <a href="tel:951-218-5925">(951) 218-5925</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:email@pastormywedding.com">email@pastormywedding.com</a>
              </p>

              <h3 id="payment" className="mt-4">
                Payment Options
              </h3>
              <p>
                We accept payment via <strong>Venmo</strong> or <strong>PayPal</strong> for your
                convenience.
              </p>
              <div className="qr-codes">
                <div className="qr-code">
                  <Image src="/images/qr-venmo.png" alt="Venmo QR Code" width={120} height={120} />
                  <p>Venmo</p>
                </div>
                <div className="qr-code">
                  <Image src="/images/qr-paypal.png" alt="PayPal QR Code" width={120} height={120} />
                  <p>PayPal</p>
                </div>
              </div>

              <h3 className="mt-4">Pricing</h3>
              <ul className="pricing-list">
                <li>
                  Wedding Ceremony (no rehearsal): <strong>$400</strong>
                </li>
                <li>
                  Wedding Ceremony + Rehearsal: <strong>$500</strong>
                </li>
                <li>
                  Extended Package (with location fee): <strong>$600</strong>
                </li>
              </ul>
            </div>

            <div className="contact-form" id="check-availability">
              <h3 className="mb-3">Check Availability</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="partner">Partner&apos;s Name *</label>
                  <input type="text" id="partner" name="partner" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Wedding Date *</label>
                  <input type="date" id="date" name="date" required />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Ceremony Time</label>
                  <input type="time" id="time" name="time" />
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
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your wedding plans, any special requests, or questions you have..."
                  ></textarea>
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

                <button type="submit" className="btn btn-block">
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Booking Process</h2>
          </div>

          <div className="process-steps">
            <a href="#check-availability" className="process-step">
              <div className="step-number">1</div>
              <h3>Check Availability</h3>
              <p>Fill out the form above with your wedding date to see if Pastor Jeff is available.</p>
            </a>

            <a href="#check-availability" className="process-step">
              <div className="step-number">2</div>
              <h3>Schedule Wedding</h3>
              <p>Once availability is confirmed, we&apos;ll collect all the details about your ceremony.</p>
            </a>

            <a href="#payment" className="process-step">
              <div className="step-number">3</div>
              <h3>Payment</h3>
              <p>Secure your date with payment via Venmo or PayPal. You&apos;ll receive a receipt via email.</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
