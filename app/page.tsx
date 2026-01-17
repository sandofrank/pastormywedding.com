import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center bg-[linear-gradient(135deg,rgba(44,62,80,0.7),rgba(139,115,85,0.6)),url('/images/hero-wedding.jpg')] bg-cover bg-center bg-fixed text-white p-4 md:p-16 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] after:content-[''] after:absolute after:-bottom-[50px] after:left-0 after:right-0 after:h-[100px] after:bg-bg after:[clip-path:ellipse(60%_100%_at_50%_100%)]">
        <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
          <h1 className="!text-white text-4xl md:text-6xl lg:text-7xl mb-4 [text-shadow:2px_4px_8px_rgba(0,0,0,0.4)] animate-fade-in-up tracking-wide">
            A Ceremony Worth Remembering
          </h1>
          <p className="text-xl md:text-2xl italic mb-10 opacity-95 animate-fade-in-up-delay font-serif">
            Temecula Wine Country &amp; The Villages, FL Wedding Officiant
          </p>
          <Link
            href="/contact"
            className="inline-block py-4 px-10 bg-gradient-to-br from-accent to-accent-light text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-400 uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.4)] relative overflow-hidden hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,115,85,0.4)] animate-fade-in-up-delay-2"
          >
            Schedule Your Wedding
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] relative after:content-[''] after:absolute after:top-5 after:left-5 after:-right-5 after:-bottom-5 after:border-[3px] after:border-accent after:rounded-2xl after:-z-10 hidden lg:block">
              <Image
                src="/images/pastor-jeff.jpg"
                alt="Pastor Jeff Johnson - Temecula Wedding Officiant"
                width={500}
                height={400}
                priority
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-accent-light after:rounded">
                Dear Bride and Groom
              </h2>
              <p className="mb-4 text-text-light text-lg leading-relaxed">
                Pastor Jeff Johnson has been a trusted wedding officiant serving the Temecula Valley
                and The Villages, Florida for over 20 years. He takes the marriage ceremony serious and
                yet adds personal touches to make it special and unique for each couple.
              </p>
              <p className="mb-4 text-text-light text-lg leading-relaxed">
                What an amazing day you are about to embark on. Your wedding is something that you
                have dreamed of all your life. We know you might be busy with the flowers, a
                photographer and the all important dress, but let us take a few moments to reflect
                about how important it is to select the right pastor for your ceremony.
              </p>
              <p className="mb-4 text-text-light text-lg leading-relaxed">
                Many times the one individual who can really have an impact on your ceremony is
                overlooked. The Pastor&apos;s job is to make sure you, your fiance and all of your
                honored guests understand what an amazing gift marriage is.
              </p>
              <Link
                href="/bio"
                className="inline-block py-4 px-10 bg-gradient-to-br from-accent to-accent-light text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-400 uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,115,85,0.4)]"
              >
                Learn More About Pastor Jeff
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="min-h-[40vh] flex items-center justify-center text-center bg-[linear-gradient(135deg,rgba(44,62,80,0.85),rgba(139,115,85,0.75)),url('/images/banner-bg.jpg')] bg-cover bg-center bg-fixed text-white py-10 px-6 relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <h2 className="!text-white text-3xl md:text-4xl mb-3 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] tracking-wide">
            It Is An Honor And A Privilege
          </h2>
          <p className="text-xl md:text-2xl italic opacity-95 font-serif">To be your wedding officiant</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-bg-alt to-bg">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-accent-light after:rounded">
              Wedding Officiant Services
            </h2>
            <p className="text-text-light max-w-[600px] mx-auto mt-6 text-lg">
              Professional, personalized ceremony services for your special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { title: "Wedding Ceremony", price: "$400", desc: "Complete wedding ceremony without rehearsal. Personalized vows and ceremony tailored to your preferences." },
              { title: "Wedding + Rehearsal", price: "$500", desc: "Full wedding ceremony plus rehearsal to ensure your special day goes smoothly." },
              { title: "Extended Package", price: "$600", desc: "Wedding ceremony with rehearsal plus additional location fee for venues outside the immediate area." }
            ].map((service, i) => (
              <div key={i} className="bg-white py-8 px-6 text-center rounded-2xl shadow-[var(--shadow-soft)] transition-all duration-400 relative overflow-hidden border border-accent/10 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-accent before:to-accent-light before:scale-x-0 before:transition-transform before:duration-400 hover:-translate-y-2.5 hover:shadow-[var(--shadow-strong)] hover:before:scale-x-100">
                <h3 className="mb-2 text-xl">{service.title}</h3>
                <div className="text-5xl bg-gradient-to-br from-accent to-secondary bg-clip-text text-transparent font-bold my-4">
                  {service.price}
                </div>
                <p className="text-text-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner 2 */}
      <section className="min-h-[40vh] flex items-center justify-center text-center bg-[linear-gradient(135deg,rgba(44,62,80,0.85),rgba(139,115,85,0.75)),url('/images/banner-bg.jpg')] bg-cover bg-center bg-fixed text-white py-10 px-6">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <h2 className="!text-white text-3xl md:text-4xl mb-3 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] tracking-wide">
            Schedule The Perfect Date For Your Wedding
          </h2>
          <p className="text-xl md:text-2xl italic opacity-95 font-serif">Don&apos;t delay</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-accent-light after:rounded">
              How It Works
            </h2>
            <p className="text-text-light max-w-[600px] mx-auto mt-6 text-lg">
              Three simple steps to book Pastor Jeff for your wedding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 relative before:hidden md:before:block before:content-[''] before:absolute before:top-[35px] before:left-[15%] before:right-[15%] before:h-[3px] before:bg-gradient-to-r before:from-accent before:via-accent-light before:to-accent before:z-0">
            {[
              { num: "1", title: "Check Availability", desc: "Contact us with your preferred wedding date to see if Pastor Jeff is available.", href: "/contact#check-availability" },
              { num: "2", title: "Schedule Wedding", desc: "Fill out the wedding information form with all the details about your ceremony.", href: "/contact#check-availability" },
              { num: "3", title: "Payment", desc: "Secure your date with payment via Zelle.", href: "/contact#payment" }
            ].map((step, i) => (
              <Link key={i} href={step.href} className="block text-center p-6 relative z-10 bg-bg rounded-2xl transition-all duration-400 group hover:-translate-y-2">
                <div className="w-[70px] h-[70px] bg-gradient-to-br from-accent to-accent-light text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-all duration-400 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_12px_35px_rgba(212,175,55,0.5)]">
                  {step.num}
                </div>
                <h3 className="mb-3 text-primary">{step.title}</h3>
                <p className="text-text-light leading-relaxed">{step.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block py-4 px-10 bg-gradient-to-br from-accent to-accent-light text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-400 uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,115,85,0.4)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Image Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px]">
        <div className="relative overflow-hidden min-h-[300px] lg:min-h-[400px]">
          <Image
            src="/images/wed8.jpg"
            alt="Beautiful wedding ceremony in Temecula Wine Country"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-600 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-12 bg-bg-alt">
          <h2 className="mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-accent-light after:rounded">
            Creating Memories That Last
          </h2>
          <p className="text-text-light leading-relaxed mb-4">
            For over 20 years, Pastor Jeff has had the privilege of officiating hundreds of weddings
            throughout Temecula Wine Country, Southern California, and The Villages, Florida. Each ceremony is crafted with
            care, honoring the unique love story of every couple.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            From intimate vineyard ceremonies to grand celebrations, Pastor Jeff brings warmth,
            professionalism, and a personal touch that makes your special day truly unforgettable.
          </p>
          <Link
            href="/reviews"
            className="inline-block py-4 px-10 bg-gradient-to-br from-accent to-accent-light text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-400 uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,115,85,0.4)] w-fit"
          >
            See What Couples Say
          </Link>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="py-16 bg-gradient-to-b from-bg-alt to-bg">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-accent-light after:rounded">
              What Couples Are Saying
            </h2>
            <p className="text-text-light max-w-[600px] mx-auto mt-6 text-lg">
              Read testimonials from happy couples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "Pastor Jeff and Christy could not have been a more perfect choice for our wedding. The communication was extremely quick, professional, and informative from the very beginning. Many of our guests let us know how much they enjoyed the ceremony.", author: "Stephanie and Jordan", date: "June 2024 - Oak Glen, CA" },
              { quote: "Jeff did such an amazing job officiating our wedding! He gave us a sample of what he would say, which I appreciated! It was a beautiful ceremony and we loved every minute of it.", author: "Katie Meredyth", date: "September 2019" },
              { quote: "The hand ceremony was extremely impactful; we were both really moved by it. Our relatives could not stop raving how much they enjoyed the ceremony. Thank you for starting our marriage on the right path!", author: "Vianca and Kevin", date: "March 2016 - Faulkner Winery, Temecula" }
            ].map((review, i) => (
              <article key={i} className="bg-white p-7 rounded-2xl shadow-[var(--shadow-soft)] relative transition-all duration-400 border border-black/5 review-quote review-stars hover:-translate-y-1.5 hover:shadow-[var(--shadow-medium)]">
                <blockquote className="italic text-text mb-6 leading-relaxed relative z-10">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <p className="font-semibold text-primary text-lg">{review.author}</p>
                <p className="text-sm text-text-light mt-1">{review.date}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-block py-4 px-10 bg-gradient-to-br from-accent to-accent-light text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-400 uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,115,85,0.4)]"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] before:opacity-50">
        <div className="max-w-[var(--max-width)] mx-auto px-6 text-center relative z-10">
          <h2 className="!text-white">Ready to Book Your Wedding?</h2>
          <p className="max-w-[600px] mx-auto my-4 mb-8 opacity-90">
            Contact Pastor Jeff today to check availability and start planning your perfect
            ceremony.
          </p>
          <Link
            href="/contact"
            className="inline-block py-4 px-10 bg-gradient-to-br from-accent to-accent-light text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-400 uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,115,85,0.4)]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
