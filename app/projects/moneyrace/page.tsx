"use client";

import Link from "next/link";

/* ── Bank colour constants ─────────────────────────────────────── */
const BANKS = [
  { name: "OPay",    color: "#2ECC40", balance: "₦92,400" },
  { name: "GTB",     color: "#E67E22", balance: "₦148,800" },
  { name: "UBA",     color: "#C0392B", balance: "₦67,200" },
  { name: "PalmPay", color: "#FF3B30", balance: "₦54,600" },
  { name: "Kuda",    color: "#6C3CE1", balance: "₦118,296" },
];

const STACK = [
  "Flutter 3.13.9 (via FVM)",
  "flutter_riverpod 2.4.10   — state management",
  "fl_chart                  — standings & data viz",
  "Google Fonts: Rajdhani + DM Sans",
  "CustomPainter             — circuit drawing",
  "PathMetric                — car positioning",
  "AnimationController       — 60fps race loop",
];

const SCREENS = [
  { name: "Race",      desc: "Understand your position right now" },
  { name: "Timeline",  desc: "Understand what happened and when" },
  { name: "Standings", desc: "The overall picture over time" },
  { name: "Garage",    desc: "Manage which banks are in the race" },
];

const DESIGN_DECISIONS = [
  {
    title: "Dark premium aesthetic",
    body: "The dark background (#0D0D12) with the circuit glowing on top feels closer to a Bloomberg terminal than a game. Colour carries information — each bank has a persistent colour across every screen.",
  },
  {
    title: "Each bank is a colour, always",
    body: "OPay is green. GTB is orange. Kuda is purple. Once you've learned the colours, you read the race without reading any text. The colour system runs across the track, leaderboard, transaction feed, and bank cards.",
  },
  {
    title: "Motion as meaning",
    body: "Every animation communicates something real. Speed equals balance. An overtake equals a credit. Dropping back equals a spend. Nothing moves arbitrarily — if the animation doesn't mean something, it was removed.",
  },
  {
    title: "Four screens, one job each",
    body: "Race, Timeline, Standings, Garage. No screen tries to do more than one job. Each one answers a single question. The F1 constructor standings table was too perfect not to use.",
  },
];

const ROADMAP = [
  "Mono API integration — real Nigerian bank data (GTB, UBA, Access)",
  "SMS parsing — OPay and PalmPay alerts parsed for real-time updates",
  "Shareable race card — your weekly standings as a postable graphic",
  "Push notifications — when an account overtakes another",
  "F1 lights sequence — full five-light splash screen on launch",
  "Race replay — watch how your money moved over the last 30 days",
  "Multi-user racing — challenge a friend, race your portfolios",
];

/* ── Animated race track (CSS-only) ───────────────────────────── */
function RaceTrack() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* outer glow ring */}
      <div style={{
        position: "absolute",
        width: 280, height: 160,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 0 40px rgba(255,255,255,0.03)",
      }} />
      {/* track ring */}
      <div style={{
        position: "absolute",
        width: 240, height: 130,
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.12)",
      }} />
      {/* inner cutout */}
      <div style={{
        position: "absolute",
        width: 180, height: 88,
        borderRadius: "50%",
        background: "#0d0d12",
        border: "1px solid rgba(255,255,255,0.04)",
      }} />
      {/* centre label */}
      <p style={{
        position: "absolute", fontSize: 9, fontWeight: 700,
        color: "rgba(255,255,255,0.15)", letterSpacing: "0.18em",
        textTransform: "uppercase",
      }}>MoneyRace</p>

      {/* animated dots — each circles the track at different speeds */}
      {BANKS.map((bank, i) => {
        const duration = [3.2, 3.85, 4.4, 5.1, 5.9][i];
        const startDeg = [0, 72, 144, 216, 288][i];
        return (
          <div
            key={bank.name}
            title={bank.name}
            style={{
              position: "absolute",
              width: 9, height: 9,
              borderRadius: "50%",
              background: bank.color,
              top: "50%", left: "50%",
              marginTop: -4.5, marginLeft: -4.5,
              boxShadow: `0 0 8px ${bank.color}99`,
              animation: `orbit${i} ${duration}s linear infinite`,
              animationDelay: `${-(duration * startDeg / 360).toFixed(2)}s`,
            }}
          />
        );
      })}

      <style>{`
        ${BANKS.map((_, i) => {
          const rx = 120, ry = 65;
          return `
            @keyframes orbit${i} {
              0%   { transform: translate(${rx}px, 0); }
              12%  { transform: translate(${Math.cos(Math.PI * 0.25) * rx}px, ${-Math.sin(Math.PI * 0.25) * ry}px); }
              25%  { transform: translate(0, ${-ry}px); }
              37%  { transform: translate(${-Math.cos(Math.PI * 0.25) * rx}px, ${-Math.sin(Math.PI * 0.25) * ry}px); }
              50%  { transform: translate(${-rx}px, 0); }
              62%  { transform: translate(${-Math.cos(Math.PI * 0.25) * rx}px, ${Math.sin(Math.PI * 0.25) * ry}px); }
              75%  { transform: translate(0, ${ry}px); }
              87%  { transform: translate(${Math.cos(Math.PI * 0.25) * rx}px, ${Math.sin(Math.PI * 0.25) * ry}px); }
              100% { transform: translate(${rx}px, 0); }
            }
          `;
        }).join("")}
      `}</style>
    </div>
  );
}

