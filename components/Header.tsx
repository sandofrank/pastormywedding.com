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

  // Prevent body scroll when menu is open
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
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">
          Pastor My Wedding
        </Link>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div
            className="nav-overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <nav className={`nav ${mobileMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
