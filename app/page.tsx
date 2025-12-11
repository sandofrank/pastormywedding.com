import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home-main">
      <section className="hero">
        <div className="container">
          <h1>A Ceremony Worth Remembering</h1>
          <p className="hero-subtitle">Temecula Wine Country &amp; The Villages, FL Wedding Officiant</p>
          <Link href="/contact" className="btn">
            Schedule Your Wedding
          </Link>
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
              <h2>Dear Bride and Groom</h2>
              <p>
                Pastor Jeff Johnson has been a trusted wedding officiant serving the Temecula Valley
                and The Villages, Florida for over 20 years. He takes the marriage ceremony serious and
                yet adds personal touches to make it special and unique for each couple.
              </p>
              <p>
                What an amazing day you are about to embark on. Your wedding is something that you
                have dreamed of all your life. We know you might be busy with the flowers, a
                photographer and the all important dress, but let us take a few moments to reflect
                about how important it is to select the right pastor for your ceremony.
              </p>
              <p>
                Many times the one individual who can really have an impact on your ceremony is
                overlooked. The Pastor&apos;s job is to make sure you, your fiance and all of your
                honored guests understand what an amazing gift marriage is.
              </p>
              <Link href="/bio" className="btn">
                Learn More About Pastor Jeff
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="container">
          <h2>It Is An Honor And A Privilege</h2>
          <p>To be your wedding officiant</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Wedding Officiant Services</h2>
            <p>Professional, personalized ceremony services for your special day</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3>Wedding Ceremony</h3>
              <div className="service-price">$400</div>
              <p>
                Complete wedding ceremony without rehearsal. Personalized vows and ceremony tailored
                to your preferences.
              </p>
            </div>

            <div className="service-card">
              <h3>Wedding + Rehearsal</h3>
              <div className="service-price">$500</div>
              <p>
                Full wedding ceremony plus rehearsal to ensure your special day goes smoothly.
              </p>
            </div>

            <div className="service-card">
              <h3>Extended Package</h3>
              <div className="service-price">$600</div>
              <p>
                Wedding ceremony with rehearsal plus additional location fee for venues outside the
                immediate area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="container">
          <h2>Schedule The Perfect Date For Your Wedding</h2>
          <p>Don&apos;t delay</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to book Pastor Jeff for your wedding</p>
          </div>

          <div className="process-steps">
            <Link href="/contact#check-availability" className="process-step">
              <div className="step-number">1</div>
              <h3>Check Availability</h3>
              <p>Contact us with your preferred wedding date to see if Pastor Jeff is available.</p>
            </Link>

            <Link href="/contact#check-availability" className="process-step">
              <div className="step-number">2</div>
              <h3>Schedule Wedding</h3>
              <p>Fill out the wedding information form with all the details about your ceremony.</p>
            </Link>

            <Link href="/contact#payment" className="process-step">
              <div className="step-number">3</div>
              <h3>Payment</h3>
              <p>Secure your date with payment via Venmo or PayPal.</p>
            </Link>
          </div>

          <div className="text-center mt-4">
            <Link href="/contact" className="btn">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Image Section */}
      <div className="feature-image-section">
        <div className="feature-image">
          <Image
            src="/images/wed8.jpg"
            alt="Beautiful wedding ceremony in Temecula Wine Country"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="feature-image-fill"
          />
        </div>
        <div className="feature-content">
          <h2>Creating Memories That Last</h2>
          <p>
            For over 20 years, Pastor Jeff has had the privilege of officiating hundreds of weddings
            throughout Temecula Wine Country, Southern California, and The Villages, Florida. Each ceremony is crafted with
            care, honoring the unique love story of every couple.
          </p>
          <p>
            From intimate vineyard ceremonies to grand celebrations, Pastor Jeff brings warmth,
            professionalism, and a personal touch that makes your special day truly unforgettable.
          </p>
          <Link href="/reviews" className="btn">
            See What Couples Say
          </Link>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>What Couples Are Saying</h2>
            <p>Read testimonials from happy couples</p>
          </div>

          <div className="reviews-grid">
            <article className="review-card">
              <blockquote>
                &ldquo;Pastor Jeff and Christy could not have been a more perfect choice for our
                wedding. The communication was extremely quick, professional, and informative from
                the very beginning. Many of our guests let us know how much they enjoyed the
                ceremony.&rdquo;
              </blockquote>
              <p className="review-author">Stephanie and Jordan</p>
              <p className="review-date">June 2024 - Oak Glen, CA</p>
            </article>

            <article className="review-card">
              <blockquote>
                &ldquo;Jeff did such an amazing job officiating our wedding! He gave us a sample of
                what he would say, which I appreciated! It was a beautiful ceremony and we loved
                every minute of it.&rdquo;
              </blockquote>
              <p className="review-author">Katie Meredyth</p>
              <p className="review-date">September 2019</p>
            </article>

            <article className="review-card">
              <blockquote>
                &ldquo;The hand ceremony was extremely impactful; we were both really moved by it.
                Our relatives could not stop raving how much they enjoyed the ceremony. Thank you
                for starting our marriage on the right path!&rdquo;
              </blockquote>
              <p className="review-author">Vianca and Kevin</p>
              <p className="review-date">March 2016 - Faulkner Winery, Temecula</p>
            </article>
          </div>

          <div className="text-center mt-4">
            <Link href="/reviews" className="btn">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container text-center">
          <h2>Ready to Book Your Wedding?</h2>
          <p className="section-subtitle">
            Contact Pastor Jeff today to check availability and start planning your perfect
            ceremony.
          </p>
          <Link href="/contact" className="btn">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
