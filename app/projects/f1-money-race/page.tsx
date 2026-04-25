"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";

/* ─── PhoneMockup ────────────────────────────────────────────────── */
function PhoneMockup({
  src,
  alt,
  bg = "#1a0a2e",
  width = 240,
  isVideo = false,
}: {
  src: string;
  alt?: string;
  bg?: string;
  width?: number;
  isVideo?: boolean;
}) {
  return (
    <div style={{
      background: bg,
      borderRadius: 24,
      padding: "24px 16px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}>
      <div style={{
        borderRadius: 36,
        border: "8px solid #0a0a14",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
        width,
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
            width={width * 2}
            height={width * 2 * 2.17}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        )}
      </div>
    </div>
  );
}

/* ─── Label ──────────────────────────────────────────────────────── */
function ImgLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
      color: "#aaa", fontFamily: "monospace", textAlign: "center",
      marginTop: 14, marginBottom: 0,
    }}>
      {children}
    </p>
  );
}

function SecLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p style={{
      fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em",
      color: light ? "#555" : "#bbb", marginBottom: 16, fontWeight: 600,
    }}>
      {children}
    </p>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function F1MoneyRacePage() {
  return (
    <main style={{ background: "#fff" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        background: "#0d0d12", minHeight: "80vh", padding: "80px 48px",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
      }}>
        <p style={{ fontSize: 11, color: "#444", letterSpacing: "0.08em", marginBottom: 40 }}>
          Work / F1 Money Race
        </p>

        <h1 style={{
          fontSize: "clamp(64px, 10vw, 128px)", fontWeight: 400,
          letterSpacing: "-0.04em", color: "#fff",
          lineHeight: 0.92, margin: "0 0 16px",
        }}>
          F1 Money Race.
        </h1>

        <p style={{
          fontSize: 18, fontWeight: 300,
          color: "rgba(255,255,255,0.35)",
          lineHeight: 1.6, maxWidth: "42ch", margin: "0 0 32px",
        }}>
          Five Nigerian banks. One circuit. Your balance decides the race.
        </p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Flutter · iOS", "2025", "Open Source", "Side Project"].map(tag => (
            <span key={tag} style={{
              fontSize: 11, color: "#555",
              background: "#1a1a1a", border: "1px solid #222",
              borderRadius: 20, padding: "5px 14px",
            }}>{tag}</span>
          ))}
        </div>
      </section>

      {/* ── FULL-BLEED RACE SCREEN ───────────────────────────────── */}
      <section style={{
        background: "#0d0d12", padding: "64px 48px",
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <PhoneMockup src="/moneyRace/race-screen.png" alt="Race screen" bg="#0a1a2e" width={340} />
        <ImgLabel>Race screen — ₦2,607,220 across 5 banks. OPay in P1.</ImgLabel>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────── */}
      <section style={{ padding: "96px 48px", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>The Project</SecLabel>
          <h2 style={{
            fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 0.95, maxWidth: 800, marginBottom: 56,
          }}>
            Your money, now racing.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 80, alignItems: "start" }}>
            {/* body */}
            <div>
              <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, marginBottom: 20 }}>
                Most Nigerians have money spread across <strong style={{ fontWeight: 500, color: "#111" }}>five different bank apps</strong>. OPay for transfers. PalmPay for spending. GTB for salary. Kuda for savings. Checking all five means opening five apps, reading five numbers, and closing them having learned nothing meaningful about your actual financial position.
              </p>
              <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9 }}>
                Finance apps show you <strong style={{ fontWeight: 500, color: "#111" }}>data</strong>. They don't make you <strong style={{ fontWeight: 500, color: "#111" }}>feel</strong> anything. MoneyRace reimagines the whole experience by turning your accounts into a live F1 race. The richest account leads. Credits cause overtakes. Spending drops you back.
              </p>
            </div>

            {/* stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {[
                { num: "5",    label: "Banks in the race" },
                { num: "₦2.6M", label: "Demo balance" },
                { num: "60fps", label: "Race animation" },
                { num: "0",    label: "Prior Flutter experience" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p style={{
                    fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 400,
                    color: "#111", letterSpacing: "-0.04em", lineHeight: 1,
                    margin: "0 0 6px",
                  }}>{num}</p>
                  <p style={{ fontSize: 11, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────── */}
      <section style={{ padding: "96px 48px", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>The Problem</SecLabel>
          <h2 style={{
            fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 0.95, maxWidth: 840, marginBottom: 48,
          }}>
            The most boring interaction in fintech.
          </h2>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 680, marginBottom: 20 }}>
            The existing pattern for checking your finances is: <strong style={{ fontWeight: 500, color: "#111" }}>open app → read number → close app → feel nothing → repeat five times</strong>. It's passive. It generates no insight and no emotional response.
          </p>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 680 }}>
            Standard aggregation apps don't map to the Nigerian banking reality. Mono and Stax are building the API infrastructure. MoneyRace is a design exploration of what the <strong style={{ fontWeight: 500, color: "#111" }}>experience layer</strong> on top of that could actually feel like — for people whose financial lives are genuinely distributed across multiple institutions.
          </p>
        </div>
      </section>

      {/* ── LANDSCAPE FULL-BLEED ─────────────────────────────────── */}
      <section style={{ background: "#0d0d12", padding: "64px 0" }}>
        <div style={{ width: "100%", lineHeight: 0 }}>
          <Image
            src="/moneyRace/landscape.png"
            alt="MoneyRace circuit landscape"
            width={2400}
            height={1200}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{
          fontSize: 10, color: "#444", fontFamily: "monospace",
          textTransform: "uppercase", letterSpacing: "0.12em",
          textAlign: "center", padding: "16px 48px 0",
        }}>
          The circuit — drawn entirely in code. No images. No SVGs. Pure math.
        </p>
      </section>

      {/* ── V1 VS V2 ─────────────────────────────────────────────── */}
      <section style={{ padding: "96px 48px", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>Design Iteration</SecLabel>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 0.95, marginBottom: 12,
          }}>
            From V1 to V2.
          </h2>
          <p style={{ fontSize: 20, color: "#aaa", fontWeight: 300, marginBottom: 48 }}>
            The circuit changed. The UI tightened. The race got real.
          </p>

          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 680, marginBottom: 20 }}>
            The first version had a working race but a rough interface. The circuit shape was functional but didn't feel like a real track. The LIVE indicator was just a button. The leaderboard strip was basic.
          </p>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 680, marginBottom: 64 }}>
            V2 changed the <strong style={{ fontWeight: 500, color: "#111" }}>circuit geometry</strong> to a winding S-shape that feels like a real F1 layout. The <strong style={{ fontWeight: 500, color: "#111" }}>LIVE badge</strong> became a green pulsing indicator with clear typography. The <strong style={{ fontWeight: 500, color: "#111" }}>expand button</strong> was added for fullscreen race mode. The <strong style={{ fontWeight: 500, color: "#111" }}>leaderboard strip</strong> got cleaner position labels with coloured dots matching each bank. Every change was driven by one question: does this feel like a race?
          </p>

          {/* side by side */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <PhoneMockup src="/moneyRace/landscape.png" alt="V1 circuit" bg="#0a0a14" width={220} />
              <ImgLabel>Version 1 — Original circuit</ImgLabel>
            </div>
            <p style={{ fontSize: 28, color: "#ddd", lineHeight: 1, flexShrink: 0 }}>→</p>
            <div style={{ textAlign: "center" }}>
              <PhoneMockup src="/moneyRace/race-screen.png" alt="V2 circuit" bg="#0a1a2e" width={220} />
              <ImgLabel>Version 2 — Redesigned circuit + UI</ImgLabel>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN DECISIONS ─────────────────────────────────────── */}
      <section style={{ padding: "96px 48px", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>Design Decisions</SecLabel>
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
              body: <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 560 }}>Every animation reflects a real financial event. <strong style={{ fontWeight: 500, color: "#111" }}>Speed equals balance rank</strong>. An overtake is a credit. Dropping back is a spend. Nothing in the race moves without a reason. If the animation doesn't mean something, it has no place in the product.</p>,
            },
            {
              num: "02", title: "Each bank is a colour, always",
              body: <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 560 }}>OPay is green. PalmPay is red. GTB is orange. Kuda is purple. This colour system runs through the track, the leaderboard, the transaction feed, and the bank cards. <strong style={{ fontWeight: 500, color: "#111" }}>You read the race without reading any text.</strong> Once you've learned the colours, position is instant.</p>,
            },
            {
              num: "03", title: "Dark premium aesthetic",
              body: <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 560 }}>Finance is serious. The dark background (#0D0D12) with a glowing circuit feels closer to a <strong style={{ fontWeight: 500, color: "#111" }}>Bloomberg terminal</strong> than a mobile game. Colour carries information. Everything else is restrained. Bright = important. Dark = context.</p>,
            },
            {
              num: "04", title: "Four screens, one job each",
              body: <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 560 }}><strong style={{ fontWeight: 500, color: "#111" }}>Race</strong> for your position right now. <strong style={{ fontWeight: 500, color: "#111" }}>Timeline</strong> for what happened and when. <strong style={{ fontWeight: 500, color: "#111" }}>Standings</strong> for the broader picture. <strong style={{ fontWeight: 500, color: "#111" }}>Garage</strong> for managing which banks are racing. No screen answers more than one question. No clutter. No overlap.</p>,
            },
          ].map(({ num, title, body }) => (
            <div key={num} style={{
              display: "grid", gridTemplateColumns: "200px 1fr",
              gap: 64, alignItems: "start",
              borderTop: "1px solid #f0f0f0", padding: "40px 0",
            }}>
              <div>
                <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{num}</p>
                <p style={{ fontSize: 20, fontWeight: 500, color: "#111", letterSpacing: "-0.01em", lineHeight: 1.3 }}>{title}</p>
              </div>
              {body}
            </div>
          ))}
        </div>
      </section>

      {/* ── SCREENS SECTION ──────────────────────────────────────── */}
      <section style={{ background: "#0d0d12", padding: "96px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel light>The Screens</SecLabel>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#fff",
            lineHeight: 0.95, marginBottom: 64,
          }}>
            Four screens. One race.
          </h2>

          {/* Race — centre stage */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 72 }}>
            <PhoneMockup src="/moneyRace/race-screen.png" alt="Race screen" bg="#0a1a2e" width={320} />
            <ImgLabel>Race Screen</ImgLabel>
            <p style={{ fontSize: 13, color: "#555", textAlign: "center", marginTop: 8 }}>
              Total balance · live circuit · P1–P5 leaderboard · recent activity
            </p>
          </div>

          {/* Timeline row */}
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 48 }}>
            {[
              { src: "/moneyRace/timeline-screen.png",  label: "Timeline — All Banks",      bg: "#0a1a14" },
              { src: "/moneyRace/timeline-screen2.png", label: "Timeline — Filtered View",  bg: "#0a1a14" },
            ].map(({ src, label, bg }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <PhoneMockup src={src} alt={label} bg={bg} width={240} />
                <ImgLabel>{label}</ImgLabel>
              </div>
            ))}
          </div>

          {/* Standings + Garage row */}
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { src: "/moneyRace/standings-screen.png", label: "Standings — Constructor Table", bg: "#1a1000" },
              { src: "/moneyRace/garage-screen.png",    label: "Garage — Bank Management",      bg: "#1a0a1a" },
              { src: "/moneyRace/garage-screen2.png",   label: "Garage — Scrolled View",        bg: "#1a0a1a" },
            ].map(({ src, label, bg }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <PhoneMockup src={src} alt={label} bg={bg} width={220} />
                <ImgLabel>{label}</ImgLabel>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ────────────────────────────────────────── */}
      <section style={{ padding: "96px 48px", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel>Live Demo</SecLabel>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111",
            lineHeight: 0.95, marginBottom: 12,
          }}>
            Watch it race.
          </h2>
          <p style={{ fontSize: 18, color: "#aaa", fontWeight: 300, marginBottom: 56 }}>
            The race runs at 60fps. Every movement reflects a real balance change.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 80, alignItems: "center" }}>
            {/* video */}
            <PhoneMockup src="/moneyRace/screen-recordingV2.mov" bg="#0a1a2e" width={280} isVideo />

            {/* bullets */}
            <div>
              {[
                { title: "Live at 60fps",        body: "The race runs continuously. Every frame is real." },
                { title: "Overtakes on credit",   body: "Money comes in, the car moves. Instantly." },
                { title: "Persistent colours",    body: "OPay is always green. Everywhere." },
                { title: "Fullscreen mode",       body: "Tap the expand button. The race fills the screen." },
              ].map(({ title, body }, i, arr) => (
                <div key={title} style={{
                  padding: "20px 0",
                  borderTop: i === 0 ? "none" : "1px solid #f0f0f0",
                }}>
                  <p style={{ fontSize: 18, fontWeight: 500, color: "#111", marginBottom: 4 }}>{title}</p>
                  <p style={{ fontSize: 14, color: "#777", fontWeight: 300 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ────────────────────────────────────────────── */}
      <section style={{ background: "#111", padding: "96px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <SecLabel light>Technical</SecLabel>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#fff",
            lineHeight: 1.05, maxWidth: 680, marginBottom: 24,
          }}>
            Built without Flutter experience.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", fontWeight: 300, lineHeight: 1.9, maxWidth: 600, marginBottom: 48 }}>
            I had never written Flutter or Dart before this project. The app was built through <strong style={{ fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>AI-assisted development</strong> — Claude Code handled the Flutter implementation while I directed the product vision, interaction model, design system, and feature logic.
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", fontWeight: 300, lineHeight: 1.9, maxWidth: 600, marginBottom: 48 }}>
            This is how I believe design engineering works now. <strong style={{ fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>The designer who can direct an AI to build precisely what they envision</strong> — that's the skill. Not memorising syntax.
          </p>

          {/* code block */}
          <div style={{
            background: "#0a0a0a", borderRadius: 12, padding: "32px",
            borderLeft: "3px solid #00C48C",
            fontFamily: "'SFMono-Regular', Consolas, monospace",
            fontSize: 14, lineHeight: 2.2, color: "#00C48C",
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
      <section style={{ padding: "96px 48px", borderTop: "1px solid #f0f0f0", textAlign: "center" }}>
        <h2 style={{
          fontSize: "clamp(48px, 8vw, 104px)", fontWeight: 400,
          letterSpacing: "-0.04em", color: "#111",
          lineHeight: 0.95, marginBottom: 16,
        }}>
          Open source.
        </h2>
        <p style={{ fontSize: 18, color: "#aaa", fontWeight: 300, marginBottom: 40 }}>
          Read the code. Fork it. Make it yours.
        </p>
        <a
          href="https://github.com/FemiDev10/moneyrace"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block", background: "#111", color: "#fff",
            fontSize: 14, fontWeight: 500, letterSpacing: "0.02em",
            padding: "14px 32px", borderRadius: 28, textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          View on GitHub ↗
        </a>
      </section>

      {/* ── REFLECTION ───────────────────────────────────────────── */}
      <section style={{ padding: "96px 48px", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SecLabel>Reflection</SecLabel>

          <p style={{
            fontSize: "clamp(32px, 5vw, 64px)", fontStyle: "italic",
            fontWeight: 300, color: "#111", letterSpacing: "-0.03em",
            lineHeight: 1.2, maxWidth: 800, marginBottom: 48,
          }}>
            Finance should feel like something.
          </p>

          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 680, marginBottom: 20 }}>
            The bottleneck in building this wasn't technical skill. It was <strong style={{ fontWeight: 500, color: "#111" }}>clarity of intent</strong>. Once the mental model was strong enough — your accounts as cars, your balance as speed, your credits as overtakes — the rest of the product had something real to orbit around.
          </p>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 680, marginBottom: 56 }}>
            MoneyRace is one of the most useful experiments in my portfolio not because it shipped to the App Store, but because it showed <strong style={{ fontWeight: 500, color: "#111" }}>how far a strong product idea can go</strong> when the interaction system fully commits to it.
          </p>

          {/* takeaways */}
          {[
            "Gamification works when it sharpens understanding, not distracts from it",
            "Motion is only valuable when it reflects real change",
            "A strong mental model can turn routine behaviour into something worth revisiting",
            "Experimental products still need structure, consistency, and a believable system underneath the idea",
          ].map((item, i) => (
            <div key={item} style={{
              borderTop: "1px solid #f0f0f0",
              padding: "20px 0",
            }}>
              <p style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>{item}</p>
            </div>
          ))}

          <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <Link href="/" style={{ fontSize: 12, color: "#bbb", textDecoration: "none" }}>← Back to portfolio</Link>
            <a href="https://github.com/FemiDev10/moneyrace" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#111", textDecoration: "none", fontWeight: 500 }}>GitHub ↗</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .mr-overview-grid { grid-template-columns: 1fr !important; }
          .mr-decision-row  { grid-template-columns: 1fr !important; }
          .mr-video-grid    { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
          .mr-screens-row { overflow-x: auto; flex-wrap: nowrap !important; }
        }
      `}</style>
    </main>
  );
}
