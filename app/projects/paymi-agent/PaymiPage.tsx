"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ease = [0.25, 0, 0, 1] as const;
const p = (path: string) => `/paymi%20app/${path.replace(/ /g, "%20")}`;

// ─── Clean image — no synthetic phone wrapper ──────────────────────────────
function Img({
  src,
  alt = "",
  label,
  width = 240,
  index = 0,
  shadow = true,
}: {
  src: string;
  alt?: string;
  label?: string;
  width?: number;
  index?: number;
  shadow?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease }}
      viewport={{ once: true, margin: "-40px" }}
      style={{
        margin: 0,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Image
        src={src}
        alt={alt || label || ""}
        width={width * 3}
        height={Math.round(width * 3 * 2.17)}
        unoptimized
        style={{
          width,
          height: "auto",
          display: "block",
          borderRadius: 4,
          boxShadow: shadow
            ? "0 4px 24px rgba(0,0,0,0.10)"
            : "none",
        }}
      />
      {label && (
        <figcaption
          style={{
            fontSize: 9,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#888",
            fontFamily: "monospace",
            textAlign: "center",
            maxWidth: width,
            lineHeight: 1.6,
          }}
        >
          {label}
        </figcaption>
      )}
    </motion.figure>
  );
}

// ─── Wide image (compositions / full-width) ─────────────────────────────────
function WideImg({
  src,
  alt = "",
  label,
  maxWidth,
  index = 0,
}: {
  src: string;
  alt?: string;
  label?: string;
  maxWidth?: string | number;
  index?: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      viewport={{ once: true, margin: "-40px" }}
      style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        maxWidth,
        width: "100%",
      }}
    >
      <Image
        src={src}
        alt={alt || label || ""}
        width={1400}
        height={800}
        unoptimized
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }}
      />
      {label && (
        <figcaption
          style={{
            fontSize: 9,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#aaa",
            fontFamily: "monospace",
            lineHeight: 1.6,
          }}
        >
          {label}
        </figcaption>
      )}
    </motion.figure>
  );
}

