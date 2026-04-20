"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── count-up hook ──────────────────────────────────────────── */
function useCountUp(target: number, duration = 1200, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(parseFloat((eased * target).toFixed(decimals)));
            if (p < 1) requestAnimationFrame(tick);
            else setValue(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, decimals]);

  return { value, ref };
}

/* ─── stat pill ──────────────────────────────────────────────── */
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div style={{
      display: "inline-flex",
      flexDirection: "column",
      gap: 2,
      padding: "10px 18px",
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 40,
    }}>
      <span style={{ fontSize: 15, fontWeight: 500, color: "#fff", letterSpacing: "-0.02em" }}>{value}</span>
      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
    </div>
  );
}

/* ─── photo placeholder ───────────────────────────────────────── */
function PhotoPlaceholder({ label, aspect = "4/3" }: { label: string; aspect?: string }) {
  return (
    <div style={{
      aspectRatio: aspect,
      background: "#f4f4f2",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      border: "1.5px dashed #e0e0dc",
    }}>
      <div style={{ width: 28, height: 28, border: "1.5px solid #ccc", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect x="1" y="2" width="12" height="9" rx="1.5" stroke="#bbb" strokeWidth="1.2"/>
          <circle cx="5" cy="6" r="1.5" stroke="#bbb" strokeWidth="1.2"/>
          <path d="M1 9l3-3 2 2 3-4 4 5" stroke="#bbb" strokeWidth="1.2" strokeLinejoin="round"/>
        </svg>
      </div>
      <span style={{ fontSize: 10, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
    </div>
  );
}

/* ─── section label ───────────────────────────────────────────── */
function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
      <span style={{ fontSize: 10, color: "#111", opacity: 0.25, fontFamily: "monospace", letterSpacing: "0.08em" }}>{n}</span>
      <div style={{ flex: 1, height: 1, background: "rgba(17,17,17,0.08)" }} />
      <span style={{ fontSize: 10, color: "#111", opacity: 0.4, textTransform: "uppercase", letterSpacing: "0.1em" }}>{text}</span>
    </div>
  );
}

/* ─── flow step ───────────────────────────────────────────────── */
function FlowStep({ n, title, desc, isLast }: { n: number; title: string; desc: string; isLast?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "#111", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 500, flexShrink: 0,
        }}>
          {n}
        </div>
        {!isLast && <div style={{ width: 1, flex: 1, minHeight: 28, background: "rgba(17,17,17,0.1)", marginTop: 4 }} />}
      </div>
      <div style={{ paddingTop: 6, paddingBottom: isLast ? 0 : 28 }}>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: "#111", letterSpacing: "-0.015em" }}>{title}</p>
        <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(17,17,17,0.5)", lineHeight: 1.6 }}>{desc}</p>
      </div>
    </div>
  );
}

/* ─── bar chart ───────────────────────────────────────────────── */
function AnimatedBar({ label, pct, color = "#111" }: { label: string; pct: number; color?: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        setTimeout(() => setWidth(pct), 150);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontSize: 11, color: "rgba(17,17,17,0.6)", letterSpacing: "0.02em" }}>{label}</span>
        <span style={{ fontSize: 12, fontWeight: 500, color: "#111" }}>{pct}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(17,17,17,0.06)", borderRadius: 3, overflow: "hidden" }}>
        <div style={{
          height: "100%", width: `${width}%`, background: color,
          borderRadius: 3,
          transition: "width 1s cubic-bezier(0.16,1,0.3,1)",
        }} />
      </div>
    </div>
  );
}

/* ─── component card ──────────────────────────────────────────── */
function ComponentCard({ icon, name, detail }: { icon: string; name: string; detail: string }) {
  return (
    <div style={{
      padding: "20px 18px",
      border: "1px solid rgba(17,17,17,0.08)",
      borderRadius: 10,
      display: "flex", flexDirection: "column", gap: 8,
    }}>
      <div style={{ fontSize: 20 }}>{icon}</div>
      <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#111" }}>{name}</p>
      <p style={{ margin: 0, fontSize: 11, color: "rgba(17,17,17,0.45)", lineHeight: 1.5 }}>{detail}</p>
    </div>
  );
}

