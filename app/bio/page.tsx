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
      <section className="page-hero-image page-hero-bio">
        <div className="container">
          <h1>About Pastor Jeff Johnson</h1>
          <p>Your trusted wedding officiant in Temecula Wine Country &amp; The Villages, FL</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <Image
                src="/images/pastor-jeff.jpg"
                alt="Pastor Jeff Johnson - Temecula Wedding Officiant"
                width={500}
                height={400}
                priority
              />
            </div>
            <div className="about-text">
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

              <div className="family-photo">
                <Image
                  src="/images/family.jpg"
                  alt="Pastor Jeff Johnson and his family"
                  width={600}
                  height={400}
                />
              </div>

              <p>
                I have served as a senior pastor, youth pastor and missions pastor throughout my
                ministry.
              </p>

              <p>
                My family and I have ministered all over the world including: America, Indonesia,
                Africa, Cambodia, Mexico, and Russia.
              </p>

              <p>
                One of my biggest joys is to be a part of two people committing their lives and
                families to one another. I find it a great honor and privilege and I am thankful for
                the opportunity to be a part of this special day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Experience &amp; Background</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3>20+ Years Experience</h3>
              <p>
                Pastor Jeff has been officiating weddings in the Temecula Valley, Southern California,
                and The Villages, Florida for over two decades, bringing professionalism and heartfelt ceremonies to
                hundreds of couples.
              </p>
            </div>

            <div className="service-card">
              <h3>Pastoral Training</h3>
              <p>
                Extensive theological training and pastoral experience across multiple ministry
                roles.
              </p>
            </div>

            <div className="service-card">
              <h3>International Ministry</h3>
              <p>
                Has ministered across the globe including Indonesia, Africa, Cambodia, Mexico, and
                Russia, bringing a rich perspective to his ceremonies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image Section */}
      <div className="feature-image-section reverse">
        <div className="feature-image">
          <Image
            src="/images/jeff2.jpg"
            alt="Pastor Jeff performing a wedding ceremony"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="feature-image-fill"
          />
        </div>
        <div className="feature-content">
          <h2>A Personal Touch</h2>
          <p>
            Every ceremony I perform is crafted with care, tailored to reflect your unique love story.
            Whether you prefer a traditional Christian ceremony or a non-denominational celebration,
            I work closely with each couple to ensure your special day is exactly as you envision it.
          </p>
          <p>
            My goal is to make you feel comfortable and supported, creating a ceremony that
            you and your guests will cherish forever.
          </p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container text-center">
          <h2>Ready to Meet Pastor Jeff?</h2>
          <p className="section-subtitle">
            Contact us today to schedule a consultation and discuss your wedding ceremony.
          </p>
          <Link href="/contact" className="btn">
            Schedule Your Wedding
          </Link>
        </div>
      </section>
    </main>
  );
}