/* ── Main page ─────────────────────────────────────────────────── */
export default function MoneyRacePage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section style={{
        background: "#0d0d12", padding: "80px 48px",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 64, alignItems: "center", minHeight: 520,
      }}>
        {/* left */}
        <div>
          {/* tag row */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
            {["Side Project", "Open Source", "Flutter + Dart"].map(tag => (
              <span key={tag} style={{
                fontSize: 11, color: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100, padding: "4px 12px",
              }}>{tag}</span>
            ))}
          </div>

          <h1 style={{
            fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#fff",
            lineHeight: 1.0, margin: "0 0 20px",
          }}>
            MoneyRace
          </h1>

          <p style={{
            fontSize: 18, fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6, maxWidth: "38ch",
            margin: "0 0 36px",
          }}>
            What if checking your bank balance felt like watching an F1 race?
          </p>

          {/* stat pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["iOS App", "Open Source", "Flutter + Dart"].map(p => (
              <span key={p} style={{
                fontSize: 11, fontWeight: 500,
                color: "rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 100, padding: "6px 14px",
              }}>{p}</span>
            ))}
          </div>
        </div>

        {/* right — animated track */}
        <div style={{ height: 320, position: "relative" }}>
          <RaceTrack />
        </div>
      </section>

      {/* ── Overview strip ────────────────────────────────────── */}
      <section style={{
        borderBottom: "1px solid #f0f0f0", padding: "28px 48px",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
        maxWidth: 960, margin: "0 auto",
      }}>
        {[
          { label: "Type",   value: "Side Project" },
          { label: "Stack",  value: "Flutter / Dart / Riverpod" },
          { label: "Role",   value: "Designer + AI-Assisted Dev" },
          { label: "Status", value: "Work in Progress" },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ fontSize: 9, fontWeight: 700, color: "#ccc", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{label}</p>
            <p style={{ fontSize: 12, color: "#555" }}>{value}</p>
          </div>
        ))}
      </section>

      {/* ── Content sections ──────────────────────────────────── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px 0" }}>

        {/* The Idea */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#111", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20, opacity: 0.3 }}>The Idea</p>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 16 }}>
            I have five bank accounts. OPay for quick transfers. PalmPay for everyday spending. GTB for salary. UBA for the money I'm supposed to save but don't. Kuda for actual savings. Checking all five means opening five different apps, staring at five different numbers, and closing them all having learned absolutely nothing meaningful.
          </p>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 16 }}>
            This is the Nigerian financial reality. Multiple accounts isn't a quirk — it's standard. Every fintech launched another app, every app demanded its own mental model, and somehow nobody asked whether the experience of understanding your own money was actually any good.
          </p>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85 }}>
            Finance apps show you data. They don't make you feel anything. MoneyRace reimagines the whole thing by turning your bank accounts into an F1 race. The account with the highest balance is in P1 and moves fastest. Money comes in — your car overtakes. Money goes out — you drop a position. The race runs continuously. Your financial position becomes something you actually want to watch.
          </p>
        </section>

        {/* The Problem */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#111", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20, opacity: 0.3 }}>The Problem</p>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 16 }}>
            The existing interaction pattern for checking your finances is: open app → read number → close app → feel nothing → repeat five times. It's passive. It's disconnected. It generates no insight and no engagement.
          </p>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 16 }}>
            The deeper problem is that for most people, money isn't one thing — it's distributed across multiple institutions with no unified view. Aggregation apps exist but they were built for a Western banking model. In Nigeria, where OPay sends an SMS alert before their app even loads, those products don't map to reality.
          </p>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85 }}>
            MoneyRace doesn't try to replace a budgeting app. It tries to do one thing brilliantly: make you understand your relative financial position — which account is winning, which is losing, and why — in a way that's immediate, visual, and actually enjoyable.
          </p>
        </section>

        {/* Why F1 */}
        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#111", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20, opacity: 0.3 }}>Why F1</p>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 16 }}>
            The F1 mental model does something elegant that a dashboard cannot. A dashboard shows you five numbers. Your brain has to do the work of understanding which is bigger, how much bigger, what that means, and whether it changed since yesterday. That's cognitive overhead every single time.
          </p>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 16 }}>
            A race track shows you the same information spatially. P1 is ahead. P5 is behind. The gap between cars tells you how significant the difference is. An overtake tells you something changed. You process it in milliseconds.
          </p>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85 }}>
            It's gamification, but not in the cheap sense. The racing metaphor earns meaning because money actually behaves like racing — things accelerate, things fall back, positions change, momentum matters. When your savings account drops to last place, that's a quiet nudge.
          </p>
        </section>
      </div>

      {/* ── Design Decisions ──────────────────────────────────── */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 48px 80px" }}>
        <p style={{ fontSize: 10, fontWeight: 700, color: "#111", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32, opacity: 0.3 }}>Design Decisions</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {DESIGN_DECISIONS.map(card => (
            <div key={card.title} style={{
              background: "#fff", border: "0.5px solid #f0f0f0",
              borderRadius: 12, padding: 28,
            }}>
              <p style={{ fontSize: 16, fontWeight: 500, color: "#111", marginBottom: 10, lineHeight: 1.4 }}>{card.title}</p>
              <p style={{ fontSize: 13, color: "#888", fontWeight: 300, lineHeight: 1.8 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Screens Showcase ──────────────────────────────────── */}
      <section style={{ background: "#0d0d12", padding: "64px 48px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>App Screens</p>
          <h2 style={{ fontSize: 32, fontWeight: 400, color: "#fff", letterSpacing: "-0.03em", marginBottom: 40 }}>Four screens. One race.</h2>
          <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 8 }}>
            {SCREENS.map((screen, i) => (
              <div key={screen.name} style={{
                background: "#16161f", borderRadius: 12, padding: 24,
                minWidth: 220, flexShrink: 0,
                border: "1px solid rgba(255,255,255,0.05)",
              }}>
                <p style={{ fontSize: 10, color: "#3d3d55", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 12 }}>0{i + 1}</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: "#fff", marginBottom: 8 }}>{screen.name}</p>
                <p style={{ fontSize: 12, color: "#6e6e8a", lineHeight: 1.65 }}>{screen.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bank Colours ──────────────────────────────────────── */}
      <section style={{ padding: "56px 48px", maxWidth: 960, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, color: "#111", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 28, opacity: 0.3 }}>The Colour System</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center" }}>
          {BANKS.map(bank => (
            <div key={bank.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: bank.color, flexShrink: 0, boxShadow: `0 0 12px ${bank.color}55` }} />
              <div>
                <p style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 2 }}>{bank.name}</p>
                <p style={{ fontSize: 11, color: "#aaa" }}>{bank.balance}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech Section ──────────────────────────────────────── */}
      <section style={{ background: "#111", padding: "64px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400,
            color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1,
            marginBottom: 12,
          }}>
            Built without Flutter experience.
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", marginBottom: 36, lineHeight: 1.6 }}>
            AI-assisted development. Designer-directed. Every decision mine.
          </p>

          {/* code block */}
          <div style={{
            background: "#0a0a0a", borderRadius: 8,
            padding: "24px 28px", marginBottom: 36,
            fontFamily: "'SFMono-Regular', Consolas, monospace",
            fontSize: 12.5, lineHeight: 2,
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
            {STACK.map(line => (
              <div key={line}>
                <span style={{ color: "#00C48C" }}>›</span>{" "}
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{line}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.85, marginBottom: 16 }}>
            I had never written a line of Flutter or Dart before this project. That's not a confession — it's the point. I built this using AI-assisted development: Claude Code and Codex handled the technical implementation while I directed the product vision, made every design decision, and specified the logic.
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>
            This is how I believe design engineering will work in the near future. The designer who understands what they want to build well enough to direct an AI to build it precisely — that's the skill. Not memorising syntax.
          </p>
        </div>
      </section>

      {/* ── Roadmap ───────────────────────────────────────────── */}
      <section style={{ padding: "64px 48px", maxWidth: 720, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, color: "#111", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 28, opacity: 0.3 }}>What's Next</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {ROADMAP.map(item => (
            <div key={item} style={{
              display: "flex", gap: 16, alignItems: "flex-start",
              padding: "18px 0", borderBottom: "1px solid #f5f5f5",
            }}>
              <div style={{ width: 3, flexShrink: 0, height: 16, background: "#e63c2f", borderRadius: 2, marginTop: 3 }} />
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.65 }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Open Source CTA ───────────────────────────────────── */}
      <section style={{ padding: "0 48px 64px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          background: "#111", borderRadius: 16, padding: "48px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <p style={{ fontSize: 24, fontWeight: 400, color: "#fff", letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.25 }}>
              Open source.<br />Read the code.
            </p>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6, maxWidth: "36ch" }}>
              My first open source project — built by a designer who had never used Flutter.
            </p>
          </div>
          <a
            href="https://github.com/FemiDev10/moneyrace"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fff", color: "#111", fontSize: 13, fontWeight: 500,
              padding: "12px 24px", borderRadius: 24, textDecoration: "none",
              flexShrink: 0, transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            View on GitHub ↗
          </a>
        </div>
      </section>

      {/* ── Reflection ────────────────────────────────────────── */}
      <section style={{ padding: "16px 48px 96px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 18, color: "#444", lineHeight: 1.9, marginBottom: 36 }}>
          This project taught me something I didn't expect to learn: the bottleneck in building is almost never technical. I had zero Flutter experience. I built a working, animated, state-managed mobile app with a live race track drawn in code. The knowledge gap was real but it wasn't the constraint — understanding what to build, and being precise enough about it to direct the implementation, was what made the difference.
        </p>
        <p style={{
          fontSize: "clamp(24px, 4vw, 40px)", fontStyle: "italic",
          fontWeight: 400, color: "#111", letterSpacing: "-0.02em", lineHeight: 1.25,
        }}>
          Finance should feel like something.
        </p>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontSize: 10, color: "#ccc", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Built by</p>
            <p style={{ fontSize: 13, color: "#666" }}>Femi Jimoh · Product Designer</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://github.com/FemiDev10/moneyrace"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12, fontWeight: 500, color: "#fff",
                background: "#111", padding: "8px 18px", borderRadius: 100,
                textDecoration: "none",
              }}
            >
              GitHub ↗
            </a>
            <Link href="/" style={{ fontSize: 12, color: "#bbb", textDecoration: "none", display: "flex", alignItems: "center" }}>
              ← Back to portfolio
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section:first-of-type {
            grid-template-columns: 1fr !important;
          }
          section:first-of-type > div:last-child {
            height: 220px !important;
          }
        }
        @media (max-width: 640px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </main>
  );
}