/* ─── implication card ────────────────────────────────────────── */
function ImplicationCard({ n, headline, body }: { n: string; headline: string; body: string }) {
  return (
    <div style={{
      padding: "28px 24px",
      border: "1px solid rgba(17,17,17,0.08)",
      borderRadius: 10,
      display: "flex", flexDirection: "column", gap: 12,
    }}>
      <span style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(17,17,17,0.25)", letterSpacing: "0.1em" }}>{n}</span>
      <p style={{ margin: 0, fontSize: 15, fontWeight: 500, color: "#111", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{headline}</p>
      <p style={{ margin: 0, fontSize: 12, color: "rgba(17,17,17,0.5)", lineHeight: 1.65 }}>{body}</p>
    </div>
  );
}

/* ─── next step card ──────────────────────────────────────────── */
function NextStepCard({ title, body }: { title: string; body: string }) {
  return (
    <div style={{
      padding: "24px 20px",
      background: "#fafafa",
      border: "1px solid rgba(17,17,17,0.06)",
      borderRadius: 10,
    }}>
      <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 500, color: "#111", letterSpacing: "-0.015em" }}>{title}</p>
      <p style={{ margin: 0, fontSize: 11.5, color: "rgba(17,17,17,0.5)", lineHeight: 1.65 }}>{body}</p>
    </div>
  );
}

/* ─── finding card ────────────────────────────────────────────── */
function FindingCard({ n, headline, body }: { n: string; headline: string; body: string }) {
  return (
    <div style={{
      padding: "24px 22px",
      border: "1px solid rgba(17,17,17,0.08)",
      borderRadius: 10,
    }}>
      <span style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(17,17,17,0.25)", letterSpacing: "0.1em" }}>{n}</span>
      <p style={{ margin: "10px 0 8px", fontSize: 14, fontWeight: 500, color: "#111", lineHeight: 1.3, letterSpacing: "-0.015em" }}>{headline}</p>
      <p style={{ margin: 0, fontSize: 12, color: "rgba(17,17,17,0.5)", lineHeight: 1.65 }}>{body}</p>
    </div>
  );
}

