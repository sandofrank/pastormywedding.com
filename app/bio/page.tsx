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
      <section className="min-h-[50vh] flex items-center justify-center text-center bg-[linear-gradient(135deg,rgba(44,62,80,0.8),rgba(139,115,85,0.7)),url('/images/jeff2.jpg')] bg-cover bg-center text-white py-24 px-6">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <h1 className="!text-white text-4xl md:text-5xl mb-4 [text-shadow:2px_4px_8px_rgba(0,0,0,0.4)] animate-fade-in-up">
            About Pastor Jeff Johnson
          </h1>
          <p className="text-xl md:text-2xl italic opacity-95 animate-fade-in-up-delay font-serif">
            Your trusted wedding officiant in Temecula Wine Country &amp; The Villages, FL
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <h2 className="mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-accent-light after:rounded">
            Simply His Servant, Jeff
          </h2>

          <p className="mb-4 text-text-light text-lg leading-relaxed">
            Hello, and thank you for your interest in Pastor My Wedding. My name is Jeff Johnson
            and God has allowed me to begin this work through His grace and strength.
          </p>

          <ul className="my-6 space-y-3">
            <li className="flex items-start gap-3 text-text-light before:content-[''] before:w-2 before:h-2 before:bg-accent before:rounded-full before:mt-2.5 before:shrink-0">
              <span><strong className="text-primary">Wife:</strong> Christy Johnson (married December 1986)</span>
            </li>
            <li className="flex items-start gap-3 text-text-light before:content-[''] before:w-2 before:h-2 before:bg-accent before:rounded-full before:mt-2.5 before:shrink-0">
              <span><strong className="text-primary">Children:</strong> 3 Sons, 1 Daughter, and 2 Daughters-in-law</span>
            </li>
            <li className="flex items-start gap-3 text-text-light before:content-[''] before:w-2 before:h-2 before:bg-accent before:rounded-full before:mt-2.5 before:shrink-0">
              <span><strong className="text-primary">Grandchildren:</strong> 4 Granddaughters and 1 Grandson</span>
            </li>
          </ul>

          <p className="mb-4 text-text-light text-lg leading-relaxed">
            I have served as a senior pastor, youth pastor and missions pastor throughout my
            ministry. My family and I have ministered all over the world including America,
            Indonesia, Africa, Cambodia, Mexico, and Russia.
          </p>

          <p className="mb-4 text-text-light text-lg leading-relaxed">
            One of my biggest joys is to be a part of two people committing their lives and
            families to one another. I find it a great honor and privilege and I am thankful for
            the opportunity to be a part of this special day.
          </p>

          <p className="mb-4 text-text-light text-lg leading-relaxed">
            Every ceremony I perform is crafted with care, tailored to reflect your unique love story.
            Whether you prefer a traditional Christian ceremony or a non-denominational celebration,
            I work closely with each couple to ensure your special day is exactly as you envision it.
          </p>
        </div>
      </section>

      {/* Family Photo + CTA Side by Side */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-accent-light after:rounded">
                The Johnson Family
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-medium)]">
                <Image
                  src="/images/family.jpg"
                  alt="Pastor Jeff Johnson and his family"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-soft)]">
              <h2 className="mb-4 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-accent-light after:rounded">
                Ready to Meet Pastor Jeff?
              </h2>
              <p className="text-text-light mb-6 text-lg leading-relaxed">
                Contact us today to schedule a consultation and discuss your wedding ceremony.
              </p>
              <Link
                href="/contact"
                className="inline-block py-4 px-10 bg-gradient-to-br from-accent to-accent-light text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-400 uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,115,85,0.4)]"
              >
                Schedule Your Wedding
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
