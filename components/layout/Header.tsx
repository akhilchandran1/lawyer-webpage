import Link from "next/link";
import { site } from "@/lib/constants";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#languages", label: "Languages" },
  { href: "#membership", label: "Membership" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          {site.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-slate-900 focus:outline-none focus-visible:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          Book a consultation
        </a>
      </div>
      <nav className="flex flex-wrap gap-4 border-t border-slate-200 px-6 py-3 text-xs font-medium text-slate-700 md:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-slate-900 focus:outline-none focus-visible:underline"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
