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
      <section className="min-h-[50vh] flex items-center justify-center text-center bg-[linear-gradient(135deg,rgba(44,62,80,0.8),rgba(139,115,85,0.7)),url('/images/contact-hero.jpg')] bg-cover bg-center text-white py-24 px-6">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <h1 className="!text-white text-4xl md:text-5xl mb-4 [text-shadow:2px_4px_8px_rgba(0,0,0,0.4)] animate-fade-in-up">
            Schedule Your Wedding
          </h1>
          <p className="text-xl md:text-2xl italic opacity-95 animate-fade-in-up-delay font-serif">
            Book Pastor Jeff in Temecula Wine Country or The Villages, FL
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
            {/* Left: Form */}
            <div>
              <h2 className="mb-4 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-accent-light after:rounded">
                Check Availability
              </h2>
              <p className="text-text-light mb-6">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">Bride&apos;s Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="partner" className="block text-sm font-medium text-primary mb-1.5">Groom&apos;s Name *</label>
                    <input
                      type="text"
                      id="partner"
                      name="partner"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-primary mb-1.5">Wedding Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-primary mb-1.5">Ceremony Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="rehearsalDate" className="block text-sm font-medium text-primary mb-1.5">Rehearsal Date (if applicable)</label>
                    <input
                      type="date"
                      id="rehearsalDate"
                      name="rehearsalDate"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="rehearsalTime" className="block text-sm font-medium text-primary mb-1.5">Rehearsal Time</label>
                    <input
                      type="time"
                      id="rehearsalTime"
                      name="rehearsalTime"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="venue" className="block text-sm font-medium text-primary mb-1.5">Venue Name &amp; Location</label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    placeholder="e.g., Faulkner Winery, Temecula"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-primary mb-1.5">Package Interest</label>
                    <select
                      id="package"
                      name="package"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none bg-white"
                    >
                      <option value="">Select a package...</option>
                      <option value="ceremony">Wedding Ceremony ($400)</option>
                      <option value="ceremony-rehearsal">Wedding + Rehearsal ($500)</option>
                      <option value="extended">Extended Package ($600)</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="referral" className="block text-sm font-medium text-primary mb-1.5">How did you hear about us?</label>
                    <select
                      id="referral"
                      name="referral"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none bg-white"
                    >
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your wedding plans or any questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none resize-y min-h-[100px]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-10 bg-gradient-to-br from-accent to-accent-light text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-400 uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,115,85,0.4)]"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Right: Info */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-[var(--shadow-soft)]">
                <h3 className="text-xl mb-4 text-primary">Contact Directly</h3>
                <a
                  href="tel:951-218-5925"
                  className="block py-3 px-4 bg-bg-alt rounded-lg text-secondary font-medium mb-3 transition-all duration-300 hover:bg-accent hover:text-white"
                >
                  (951) 218-5925
                </a>
                <a
                  href="mailto:email@pastormywedding.com"
                  className="block py-3 px-4 bg-bg-alt rounded-lg text-secondary font-medium transition-all duration-300 hover:bg-accent hover:text-white"
                >
                  email@pastormywedding.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-[var(--shadow-soft)]">
                <h3 className="text-xl mb-4 text-primary">Pricing</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-text-light">Wedding Ceremony</span>
                    <strong className="text-accent text-lg">$400</strong>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-text-light">Wedding + Rehearsal</span>
                    <strong className="text-accent text-lg">$500</strong>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-text-light">Extended Package</span>
                    <strong className="text-accent text-lg">$600</strong>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-[var(--shadow-soft)]">
                <h3 className="text-xl mb-4 text-primary">Payment</h3>
                <p className="text-text-light mb-4">Secure your date with Zelle.</p>
                <div className="flex justify-center">
                  <Image src="/images/qr-zelle.png" alt="Zelle QR Code" width={120} height={120} className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
