import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h4>Pastor My Wedding</h4>
            <p>Professional wedding officiant serving the Temecula Valley and surrounding areas for over 20 years.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p><Link href="/">Home</Link></p>
            <p><Link href="/bio">About Pastor Jeff</Link></p>
            <p><Link href="/contact">Schedule Wedding</Link></p>
            <p><Link href="/reviews">Reviews</Link></p>
          </div>

          <div>
            <h4>Contact</h4>
            <p><a href="tel:951-218-5925">(951) 218-5925</a></p>
            <p><a href="mailto:email@pastormywedding.com">email@pastormywedding.com</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pastor My Wedding. All rights reserved.</p>
          <p className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="footer-divider">|</span>
            <Link href="/terms">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
