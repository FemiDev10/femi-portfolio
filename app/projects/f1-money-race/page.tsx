"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";

function Screen({
  src, alt, width = 240, isVideo = false,
}: {
  src: string; alt?: string; width?: number; isVideo?: boolean;
}) {
  return (
    <div className="mr-screen-wrap">
      <div className="mr-screen-inner" style={{ ["--sw" as string]: `${width}px` }}>
        {isVideo ? (
          <video src={src} autoPlay muted loop playsInline style={{ width: "100%", display: "block" }} />
        ) : (
          <Image src={src} alt={alt ?? ""} width={width * 3} height={width * 3 * 2.17}
            style={{ width: "100%", height: "auto", display: "block" }} />
        )}
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
      color: "#999", fontFamily: "monospace", textAlign: "center", marginTop: 12,
    }}>
      {children}
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: 11, color: "#888", border: "1px solid #ddd", borderRadius: 2, padding: "4px 12px" }}>
      {children}
    </span>
  );
}

function SecLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
      {children}
    </p>
  );
}

export default function F1MoneyRacePage() {
  return (
    <main style={{ background: "#fff", color: "#111" }}>

      {/* ── HERO ── */}
      <section className="mr-sec" style={{ borderBottom: "1px solid #ebebeb", maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.08em", marginBottom: 40 }}>Work / F1 Money Race</p>
        <h1 style={{
          fontSize: "clamp(48px, 10vw, 128px)", fontWeight: 400,
          letterSpacing: "-0.04em", color: "#111", lineHeight: 0.92, margin: "0 0 20px",
        }}>F1 Money Race.</h1>
        <p style={{ fontSize: 18, fontWeight: 300, color: "#777", lineHeight: 1.6, maxWidth: "44ch", margin: "0 0 36px" }}>
          Five Nigerian banks. One circuit. Your balance decides the race.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Flutter · iOS", "2025", "Open Source", "Side Project"].map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      </section>

      {/* ── HERO SCREEN ── */}
      <section style={{ background: "#f5f5f5", padding: "64px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Screen src="/moneyRace/race-screen.png" alt="Race screen" width={340} />
        <Label>Race screen — ₦2,607,220 across 5 banks. OPay in P1.</Label>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="mr-sec" style={{ borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>The Project</SecLabel>
          <h2 className="mr-h2">Your money, now racing.</h2>
          <div className="mr-overview-grid">
            <div>
              <p className="mr-body" style={{ marginBottom: 20 }}>
                Most Nigerians have money spread across <strong style={{ fontWeight: 500, color: "#111" }}>five different bank apps</strong>. OPay for transfers. PalmPay for spending. GTB for salary. Kuda for savings. Checking all five means opening five apps, reading five numbers, and closing them having learned nothing meaningful about your actual financial position.
              </p>
              <p className="mr-body">
                Finance apps show you <strong style={{ fontWeight: 500, color: "#111" }}>data</strong>. They don't make you <strong style={{ fontWeight: 500, color: "#111" }}>feel</strong> anything. MoneyRace turns your accounts into a live F1 race. The richest account leads. Credits cause overtakes. Spending drops you back.
              </p>
            </div>
            <div className="mr-stats-grid">
              {[
                { num: "5",      label: "Banks in the race" },
                { num: "₦2.6M", label: "Demo balance" },
                { num: "60fps",  label: "Race animation" },
                { num: "0",      label: "Prior Flutter experience" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 400, color: "#111", letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 6px" }}>{num}</p>
                  <p style={{ fontSize: 11, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="mr-sec" style={{ borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>The Problem</SecLabel>
          <h2 className="mr-h2" style={{ maxWidth: 840 }}>The most boring interaction in fintech.</h2>
          <p className="mr-body" style={{ maxWidth: 660, marginBottom: 20 }}>
            The existing pattern for checking your finances is: <strong style={{ fontWeight: 500, color: "#111" }}>open app → read number → close app → feel nothing → repeat five times</strong>. It's passive. It generates no insight and no emotional response.
          </p>
          <p className="mr-body" style={{ maxWidth: 660 }}>
            Aggregation apps don't map to Nigerian banking reality. Mono and Stax are building the infrastructure. MoneyRace is a design exploration of what the <strong style={{ fontWeight: 500, color: "#111" }}>experience layer</strong> on top of that could actually feel like.
          </p>
        </div>
      </section>

      {/* ── V1 → V2 ── */}
      <section className="mr-sec" style={{ borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>Design Iteration</SecLabel>
          <h2 className="mr-h2">From V1 to V2.</h2>
          <p style={{ fontSize: 18, color: "#aaa", fontWeight: 300, marginBottom: 40 }}>The circuit changed. The UI tightened. The race got real.</p>
          <p className="mr-body" style={{ marginBottom: 16 }}>
            The first version had a working race but a rough interface. The circuit shape was functional but didn't feel like a real track. The LIVE indicator was just a button. The leaderboard strip was basic.
          </p>
          <p className="mr-body" style={{ marginBottom: 56 }}>
            V2 changed the <strong style={{ fontWeight: 500, color: "#111" }}>circuit geometry</strong> to a winding S-shape. The <strong style={{ fontWeight: 500, color: "#111" }}>LIVE badge</strong> became a green pulsing indicator. The <strong style={{ fontWeight: 500, color: "#111" }}>leaderboard strip</strong> got cleaner position labels with coloured dots. Every change answered one question: does this feel like a race?
          </p>

          <div className="mr-v1v2">
            <div style={{ textAlign: "center", flex: 1 }}>
              <div className="mr-version-frame">
                <video src="/moneyRace/screen-recordingV1.mov" autoPlay muted loop playsInline
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
              <Label>Version 1 — Original circuit</Label>
            </div>
            <p className="mr-arrow">→</p>
            <div style={{ textAlign: "center", flex: 1 }}>
              <div className="mr-version-frame">
                <img src="/moneyRace/race-screen.png" alt="V2"
                  style={{ width: "auto", height: "100%", display: "block", margin: "0 auto" }} />
              </div>
              <Label>Version 2 — Redesigned circuit + UI</Label>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN DECISIONS ── */}
      <section className="mr-sec" style={{ borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>Design Decisions</SecLabel>
          <h2 className="mr-h2">Four decisions that made it work.</h2>
          {[
            { num: "01", title: "Motion as meaning",         body: "Every animation reflects a real financial event. Speed equals balance rank. An overtake is a credit. Dropping back is a spend. Nothing in the race moves without a reason. If the animation doesn't mean something, it has no place in the product." },
            { num: "02", title: "Each bank is a colour, always", body: "OPay is green. PalmPay is red. GTB is orange. Kuda is purple. This colour system runs through the track, the leaderboard, the transaction feed, and the bank cards. You read the race without reading any text. Once you've learned the colours, position is instant." },
            { num: "03", title: "Dark premium aesthetic",    body: "Finance is serious. The dark background (#0D0D12) with a glowing circuit feels closer to a Bloomberg terminal than a mobile game. Colour carries information. Everything else is restrained. Bright = important. Dark = context." },
            { num: "04", title: "Four screens, one job each", body: "Race for your position right now. Timeline for what happened and when. Standings for the broader picture. Garage for managing which banks are racing. No screen answers more than one question. No clutter. No overlap." },
          ].map(({ num, title, body }) => (
            <div key={num} className="mr-decision-row">
              <div className="mr-decision-label">
                <p style={{ fontSize: 11, color: "#ccc", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{num}</p>
                <p style={{ fontSize: 19, fontWeight: 500, color: "#111", letterSpacing: "-0.01em", lineHeight: 1.3 }}>{title}</p>
              </div>
              <p className="mr-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SCREENS ── */}
      <section className="mr-sec" style={{ background: "#f5f5f5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>The Screens</SecLabel>
          <h2 className="mr-h2">Four screens. One race.</h2>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 56 }}>
            <Screen src="/moneyRace/race-screen.png" alt="Race screen" width={300} />
            <Label>Race Screen — Total balance · live circuit · P1–P5 leaderboard</Label>
          </div>

          <div className="mr-screens-row" style={{ marginBottom: 32 }}>
            {[
              { src: "/moneyRace/timeline-screen.png",  label: "Timeline — All Banks" },
              { src: "/moneyRace/timeline-screen2.png", label: "Timeline — Filtered View" },
            ].map(({ src, label }) => (
              <div key={label} style={{ textAlign: "center", flexShrink: 0 }}>
                <Screen src={src} alt={label} width={220} />
                <Label>{label}</Label>
              </div>
            ))}
          </div>

          <div className="mr-screens-row">
            {[
              { src: "/moneyRace/standings-screen.png", label: "Standings — Constructor Table" },
              { src: "/moneyRace/garage-screen.png",    label: "Garage — Bank Management" },
              { src: "/moneyRace/garage-screen2.png",   label: "Garage — Scrolled View" },
            ].map(({ src, label }) => (
              <div key={label} style={{ textAlign: "center", flexShrink: 0 }}>
                <Screen src={src} alt={label} width={200} />
                <Label>{label}</Label>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="mr-sec" style={{ background: "#f5f5f5", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>Live Demo</SecLabel>
          <h2 className="mr-h2">Watch it race.</h2>
          <p style={{ fontSize: 17, color: "#888", fontWeight: 300, marginBottom: 56 }}>
            The race runs at 60fps. Every movement reflects a real balance change.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 48 }}>
            <Screen src="/moneyRace/screen-recordingV2.mov" width={400} isVideo />
            <Label>Screen recording V2 — live 60fps race</Label>
          </div>
          <div className="mr-facts-grid">
            {[
              { title: "Live at 60fps",       body: "The race runs continuously. Every frame is real." },
              { title: "Overtakes on credit",  body: "Money comes in, the car moves. Instantly." },
              { title: "Persistent colours",   body: "OPay is always green. Everywhere." },
              { title: "Fullscreen mode",      body: "Tap expand. The race fills the screen." },
            ].map(({ title, body }) => (
              <div key={title} className="mr-fact">
                <p style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: 6 }}>{title}</p>
                <p style={{ fontSize: 13, color: "#888", fontWeight: 300, lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ── */}
      <section className="mr-sec" style={{ background: "#f5f5f5", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SecLabel>Technical</SecLabel>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 400, letterSpacing: "-0.04em", color: "#111", lineHeight: 1.0, maxWidth: 640, marginBottom: 24 }}>
            Built without Flutter experience.
          </h2>
          <p className="mr-body" style={{ marginBottom: 16 }}>
            I had never written Flutter or Dart before this project. The app was built through <strong style={{ fontWeight: 500, color: "#111" }}>AI-assisted development</strong> — Claude Code handled the Flutter implementation while I directed the product vision, interaction model, design system, and feature logic.
          </p>
          <p className="mr-body" style={{ marginBottom: 40 }}>
            The designer who can direct an AI to build precisely what they envision — that's the skill. Not memorising syntax.
          </p>
          <div style={{ background: "#fff", border: "1px solid #e8e8e8", padding: "24px 28px", fontFamily: "'SFMono-Regular', Consolas, monospace", fontSize: 13, lineHeight: 2.2, color: "#444", overflowX: "auto" }}>
            {["Flutter 3.13.9 (FVM)", "flutter_riverpod 2.4.10", "fl_chart", "CustomPainter + PathMetric", "AnimationController (60fps)", "Rajdhani + DM Sans"].map(l => <div key={l}>{l}</div>)}
          </div>
        </div>
      </section>

      {/* ── OPEN SOURCE ── */}
      <section className="mr-sec" style={{ borderBottom: "1px solid #ebebeb", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(40px, 8vw, 96px)", fontWeight: 400, letterSpacing: "-0.04em", color: "#111", lineHeight: 0.95, marginBottom: 16 }}>
          Open source.
        </h2>
        <p style={{ fontSize: 16, color: "#aaa", fontWeight: 300, marginBottom: 36 }}>Read the code. Fork it. Make it yours.</p>
        <a href="https://github.com/FemiDev10/moneyrace" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#111", color: "#fff", fontSize: 13, fontWeight: 500, padding: "13px 28px", textDecoration: "none" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >View on GitHub ↗</a>
      </section>

      {/* ── REFLECTION ── */}
      <section className="mr-sec">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SecLabel>Reflection</SecLabel>
          <p style={{ fontSize: "clamp(28px, 5vw, 56px)", fontStyle: "italic", fontWeight: 300, color: "#111", letterSpacing: "-0.03em", lineHeight: 1.2, maxWidth: 760, marginBottom: 48 }}>
            Finance should feel like something.
          </p>
          <p className="mr-body" style={{ marginBottom: 20 }}>
            The bottleneck in building this wasn't technical skill. It was <strong style={{ fontWeight: 500, color: "#111" }}>clarity of intent</strong>. Once the mental model was strong enough — your accounts as cars, your balance as speed, your credits as overtakes — the rest of the product had something real to orbit around.
          </p>
          <p className="mr-body" style={{ marginBottom: 48 }}>
            MoneyRace is one of the most useful experiments in my portfolio not because it shipped to the App Store, but because it showed how far a strong product idea can go when the interaction system fully commits to it.
          </p>
          {[
            "Gamification works when it sharpens understanding, not distracts from it",
            "Motion is only valuable when it reflects real change",
            "A strong mental model can turn routine behaviour into something worth revisiting",
            "Experimental products still need structure and consistency underneath the idea",
          ].map(item => (
            <div key={item} style={{ borderTop: "1px solid #ebebeb", padding: "18px 0" }}>
              <p style={{ fontSize: 15, fontWeight: 500, color: "#111" }}>{item}</p>
            </div>
          ))}
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid #ebebeb", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <Link href="/" style={{ fontSize: 12, color: "#bbb", textDecoration: "none" }}>← Back to portfolio</Link>
            <a href="https://github.com/FemiDev10/moneyrace" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#111", textDecoration: "none", fontWeight: 500 }}>GitHub ↗</a>
          </div>
        </div>
      </section>

      <style>{`
        /* ── base section padding ── */
        .mr-sec {
          padding: 80px 64px;
        }

        /* ── typography ── */
        .mr-h2 {
          font-size: clamp(36px, 6vw, 80px);
          font-weight: 400;
          letter-spacing: -0.04em;
          color: #111;
          line-height: 0.95;
          margin: 0 0 48px;
        }
        .mr-body {
          font-size: 16px;
          color: #555;
          font-weight: 300;
          line-height: 1.9;
          max-width: 660px;
        }

        /* ── Screen component ── */
        .mr-screen-wrap {
          background: #f0f0f0;
          padding: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mr-screen-inner {
          width: min(var(--sw), calc(100vw - 80px));
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          line-height: 0;
        }

        /* ── Overview 3fr/2fr grid ── */
        .mr-overview-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .mr-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        /* ── V1 → V2 ── */
        .mr-v1v2 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }
        .mr-version-frame {
          background: #f0f0f0;
          padding: 20px;
          height: 440px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        .mr-arrow {
          font-size: 24px;
          color: #ccc;
          flex-shrink: 0;
        }

        /* ── Design decisions ── */
        .mr-decision-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 56px;
          align-items: start;
          border-top: 1px solid #ebebeb;
          padding: 36px 0;
        }
        .mr-decision-label { /* stays narrow on desktop */ }

        /* ── Screen rows ── */
        .mr-screens-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        /* ── Video facts grid ── */
        .mr-facts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #e0e0e0;
        }
        .mr-fact {
          padding: 28px 24px 0 0;
          border-right: 1px solid #e0e0e0;
        }
        .mr-fact:last-child {
          border-right: none;
          padding-right: 0;
        }
        .mr-fact:not(:first-child) {
          padding-left: 24px;
        }

        /* ── TABLET (≤900px) ── */
        @media (max-width: 900px) {
          .mr-sec { padding: 64px 40px; }

          .mr-overview-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .mr-stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }

          .mr-decision-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .mr-facts-grid {
            grid-template-columns: 1fr 1fr;
          }
          .mr-fact:nth-child(2) { border-right: none; }
          .mr-fact:nth-child(3) { border-right: 1px solid #e0e0e0; padding-left: 0; }
          .mr-fact:nth-child(3),
          .mr-fact:nth-child(4) { padding-top: 28px; border-top: 1px solid #e0e0e0; }

          .mr-version-frame { height: 320px; }
        }

        /* ── MOBILE (≤640px) ── */
        @media (max-width: 640px) {
          .mr-sec { padding: 48px 20px; }

          .mr-h2 { margin-bottom: 32px; }

          .mr-stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }

          /* V1/V2 stack vertically */
          .mr-v1v2 {
            flex-direction: column;
            gap: 24px;
          }
          .mr-arrow {
            transform: rotate(90deg);
          }
          .mr-version-frame {
            height: auto;
            width: 100%;
            padding: 16px;
          }
          .mr-version-frame video,
          .mr-version-frame img {
            width: 100% !important;
            height: auto !important;
          }

          /* screens scroll horizontally */
          .mr-screens-row {
            flex-wrap: nowrap;
            overflow-x: auto;
            justify-content: flex-start;
            padding-bottom: 12px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .mr-screens-row::-webkit-scrollbar { display: none; }

          /* facts single column */
          .mr-facts-grid {
            grid-template-columns: 1fr;
          }
          .mr-fact,
          .mr-fact:nth-child(n) {
            border-right: none !important;
            border-top: 1px solid #e0e0e0;
            padding: 20px 0 0 0 !important;
          }
          .mr-fact:first-child { border-top: none; }

          .mr-screen-inner {
            width: min(var(--sw), calc(100vw - 64px)) !important;
          }
        }
      `}</style>
    </main>
  );
}
