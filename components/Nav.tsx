"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/me", label: "Me" },
  { href: "/hci", label: "HCI" },
  { href: "/fragments", label: "Fragments" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://twitter.com/femijimoh", label: "X" },
  { href: "https://linkedin.com/in/femijimoh", label: "Li" },
  { href: "https://read.cv/femijimoh", label: "Rc" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    // h-12 lives on the header so links can stretch to full height
    <header className="sticky top-0 z-50 bg-white border-b border-[#111]/8 h-12">
      <nav className="max-w-275 mx-auto px-6 h-full flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm text-[#111] shrink-0 flex items-center gap-1"
        >
          <span>•</span> Femi Jimoh
        </Link>

        {/* Nav links — stretch full height so border-b-2 -mb-px touches header border */}
        <div className="flex items-stretch h-full gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`text-xs flex items-center border-b-2 -mb-px transition-colors ${
                  isActive
                    ? "text-[#111] border-[#111]"
                    : "text-[#111]/40 hover:text-[#111] border-transparent"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 shrink-0">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#111]/40 hover:text-[#111] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
