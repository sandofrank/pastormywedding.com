import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 pb-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-accent before:via-accent-light before:to-accent">
      <div className="max-w-[var(--max-width)] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          <div>
            <h4 className="text-white mb-6 text-xl relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-[30px] after:h-0.5 after:bg-accent">
              Pastor My Wedding
            </h4>
            <p className="leading-relaxed">
              Professional wedding officiant serving Temecula Wine Country, CA and The Villages, FL 32162 for over 20 years.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-6 text-xl relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-[30px] after:h-0.5 after:bg-accent">
              Quick Links
            </h4>
            <p><Link href="/" className="text-white/80 transition-all duration-300 hover:text-accent hover:pl-1.5">Home</Link></p>
            <p><Link href="/bio" className="text-white/80 transition-all duration-300 hover:text-accent hover:pl-1.5">About Pastor Jeff</Link></p>
            <p><Link href="/contact" className="text-white/80 transition-all duration-300 hover:text-accent hover:pl-1.5">Schedule Wedding</Link></p>
            <p><Link href="/reviews" className="text-white/80 transition-all duration-300 hover:text-accent hover:pl-1.5">Reviews</Link></p>
          </div>

          <div>
            <h4 className="text-white mb-6 text-xl relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-[30px] after:h-0.5 after:bg-accent">
              Contact
            </h4>
            <p><a href="tel:951-218-5925" className="text-white/80 transition-all duration-300 hover:text-accent hover:pl-1.5">(951) 218-5925</a></p>
            <p><a href="mailto:email@pastormywedding.com" className="text-white/80 transition-all duration-300 hover:text-accent hover:pl-1.5">email@pastormywedding.com</a></p>
          </div>
        </div>

        <div className="text-center pt-8 pb-[var(--safe-area-bottom)] border-t border-white/10 text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Pastor My Wedding. All rights reserved.</p>
          <p className="mt-3">
            <Link href="/privacy-policy" className="text-white/70 transition-colors duration-300 hover:text-accent">Privacy Policy</Link>
            <span className="mx-3 opacity-50">|</span>
            <Link href="/terms" className="text-white/70 transition-colors duration-300 hover:text-accent">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
