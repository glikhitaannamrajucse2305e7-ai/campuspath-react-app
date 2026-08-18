import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "CampusPath React App", template: "%s | CampusPath" },
  description: "A simple student placement preparation and opportunity app.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/preparation", label: "Preparation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="nav-shell">
            <Link className="brand" href="/" aria-label="CampusPath home"><span className="brand-mark" aria-hidden="true">C</span><span>Campus<span>Path</span></span></Link>
            <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
            <Link className="nav-cta" href="/opportunities">Get started</Link>
            <details className="mobile-menu">
              <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
              <nav aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
            </details>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="footer-shell">
            <div><Link className="brand footer-brand" href="/"><span className="brand-mark" aria-hidden="true">C</span><span>Campus<span>Path</span></span></Link><p>A simple path from campus to career.</p></div>
            <div className="footer-links">{navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
            <p className="copyright">© 2026 CampusPath. Student project.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