/* ─── big stat ────────────────────────────────────────────────── */
function BigStat({ target, suffix = "", label, decimals = 0 }: {
  target: number; suffix?: string; label: string; decimals?: number
}) {
  const { value, ref } = useCountUp(target, 1200, decimals);
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <p style={{ margin: 0, fontSize: "clamp(40px,5vw,64px)", fontWeight: 400, letterSpacing: "-0.04em", color: "#111", lineHeight: 1 }}>
        {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}{suffix}
      </p>
      <p style={{ margin: 0, fontSize: 11, color: "rgba(17,17,17,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
    </div>
  );
}

/* ─── page ────────────────────────────────────────────────────── */
export default function FallDetectionPage() {
  const BORDER = "1px solid rgba(17,17,17,0.08)";

  return (
    <div style={{ background: "#fff", color: "#111" }}>

      {/* ══ 01 HERO ════════════════════════════════════════════════ */}
      <section className="hci-hero" style={{ background: "#0d1117", padding: "clamp(40px,6vw,80px) 24px clamp(48px,6vw,72px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
            <Link href="/" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.05em" }}>
              FEMI JIMOH
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>/</span>
            <Link href="/hci" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.05em" }}>
              HCI
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em" }}>FALL DETECTION</span>
          </div>

          {/* type tag */}
          <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
            {["HCI Research", "Embedded Systems", "Wearable"].map(t => (
              <span key={t} style={{
                fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "4px 10px", borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.45)",
              }}>{t}</span>
            ))}
          </div>

          {/* headline */}
          <h1 style={{
            fontSize: "clamp(28px, 4.5vw, 52px)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#fff",
            margin: "0 0 16px",
            maxWidth: "18ch",
          }}>
            When Seconds{" "}
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.5)" }}>
              Decide Everything
            </em>
          </h1>

          <p style={{
            fontSize: "clamp(14px,1.6vw,17px)",
            color: "rgba(255,255,255,0.45)",
            maxWidth: 560,
            lineHeight: 1.65,
            margin: "0 0 48px",
          }}>
            Designing &amp; building a wearable fall detection system for elderly patients — functional prototype, 93% accuracy, 200 real-world tests, University of Ilorin.
          </p>

          {/* stat pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <StatPill value="93%" label="Detection accuracy" />
            <StatPill value="200" label="Test scenarios" />
            <StatPill value="3.5–6.5s" label="Response time" />
            <StatPill value="7-step" label="Validation chain" />
            <StatPill value="Solo" label="Researcher" />
          </div>

          {/* meta row */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "24px 40px", marginTop: 56,
            paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)",
          }}>
            {[
              { k: "Institution", v: "University of Ilorin" },
              { k: "Discipline", v: "EEE + HCI" },
              { k: "Year", v: "Final Year Thesis" },
              { k: "Outcome", v: "Functional Prototype" },
            ].map(({ k, v }) => (
              <div key={k}>
                <p style={{ margin: "0 0 4px", fontSize: 9, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{k}</p>
                <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 02 PROBLEM ═════════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel n="02" text="The Problem" />

        <div className="hci-two-col">
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.2, margin: "0 0 20px" }}>
              Nobody was solving this<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(17,17,17,0.4)" }}>for Nigeria</em>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(17,17,17,0.6)", lineHeight: 1.75, margin: "0 0 20px" }}>
              Falls are the second leading cause of accidental injury and death worldwide. For people over 65, a fall is not just a physical event — it is a cascade. The fall itself may be survivable. The hours spent lying on the floor before help arrives often are not.
            </p>
            <p style={{ fontSize: 14, color: "rgba(17,17,17,0.6)", lineHeight: 1.75, margin: "0 0 32px" }}>
              Imported fall detection systems cost hundreds of dollars, require WiFi and subscriptions, and were designed for a version of elderly care most Nigerian families simply don&apos;t have access to.
            </p>

            {/* design brief constraints */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: BORDER, borderRadius: 10, overflow: "hidden" }}>
              {[
                "Wearable and portable — no infrastructure",
                "Works without WiFi or internet",
                "Alerts automatically — no post-fall input required",
                "Costs a fraction of imported alternatives",
                "Usable by someone with zero technical knowledge",
              ].map((c, i, arr) => (
                <div key={i} style={{
                  padding: "12px 16px",
                  display: "flex", gap: 12, alignItems: "flex-start",
                  borderBottom: i < arr.length - 1 ? BORDER : "none",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#111", marginTop: 5, flexShrink: 0 }} />
                  <span style={{ fontSize: 12.5, color: "rgba(17,17,17,0.7)", lineHeight: 1.5 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* photo placeholders */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <PhotoPlaceholder label="Existing imported devices" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <PhotoPlaceholder label="Target context" aspect="1/1" />
              <PhotoPlaceholder label="Research phase" aspect="1/1" />
            </div>
          </div>
        </div>

        {/* 3 approaches */}
        <div className="hci-three-approach">
          {[
            { type: "Wearable Sensors", note: "Accurate but expensive and uncomfortable for extended wear" },
            { type: "Vision-Based Systems", note: "Privacy-invasive, fixed cameras, useless outside" },
            { type: "Ambient Monitoring", note: "Requires smart home infrastructure most users don't have" },
          ].map(({ type, note }, i) => (
            <div key={i} style={{
              padding: "24px 20px",
              background: "#fff",
              borderRight: i < 2 ? BORDER : "none",
            }}>
              <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 500, color: "#111" }}>{type}</p>
              <p style={{ margin: "0 0 16px", fontSize: 11.5, color: "rgba(17,17,17,0.45)", lineHeight: 1.6 }}>{note}</p>
              <span style={{
                fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "3px 8px", borderRadius: 20, background: "rgba(17,17,17,0.04)",
                color: "rgba(17,17,17,0.35)",
              }}>Existing approach</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "rgba(17,17,17,0.06)", maxWidth: 1100, margin: "0 auto" }} />

      {/* ══ 03 USER RESEARCH ═══════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel n="03" text="User Research" />

        <div className="hci-two-col" style={{ marginBottom: 48 }}>
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.2, margin: "0 0 20px" }}>
              Talk to elderly people{" "}
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(17,17,17,0.4)" }}>first</em>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(17,17,17,0.6)", lineHeight: 1.75, margin: "0 0 16px" }}>
              Before touching a single component, observation sessions were run with elderly participants aged 60+ recruited through community connections and family networks.
            </p>
            <p style={{ fontSize: 14, color: "rgba(17,17,17,0.6)", lineHeight: 1.75 }}>
              The sessions were informal: watching people move, sitting, standing quickly, reaching for high shelves. Asking about moments they nearly fell, or had fallen before, and what they wished someone had known in those moments.
            </p>
          </div>
          <PhotoPlaceholder label="Field observation session" aspect="4/3" />
        </div>

        {/* three finding cards */}
        <div className="hci-three-col-cards">
          <FindingCard
            n="FINDING 01"
            headline="Not all falls are sudden"
            body="Two participants described falls as slow-motion events — a gradual loss of balance while reaching, a slow slide off a low surface. No dramatic impact. Any system detecting only sharp impact forces would miss these entirely."
          />
          <FindingCard
            n="FINDING 02"
            headline="Normal life produces fall-like signals"
            body="Sitting down when tired. Dropping into a chair after a long day. Stepping off a curb. All produce vibration events identical to a fall from a data perspective. The system had to distinguish between them."
          />
          <FindingCard
            n="FINDING 03"
            headline="Post-fall capability is near zero"
            body="In every account of a real fall, the person described complete disorientation — confusion, pain, difficulty breathing. Pressing a button or speaking a command in that moment was unrealistic. The system had to work with zero post-fall input."
          />
        </div>

        {/* photo row */}
        <div className="hci-photo-four">
          <PhotoPlaceholder label="Participant session" aspect="1/1" />
          <PhotoPlaceholder label="Movement observation" aspect="1/1" />
          <PhotoPlaceholder label="Notes + patterns" aspect="1/1" />
          <PhotoPlaceholder label="Community outreach" aspect="1/1" />
        </div>
      </section>

      <div style={{ height: 1, background: "rgba(17,17,17,0.06)", maxWidth: 1100, margin: "0 auto" }} />

      {/* ══ 04 DESIGN LOGIC ════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel n="04" text="Design Logic" />

        <div className="hci-two-col-wide">
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.2, margin: "0 0 20px" }}>
              Fall detection is a{" "}
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(17,17,17,0.4)" }}>temporal pattern<br />recognition problem</em>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(17,17,17,0.6)", lineHeight: 1.75, margin: "0 0 20px" }}>
              The core challenge: how do you teach a microcontroller the difference between a fall and a person dropping onto their sofa? You don&apos;t teach it to recognize any single signal. You teach it to recognize a pattern.
            </p>
            <p style={{ fontSize: 14, color: "rgba(17,17,17,0.6)", lineHeight: 1.75, margin: "0 0 32px" }}>
              Sitting down aggressively produces events 1 and 2 but not 3 and 4. The posture change is different. The duration is different. The system has to be <em>convinced</em>.
            </p>

            {/* conviction note */}
            <div style={{
              padding: "16px 20px",
              background: "#f8f8f6",
              borderLeft: "3px solid #111",
              borderRadius: "0 6px 6px 0",
            }}>
              <p style={{ margin: 0, fontSize: 13, color: "#111", lineHeight: 1.6 }}>
                A single anomalous reading <strong>never</strong> triggers an alert. Multiple independent signals must converge in a specific temporal sequence.
              </p>
            </div>
          </div>

          {/* 7-step flow */}
          <div style={{ padding: "28px 24px", border: BORDER, borderRadius: 12 }}>
            <p style={{ margin: "0 0 24px", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(17,17,17,0.35)" }}>
              7-Step Validation Chain
            </p>
            <FlowStep n={1} title="Vibration Detected" desc="SW-420 vibration sensor picks up physical disturbance" />
            <FlowStep n={2} title="Threshold Check" desc="Signal amplitude compared against calibrated impact baseline" />
            <FlowStep n={3} title="Gyroscope Triggered" desc="MPU6050 gyroscope activates — angular velocity sampled" />
            <FlowStep n={4} title="Angular Velocity Analysis" desc="Rate and direction of rotation analyzed against fall profile" />
            <FlowStep n={5} title="Orientation Change Confirmed" desc="Accelerometer verifies transition from vertical to horizontal" />
            <FlowStep n={6} title="Duration Validation" desc="Time-based check: sustained position change beyond normal activity window" />
            <FlowStep n={7} title="Alert Sequence Initiated" desc="All conditions met — buzzer, LED, SMS, and call fire simultaneously" isLast />
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "rgba(17,17,17,0.06)", maxWidth: 1100, margin: "0 auto" }} />

      {/* ══ 05 HARDWARE ════════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel n="05" text="Hardware Construction" />

        <div className="hci-two-col" style={{ marginBottom: 48 }}>
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.2, margin: "0 0 20px" }}>
              From breadboard{" "}
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(17,17,17,0.4)" }}>to wearable</em>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(17,17,17,0.6)", lineHeight: 1.75, margin: "0 0 20px" }}>
              Three phases: proof of concept on a breadboard, proper circuit design with calculations from first principles, and physical construction into a wearable form factor. Every calculation was verified empirically — numbers on paper and numbers in the real world disagreed often enough.
            </p>

            {/* phase list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: BORDER, borderRadius: 10, overflow: "hidden" }}>
              {[
                { phase: "Phase 1", label: "Breadboard POC", detail: "Validate sensing approach, debug power and calibration issues (~3 weeks)" },
                { phase: "Phase 2", label: "Circuit Design", detail: "Component value calculations, boost converter, voltage regulation for GSM module" },
                { phase: "Phase 3", label: "Physical Build", detail: "Custom PCB layout, compact casing, chest/waist placement for optimal orientation readings" },
              ].map(({ phase, label, detail }, i, arr) => (
                <div key={i} style={{
                  padding: "16px 18px",
                  borderBottom: i < arr.length - 1 ? BORDER : "none",
                  display: "flex", gap: 14, alignItems: "flex-start",
                }}>
                  <span style={{ fontSize: 9, color: "rgba(17,17,17,0.25)", fontFamily: "monospace", flexShrink: 0, paddingTop: 3 }}>{phase}</span>
                  <div>
                    <p style={{ margin: "0 0 3px", fontSize: 13, fontWeight: 500, color: "#111" }}>{label}</p>
                    <p style={{ margin: 0, fontSize: 11.5, color: "rgba(17,17,17,0.45)", lineHeight: 1.5 }}>{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* photo placeholders */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <PhotoPlaceholder label="Breadboard prototype" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <PhotoPlaceholder label="PCB layout" aspect="1/1" />
              <PhotoPlaceholder label="Final device" aspect="1/1" />
            </div>
          </div>
        </div>

        {/* component grid */}
        <div className="hci-four-col">
          <ComponentCard icon="🧠" name="ATmega328P" detail="Microcontroller running real-time 7-step validation logic" />
          <ComponentCard icon="📡" name="MPU6050" detail="6-axis IMU — gyroscope + accelerometer for orientation and motion" />
          <ComponentCard icon="〰️" name="SW-420" detail="Vibration sensor triggering initial impact detection" />
          <ComponentCard icon="📶" name="SIM800L GSM" detail="SMS dispatch and automated phone call to caregiver on fall confirmation" />
          <ComponentCard icon="⚡" name="Boost Converter" detail="Steps 3.3V LiPo up to stable 5V for GSM module operation" />
          <ComponentCard icon="🔋" name="Li-Ion Battery" detail="Portable power source; dedicated rail isolates GSM current spikes" />
          <ComponentCard icon="🔔" name="Buzzer + LED" detail="Immediate local alert — audible + visual confirmation of detection event" />
          <ComponentCard icon="📦" name="Custom Casing" detail="Chest/waist-mount form factor; smaller than a deck of cards" />
        </div>
      </section>

      <div style={{ height: 1, background: "rgba(17,17,17,0.06)", maxWidth: 1100, margin: "0 auto" }} />

      {/* ══ 06 TESTING ═════════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel n="06" text="Testing & Results" />

        {/* big stats */}
        <div className="hci-four-col-stats">
          <BigStat target={93} suffix="%" label="Detection accuracy" />
          <BigStat target={200} label="Test scenarios" />
          <BigStat target={3.5} suffix="s" label="Min. response time" decimals={1} />
          <BigStat target={4} label="Movement categories" />
        </div>

        <div className="hci-two-col">
          <div>
            <h2 style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.2, margin: "0 0 20px" }}>
              200 scenarios,{" "}
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(17,17,17,0.4)" }}>real conditions</em>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(17,17,17,0.6)", lineHeight: 1.75, margin: "0 0 20px" }}>
              Four movement categories tested with real elderly participants performing controlled movements. Every session logged — sensor readings, detection outcome, response time, anomalies.
            </p>
            <p style={{ fontSize: 14, color: "rgba(17,17,17,0.6)", lineHeight: 1.75, margin: "0 0 20px" }}>
              The hardest category: non-fall daily activities. A system that correctly identifies every fall but fires false alerts twenty times a day is not a safety device — it&apos;s an annoyance that will be left in a drawer within a week.
            </p>
            <p style={{ fontSize: 14, color: "rgba(17,17,17,0.6)", lineHeight: 1.75 }}>
              After the first round, failure cases were analyzed — false positives and missed detections — and the algorithm retuned. Thresholds shifted. Validation windows adjusted.
            </p>
          </div>

          {/* bar chart */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ margin: "0 0 8px", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(17,17,17,0.35)" }}>
              Detection rate by category
            </p>
            <AnimatedBar label="Falls from standing" pct={96} />
            <AnimatedBar label="Falls while walking" pct={94} />
            <AnimatedBar label="Falls while running" pct={91} />
            <AnimatedBar label="Non-fall daily activities (no false positive)" pct={88} color="#22c55e" />

            <div style={{
              marginTop: 8, padding: "14px 16px",
              background: "#f8f8f6", borderRadius: 8,
            }}>
              <p style={{ margin: 0, fontSize: 12, color: "rgba(17,17,17,0.6)", lineHeight: 1.6 }}>
                The 93% figure is not a claim about a perfect system. It is a claim about what a first-generation prototype, built by one person, tested under real conditions, can reliably do.
              </p>
            </div>
          </div>
        </div>

        {/* alert system */}
        <div style={{ marginTop: 64 }}>
          <p style={{ margin: "0 0 20px", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(17,17,17,0.35)" }}>
            Alert system — four channels fire simultaneously
          </p>
          <div className="hci-four-col-alert">
            {[
              { icon: "🔔", title: "Buzzer", detail: "Immediate local alert, audible to anyone nearby" },
              { icon: "💡", title: "LED Indicator", detail: "Visual confirmation the system has detected an event" },
              { icon: "💬", title: "SMS", detail: "Automated message to pre-configured caregiver number" },
              { icon: "📞", title: "Phone Call", detail: "Automated call demanding active attention in a way a message does not" },
            ].map(({ icon, title, detail }, i) => (
              <div key={i} style={{
                padding: "20px 18px",
                background: "#fff",
                borderRight: i < 3 ? BORDER : "none",
              }}>
                <div style={{ fontSize: 20, marginBottom: 10 }}>{icon}</div>
                <p style={{ margin: "0 0 4px", fontSize: 13, fontWeight: 500, color: "#111" }}>{title}</p>
                <p style={{ margin: 0, fontSize: 11.5, color: "rgba(17,17,17,0.45)", lineHeight: 1.55 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "rgba(17,17,17,0.06)", maxWidth: 1100, margin: "0 auto" }} />

      {/* ══ 07 HCI IMPLICATIONS ════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel n="07" text="HCI Implications" />

        <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.2, margin: "0 0 12px" }}>
          What this project taught me about{" "}
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(17,17,17,0.4)" }}>design</em>
        </h2>
        <p style={{ fontSize: 14, color: "rgba(17,17,17,0.5)", lineHeight: 1.7, maxWidth: 600, margin: "0 0 48px" }}>
          Safety-critical systems for vulnerable users push every design principle to its logical extreme.
        </p>

        <div className="hci-implications-grid">
          <ImplicationCard
            n="IMPLICATION 01"
            headline="The best interface for this user is no interface at all"
            body="Every interaction I removed from the post-fall experience was a win. No confirmation buttons. No app. No settings screen. The product design principle of reducing friction reaches its logical extreme when the user may be physically incapable of any friction at all."
          />
          <ImplicationCard
            n="IMPLICATION 02"
            headline="Trust is the primary design material in safety systems"
            body="A medical device that generates false alerts trains its users to ignore alerts. Once that trust is broken, the system is worse than useless — it creates false security. Every tuning decision was in service of one goal: when this device fires, the caregiver knows it is real."
          />
          <ImplicationCard
            n="IMPLICATION 03"
            headline="Context makes signal meaning"
            body="The same accelerometer reading means completely different things depending on who is producing it, what they were doing before, and what happens after. User behavior cannot be understood in isolation from context. Data without context is noise."
          />
          <ImplicationCard
            n="IMPLICATION 04"
            headline="Designing for reduced capability requires expanded empathy"
            body="My users could not fill out a feedback form, click through onboarding, or troubleshoot an error message. Designing for the least capable moment of the most vulnerable user has made me a better designer across every project since."
          />
        </div>
      </section>

      <div style={{ height: 1, background: "rgba(17,17,17,0.06)", maxWidth: 1100, margin: "0 auto" }} />

      {/* ══ 08 NEXT STEPS ══════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel n="08" text="Next Steps" />

        <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.2, margin: "0 0 12px" }}>
          This prototype proved an approach.{" "}
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(17,17,17,0.4)" }}>A production system would look different.</em>
        </h2>
        <p style={{ fontSize: 14, color: "rgba(17,17,17,0.5)", margin: "0 0 40px" }}>
          Five directions to take this from research prototype to deployed product.
        </p>

        <div className="hci-three-col-steps">
          <NextStepCard
            title="Machine Learning Layer"
            body="Replace static thresholds with a model trained on individual movement patterns. The system learns what this person's normal looks like. False positive rate drops dramatically."
          />
          <NextStepCard
            title="Miniaturisation"
            body="The prototype is functional. A wearable people would choose to wear daily needs to be the size of a watch face and weigh under 30 grams."
          />
          <NextStepCard
            title="Caregiver Interface"
            body="A simple mobile dashboard showing alert history, device battery level, and detection events. Not for the wearer — for the family member who needs confidence the system is working."
          />
          <NextStepCard
            title="GPS Integration"
            body="The GSM module knows network location. Adding GPS means the alert carries coordinates. A caregiver three streets away can find the person who fell."
          />
          <NextStepCard
            title="Extended Deployment Study"
            body="Weeks of real-world use, not controlled sessions. Real edge cases. Real failure modes nobody anticipated in a testing environment."
          />
        </div>
      </section>

      <div style={{ height: 1, background: "rgba(17,17,17,0.06)", maxWidth: 1100, margin: "0 auto" }} />

      {/* ══ 09 CLOSING QUOTE ═══════════════════════════════════════ */}
      <section style={{ padding: "80px 24px 64px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel n="09" text="Closing Thought" />

        <blockquote className="hci-closing-quote" style={{
          margin: 0,
          background: "#0d1117",
          borderRadius: 12,
        }}>
          <p style={{
            fontSize: "clamp(18px,2.5vw,26px)",
            fontWeight: 400,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.85)",
            margin: "0 0 32px",
            maxWidth: 720,
          }}>
            &ldquo;I started this project as an engineering student trying to build something that worked. I ended it as a designer who understands that <em style={{ color: "#fff" }}>working is not enough</em>.&rdquo;
          </p>
          <p style={{ margin: "0 0 20px", fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 620 }}>
            A device that is technically accurate but uncomfortable to wear solves nothing. A device that alerts reliably but is too expensive for the people who need it most solves nothing. A device that works in a lab but fails in the dusty, humid, signal-inconsistent reality of a small Nigerian home solves nothing.
          </p>
          <p style={{ margin: "0 0 32px", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.6)", letterSpacing: "-0.01em" }}>
            What happens to the real user, in their real life, when this fails?
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {["HCI", "Product Design", "The only question that matters"].map(t => (
              <span key={t} style={{
                fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "4px 10px", borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.35)",
              }}>{t}</span>
            ))}
          </div>
        </blockquote>
      </section>

      {/* ══ 10 PAPER CTA ═══════════════════════════════════════════ */}
      <section style={{ padding: "0 24px 96px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "32px 40px",
          border: BORDER,
          borderRadius: 12,
          gap: 32,
          flexWrap: "wrap",
        }}>
          <div>
            <p style={{ margin: "0 0 4px", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(17,17,17,0.3)" }}>
              Published Research
            </p>
            <h3 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 400, letterSpacing: "-0.025em", color: "#111" }}>
              Read the full thesis paper
            </h3>
            <p style={{ margin: 0, fontSize: 12, color: "rgba(17,17,17,0.45)" }}>
              Complete methodology, circuit diagrams, test data, and academic references — University of Ilorin, EEE Department.
            </p>
          </div>
          <a
            href="https://1drv.ms/w/c/4f9ac631bcb2d9fc/IQD82bK8McaaIIBPMwEAAAAAAbTDceez4y79cGUezFkNrGw?e=eO3LFJ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px",
              background: "#111", color: "#fff",
              fontSize: 13, fontWeight: 500, letterSpacing: "-0.01em",
              textDecoration: "none",
              borderRadius: 6,
              flexShrink: 0,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Read the paper ↗
          </a>
        </div>

        {/* tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
          {["HCI", "Wearable Technology", "Embedded Systems", "User Research", "Elderly Care", "Sensor Fusion", "Fall Detection", "Healthcare Design", "Nigeria"].map(tag => (
            <span key={tag} style={{
              fontSize: 10, letterSpacing: "0.05em",
              padding: "4px 10px", borderRadius: 20,
              border: "1px solid rgba(17,17,17,0.1)", color: "rgba(17,17,17,0.4)",
            }}>{tag}</span>
          ))}
        </div>
      </section>

      <style>{`
        .hci-two-col { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; }
        .hci-two-col-wide { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
        .hci-three-col-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .hci-three-col-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
        .hci-four-col { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }
        .hci-four-col-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:40px; margin-bottom:64px; padding-bottom:64px; border-bottom:1px solid rgba(17,17,17,0.08); }
        .hci-four-col-alert { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:rgba(17,17,17,0.08); border:1px solid rgba(17,17,17,0.08); border-radius:10px; overflow:hidden; margin-top:64px; }
        .hci-implications-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .hci-three-approach { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(17,17,17,0.08); border:1px solid rgba(17,17,17,0.08); border-radius:10px; overflow:hidden; margin-top:64px; }
        .hci-photo-four { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-top:32px; }
        .hci-closing-quote { padding:48px 56px; }

        @media (max-width:640px) {
          .hci-two-col, .hci-two-col-wide { grid-template-columns:1fr; gap:28px; }
          .hci-three-col-cards { grid-template-columns:1fr; }
          .hci-three-approach { grid-template-columns:1fr; }
          .hci-three-approach > * { border-right:none !important; }
          .hci-three-col-steps { grid-template-columns:1fr; }
          .hci-four-col { grid-template-columns:1fr 1fr; }
          .hci-four-col-stats { grid-template-columns:1fr 1fr; gap:24px; margin-bottom:40px; padding-bottom:40px; }
          .hci-four-col-alert { grid-template-columns:1fr 1fr; }
          .hci-implications-grid { grid-template-columns:1fr; }
          .hci-photo-four { grid-template-columns:1fr 1fr; }
          .hci-closing-quote { padding:28px 20px; }
        }
        @media (min-width:641px) and (max-width:1024px) {
          .hci-two-col, .hci-two-col-wide { gap:40px; }
          .hci-four-col { grid-template-columns:1fr 1fr; }
          .hci-four-col-stats { grid-template-columns:1fr 1fr; gap:28px; }
          .hci-four-col-alert { grid-template-columns:1fr 1fr; }
          .hci-photo-four { grid-template-columns:1fr 1fr; }
        }
      `}</style>

    </div>
  );
}