// ─── Section label ──────────────────────────────────────────────────────────
function Label({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <motion.p
      style={{
        fontSize: 10,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: dark ? "#555" : "#666",
        marginBottom: 20,
        fontFamily: "monospace",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.p>
  );
}

// ─── Heading ────────────────────────────────────────────────────────────────
function H2({
  children,
  size = "lg",
  color = "#111",
  maxWidth,
  italic = false,
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: string;
  maxWidth?: string;
  italic?: boolean;
}) {
  const sizes = {
    sm: "clamp(26px, 3.5vw, 44px)",
    md: "clamp(34px, 5vw, 64px)",
    lg: "clamp(42px, 6.5vw, 80px)",
  };
  return (
    <motion.h2
      style={{
        fontSize: sizes[size],
        fontWeight: 400,
        letterSpacing: "-0.04em",
        lineHeight: 0.95,
        color,
        maxWidth,
        fontStyle: italic ? "italic" : "normal",
        margin: 0,
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
}

// ─── Count-up ───────────────────────────────────────────────────────────────
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let t0 = 0;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const pct = Math.min((ts - t0) / 1000, 1);
      setN(Math.floor(pct * to));
      if (pct < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

// ─── Pulsing status dot ─────────────────────────────────────────────────────
function Pulse({ color }: { color: "green" | "yellow" | "red" }) {
  const hex = { green: "#22c55e", yellow: "#eab308", red: "#ef4444" }[color];
  return (
    <span style={{ position: "relative", display: "inline-flex", width: 10, height: 10, flexShrink: 0 }}>
      <span className="paymi-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: hex }} />
      <span style={{ borderRadius: "50%", width: 10, height: 10, background: hex, position: "relative" }} />
    </span>
  );
}

// ─── Scrolling ticker ────────────────────────────────────────────────────────
function Ticker({ items }: { items: string[] }) {
  const text = items.join("  ·  ");
  return (
    <div style={{ overflow: "hidden", background: "#111", padding: "13px 0" }}>
      <div className="paymi-ticker">
        {[0, 1, 2, 3].map((i) => <span key={i} style={{ paddingRight: 80 }}>{text}</span>)}
      </div>
    </div>
  );
}

// ─── Callout ─────────────────────────────────────────────────────────────────
function Callout({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <motion.div
      style={{
        borderLeft: `3px solid ${dark ? "#2a2a2a" : "#eaeaea"}`,
        paddingLeft: 24,
        marginTop: 40,
        marginBottom: 8,
      }}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease }}
      viewport={{ once: true }}
    >
      <p style={{
        fontSize: 15,
        color: dark ? "rgba(255,255,255,0.38)" : "#999",
        fontStyle: "italic",
        lineHeight: 1.75,
        fontWeight: 300,
        maxWidth: 580,
      }}>
        {children}
      </p>
    </motion.div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function PaymiPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <>
      <style>{`
        .paymi-ticker {
          display: flex;
          white-space: nowrap;
          animation: paymi-run 28s linear infinite;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #3a3a3a;
        }
        @keyframes paymi-run { 0% { transform: translateX(0); } 100% { transform: translateX(-25%); } }
        .paymi-ring { animation: paymi-ping 2s cubic-bezier(.4,0,.6,1) infinite; }
        @keyframes paymi-ping {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%       { transform: scale(2.8); opacity: 0; }
        }
        .scr-row {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding-bottom: 12px;
          scrollbar-width: none;
        }
        .scr-row::-webkit-scrollbar { display: none; }
        .two-col { display: flex; gap: 72px; align-items: flex-start; }
        .step-row { display: grid; grid-template-columns: 300px 1fr; gap: 56px; align-items: start; padding: 56px 0; border-top: 1px solid #edf0ff; }
        .step-row.rev { grid-template-columns: 1fr 300px; }
        .step-row.rev .step-text { order: 2; }
        .step-row.rev .step-img  { order: 1; }
        .step-stack { padding: 56px 0; border-top: 1px solid #edf0ff; }
        @media (max-width: 900px) {
          .two-col { flex-direction: column !important; }
        }
        @media (max-width: 640px) {
          .hero-phone-wrap { display: none !important; }
          .step-row, .step-row.rev { grid-template-columns: 1fr !important; }
          .step-row.rev .step-text, .step-row.rev .step-img { order: unset !important; }
          .pad { padding: 64px 24px !important; }
          .vs-divider { display: none !important; }
        }
      `}</style>

      <main>

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="pad"
          style={{
            background: "#050d1a",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "80px 56px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }} />

          {/* Text content */}
          <motion.div
            style={{ position: "relative", zIndex: 2, maxWidth: 640 }}
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              style={{ fontSize: 11, color: "#444", letterSpacing: "0.1em", marginBottom: 40, fontFamily: "monospace" }}
            >
              <Link href="/#work" style={{ color: "inherit", textDecoration: "none" }}>Work</Link>
              {" / "}Paymi Agent
            </motion.p>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }}
              style={{ fontSize: "clamp(64px, 11vw, 140px)", fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 0.88, color: "#fff", margin: 0 }}
            >
              Paymi<br />Agent.
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.28)", fontWeight: 300, marginTop: 24, maxWidth: 480, lineHeight: 1.65 }}
            >
              Redesigning Nigeria&rsquo;s last-mile payment experience &mdash; from the ground up.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.3 } } }}
              style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 36 }}
            >
              {["iOS + Android", "Live · App Store & Play Store", "Jun 2024 — Ongoing", "Product Design", "Agency Banking"].map(pill => (
                <motion.span
                  key={pill}
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)", borderRadius: 20, padding: "5px 14px", fontSize: 11, letterSpacing: "0.04em", whiteSpace: "nowrap" }}
                >
                  {pill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image — no extra frame, the image speaks for itself */}
          <div className="hero-phone-wrap" style={{ position: "absolute", right: "max(56px, 8vw)", bottom: 0, zIndex: 2 }}>
            <motion.div
              style={{ y: phoneY }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Image
                  src={p("Homepage.png")}
                  alt="Paymi Agent — hero"
                  width={1200}
                  height={1200}
                  priority
                  unoptimized
                  style={{ width: "clamp(460px, 44vw, 700px)", height: "auto", display: "block" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TICKER
        ══════════════════════════════════════════════ */}
        <Ticker items={["Agency Banking", "Nigeria", "iOS + Android", "POS Hardware", "Financial Inclusion", "1.5 Million Agents", "Paymi Solutions", "Live · App Store & Play Store"]} />

        {/* ══════════════════════════════════════════════
            OVERVIEW
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#fff", padding: "96px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="The Product" dark />
          <div className="two-col">
            <div style={{ flex: "0 0 55%", minWidth: 0 }}>
              <H2 size="lg" maxWidth="680px">The app standing between a merchant and their money.</H2>
              <div style={{ marginTop: 40, maxWidth: 560 }}>
                <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9 }}>
                  Most fintech products are built for people with bank accounts, stable internet, and time to figure things out. Paymi Agent was built for the person standing behind a POS machine in Kano at 2pm, trying to process a withdrawal for a customer who has been waiting ten minutes, on a network that just dropped.
                </p>
                <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, marginTop: 20 }}>
                  Over a year of working on Paymi Agent, I redesigned the home screen <strong style={{ fontWeight: 500, color: "#111" }}>twice</strong>, built a bank network monitoring feature from scratch, designed a complete 5-step KYC onboarding flow, solved session timeout for agents with poor connectivity, and shipped a transaction history system that gave merchants real control over their financial records.
                </p>
                <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, marginTop: 20 }}>
                  It is a two-sided product: financial tool for the agent, interface that has to perform for the customer standing in front of them. <strong style={{ fontWeight: 500, color: "#111" }}>When the app fails, someone doesn&rsquo;t get their money.</strong>
                </p>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 24px", marginTop: 48 }}>
              {[
                { n: 2, s: "", l: "Home screen\nredesigns" },
                { n: 5, s: "", l: "KYC onboarding\nsteps" },
                { n: 12, s: "+", l: "Months live\nand growing" },
                { n: 2, s: "", l: "Platforms\niOS + Android" },
              ].map(({ n, s, l }) => (
                <motion.div key={l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} viewport={{ once: true }}>
                  <p style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 400, letterSpacing: "-0.04em", color: "#111", lineHeight: 1 }}>
                    <CountUp to={n} suffix={s} />
                  </p>
                  <p style={{ fontSize: 12, color: "#bbb", marginTop: 8, lineHeight: 1.5, whiteSpace: "pre-line", fontWeight: 300 }}>{l}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            THE PROBLEM
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#fff", padding: "96px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="The Challenge" dark />
          <H2 size="lg" maxWidth="580px">Every pixel has stakes.</H2>
          <div style={{ marginTop: 64 }}>
            {[
              {
                n: "01",
                title: "When the app fails, someone doesn't get their money",
                body: "Agents process dozens of transactions a day. A confusing button, a silent error, or a failed network call isn't a UX problem — it's a business problem with a real person waiting. 'Error 400' means nothing to Chidinma in Ojuelegba. 'GTB is down right now' means everything.",
              },
              {
                n: "02",
                title: "Poor connectivity kills transactions silently",
                body: "Agents across northern Nigeria have unstable connections. Before we fixed it, sessions expired mid-transaction without warning. Transfers went into bank downtime without the agent knowing. The app just stopped. Nobody knew if the money moved.",
              },
              {
                n: "03",
                title: "The home screen was built for the business, not the agent",
                body: "The original design led with commission — what the agent had earned. Made sense from a business perspective. But agents open this app 40+ times a day. What they need first: balance, transfer, add money. The hierarchy was wrong from day one.",
              },
            ].map(({ n, title, body }) => (
              <motion.div
                key={n}
                style={{ borderTop: "1px solid #f0f0f0", padding: "32px 0", display: "grid", gridTemplateColumns: "64px 1fr", gap: 32, alignItems: "start" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                viewport={{ once: true }}
              >
                <p style={{ fontSize: 11, color: "#ddd", fontFamily: "monospace", paddingTop: 4 }}>{n}</p>
                <div>
                  <p style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 500, color: "#111", marginBottom: 12, letterSpacing: "-0.02em", lineHeight: 1.3 }}>{title}</p>
                  <p style={{ fontSize: 15, color: "#666", fontWeight: 300, lineHeight: 1.9, maxWidth: 640 }}>{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HOME SCREEN REDESIGN
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#fafafa", padding: "96px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="Redesign 01 — Home Screen" dark />
          <H2 size="md" maxWidth="600px">What agents need first.</H2>
          <motion.p
            style={{ fontSize: 18, color: "#bbb", fontWeight: 300, marginTop: 16, marginBottom: 48, maxWidth: 540, lineHeight: 1.55 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Two iterations. One clear lesson: design for how agents actually work, not how the business wants to present itself.
          </motion.p>
          <motion.p
            style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 600, marginBottom: 32 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} viewport={{ once: true }}
          >
            The original home screen led with a commission card — what the agent had earned. From a business perspective: logical. From an agent&rsquo;s perspective: irrelevant most of the time. Agents open this app 40+ times a day. Commission doesn&rsquo;t change 40 times a day. Balance does.
          </motion.p>
          <motion.p
            style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 600, marginBottom: 56 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.08 }} viewport={{ once: true }}
          >
            I restructured the hierarchy around what agents actually need at the top of every session:{" "}
            <strong style={{ fontWeight: 500, color: "#111" }}>balance, transfer, add money</strong>. The redesign also surfaces the agent&rsquo;s bank account number directly at the top — because agents read it out loud to customers multiple times a day and were navigating three screens deep to find it.
          </motion.p>

          <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "flex-start", flexWrap: "wrap" }}>
            <WideImg src={p("old dashboard design/Component.png")} label="Original — commission card in hero, account info buried" maxWidth={280} index={0} />
            <div
              className="vs-divider"
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingTop: 80 }}
            >
              <div style={{ width: 1, height: 60, background: "#e8e8e8" }} />
              <p style={{ fontSize: 10, letterSpacing: "0.14em", color: "#ccc", fontFamily: "monospace", textTransform: "uppercase" }}>vs</p>
              <div style={{ width: 1, height: 60, background: "#e8e8e8" }} />
            </div>
            <WideImg src={p("Dashboard Updated.png")} label="Redesigned — balance first, bank info surfaced, Transfer & Add Money in the card" maxWidth={460} index={1} />
          </div>

          <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { n: "01", d: "Transfer and Add Money became inline CTAs inside the balance card — not separate icon taps. Two fewer touches per transaction. Multiplied by 40 sessions a day." },
              { n: "02", d: "Bank account number moved to the top bar — always visible without scrolling. Agents read this to customers. It should be the first thing they see." },
              { n: "03", d: "Commission card didn't disappear — it moved below the fold. Still there. Just not the first thing demanding attention when the agent has a customer waiting." },
              { n: "04", d: "KYC completion prompt became a Tier upgrade card. Same call to action, clearer incentive — agents respond to 'unlock higher limits' more than 'complete your profile'." },
            ].map(({ n, d }) => (
              <motion.div
                key={n}
                style={{ padding: "24px 0", borderTop: "1px solid #f0f0f0" }}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }} viewport={{ once: true }}
              >
                <p style={{ fontSize: 10, color: "#ddd", fontFamily: "monospace", marginBottom: 12 }}>{n}</p>
                <p style={{ fontSize: 14, color: "#555", fontWeight: 300, lineHeight: 1.85 }}>{d}</p>
              </motion.div>
            ))}
          </div>

          <Callout>
            The commission card didn&rsquo;t disappear — it moved. Agents still see it, but only after they&rsquo;ve done what they came to do. That&rsquo;s the difference between a product that respects your workflow and one that interrupts it.
          </Callout>
        </section>

        {/* ══════════════════════════════════════════════
            POS CARD WITHDRAWAL FLOW
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#fff", padding: "96px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="POS Card Withdrawal" dark />
          <H2 size="md" maxWidth="560px">Insert card. Enter PIN. Done.</H2>
          <motion.p
            style={{ fontSize: 18, color: "#bbb", fontWeight: 300, marginTop: 16, marginBottom: 64, maxWidth: 500, lineHeight: 1.6 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Agent connects mPOS terminal. Customer inserts card, enters PIN, selects account type. Every step must be glanceable under market noise.
          </motion.p>

          <div className="scr-row">
            {[
              { src: p("add money/Withdraw.png"), label: "01 · Enter amount" },
              { src: p("add money/insert card.png"), label: "02 · Insert card into mPOS" },
              { src: p("add money/card inserted.png"), label: "03 · Card detected" },
              { src: p("add money/card pin.png"), label: "04 · Customer enters PIN" },
              { src: p("add money/select acc type.png"), label: "05 · Select account type" },
              { src: p("add money/sucess page.png"), label: "06 · Withdrawal successful" },
            ].map(({ src, label }, i) => (
              <Img key={label} src={src} width={220} label={label} index={i} />
            ))}
          </div>

          <motion.p
            style={{ fontSize: 15, color: "#888", fontWeight: 300, lineHeight: 1.9, maxWidth: 600, marginTop: 48 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Every step stateful — clear about what just happened and what comes next. The processing countdown during a POS swipe is a clock, not a spinner. Silence during a POS transaction feels like failure. A countdown feels like progress.
          </motion.p>
        </section>

        {/* ══════════════════════════════════════════════
            ADD MONEY FLOW
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#fafafa", padding: "96px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="Add Money" dark />
          <H2 size="md" maxWidth="560px">Fund the wallet. Two ways.</H2>
          <motion.p
            style={{ fontSize: 18, color: "#bbb", fontWeight: 300, marginTop: 16, marginBottom: 64, maxWidth: 500, lineHeight: 1.6 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Agents can fund their Paymi wallet via bank transfer or debit card. Both designed to complete in under 60 seconds.
          </motion.p>

          <div className="scr-row">
            {[
              { src: p("add money/Add money-2.png"), label: "Add money — entry" },
              { src: p("add money/transfer.png"), label: "Bank transfer details" },
            ].map(({ src, label }, i) => (
              <Img key={label} src={src} width={280} label={label} index={i} />
            ))}
          </div>

          <motion.p
            style={{ fontSize: 15, color: "#888", fontWeight: 300, lineHeight: 1.9, maxWidth: 600, marginTop: 48 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            The Add Money screen surfaces the agent&rsquo;s bank details immediately — account name, number, bank — because the agent shares these details with customers multiple times a day. Copy Account Number is one tap, always visible.
          </motion.p>
        </section>

        {/* ══════════════════════════════════════════════
            BANK NETWORK MONITOR
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#050d1a", padding: "96px 56px" }}>
          <Label text="Favourite Feature · (Not Biased)" />
          <H2 size="md" color="#fff" maxWidth="720px">
            If you can&rsquo;t see the problem,<br />you can&rsquo;t work around it.
          </H2>

          <motion.p
            style={{ fontSize: 16, color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.9, maxWidth: 620, marginTop: 40, marginBottom: 28 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} viewport={{ once: true }}
          >
            Agents were processing transfers into banks experiencing downtime. Transactions would fail. Customers would get angry. Agents would get blamed. <em style={{ color: "rgba(255,255,255,0.55)" }}>Neither side understood why.</em>
          </motion.p>

          <motion.p
            style={{ fontSize: 16, color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.9, maxWidth: 620, marginBottom: 48 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.1 }} viewport={{ once: true }}
          >
            I designed a <strong style={{ fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>Bank Network Status Monitor</strong> — a real-time view of Nigerian banks by health. It lives inside the withdrawal and transfer flows — surfacing exactly when it&rsquo;s needed, not buried in settings.
          </motion.p>

          <motion.div
            style={{ display: "flex", gap: 28, marginBottom: 72, flexWrap: "wrap" }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            {[
              { color: "green" as const, label: "Operating normally" },
              { color: "yellow" as const, label: "Delays possible" },
              { color: "red" as const, label: "Significant downtime — avoid" },
            ].map(({ color, label }) => (
              <div key={color} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Pulse color={color} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Design iteration */}
          <motion.p
            style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: "monospace", marginBottom: 28 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Design Iteration
          </motion.p>

          <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "flex-start", flexWrap: "wrap", marginBottom: 56 }}>
            <Img src={p("bank network status/first desgin .png")} width={230} label="First design — good / bad binary lists" index={0} shadow={false} />
            <div
              className="vs-divider"
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingTop: 80 }}
            >
              <div style={{ width: 1, height: 48, background: "#222" }} />
              <p style={{ fontSize: 10, letterSpacing: "0.14em", color: "#333", fontFamily: "monospace", textTransform: "uppercase" }}>v2</p>
              <div style={{ width: 1, height: 48, background: "#222" }} />
            </div>
            <Img src={p("bank network status/Check bank network - withdrawal.png")} width={230} label="Final — tabbed by transaction type" index={1} shadow={false} />
          </div>

          <motion.div
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: "28px 32px", maxWidth: 680, marginBottom: 72 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} viewport={{ once: true }}
          >
            <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#333", marginBottom: 16, fontFamily: "monospace" }}>Why it changed</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.85, marginBottom: 16 }}>
              The first design split banks into two lists: those with delays and those without. Binary. Clean. <em style={{ color: "rgba(255,255,255,0.55)" }}>Wrong.</em>
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.85, marginBottom: 16 }}>
              It told agents there was a problem but not which transaction type to avoid. An agent doing a card withdrawal needs different information than an agent sending a bank transfer. The same bank can have 99% uptime for transfers and 23% for card withdrawals on Mastercard simultaneously.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.85 }}>
              The redesign introduced tabs that match the agent&rsquo;s workflow: <strong style={{ color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>Withdrawal / Transfer / Bills</strong>. You think in transaction types. The interface thinks in transaction types. No translation required.
            </p>
          </motion.div>

          {/* All 3 tabs */}
          <motion.p
            style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: "monospace", marginBottom: 28 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            All Three Views
          </motion.p>

          <div className="scr-row">
            <Img src={p("bank network status/Check bank network - withdrawal.png")} width={260} label="Withdrawal — per bank, per card scheme (Mastercard / Visa / Verve)" index={0} shadow={false} />
            <Img src={p("bank network status/Check bank network - transfer.png")} width={260} label="Transfer — bank success rates for deposits & transfers" index={1} shadow={false} />
            <Img src={p("bank network status/Check bank network - bills.png")} width={260} label="Bills — bill provider success rates" index={2} shadow={false} />
          </div>

          <motion.div
            style={{ marginTop: 64, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "32px 36px", maxWidth: 640 }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} viewport={{ once: true }}
          >
            <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#444", marginBottom: 14, fontFamily: "monospace" }}>The Aha Moment</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", fontWeight: 300, lineHeight: 1.85 }}>
              A Stanbic IBTC card on Mastercard: 23% success rate. The same customer&rsquo;s Visa on the same bank: 99.45%. That level of granularity &mdash; per bank, per card scheme &mdash; is what makes this actually useful. Agents can now say: <em>&ldquo;GTB is red on Mastercard, try Visa.&rdquo;</em>
              <br /><br />
              This was the hardest feature to get approved internally. The most-requested feature by agents once they had it. That gap between what businesses think users need and what users actually need &mdash; that&rsquo;s exactly the gap good design closes.
            </p>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════
            ONBOARDING
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#f8f9ff", padding: "96px 56px", borderTop: "1px solid #eef0ff" }}>
          <Label text="5-Step KYC Onboarding" dark />
          <H2 size="md" maxWidth="560px">From zero to transacting.</H2>
          <motion.p
            style={{ fontSize: 18, color: "#bbb", fontWeight: 300, marginTop: 16, marginBottom: 16, maxWidth: 520, lineHeight: 1.6 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Every new agent goes through five steps before their first transaction. Each step was designed to reduce drop-off.
          </motion.p>
          <motion.p
            style={{ fontSize: 14, color: "#bbb", fontWeight: 300, lineHeight: 1.7, maxWidth: 520, marginBottom: 64 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            People don&rsquo;t quit because the requirements are hard. They quit because the requirements feel endless. The stepper (visible throughout) makes progress legible. Knowing you&rsquo;re at Step 5 of 6 is motivation. Standing in front of an unmarked door is not.
          </motion.p>

          {[
            { step: "01", title: "Account Type Selection", body: "Individual or Business. Clean selection with descriptions. Sets the entire downstream KYC path — business accounts route through SCUML. Individual agents never see it.", src: p("individual account/Step 1.png"), stack: false },
            { step: "02", title: "Personal Details", body: "Full name, date of birth, BVN. Inline validation per field — errors surface in real time, not on submit. No filling three fields and getting one confusing error message.", src: p("individual account/Step 2.png"), stack: true },
            { step: "03", title: "Address Details", body: "Residential address, state, LGA, social handles. The social fields were deliberate — agents are often small business owners with a public presence that helps verify identity.", src: p("individual account/Step 3.png"), stack: false },
            { step: "04", title: "Selfie / Face Match", body: "Live selfie with face detection. States: empty → positioning → captured → Match >90% (pass) → <90% (retry). Designed to feel encouraging. Humans blink. The UI should understand that.", src: p("individual account/Step 4.png"), stack: true },
            { step: "05", title: "KYC Documents", body: "BVN verification, National ID, Proof of Address. Upload states: empty, selected, uploaded. Submit only activates when complete. 'Skip for later' was deliberate — see the dashboard first, complete KYC second.", src: p("individual account/Step 5.png"), stack: false },
          ].map(({ step, title, body, src, stack }, i) => (
            stack ? (
              <motion.div
                key={step}
                className="step-stack"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <div style={{ marginBottom: 36, maxWidth: 480 }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.16em", color: "#c0c8ff", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>Step {step}</p>
                  <p style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, color: "#111", letterSpacing: "-0.025em", marginBottom: 16, lineHeight: 1.15 }}>{title}</p>
                  <p style={{ fontSize: 15, color: "#666", fontWeight: 300, lineHeight: 1.9 }}>{body}</p>
                </div>
                <WideImg src={src} index={0} />
              </motion.div>
            ) : (
              <motion.div
                key={step}
                className={`step-row${i % 2 !== 0 ? " rev" : ""}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <div className="step-text" style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.16em", color: "#c0c8ff", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>Step {step}</p>
                  <p style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, color: "#111", letterSpacing: "-0.025em", marginBottom: 16, lineHeight: 1.15 }}>{title}</p>
                  <p style={{ fontSize: 15, color: "#666", fontWeight: 300, lineHeight: 1.9, maxWidth: 440 }}>{body}</p>
                </div>
                <div className="step-img">
                  <WideImg src={src} index={0} />
                </div>
              </motion.div>
            )
          ))}

          <motion.div
            style={{ marginTop: 72, textAlign: "center" }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} viewport={{ once: true }}
          >
            <p style={{ fontSize: 10, letterSpacing: "0.16em", color: "#c0c8ff", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 36 }}>KYC Completed</p>
            <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", maxWidth: 960, margin: "0 auto" }}>
              <WideImg src={p("individual account/KYC Completed.png")} label="KYC completed — pending review & approved states" maxWidth={460} index={0} />
              <WideImg src={p("Activate Account.png")} label="5-step progress stepper — visible throughout" maxWidth={460} index={1} />
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════
            CONNECTION & SESSION TIMEOUT
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#111", padding: "96px 56px" }}>
          <Label text="First Project at Paymi · The Problem Nobody Was Talking About" />
          <H2 size="md" color="#fff" maxWidth="640px">The app just stopped.</H2>

          <motion.p
            style={{ fontSize: 16, color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.9, maxWidth: 580, marginTop: 40, marginBottom: 64 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} viewport={{ once: true }}
          >
            One of the first things I worked on after joining. Users in northern Nigeria with poor connectivity were losing sessions mid-transaction without knowing why. <em style={{ color: "rgba(255,255,255,0.6)" }}>No warning. No recovery.</em>
            <br /><br />
            Two separate problems: connection loss and session timeout. Both needed states that felt human — not alarming, but honest. Three states, every scenario covered.
          </motion.p>

          <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
            <Img src={p("internet connection & session timeout/Component.png")} width={230} label="Connection lost — immediate feedback, retry visible" index={0} shadow={false} />
            <Img src={p("internet connection & session timeout/Component-1.png")} width={230} label="Internet connected — recovery state" index={1} shadow={false} />
            <Img src={p("internet connection & session timeout/Component-2.png")} width={230} label="Session expired — login prompt" index={2} shadow={false} />
          </div>

          <motion.p
            style={{ fontSize: 14, color: "rgba(255,255,255,0.2)", fontWeight: 300, lineHeight: 1.8, maxWidth: 500, marginTop: 56, textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            These three states directly reduced support tickets in the first month after launch. Sometimes the most impactful design work is invisible when it&rsquo;s working.
          </motion.p>
        </section>

        {/* ══════════════════════════════════════════════
            TRANSACTION HISTORY
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#fff", padding: "96px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="Transaction History" dark />
          <H2 size="md" maxWidth="580px">Not just a list. A financial record.</H2>

          <motion.p
            style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 600, marginTop: 40, marginBottom: 64 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} viewport={{ once: true }}
          >
            Agents needed records they could actually use — filter by type, filter by status, request statements for specific periods. The statement of account design gave agents control over date range, transaction category (credit, debit, or both), and balance after each transaction inline. The goal: a statement a merchant could hand to an accountant.
          </motion.p>

          <div className="scr-row" style={{ marginBottom: 64, justifyContent: "center" }}>
            {[
              { src: p("transactional history/Component-1.png"), label: "History + request statement" },
              { src: p("transactional history/Categories filter.png"), label: "Filter by category" },
              { src: p("transactional history/Categories filter-1.png"), label: "Filter by status" },
              { src: p("transactional history/Component-2.png"), label: "Statement timeframe" },
              { src: p("transactional history/Component-3.png"), label: "Custom date range" },
            ].map(({ src, label }, i) => (
              <Img key={label} src={src} width={210} label={label} index={i} />
            ))}
          </div>

          <div style={{ position: "relative", maxHeight: 560, overflow: "hidden", borderRadius: 8 }}>
            <WideImg
              src={p("stateofacc.png")}
              alt="Statement of Account — full design"
              label="Statement of account — date range · category filter · balance after each transaction"
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom, transparent, #fff)", pointerEvents: "none" }} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            BILL PAYMENTS & RECEIPTS
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#fafafa", padding: "96px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="Transaction States" dark />
          <H2 size="md" maxWidth="520px">Every payment, confirmed.</H2>

          <motion.p
            style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 560, marginTop: 32, marginBottom: 64 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Bill payment is where agents make a significant portion of their daily commission. Airtime and data alone can be 20–30 transactions on a busy day. The success state needed to feel earned. The error receipt needed to say exactly what went wrong — not &lsquo;Error 400.&rsquo; Not &lsquo;Something went wrong.&rsquo; Specific. Actionable.
          </motion.p>

          <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#ccc", fontFamily: "monospace", marginBottom: 20 }}>Success states</p>
          <div className="scr-row" style={{ marginBottom: 48, justifyContent: "center" }}>
            {[
              { src: p("state/Success/Airtime.png"), label: "Airtime · Yippee!" },
              { src: p("state/Success/Cable TV.png"), label: "Cable TV" },
              { src: p("state/Success/Data.png"), label: "Data" },
              { src: p("state/Success/Electricity.png"), label: "Electricity" },
            ].map(({ src, label }, i) => <Img key={label} src={src} width={200} label={label} index={i} />)}
          </div>

          <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#ccc", fontFamily: "monospace", marginBottom: 20 }}>Transfer & withdrawal states</p>
          <div className="scr-row" style={{ justifyContent: "center" }}>
            {[
              { src: p("state/Success/Success receipt.png"), label: "Transfer success" },
              { src: p("state/Success/Error receipt.png"), label: "Transfer declined" },
              { src: p("state/Success/Transfer.png"), label: "Transfer receipt" },
              { src: p("state/Success/Withdrawal.png"), label: "Withdrawal receipt" },
            ].map(({ src, label }, i) => <Img key={label} src={src} width={200} label={label} index={i} />)}
          </div>

          <Callout>
            PS: &lsquo;Yippee!&rsquo; is the right word for a successful airtime purchase. Anyone who disagrees hasn&rsquo;t spent enough time in a market. Also — the error receipt tells you exactly what went wrong and why. Fight us.
          </Callout>
        </section>

        {/* ══════════════════════════════════════════════
            BENEFICIARY MANAGEMENT
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#fff", padding: "96px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="Saved Beneficiaries" dark />
          <H2 size="md" maxWidth="600px">Repeat customers deserve faster flows.</H2>

          <motion.p
            style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 600, marginTop: 40, marginBottom: 64 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            An agent who serves the same 200 people regularly should pull up a customer&rsquo;s details in two taps. Saved beneficiaries — searchable, manageable, with clear states for adding, selecting options, and deleting — reduce number-entry errors and dramatically speed up repeat transactions. Every saved contact is a future transaction made faster.
          </motion.p>

          <div className="scr-row">
            {[
              { src: p("beneficiar transfer money/Bill.png"), label: "Saved beneficiaries list" },
              { src: p("beneficiar transfer money/Bill-1.png"), label: "Select options" },
              { src: p("beneficiar transfer money/Bill-2.png"), label: "Delete confirmation" },
              { src: p("beneficiar transfer money/Bill-3.png"), label: "Deleted successfully" },
              { src: p("beneficiar transfer money/Bill-4.png"), label: "Add to favourites" },
              { src: p("beneficiar transfer money/New.png"), label: "Add new beneficiary" },
              { src: p("beneficiar transfer money/New-1.png"), label: "Enter recipient details" },
              { src: p("beneficiar transfer money/New-2.png"), label: "Added successfully" },
            ].map(({ src, label }, i) => <Img key={label} src={src} width={200} label={label} index={i} />)}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            AUTH SCREENS
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#f8f8f8", padding: "96px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="Authentication" dark />
          <H2 size="md" maxWidth="520px">Every entry point, designed.</H2>

          <motion.p
            style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 580, marginTop: 32, marginBottom: 64 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Login is personalised — <em>&ldquo;Welcome Back! Hello Joshua&rdquo;</em> — because the agent&rsquo;s name on the login screen signals: this app belongs to them. Every money movement is PIN-gated. Every entry point has empty + filled states designed with the same care as the transaction flows.
          </motion.p>

          <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap", alignItems: "flex-start" }}>
            <WideImg src={p("Login User.png")} label="Login — empty & filled states" maxWidth={380} index={0} />
            <WideImg src={p("Phone Verification.png")} label="Phone verification" maxWidth={380} index={1} />
            <WideImg src={p("Create Password.png")} label="Create password — default & filled" maxWidth={380} index={2} />
            <WideImg src={p("Device Reg..png")} label="Device registration" maxWidth={440} index={3} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            REFLECTION
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ background: "#fff", padding: "96px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="Reflection" dark />
          <H2 size="lg" italic maxWidth="800px">&ldquo;Reliability IS the design.&rdquo;</H2>

          <motion.div
            style={{ maxWidth: 620, marginTop: 56 }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} viewport={{ once: true }}
          >
            <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, marginBottom: 24 }}>
              For an agent in Kano processing a ₦50,000 withdrawal, a confusing button or a silent error isn&rsquo;t an inconvenience — it&rsquo;s a business problem. Every pixel on this product has stakes attached to it.
            </p>
            <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, marginBottom: 24 }}>
              <strong style={{ fontWeight: 500, color: "#111" }}>What I&rsquo;d do differently:</strong> push harder for usability testing with agents in the field earlier. A lot of our assumptions came from analytics and support tickets rather than watching someone actually use the app in context. The bank network monitor came from a field complaint. It should have come from a research session six months earlier.
            </p>
            <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9 }}>
              <strong style={{ fontWeight: 500, color: "#111" }}>What I&rsquo;m proudest of:</strong> the bank network monitor. Nobody in Nigerian fintech was showing merchants real-time bank health in-context. It turned a major friction point into a genuine product differentiator. Push for the features that feel hardest to explain.
            </p>
          </motion.div>

          <div style={{ marginTop: 72 }}>
            {[
              "Designing for low-connectivity forces you to think about every failure state — and that rigour makes the happy path better too",
              "The most important design decision is often information hierarchy — what does the user need to know right now",
              "Agents are sophisticated users. They use this app dozens of times a day. They will notice sloppy design",
              "A well-designed status indicator is more valuable than a poorly-designed feature",
            ].map((item, i) => (
              <motion.div
                key={i}
                style={{ borderTop: "1px solid #f0f0f0", padding: "22px 0", display: "grid", gridTemplateColumns: "40px 1fr", gap: 24, alignItems: "start" }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease }}
                viewport={{ once: true }}
              >
                <p style={{ fontSize: 11, color: "#ddd", fontFamily: "monospace", paddingTop: 3 }}>0{i + 1}</p>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#111", lineHeight: 1.5 }}>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            CREDITS
        ══════════════════════════════════════════════ */}
        <section className="pad" style={{ padding: "64px 56px", borderTop: "1px solid #f0f0f0" }}>
          <Label text="Credits" dark />
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap", marginBottom: 56 }}>
            {[
              { name: "Femi Jimoh", role: "Product Designer (UI/UX)" },
              { name: "Oladunni Treasure", role: "Product Designer" },
            ].map(({ name, role }) => (
              <div key={name}>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>{name}</p>
                <p style={{ fontSize: 13, color: "#bbb", fontWeight: 300, marginTop: 4 }}>{role}</p>
              </div>
            ))}
          </div>
          <Link href="/#work" style={{ fontSize: 13, color: "#111", textDecoration: "none", borderBottom: "1px solid #111", paddingBottom: 2, letterSpacing: "0.02em" }}>
            ← Back to work
          </Link>
        </section>

      </main>
    </>
  );
}
