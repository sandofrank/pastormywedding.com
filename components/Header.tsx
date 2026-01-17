"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/bio", label: "Bio" },
    { href: "/contact", label: "Schedule My Wedding" },
    { href: "/sample-vows", label: "Sample Vows" },
    { href: "/reviews", label: "Reviews" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 h-[var(--header-height)] bg-white/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.08)] z-[1000] transition-all duration-300">
      <div className="flex items-center justify-between h-full max-w-[var(--max-width)] mx-auto px-6">
        <Link
          href="/"
          className="font-serif text-2xl text-primary font-normal transition-all duration-300 hover:text-accent hover:scale-[1.02]"
        >
          Pastor My Wedding
        </Link>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-[999] animate-fade-in md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <nav className={`
          hidden md:flex gap-8
          ${mobileMenuOpen ? "!flex fixed top-[var(--header-height)] left-0 right-0 bottom-0 bg-white/[0.98] backdrop-blur-sm flex-col p-4 gap-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-[1000] overflow-y-auto animate-slide-down" : ""}
        `}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-text text-[0.95rem] relative py-2 transition-all duration-300
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5
                after:bg-gradient-to-r after:from-accent after:to-accent-light after:transition-all after:duration-300 after:-translate-x-1/2
                hover:text-accent hover:after:w-full
                md:min-h-0 md:flex md:items-center
                ${mobileMenuOpen ? "py-4 px-5 border-b border-gray-200 min-h-12 flex items-center text-lg last:border-b-0" : ""}
                ${pathname === link.href ? "after:w-full" : ""}
              `}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`
            hidden bg-transparent border-none cursor-pointer p-3 min-w-11 min-h-11 relative z-[1001]
            md:hidden !flex flex-col justify-center items-center
          `}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`block w-[25px] h-0.5 bg-primary my-[5px] transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
          <span className={`block w-[25px] h-0.5 bg-primary my-[5px] transition-all duration-300 ${mobileMenuOpen ? "opacity-0 -translate-x-2.5" : ""}`}></span>
          <span className={`block w-[25px] h-0.5 bg-primary my-[5px] transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
        </button>
      </div>
    </header>
  );
}
