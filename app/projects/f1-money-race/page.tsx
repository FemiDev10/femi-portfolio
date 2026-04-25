"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";

/* ─── Screen wrapper — grey bg, no radius, clean shadow ────────── */
function Screen({
  src,
  alt,
  width = 240,
  isVideo = false,
}: {
  src: string;
  alt?: string;
  width?: number;
  isVideo?: boolean;
}) {
  return (
    <div style={{
      background: "#f0f0f0",
      padding: 24,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}>
      <div style={{
        width,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        lineHeight: 0,
      }}>
        {isVideo ? (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", display: "block" }}
          />
        ) : (
          <Image
            src={src}
            alt={alt ?? ""}
            width={width * 3}
            height={width * 3 * 2.17}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        )}
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
      color: "#999", fontFamily: "monospace", textAlign: "center",
      marginTop: 12,
    }}>
      {children}
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: 11, color: "#888",
      border: "1px solid #ddd",
      borderRadius: 2, padding: "4px 12px",
    }}>{children}</span>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function F1MoneyRacePage() {
  return (
    <main style={{ background: "#fff", color: "#111" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        minHeight: "75vh", padding: "80px 64px",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        borderBottom: "1px solid #ebebeb",
        maxWidth: 1200, margin: "0 auto",
      }}>
        <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.08em", marginBottom: 40 }}>
          Work / F1 Money Race
        </p>

        <h1 style={{
          fontSize: "clamp(64px, 10vw, 128px)", fontWeight: 400,
          letterSpacing: "-0.04em", color: "#111",
          lineHeight: 0.92, margin: "0 0 20px",
        }}>
          F1 Money Race.
        </h1>

        <p style={{
          fontSize: 18, fontWeight: 300, color: "#777",
          lineHeight: 1.6, maxWidth: "44ch", margin: "0 0 36px",
        }}>
          Five Nigerian banks. One circuit. Your balance decides the race.
        </p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Flutter · iOS", "2025", "Open Source", "Side Project"].map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </section>

      {/* ── FULL-BLEED RACE SCREEN ───────────────────────────────── */}
      <section style={{
        background: "#f5f5f5", padding: "80px 64px",
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <Screen src="/moneyRace/race-screen.png" alt="Race screen" width={360} />
        <Label>Race screen — ₦2,607,220 across 5 banks. OPay in P1.</Label>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────── */}
      <section style={{ padding: "96px 64px", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>The Project</p>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 0.95, maxWidth: 760, marginBottom: 64,
          }}>
            Your money, now racing.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 96, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, marginBottom: 20 }}>
                Most Nigerians have money spread across <strong style={{ fontWeight: 500, color: "#111" }}>five different bank apps</strong>. OPay for transfers. PalmPay for spending. GTB for salary. Kuda for savings. Checking all five means opening five apps, reading five numbers, and closing them having learned nothing meaningful about your actual financial position.
              </p>
              <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9 }}>
                Finance apps show you <strong style={{ fontWeight: 500, color: "#111" }}>data</strong>. They don't make you <strong style={{ fontWeight: 500, color: "#111" }}>feel</strong> anything. MoneyRace turns your accounts into a live F1 race. The richest account leads. Credits cause overtakes. Spending drops you back.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {[
                { num: "5",      label: "Banks in the race" },
                { num: "₦2.6M", label: "Demo balance" },
                { num: "60fps",  label: "Race animation" },
                { num: "0",      label: "Prior Flutter experience" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p style={{
                    fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 400,
                    color: "#111", letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 6px",
                  }}>{num}</p>
                  <p style={{ fontSize: 11, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────── */}
      <section style={{ padding: "96px 64px", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>The Problem</p>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 0.95, maxWidth: 840, marginBottom: 48,
          }}>
            The most boring interaction in fintech.
          </h2>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 660, marginBottom: 20 }}>
            The existing pattern for checking your finances is: <strong style={{ fontWeight: 500, color: "#111" }}>open app → read number → close app → feel nothing → repeat five times</strong>. It's passive. It generates no insight and no emotional response.
          </p>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 660 }}>
            Aggregation apps don't map to Nigerian banking reality. Mono and Stax are building the infrastructure. MoneyRace is a design exploration of what the <strong style={{ fontWeight: 500, color: "#111" }}>experience layer</strong> on top of that could actually feel like.
          </p>
        </div>
      </section>

      {/* ── LANDSCAPE FULL-BLEED ─────────────────────────────────── */}
      <section style={{ background: "#f5f5f5" }}>
        <Image
          src="/moneyRace/landscape.png"
          alt="MoneyRace circuit"
          width={2400}
          height={1200}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <p style={{
          fontSize: 10, color: "#999", fontFamily: "monospace",
          textTransform: "uppercase", letterSpacing: "0.12em",
          textAlign: "center", padding: "20px 64px",
        }}>
          The circuit — drawn entirely in code. No images. No SVGs. Pure math.
        </p>
      </section>

      {/* ── V1 → V2 ──────────────────────────────────────────────── */}
      <section style={{ padding: "96px 64px", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Design Iteration</p>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 0.95, marginBottom: 12,
          }}>
            From V1 to V2.
          </h2>
          <p style={{ fontSize: 18, color: "#aaa", fontWeight: 300, marginBottom: 56 }}>
            The circuit changed. The UI tightened. The race got real.
          </p>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 660, marginBottom: 16 }}>
            The first version had a working race but a rough interface. The circuit shape was functional but didn't feel like a real track. The LIVE indicator was just a button. The leaderboard strip was basic.
          </p>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 660, marginBottom: 72 }}>
            V2 changed the <strong style={{ fontWeight: 500, color: "#111" }}>circuit geometry</strong> to a winding S-shape that feels like a real F1 layout. The <strong style={{ fontWeight: 500, color: "#111" }}>LIVE badge</strong> became a green pulsing indicator. The <strong style={{ fontWeight: 500, color: "#111" }}>leaderboard strip</strong> got cleaner position labels with coloured dots. Every change answered one question: does this feel like a race?
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <Screen src="/moneyRace/landscape.png" alt="V1" width={220} />
              <Label>Version 1 — Original circuit</Label>
            </div>
            <p style={{ fontSize: 24, color: "#ccc", flexShrink: 0 }}>→</p>
            <div style={{ textAlign: "center" }}>
              <Screen src="/moneyRace/race-screen.png" alt="V2" width={220} />
              <Label>Version 2 — Redesigned circuit + UI</Label>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN DECISIONS ─────────────────────────────────────── */}
      <section style={{ padding: "96px 64px", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Design Decisions</p>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 0.95, marginBottom: 64,
          }}>
            Four decisions that made it work.
          </h2>

          {[
            {
              num: "01", title: "Motion as meaning",
              body: "Every animation reflects a real financial event. Speed equals balance rank. An overtake is a credit. Dropping back is a spend. Nothing in the race moves without a reason. If the animation doesn't mean something, it has no place in the product.",
            },
            {
              num: "02", title: "Each bank is a colour, always",
              body: "OPay is green. PalmPay is red. GTB is orange. Kuda is purple. This colour system runs through the track, the leaderboard, the transaction feed, and the bank cards. You read the race without reading any text. Once you've learned the colours, position is instant.",
            },
            {
              num: "03", title: "Dark premium aesthetic",
              body: "Finance is serious. The dark background (#0D0D12) with a glowing circuit feels closer to a Bloomberg terminal than a mobile game. Colour carries information. Everything else is restrained. Bright = important. Dark = context.",
            },
            {
              num: "04", title: "Four screens, one job each",
              body: "Race for your position right now. Timeline for what happened and when. Standings for the broader picture. Garage for managing which banks are racing. No screen answers more than one question. No clutter. No overlap.",
            },
          ].map(({ num, title, body }) => (
            <div key={num} style={{
              display: "grid", gridTemplateColumns: "220px 1fr",
              gap: 64, alignItems: "start",
              borderTop: "1px solid #ebebeb", padding: "40px 0",
            }}>
              <div>
                <p style={{ fontSize: 11, color: "#ccc", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{num}</p>
                <p style={{ fontSize: 19, fontWeight: 500, color: "#111", letterSpacing: "-0.01em", lineHeight: 1.3 }}>{title}</p>
              </div>
              <p style={{ fontSize: 15, color: "#555", fontWeight: 300, lineHeight: 1.9 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SCREENS ──────────────────────────────────────────────── */}
      <section style={{ background: "#f5f5f5", padding: "96px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 10, color: "#999", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>The Screens</p>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 0.95, marginBottom: 72,
          }}>
            Four screens. One race.
          </h2>

          {/* Race — centre stage */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 72 }}>
            <Screen src="/moneyRace/race-screen.png" alt="Race screen" width={320} />
            <Label>Race Screen — Total balance · live circuit · P1–P5 leaderboard</Label>
          </div>

          {/* Timeline */}
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 48 }}>
            {[
              { src: "/moneyRace/timeline-screen.png",  label: "Timeline — All Banks" },
              { src: "/moneyRace/timeline-screen2.png", label: "Timeline — Filtered View" },
            ].map(({ src, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <Screen src={src} alt={label} width={240} />
                <Label>{label}</Label>
              </div>
            ))}
          </div>

          {/* Standings + Garage */}
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { src: "/moneyRace/standings-screen.png", label: "Standings — Constructor Table" },
              { src: "/moneyRace/garage-screen.png",    label: "Garage — Bank Management" },
              { src: "/moneyRace/garage-screen2.png",   label: "Garage — Scrolled View" },
            ].map(({ src, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <Screen src={src} alt={label} width={210} />
                <Label>{label}</Label>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 64px", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Live Demo</p>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 0.95, marginBottom: 12,
          }}>
            Watch it race.
          </h2>
          <p style={{ fontSize: 18, color: "#aaa", fontWeight: 300, marginBottom: 64 }}>
            The race runs at 60fps. Every movement reflects a real balance change.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 80, alignItems: "center" }}>
            <Screen src="/moneyRace/screen-recordingV2.mov" width={380} isVideo />

            <div>
              {[
                { title: "Live at 60fps",       body: "The race runs continuously. Every frame is real." },
                { title: "Overtakes on credit",  body: "Money comes in, the car moves. Instantly." },
                { title: "Persistent colours",   body: "OPay is always green. Everywhere." },
                { title: "Fullscreen mode",      body: "Tap expand. The race fills the screen." },
              ].map(({ title, body }, i) => (
                <div key={title} style={{
                  padding: "24px 0",
                  borderTop: i === 0 ? "none" : "1px solid #ebebeb",
                }}>
                  <p style={{ fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 4 }}>{title}</p>
                  <p style={{ fontSize: 14, color: "#888", fontWeight: 300 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ────────────────────────────────────────────── */}
      <section style={{ background: "#f5f5f5", padding: "96px 64px", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 10, color: "#999", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Technical</p>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 1.0, maxWidth: 640, marginBottom: 24,
          }}>
            Built without Flutter experience.
          </h2>
          <p style={{ fontSize: 16, color: "#666", fontWeight: 300, lineHeight: 1.9, maxWidth: 600, marginBottom: 16 }}>
            I had never written Flutter or Dart before this project. The app was built through <strong style={{ fontWeight: 500, color: "#111" }}>AI-assisted development</strong> — Claude Code handled the Flutter implementation while I directed the product vision, interaction model, design system, and feature logic.
          </p>
          <p style={{ fontSize: 16, color: "#666", fontWeight: 300, lineHeight: 1.9, maxWidth: 600, marginBottom: 48 }}>
            The designer who can direct an AI to build precisely what they envision — that's the skill. Not memorising syntax.
          </p>

          <div style={{
            background: "#fff", border: "1px solid #e8e8e8",
            padding: "28px 32px",
            fontFamily: "'SFMono-Regular', Consolas, monospace",
            fontSize: 13, lineHeight: 2.2, color: "#444",
          }}>
            {[
              "Flutter 3.13.9 (FVM)",
              "flutter_riverpod 2.4.10",
              "fl_chart",
              "CustomPainter + PathMetric",
              "AnimationController (60fps)",
              "Rajdhani + DM Sans",
            ].map(line => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN SOURCE ──────────────────────────────────────────── */}
      <section style={{ padding: "96px 64px", borderBottom: "1px solid #ebebeb", textAlign: "center" }}>
        <h2 style={{
          fontSize: "clamp(48px, 8vw, 104px)", fontWeight: 400,
          letterSpacing: "-0.04em", color: "#111",
          lineHeight: 0.95, marginBottom: 16,
        }}>
          Open source.
        </h2>
        <p style={{ fontSize: 17, color: "#aaa", fontWeight: 300, marginBottom: 40 }}>
          Read the code. Fork it. Make it yours.
        </p>
        <a
          href="https://github.com/FemiDev10/moneyrace"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block", background: "#111", color: "#fff",
            fontSize: 13, fontWeight: 500, letterSpacing: "0.02em",
            padding: "13px 28px", textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          View on GitHub ↗
        </a>
      </section>

      {/* ── REFLECTION ───────────────────────────────────────────── */}
      <section style={{ padding: "96px 64px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 32 }}>Reflection</p>

          <p style={{
            fontSize: "clamp(32px, 5vw, 60px)", fontStyle: "italic",
            fontWeight: 300, color: "#111", letterSpacing: "-0.03em",
            lineHeight: 1.2, maxWidth: 760, marginBottom: 56,
          }}>
            Finance should feel like something.
          </p>

          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 660, marginBottom: 20 }}>
            The bottleneck in building this wasn't technical skill. It was <strong style={{ fontWeight: 500, color: "#111" }}>clarity of intent</strong>. Once the mental model was strong enough — your accounts as cars, your balance as speed, your credits as overtakes — the rest of the product had something real to orbit around.
          </p>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 660, marginBottom: 56 }}>
            MoneyRace is one of the most useful experiments in my portfolio not because it shipped to the App Store, but because it showed how far a strong product idea can go when the interaction system fully commits to it.
          </p>

          {[
            "Gamification works when it sharpens understanding, not distracts from it",
            "Motion is only valuable when it reflects real change",
            "A strong mental model can turn routine behaviour into something worth revisiting",
            "Experimental products still need structure and consistency underneath the idea",
          ].map((item, i) => (
            <div key={item} style={{ borderTop: "1px solid #ebebeb", padding: "20px 0" }}>
              <p style={{ fontSize: 15, fontWeight: 500, color: "#111" }}>{item}</p>
            </div>
          ))}

          <div style={{
            marginTop: 64, paddingTop: 40, borderTop: "1px solid #ebebeb",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 16,
          }}>
            <Link href="/" style={{ fontSize: 12, color: "#bbb", textDecoration: "none" }}>← Back to portfolio</Link>
            <a href="https://github.com/FemiDev10/moneyrace" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#111", textDecoration: "none", fontWeight: 500 }}>GitHub ↗</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .mr-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .mr-video { grid-template-columns: 1fr !important; }
          .mr-decision { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
        @media (max-width: 640px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </main>
  );
}
