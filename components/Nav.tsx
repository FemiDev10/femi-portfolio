"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/",          label: "Home"      },
  { href: "/#work",     label: "Work"      },
  { href: "/me",        label: "Me"        },
  { href: "/hci",       label: "HCI"       },
  { href: "/fragments", label: "Fragments" },
  { href: "/contact",   label: "Contact"   },
];

const socialLinks = [
  { href: "https://twitter.com/femijimoh",      label: "X"  },
  { href: "https://linkedin.com/in/femijimoh",  label: "Li" },
  { href: "https://read.cv/femijimoh",          label: "Rc" },
];

export default function Nav() {
  const pathname  = usePathname();
  const [open, setOpen] = useState(false);

  // close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* ── header bar ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#111]/8 h-12">
        <nav className="max-w-275 mx-auto px-6 h-full flex items-center justify-between gap-8">

          {/* logo */}
          <Link href="/" className="text-sm text-[#111] shrink-0 flex items-center gap-1.5">
            <span>•</span> Femi Jimoh
          </Link>

          {/* desktop nav links */}
          <div className="hidden sm:flex items-stretch h-full gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs flex items-center border-b-2 -mb-px transition-colors ${
                  isActive(href)
                    ? "text-[#111] border-[#111]"
                    : "text-[#111]/40 hover:text-[#111] border-transparent"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* desktop socials */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
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

          {/* hamburger — mobile only */}
          <button
            className="sm:hidden flex flex-col justify-center gap-[5px] -mr-1"
            style={{ padding: "10px 8px", minHeight: 44, minWidth: 44, background: "none", border: "none" }}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span style={{ display: "block", width: 20, height: 1.5, background: "#111", borderRadius: 1 }} />
            <span style={{ display: "block", width: 20, height: 1.5, background: "#111", borderRadius: 1 }} />
            <span style={{ display: "block", width: 20, height: 1.5, background: "#111", borderRadius: 1 }} />
          </button>

        </nav>
      </header>

      {/* ── mobile overlay ── */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position:   "fixed",
          inset:      0,
          background: "#fff",
          zIndex:     999,
          display:    "flex",
          flexDirection: "column",
          padding:    "0 24px 48px",
          transform:  open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* overlay top bar */}
        <div style={{
          height:        48,
          display:       "flex",
          alignItems:    "center",
          justifyContent:"space-between",
          borderBottom:  "1px solid rgba(17,17,17,0.06)",
          flexShrink:    0,
        }}>
          <Link
            href="/"
            style={{ fontSize: 14, color: "#111", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
          >
            <span>•</span> Femi Jimoh
          </Link>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{ minHeight: 44, minWidth: 44, display: "flex", alignItems: "center", justifyContent: "flex-end", background: "none", border: "none", padding: 0 }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="1" y1="1" x2="17" y2="17" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="1" x2="1" y2="17" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* nav links — centred vertically */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 0 }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize:      32,
                fontWeight:    400,
                letterSpacing: "-0.02em",
                color:         isActive(href) ? "#111" : "rgba(17,17,17,0.3)",
                textDecoration:"none",
                display:       "flex",
                alignItems:    "center",
                minHeight:     56,
                lineHeight:    1.2,
                borderBottom:  "1px solid rgba(17,17,17,0.04)",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* socials at bottom */}
        <div style={{ display: "flex", gap: 28, paddingTop: 24, borderTop: "1px solid rgba(17,17,17,0.06)" }}>
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, color: "rgba(17,17,17,0.45)", textDecoration: "none", minHeight: 44, display: "flex", alignItems: "center" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
