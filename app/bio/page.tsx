import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pastor Jeff Johnson | Temecula & The Villages, FL Wedding Officiant",
  description:
    "Meet Pastor Jeff Johnson, a trusted wedding officiant with over 20 years of experience. Serving couples in Temecula Wine Country, CA and The Villages, FL with personalized Christian and non-denominational ceremonies.",
  alternates: {
    canonical: "https://www.pastormywedding.com/bio",
  },
  openGraph: {
    title: "About Pastor Jeff Johnson | Temecula & The Villages, FL Wedding Officiant",
    description:
      "Meet Pastor Jeff Johnson, a trusted wedding officiant with over 20 years of experience serving Temecula Wine Country, CA and The Villages, FL.",
    url: "https://www.pastormywedding.com/bio",
  },
};

export default function BioPage() {
  return (
    <main>
      {/* Hero with jeff2 photo */}
      <section className="page-hero-image page-hero-bio">
        <div className="container">
          <h1>About Pastor Jeff Johnson</h1>
          <p>Your trusted wedding officiant in Temecula Wine Country &amp; The Villages, FL</p>
        </div>
      </section>

      <section className="section">
        <div className="container bio-text-section">
          <h2>Simply His Servant, Jeff</h2>

          <p>
            Hello, and thank you for your interest in Pastor My Wedding. My name is Jeff Johnson
            and God has allowed me to begin this work through His grace and strength.
          </p>

          <ul className="about-list">
            <li>
              <strong>Wife:</strong> Christy Johnson (married December 1986)
            </li>
            <li>
              <strong>Children:</strong> 3 Sons, 1 Daughter, and 2 Daughters-in-law
            </li>
            <li>
              <strong>Grandchildren:</strong> 4 Granddaughters and 1 Grandson
            </li>
          </ul>

          <p>
            I have served as a senior pastor, youth pastor and missions pastor throughout my
            ministry. My family and I have ministered all over the world including America,
            Indonesia, Africa, Cambodia, Mexico, and Russia.
          </p>

          <p>
            One of my biggest joys is to be a part of two people committing their lives and
            families to one another. I find it a great honor and privilege and I am thankful for
            the opportunity to be a part of this special day.
          </p>

          <p>
            Every ceremony I perform is crafted with care, tailored to reflect your unique love story.
            Whether you prefer a traditional Christian ceremony or a non-denominational celebration,
            I work closely with each couple to ensure your special day is exactly as you envision it.
          </p>
        </div>
      </section>

      {/* Family Photo + CTA Side by Side */}
      <section className="section section-alt">
        <div className="container">
          <div className="bio-bottom-layout">
            <div className="family-photo-side">
              <h2>The Johnson Family</h2>
              <Image
                src="/images/family.jpg"
                alt="Pastor Jeff Johnson and his family"
                width={600}
                height={400}
              />
            </div>
            <div className="bio-cta-side">
              <h2>Ready to Meet Pastor Jeff?</h2>
              <p>
                Contact us today to schedule a consultation and discuss your wedding ceremony.
              </p>
              <Link href="/contact" className="btn">
                Schedule Your Wedding
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
