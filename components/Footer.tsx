"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",          label: "Home"      },
  { href: "/work",      label: "Work"      },
  { href: "/me",        label: "Me"        },
  { href: "/hci",       label: "HCI"       },
  { href: "/fragments", label: "Fragments" },
  { href: "/contact",   label: "Contact"   },
];

const SOCIALS = [
  { href: "https://linkedin.com/in/femijimoh", label: "LinkedIn ↗"  },
  { href: "https://twitter.com/femijimoh",     label: "X / Twitter ↗" },
  { href: "https://behance.net/femijimoh",     label: "Behance ↗"   },
  { href: "/resume.pdf",                        label: "Resume ↗"    },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer>

      {/* ══ PART 1 — Big CTA ══════════════════════════════════════ */}
      <div style={{
        background:  "#fff",
        padding:     "96px 48px",
        display:     "flex",
        alignItems:  "flex-start",
        justifyContent: "space-between",
        gap:         48,
        borderTop:   "1px solid #f0f0f0",
      }}>

        {/* left */}
        <div style={{ maxWidth: 560 }}>
          <h2 style={{
            fontSize:      "clamp(32px, 5vw, 56px)",
            fontWeight:    400,
            letterSpacing: "-0.025em",
            lineHeight:    1.08,
            color:         "#111",
            margin:        0,
          }}>
            Let&apos;s build something{" "}
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "#bbb" }}>
              worth remembering.
            </em>
          </h2>

          {/* email link */}
          <a
            href="mailto:femijimoh@gmail.com"
            style={{
              display:       "inline-block",
              marginTop:     32,
              fontSize:      "clamp(18px, 2.5vw, 28px)",
              color:         "#111",
              textDecoration: "none",
              borderBottom:  "1.5px solid #111",
              paddingBottom: 3,
              letterSpacing: "-0.01em",
              transition:    "color 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color        = "#555";
              (e.currentTarget as HTMLAnchorElement).style.borderColor  = "#555";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color        = "#111";
              (e.currentTarget as HTMLAnchorElement).style.borderColor  = "#111";
            }}
          >
            femijimoh@gmail.com
          </a>
        </div>

        {/* right — social links */}
        <div style={{
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "flex-end",
          justifyContent: "flex-end",
          paddingTop:     8,
        }}>
          {SOCIALS.map(({ href, label }) => {
            const isExternal = href.startsWith("http");
            const sharedStyle: React.CSSProperties = {
              display:        "block",
              fontSize:       13,
              color:          "#888",
              textDecoration: "none",
              borderBottom:   "1px solid #e8e8e8",
              paddingBottom:  2,
              marginBottom:   10,
              transition:     "color 0.2s ease, border-color 0.2s ease",
            };
            const enter = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color       = "#111";
              e.currentTarget.style.borderColor = "#aaa";
            };
            const leave = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color       = "#888";
              e.currentTarget.style.borderColor = "#e8e8e8";
            };

            return isExternal ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={sharedStyle}
                onMouseEnter={enter}
                onMouseLeave={leave}
              >
                {label}
              </a>
            ) : (
              <a
                key={label}
                href={href}
                style={sharedStyle}
                onMouseEnter={enter}
                onMouseLeave={leave}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>

      {/* ══ PART 2 — Footer bar ═══════════════════════════════════ */}
      <div style={{
        borderTop:      "1px solid #f0f0f0",
        padding:        "24px 48px",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        gap:            24,
      }}>

        {/* logo */}
        <Link
          href="/"
          style={{
            display:        "flex",
            alignItems:     "center",
            gap:            8,
            textDecoration: "none",
            flexShrink:     0,
          }}
        >
          <span style={{
            width:        7,
            height:       7,
            borderRadius: "50%",
            background:   "#111",
            display:      "inline-block",
            flexShrink:   0,
          }} />
          <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>
            Femi Jimoh
          </span>
        </Link>

        {/* nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize:       13,
                  color:          isActive ? "#111" : "#bbb",
                  textDecoration: "none",
                  transition:     "color 0.2s ease",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* right — availability + copyright */}
        <div style={{
          display:       "flex",
          flexDirection: "column",
          alignItems:    "flex-end",
          gap:           5,
          flexShrink:    0,
        }}>
          {/* availability */}
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{
              width:        6,
              height:       6,
              borderRadius: "50%",
              background:   "#7ab87a",
              display:      "inline-block",
              animation:    "footer-pulse 2.5s infinite",
            }} />
            <span style={{ fontSize: 12, color: "#aaa" }}>Open to new roles</span>
          </div>

          {/* copyright */}
          <span style={{ fontSize: 11, color: "#ccc" }}>
            © 2025 Femi Jimoh. Built by hand.
          </span>
        </div>
      </div>

      <style>{`
        @keyframes footer-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </footer>
  );
}
