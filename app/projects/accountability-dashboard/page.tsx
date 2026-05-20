"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

const LIVE = "https://accountability-group.vercel.app/";

export default function AccountabilityDashboardPage() {
  return (
    <main style={{ fontFamily: "inherit", background: "#fff" }}>
      <style>{`
        .ac-grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; }
        .ac-grid-2 { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; }
        .ac-grid-decision { display: grid; grid-template-columns: 240px 1fr; gap: 48px; }
        .ac-grid-result { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .ac-pipeline-row { display: grid; grid-template-columns: 200px 1fr; gap: 48px; border-top: 1px solid #1a1a1a; padding: 32px 0; }
        @media (max-width: 768px) {
          .ac-grid-4 { grid-template-columns: repeat(2,1fr); }
          .ac-grid-2 { grid-template-columns: 1fr; gap: 24px; }
          .ac-grid-decision { grid-template-columns: 1fr; gap: 16px; }
          .ac-grid-result { grid-template-columns: 1fr; }
          .ac-pipeline-row { grid-template-columns: 1fr; gap: 16px; }
          .ac-hero-pad { padding: 64px 24px 48px !important; }
          .ac-section-pad { padding: 64px 24px !important; }
          .ac-h1 { font-size: 42px !important; }
          .ac-h2 { font-size: 32px !important; }
          .ac-h3 { font-size: 26px !important; }
        }
      `}</style>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="ac-hero-pad" style={{
        background: "#0a0a0a", minHeight: "80vh",
        padding: "80px 48px", display: "flex", flexDirection: "column", justifyContent: "flex-end",
      }}>
        <Fade>
          <p style={{ fontSize: 11, color: "#444", letterSpacing: "0.1em", marginBottom: 32 }}>
            WORK / ACCOUNTABILITY DASHBOARD
          </p>
        </Fade>
        <Fade delay={0.06}>
          <h1 className="ac-h1" style={{
            fontSize: "clamp(52px, 8vw, 104px)", color: "#fff", fontWeight: 400,
            letterSpacing: "-0.04em", lineHeight: 0.92, maxWidth: 900, margin: 0,
          }}>
            From WhatsApp Noise<br />to Behavioural<br />Intelligence.
          </h1>
        </Fade>
        <Fade delay={0.12}>
          <p style={{
            color: "rgba(255,255,255,0.35)", fontSize: 18, fontWeight: 300,
            marginTop: 20, maxWidth: 680, lineHeight: 1.6,
          }}>
            How I used Claude, GPT-4o, and Gemini to turn 12 days of group chat into a live
            behavioural analytics dashboard.
          </p>
        </Fade>
        <Fade delay={0.18}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 32 }}>
            {["AI-Augmented UX", "Behavioural Data", "Solo Project", "May 2026"].map(tag => (
              <span key={tag} style={{
                background: "#1a1a1a", border: "1px solid #222", color: "#555",
                borderRadius: 20, padding: "5px 14px", fontSize: 11, letterSpacing: "0.05em",
              }}>{tag}</span>
            ))}
            <a href={LIVE} target="_blank" rel="noopener noreferrer" style={{
              background: "#0f1f0f", border: "1px solid #1a2a1a", color: "#7ab87a",
              borderRadius: 20, padding: "5px 14px", fontSize: 11, letterSpacing: "0.05em",
              textDecoration: "none",
            }}>View Live Dashboard ↗</a>
          </div>
        </Fade>
      </section>

      {/* ── COVER IMAGE ────────────────────────────────────────────────── */}
      <div style={{ background: "#0a0a0a", padding: "0 48px 64px" }}>
        <Fade>
          <div style={{ borderRadius: 12, overflow: "hidden" }}>
            <Image
              src="/accountability/Screenshot.png"
              alt="Accountability Dashboard — live product screenshot"
              width={2464} height={1550} priority unoptimized
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Fade>
      </div>

      {/* ── STATS STRIP ────────────────────────────────────────────────── */}
      <section className="ac-section-pad" style={{
        background: "#fff", borderTop: "1px solid #f0f0f0", padding: "48px 48px",
      }}>
        <Fade>
          <div className="ac-grid-4">
            {[
              { n: "12",   label: "Members tracked" },
              { n: "12",   label: "Days of data" },
              { n: "+14%", label: "Week-on-week improvement" },
              { n: "3",    label: "LLMs used" },
            ].map(({ n, label }) => (
              <div key={label} style={{ padding: "32px 24px", borderRight: "1px solid #f0f0f0" }}>
                <p style={{
                  fontSize: "clamp(40px,5vw,56px)", fontWeight: 400, color: "#111",
                  letterSpacing: "-0.04em", margin: 0, lineHeight: 1,
                }}>{n}</p>
                <p style={{ fontSize: 11, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 10 }}>{label}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* ── THE SETUP ──────────────────────────────────────────────────── */}
      <section className="ac-section-pad" style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: "96px 48px" }}>
        <Fade>
          <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>The Setup</p>
          <h2 className="ac-h2" style={{
            fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, letterSpacing: "-0.04em",
            color: "#111", maxWidth: 820, marginBottom: 48, lineHeight: 1.05,
          }}>
            A WhatsApp group. 12 members.<br />3 years of dying and restarting.
          </h2>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 660 }}>
            I run a WhatsApp accountability group. Twelve members. Three years of restarts, momentum
            spikes, and slow deaths. The core problem was never motivation — it was visibility. Nobody
            could see their own patterns. Nobody could see the group&apos;s patterns. Goals were posted
            into a void.
          </p>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 660, marginTop: 24 }}>
            When we relaunched in May 2026, I decided to do something different. I exported the chat
            log, fed it to multiple LLMs, and spent a week turning raw human conversation into a
            structured behavioural analytics system. The result is a live dashboard that surfaces
            attendance rates, completion scores, streak patterns, and carry-over friction — for twelve
            people, across twelve days, from a single WhatsApp text file.
          </p>
        </Fade>
      </section>

      {/* ── THE DATA PROBLEM ───────────────────────────────────────────── */}
      <section className="ac-section-pad" style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: "96px 48px" }}>
        <Fade>
          <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>The Data Problem</p>
          <h2 className="ac-h2" style={{
            fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 400, letterSpacing: "-0.04em",
            color: "#111", maxWidth: 800, marginBottom: 48, lineHeight: 1.05,
          }}>
            WhatsApp chat exports are some of the messiest data you can work with.
          </h2>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 660, marginBottom: 40 }}>
            A single day of group activity produces timestamped messages in inconsistent formats, goals
            written in freeform natural language with no taxonomy or schema, and completion signals that
            range from a tick emoji to "done!" to complete silence. Before I could design anything, I
            had to turn this into structured data. That&apos;s where the AI pipeline came in.
          </p>
          <div style={{
            background: "#f8f8f8", borderLeft: "3px solid #e8e8e8", borderRadius: 8,
            padding: "24px 32px", fontFamily: "monospace", fontSize: 13, color: "#555",
            lineHeight: 2.2, maxWidth: 660,
          }}>
            {[
              "Timestamped messages in inconsistent formats",
              "Goals written in freeform natural language — no taxonomy, no schema",
              "Completion signals ranging from ✓ to 'done!' to complete silence",
              "Carry-over goals reappearing across days with no explicit link",
              "Noise — reactions, voice notes, off-topic messages, system notifications",
            ].map(item => (
              <div key={item}>– {item}</div>
            ))}
          </div>
        </Fade>
      </section>

      {/* ── AI PIPELINE ────────────────────────────────────────────────── */}
      <section className="ac-section-pad" style={{ background: "#111", padding: "96px 48px" }}>
        <Fade>
          <p style={{ fontSize: 11, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>The AI Pipeline</p>
          <h2 className="ac-h2" style={{
            fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, letterSpacing: "-0.04em",
            color: "#fff", marginBottom: 16, lineHeight: 1.05,
          }}>
            The right model for the right job.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, fontWeight: 300, marginBottom: 64 }}>
            I didn&apos;t use one model. I used the right model for each task.
          </p>

          {[
            {
              model: "Claude", color: "#d4956a",
              phase: "Phase 1 — Raw extraction",
              body: "I fed the full chat export to Claude in chunks with a structured extraction prompt. The task: identify each member's posts per day, extract every goal statement, flag completion signals, and output a structured JSON object per member per day. Claude handled ambiguous language well — it could infer that 'knocked it out' meant completion and 'still pending from yesterday' meant carry-over, without explicit rules for every case.",
            },
            {
              model: "GPT-4o", color: "#74b587",
              phase: "Phase 2 — Goal taxonomy",
              body: "Once I had raw goal text extracted, I needed to categorise it. I used GPT-4o for taxonomy classification — feeding each goal statement and asking it to assign a domain: health, career, faith/devotion, learning, creative, financial, social. GPT-4o's instruction-following on classification tasks with constrained output schemas is tight. I could say 'output only one of these seven categories, no explanation' and it would comply consistently.",
            },
            {
              model: "Claude", color: "#d4956a",
              phase: "Phase 3 — Pattern analysis",
              body: "With structured data in hand, I moved back to Claude for higher-order pattern analysis — identifying members whose goal domains shift between weeks, finding goals that appear more than 3 times without a completion signal, and flagging members who post goals but never close the loop. The output wasn't copy-paste — it was raw material I interrogated, questioned, and refined.",
            },
            {
              model: "Gemini", color: "#6ab0d4",
              phase: "Phase 4 — Copywriting",
              body: "The dashboard's tone was critical. Negative data — missed days, unresolved goals — needed to be framed with warmth, not shame. I used Gemini to generate first drafts of the nudge copy, then rewrote every line. Gemini's drafts were too corporate. The final voice was mine. But having a draft to react to was faster than starting from blank.",
            },
          ].map(({ model, color, phase, body }) => (
            <div key={phase} className="ac-pipeline-row">
              <div>
                <span style={{
                  background: "#1a1a1a", border: "0.5px solid #2a2a2a", color,
                  borderRadius: 24, padding: "8px 18px", fontSize: 13, fontWeight: 500,
                  display: "inline-block",
                }}>{model}</span>
              </div>
              <div>
                <p style={{ fontSize: 18, fontWeight: 500, color: "#fff", marginBottom: 10 }}>{phase}</p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, fontWeight: 300, lineHeight: 1.8 }}>{body}</p>
              </div>
            </div>
          ))}

          <Fade delay={0.1}>
            <div style={{
              background: "#0a0a0a", border: "0.5px solid #2a2a2a", borderRadius: 12,
              padding: 32, marginTop: 48,
            }}>
              <p style={{
                fontStyle: "italic", color: "rgba(255,255,255,0.6)",
                fontSize: "clamp(18px,2.5vw,26px)", fontWeight: 300, letterSpacing: "-0.02em",
                margin: 0,
              }}>
                &ldquo;The LLM surfaces patterns. I decided which patterns mattered and why.&rdquo;
              </p>
            </div>
          </Fade>
        </Fade>
      </section>

      {/* ── VIDEO ──────────────────────────────────────────────────────── */}
      <section className="ac-section-pad" style={{ background: "#0a0a0a", padding: "64px 48px" }}>
        <Fade>
          <p style={{ fontSize: 11, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Dashboard walkthrough</p>
          <div style={{ borderRadius: 12, overflow: "hidden", background: "#111" }}>
            <video src="/accountability/accountability.mp4" controls playsInline
              style={{ width: "100%", display: "block", maxHeight: "75vh", objectFit: "contain" }} />
          </div>
        </Fade>
      </section>

      {/* ── METRICS ────────────────────────────────────────────────────── */}
      <section className="ac-section-pad" style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: "96px 48px" }}>
        <Fade>
          <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>The Metrics</p>
          <h2 className="ac-h2" style={{
            fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, letterSpacing: "-0.04em",
            color: "#111", marginBottom: 16, lineHeight: 1.05,
          }}>
            AI extracted the data.<br />I designed the metrics.
          </h2>
          <p style={{ fontSize: 20, color: "#aaa", fontWeight: 300, marginBottom: 64 }}>This distinction matters.</p>

          {[
            {
              name: "Attendance Rate", formula: "Days posted ÷ 12",
              body: "Simple, honest, unambiguous. A member who posts 3 of 12 days has a 25% attendance rate. No inference required. The baseline metric that everything else is measured against.",
              extra: null,
            },
            {
              name: "Completion Rate", formula: "Completed ÷ total goals",
              body: "This required inference — not every completion signal was an emoji. I used the AI extraction output and then manually audited every ambiguous case. The imprecision is documented. A future version uses a structured input form.",
              extra: null,
            },
            {
              name: "Best Streak", formula: "Consecutive active days",
              body: "A streak of 12 (Mubaraq, every single day) looks different from a 3-day streak buried in a week of silence. This metric rewards habit formation, not just output. Knowing your streak makes the next day feel meaningful.",
              extra: null,
            },
            {
              name: "Composite Score", formula: "40% · 40% · 20%",
              body: "A pure completion leaderboard punishes ambition — someone who sets 10 goals and completes 7 ranks below someone who sets 2 and completes both. A pure attendance leaderboard rewards showing up without doing anything. The 40/40/20 weighting resists gaming: you can't manipulate one metric without the others.",
              extra: (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
                  <span style={{ background: "#f0f4ff", color: "#4a6cf7", borderRadius: 20, padding: "4px 12px", fontSize: 11 }}>40% Attendance</span>
                  <span style={{ background: "#f0fff4", color: "#2a9d4a", borderRadius: 20, padding: "4px 12px", fontSize: 11 }}>40% Completion</span>
                  <span style={{ background: "#fff8f0", color: "#e8a030", borderRadius: 20, padding: "4px 12px", fontSize: 11 }}>20% Streak</span>
                </div>
              ),
            },
            {
              name: "Carry-over Frequency", formula: "Unresolved recurring goals",
              body: "Goals that appeared on consecutive days without a completion signal. This is a friction proxy — it identifies where effort is being blocked, not just absent. A goal that reappears 6 days running isn't a willpower problem. It's a task-sizing or scheduling problem. Naming it changes how people respond to it.",
              extra: null,
            },
          ].map(({ name, formula, body, extra }) => (
            <div key={name} className="ac-grid-2" style={{ borderTop: "1px solid #f0f0f0", padding: "32px 0" }}>
              <div>
                <p style={{ fontSize: 20, fontWeight: 500, color: "#111", margin: 0 }}>{name}</p>
                <p style={{ fontSize: 13, color: "#bbb", fontWeight: 300, marginTop: 6 }}>{formula}</p>
                {extra}
              </div>
              <div>
                <p style={{ fontSize: 15, color: "#666", fontWeight: 300, lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </Fade>
      </section>

      {/* ── DESIGN DECISIONS ───────────────────────────────────────────── */}
      <section className="ac-section-pad" style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: "96px 48px" }}>
        <Fade>
          <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>Design Decisions</p>
          <h2 className="ac-h2" style={{
            fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, letterSpacing: "-0.04em",
            color: "#111", marginBottom: 64, lineHeight: 1.05, maxWidth: 820,
          }}>
            Four decisions. All driven by the user&apos;s actual context.
          </h2>

          {[
            {
              n: "01", name: "Static HTML, no framework",
              body: "The user base is WhatsApp-native. They will not download an app or sign up for a platform. The review needed to be a single URL that opens instantly on mobile, works in WhatsApp's in-app browser, and requires nothing from the recipient. WhatsApp's iOS WebView blocks external CDN resources — Google Fonts, external JS libraries, anything loaded remotely fails silently. The first version used Google Fonts and an external library. Neither loaded on iOS. Full refactor in a day.",
              extra: null,
            },
            {
              n: "02", name: "Member-first IA",
              body: "The sticky horizontal nav puts every member's name at the top. Tap your name first. See your own data first. Self-interest before group interest. This inverts the typical analytics dashboard pattern which leads with aggregate data. In a peer accountability context, a person opens the link to see themselves. If they can't find themselves in the first 3 seconds, they close it.",
              extra: null,
            },
            {
              n: "03", name: "Streak calendar — GitHub contribution graph",
              body: "Twelve dots per member. Green = active. Grey = absent. The GitHub contribution graph is one of the most effective consistency visualisations ever designed. A row of grey dots communicates missed days more powerfully than a percentage does. The gap is felt, not just read. Dots at 21px — the exact size that fits twelve days on a 375px mobile screen without horizontal scroll.",
              extra: (
                <div style={{ marginTop: 20 }}>
                  <div style={{ display: "inline-flex", gap: 6, flexWrap: "wrap" }}>
                    {[1,0,1,1,0,1,1,1,0,1,0,1].map((active, i) => (
                      <div key={i} style={{
                        width: 18, height: 18, borderRadius: "50%",
                        background: active ? "#7ab87a" : "#e0e0e0",
                      }} />
                    ))}
                  </div>
                  <p style={{ fontSize: 10, color: "#bbb", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 8 }}>
                    12 days — each dot a day
                  </p>
                </div>
              ),
            },
            {
              n: "04", name: "Warm copywriting on negative data",
              body: "The 'Carried-over Hall of Fame' and 'Members who need a nudge — with love' sections were written with deliberate psychological care. Accountability systems fail when negative feedback triggers defensiveness. The strategy: name the specific repeated goal, not the person's character. Use humour to disarm. Frame low-attendance as unrealised potential, not failure. Murphy had 1 active day. The copy says: 'Three of four goals ticked that day, which means the system works when you use it.' That's a reframe, not a shame.",
              extra: null,
            },
          ].map(({ n, name, body, extra }) => (
            <div key={n} className="ac-grid-decision" style={{ borderTop: "1px solid #f0f0f0", padding: "32px 0" }}>
              <div>
                <p style={{ fontSize: 11, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{n}</p>
                <p style={{ fontSize: 18, fontWeight: 500, color: "#111", marginTop: 8, marginBottom: 0 }}>{name}</p>
              </div>
              <div>
                <p style={{ fontSize: 15, color: "#666", fontWeight: 300, lineHeight: 1.8, margin: 0 }}>{body}</p>
                {extra}
              </div>
            </div>
          ))}
        </Fade>
      </section>

      {/* ── RESULTS ────────────────────────────────────────────────────── */}
      <section className="ac-section-pad" style={{ background: "#111", padding: "96px 48px" }}>
        <Fade>
          <p style={{ fontSize: 11, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>Results</p>
          <h2 className="ac-h2" style={{
            fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, letterSpacing: "-0.04em",
            color: "#fff", marginBottom: 64, lineHeight: 1.05,
          }}>
            14% better. In two weeks.<br />From a WhatsApp group.
          </h2>
          <div className="ac-grid-result">
            {[
              { n: "12/12", label: "Members opened within 30 minutes" },
              { n: "+14%",  label: "Week-on-week completion rate improvement" },
              { n: "1 week", label: "From raw chat export to live deployed dashboard" },
              { n: "3 LLMs", label: "Claude · GPT-4o · Gemini — each for a different job" },
            ].map(({ n, label }) => (
              <div key={n} style={{ background: "#1a1a1a", borderRadius: 12, padding: 32 }}>
                <p style={{ fontSize: 42, fontWeight: 400, color: "#fff", margin: 0, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 12, lineHeight: 1.5 }}>{label}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="ac-section-pad" style={{
        background: "#fff", borderTop: "1px solid #f0f0f0",
        padding: "96px 48px", textAlign: "center",
      }}>
        <Fade>
          <h2 style={{
            fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, letterSpacing: "-0.04em",
            color: "#111", margin: "0 auto",
          }}>See it live.</h2>
          <p style={{ fontSize: 16, color: "#aaa", fontWeight: 300, marginTop: 16, marginBottom: 40 }}>
            Twelve members. Twelve days. Real data.
          </p>
          <a href={LIVE} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", background: "#111", color: "#fff",
            borderRadius: 28, padding: "14px 32px", fontSize: 14, fontWeight: 500,
            textDecoration: "none", letterSpacing: "0.01em",
          }}>
            Open Dashboard ↗
          </a>
        </Fade>
      </section>

      {/* ── REFLECTION ─────────────────────────────────────────────────── */}
      <section className="ac-section-pad" style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: "96px 48px" }}>
        <Fade>
          <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 48 }}>Reflection</p>
          <blockquote style={{
            fontSize: "clamp(24px,3.5vw,42px)", fontStyle: "italic", fontWeight: 300,
            color: "#111", letterSpacing: "-0.025em", maxWidth: 820,
            margin: "0 0 48px 0", lineHeight: 1.3,
          }}>
            &ldquo;The skill isn&apos;t knowing how to prompt. It&apos;s knowing what to ask for,
            what to do with the answer, and when the model is wrong.&rdquo;
          </blockquote>
          <div style={{ maxWidth: 660 }}>
            <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, marginBottom: 16 }}>
              The AI did the heavy lifting on extraction and classification. I did the thinking on what
              to extract, which patterns matter, how to weight the metrics, how to frame the findings,
              and how to design the experience.
            </p>
            <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, marginBottom: 48 }}>
              That division of labour is the model for how senior designers will work with AI in the
              next five years. Not &ldquo;AI replaces the designer.&rdquo; Not &ldquo;designer uses AI
              as a writing assistant.&rdquo; Something more precise: the designer defines the questions,
              the AI processes the data at scale, the designer interprets the output and makes the
              judgment calls that change human behaviour.
            </p>
          </div>
          {[
            "Structured input design upstream makes better analysis downstream",
            "Use LLMs for extraction and classification — use judgment for everything else",
            "Behavioural data is harder to collect than surveys and more honest",
            "Positionality matters even in data work — document it, don't hide it",
          ].map(t => (
            <div key={t} style={{ borderTop: "1px solid #f0f0f0", padding: "20px 0" }}>
              <p style={{ fontSize: 16, fontWeight: 500, color: "#111", margin: 0 }}>{t}</p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 32, marginTop: 16 }}>
            <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Stack</p>
            <p style={{ fontSize: 14, color: "#999", fontWeight: 300 }}>Claude · GPT-4o · Gemini · HTML5 · CSS3 · Vanilla JS · Vercel</p>
          </div>
        </Fade>
      </section>

    </main>
  );
}
