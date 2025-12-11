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

      {/* Main Contact Form Section */}
      <section className="section" id="check-availability">
        <div className="container">
          <div className="section-header">
            <h2>Check Availability</h2>
            <p>Fill out the form below and we&apos;ll get back to you within 24 hours</p>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form-main">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="partner">Partner&apos;s Name *</label>
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
                  rows={4}
                  placeholder="Tell us about your wedding plans, any special requests, or questions you have..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-block">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info & Pricing Cards */}
      <section className="section section-alt">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <h3>Contact Directly</h3>
              <p>Prefer to reach out directly? We&apos;re happy to hear from you.</p>
              <div className="contact-details">
                <a href="tel:951-218-5925" className="contact-link">
                  <span className="contact-icon">&#9742;</span>
                  (951) 218-5925
                </a>
                <a href="mailto:email@pastormywedding.com" className="contact-link">
                  <span className="contact-icon">&#9993;</span>
                  email@pastormywedding.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <h3>Pricing</h3>
              <ul className="pricing-list">
                <li>
                  <span>Wedding Ceremony</span>
                  <strong>$400</strong>
                </li>
                <li>
                  <span>Wedding + Rehearsal</span>
                  <strong>$500</strong>
                </li>
                <li>
                  <span>Extended Package</span>
                  <strong>$600</strong>
                </li>
              </ul>
            </div>

            <div className="contact-card" id="payment">
              <h3>Payment Options</h3>
              <p>Secure your date with Venmo or PayPal.</p>
              <div className="qr-codes">
                <div className="qr-code">
                  <Image src="/images/qr-venmo.png" alt="Venmo QR Code" width={80} height={80} />
                  <p>Venmo</p>
                </div>
                <div className="qr-code">
                  <Image src="/images/qr-paypal.png" alt="PayPal QR Code" width={80} height={80} />
                  <p>PayPal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to book your ceremony</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Submit Inquiry</h3>
              <p>Fill out the form above with your wedding date to check availability.</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Confirmation</h3>
              <p>We&apos;ll respond within 24 hours to confirm and discuss your ceremony.</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Secure Your Date</h3>
              <p>Complete payment via Venmo or PayPal to reserve Pastor Jeff.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
