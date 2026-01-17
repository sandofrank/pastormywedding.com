"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-primary text-white p-4 px-6 z-[9999] shadow-[0_-4px_20px_rgba(0,0,0,0.15)] animate-slide-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-[var(--max-width)] mx-auto flex items-center justify-between gap-6 flex-wrap">
        <p className="flex-1 min-w-[280px] m-0 text-[0.95rem] leading-relaxed">
          We use essential cookies to ensure our website functions properly. By continuing to use
          our site, you consent to our use of cookies. Learn more in our{" "}
          <Link href="/privacy-policy" className="text-accent underline hover:text-accent-light">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={acceptCookies}
            className="py-2.5 px-6 border-none rounded-full text-sm font-medium cursor-pointer transition-all duration-300 min-h-11 bg-accent text-white hover:bg-accent-light"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="py-2.5 px-6 border border-white/40 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 min-h-11 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
