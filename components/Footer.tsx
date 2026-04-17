"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PhysicsCanvas from "./PhysicsCanvas";

const NAV_LINKS = [
  { href: "/",          label: "Home"      },
  { href: "/work",      label: "Work"      },
  { href: "/me",        label: "Me"        },
  { href: "/hci",       label: "HCI"       },
  { href: "/fragments", label: "Fragments" },
  { href: "/contact",   label: "Contact"   },
];

const SOCIALS = [
  { href: "https://linkedin.com/in/femijimoh", label: "LinkedIn ↗",    ext: true  },
  { href: "https://twitter.com/femijimoh",     label: "X / Twitter ↗", ext: true  },
  { href: "https://behance.net/femijimoh",     label: "Behance ↗",     ext: true  },
  { href: "/resume.pdf",                        label: "Resume ↗",      ext: false },
];

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <footer>

      {/* ══ PART 1 — Big CTA ══════════════════════════════════════ */}
      <div className="footer-cta">
        {/* left */}
        <div className="footer-cta-left">
          <h2 style={{
            fontSize:      "clamp(28px, 7vw, 56px)",
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

          <a
            href="mailto:femijimoh@gmail.com"
            style={{
              display:        "inline-flex",
              alignItems:     "flex-end",
              marginTop:      28,
              fontSize:       "clamp(16px, 2.5vw, 28px)",
              color:          "#111",
              textDecoration: "none",
              borderBottom:   "1.5px solid #111",
              paddingBottom:  3,
              letterSpacing:  "-0.01em",
              transition:     "color 0.2s ease, border-color 0.2s ease",
              minHeight:      44,
              width:          "fit-content",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color       = "#555";
              e.currentTarget.style.borderColor = "#555";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color       = "#111";
              e.currentTarget.style.borderColor = "#111";
            }}
          >
            femijimoh@gmail.com
          </a>
        </div>

        {/* right — social links */}
        <div className="footer-socials">
          {SOCIALS.map(({ href, label, ext }) =>
            ext ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color       = "#111";
                  e.currentTarget.style.borderColor = "#aaa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color       = "#888";
                  e.currentTarget.style.borderColor = "#e8e8e8";
                }}
              >
                {label}
              </a>
            ) : (
              <a
                key={label}
                href={href}
                className="footer-social-link"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color       = "#111";
                  e.currentTarget.style.borderColor = "#aaa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color       = "#888";
                  e.currentTarget.style.borderColor = "#e8e8e8";
                }}
              >
                {label}
              </a>
            )
          )}
        </div>
      </div>

      {/* ══ PHYSICS CANVAS ════════════════════════════════════════ */}
      <PhysicsCanvas />

      {/* ══ PART 2 — Footer bar ═══════════════════════════════════ */}
      <div className="footer-bar">

        {/* logo */}
        <Link href="/" className="footer-logo">
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#111", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>Femi Jimoh</span>
        </Link>

        {/* nav links — hidden on mobile */}
        <nav className="footer-nav">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ fontSize: 13, color: isActive(href) ? "#111" : "#bbb", textDecoration: "none", transition: "color 0.2s ease" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* right — availability + copyright */}
        <div className="footer-right">
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7ab87a", display: "inline-block", animation: "footer-pulse 2.5s infinite" }} />
            <span style={{ fontSize: 12, color: "#aaa" }}>Open to new roles</span>
          </div>
          <span className="footer-copyright" style={{ fontSize: 11, color: "#ccc" }}>
            © 2025 Femi Jimoh. Built by hand.
          </span>
        </div>

      </div>

      <style>{`
        /* ── BIG CTA ── */
        .footer-cta {
          background:      #fff;
          padding:         96px 48px;
          display:         flex;
          align-items:     flex-start;
          justify-content: space-between;
          gap:             48px;
          border-top:      1px solid #f0f0f0;
        }
        .footer-cta-left { max-width: 560px; }

        .footer-socials {
          display:         flex;
          flex-direction:  column;
          align-items:     flex-end;
          justify-content: flex-end;
          padding-top:     8px;
          gap:             2px;
        }
        .footer-social-link {
          display:          block;
          font-size:        13px;
          color:            #888;
          text-decoration:  none;
          border-bottom:    1px solid #e8e8e8;
          padding-bottom:   2px;
          margin-bottom:    10px;
          transition:       color 0.2s ease, border-color 0.2s ease;
          min-height:       44px;
          display:          flex;
          align-items:      center;
        }

        /* ── FOOTER BAR ── */
        .footer-bar {
          border-top:      1px solid #f0f0f0;
          padding:         20px 48px;
          display:         flex;
          align-items:     center;
          justify-content: space-between;
          gap:             24px;
        }
        .footer-logo {
          display:         flex;
          align-items:     center;
          gap:             8px;
          text-decoration: none;
          flex-shrink:     0;
        }
        .footer-nav {
          display:         flex;
          align-items:     center;
          gap:             20px;
        }
        .footer-right {
          display:         flex;
          flex-direction:  column;
          align-items:     flex-end;
          gap:             5px;
          flex-shrink:     0;
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .footer-cta {
            flex-direction: column;
            padding:        48px 24px;
            gap:            32px;
          }
          .footer-socials {
            flex-direction: row;
            flex-wrap:      wrap;
            align-items:    flex-start;
            padding-top:    0;
            gap:            0;
            display:        grid;
            grid-template-columns: 1fr 1fr;
          }
          .footer-social-link {
            align-items: flex-start;
          }

          .footer-bar {
            flex-wrap:   wrap;
            padding:     20px 24px;
            gap:         12px;
          }
          .footer-nav {
            display: none;
          }
          .footer-right {
            align-items: flex-end;
          }
          .footer-logo {
            flex-basis: 50%;
          }
          .footer-copyright {
            display: block;
            width:   100%;
            flex-basis: 100%;
          }
        }

        /* ── TABLET ── */
        @media (min-width: 641px) and (max-width: 1024px) {
          .footer-cta {
            padding: 64px 32px;
          }
          .footer-bar {
            padding: 20px 32px;
          }
        }

        @keyframes footer-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </footer>
  );
}
