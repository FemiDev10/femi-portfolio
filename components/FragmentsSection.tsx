"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ─── draggable wrapper ──────────────────────────────────────── */
function Card({
  children,
  left,
  top,
}: {
  children: React.ReactNode;
  left: string | number;
  top: number;
}) {
  const [active, setActive] = useState(false);
  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragStart={() => setActive(true)}
      onDragEnd={() => setActive(false)}
      whileHover={{ scale: active ? 1 : 1.03 }}
      whileDrag={{ scale: 1.06, cursor: "grabbing" }}
      style={{
        position: "absolute",
        left,
        top,
        zIndex: active ? 200 : 10,
        userSelect: "none",
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── sticker ────────────────────────────────────────────────── */
function Sticker({
  children,
  bg,
  color = "#fff",
  rotate = 0,
}: {
  children: React.ReactNode;
  bg: string;
  color?: string;
  rotate?: number;
}) {
  return (
    <div
      style={{
        background: bg,
        color,
        fontWeight: 600,
        fontSize: 11,
        padding: "9px 16px",
        borderRadius: 7,
        whiteSpace: "nowrap",
        letterSpacing: "-0.01em",
        transform: `rotate(${rotate}deg)`,
        display: "inline-block",
        boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
      }}
    >
      {children}
    </div>
  );
}

/* ─── card shells ────────────────────────────────────────────── */
const D = (w: number, extra?: React.CSSProperties): React.CSSProperties => ({
  background: "#181818",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 12,
  padding: "14px 16px",
  width: w,
  color: "#fff",
  boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
  ...extra,
});
const W = (w: number, extra?: React.CSSProperties): React.CSSProperties => ({
  background: "#fff",
  borderRadius: 12,
  padding: "14px 16px",
  width: w,
  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
  ...extra,
});
const lbl: React.CSSProperties = {
  fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase",
  color: "rgba(255,255,255,0.28)", marginBottom: 10,
};
const lblW: React.CSSProperties = {
  fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase",
  color: "rgba(17,17,17,0.35)", marginBottom: 10,
};
function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div style={{ height: 3, background: "rgba(0,0,0,0.08)", borderRadius: 99 }}>
      <div style={{ height: 3, width: `${pct}%`, background: color, borderRadius: 99 }} />
    </div>
  );
}

/* ─── mobile horizontal strip ───────────────────────────────── */
function MobileFragments() {
  const cards = [
    <Sticker key="s1" bg="#FFE24B" color="#111" rotate={0}>pixel perfect →</Sticker>,
    <Sticker key="s2" bg="#0f172a" color="rgba(255,255,255,0.85)" rotate={0}>design engineer ⚡</Sticker>,
    <div key="c1" style={D(260)}>
      <p style={lbl}>NOW PLAYING</p>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 6, background: "linear-gradient(135deg,#1DB954,#0a6b2d)", flexShrink: 0 }} />
        <div><p style={{ fontSize: 12, fontWeight: 500 }}>Komọlẹ́</p><p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Tems</p></div>
      </div>
      <Bar pct={44} color="#1DB954" />
    </div>,
    <Sticker key="s3" bg="#027DFD" rotate={0}>Flutter dev 🦋</Sticker>,
    <div key="c2" style={W(260)}>
      <p style={{ fontSize: 52, fontWeight: 700, lineHeight: 1, color: "#111", letterSpacing: "-0.04em" }}>5</p>
      <p style={{ fontSize: 9, color: "rgba(17,17,17,0.4)", marginTop: 4, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>years of craft</p>
    </div>,
    <div key="c3" style={D(260)}>
      <p style={lbl}>PALETTE</p>
      <div style={{ display: "flex", gap: 6 }}>
        {["#111", "#3b5bdb", "#f97316", "#FFE24B", "#f5f0e8"].map((c) => (
          <div key={c} style={{ width: 32, height: 32, borderRadius: 6, background: c }} />
        ))}
      </div>
    </div>,
    <Sticker key="s4" bg="#4F46E5" rotate={0}>ships code ↗</Sticker>,
    <Sticker key="s5" bg="#7c3aed" rotate={0}>HCI researcher 🔬</Sticker>,
    <div key="c4" style={W(260)}>
      <p style={lblW}>DAILY TOOLS</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 10px" }}>
        {["Figma", "Next.js", "Framer", "Flutter", "Tailwind", "VS Code", "Linear", "Notion"].map((t) => (
          <span key={t} style={{ fontSize: 11, color: "#111", fontWeight: 500 }}>{t}</span>
        ))}
      </div>
    </div>,
    <div key="c5" style={D(260)}>
      <p style={{ fontSize: 13, fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
        &ldquo;Design without engineering is just art.&rdquo;
      </p>
      <p style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", marginTop: 12 }}>— Femi Jimoh, probably</p>
    </div>,
    <Sticker key="s6" bg="#0f766e" rotate={0}>zero figma handoffs 🚫</Sticker>,
    <div key="c6" style={W(260)}>
      <p style={lblW}>DEPTH</p>
      {[{ skill: "UI Design", pct: 95, color: "#3b5bdb" }, { skill: "Frontend", pct: 82, color: "#f97316" }, { skill: "Research", pct: 74, color: "#22c55e" }, { skill: "Motion", pct: 68, color: "#a855f7" }].map(({ skill, pct, color }) => (
        <div key={skill} style={{ marginBottom: 7 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <span style={{ fontSize: 9, color: "#111" }}>{skill}</span>
            <span style={{ fontSize: 9, color: "rgba(17,17,17,0.3)" }}>{pct}%</span>
          </div>
          <div style={{ height: 3, background: "#f0f0f0", borderRadius: 99 }}>
            <div style={{ height: 3, width: `${pct}%`, background: color, borderRadius: 99 }} />
          </div>
        </div>
      ))}
    </div>,
    <Sticker key="s7" bg="#ea580c" rotate={0}>research first →</Sticker>,
    <div key="c7" style={D(260)}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
        <span style={{ fontSize: 11, fontWeight: 600 }}>Open to work</span>
      </div>
      <p style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>Senior roles · Full-time<br />Remote or Lagos</p>
    </div>,
    <Sticker key="s8" bg="#FF4F4F" rotate={0}>Lagos, NG →</Sticker>,
    <div key="c8" style={D(260)}>
      <p style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>100%</p>
      <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>shipped</p>
    </div>,
    <Sticker key="s9" bg="#22c55e" rotate={0}>PM brain 🧠</Sticker>,
    <div key="c9" style={D(260)}>
      <p style={{ fontSize: 36, fontWeight: 700, color: "#f97316", letterSpacing: "-0.04em", lineHeight: 1 }}>847</p>
      <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>components shipped</p>
    </div>,
    <Sticker key="s10" bg="#f43f5e" rotate={0}>2025 → shipping</Sticker>,
    <div key="c10" style={D(260)}>
      <p style={{ fontSize: 28, fontWeight: 700, color: "#3b5bdb", letterSpacing: "-0.04em", lineHeight: 1 }}>12+</p>
      <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>products shipped</p>
    </div>,
  ];

  return (
    <section style={{ background: "#0c0c0c" }}>
      <div style={{
        padding: "16px 20px 12px",
        display: "flex", alignItems: "baseline", justifyContent: "space-between",
        borderTop: "1px solid rgba(17,17,17,0.08)",
        background: "#0c0c0c",
      }}>
        <p style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Fragments</p>
        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.2)" }}>scroll to explore</p>
      </div>
      <div
        className="no-scrollbar"
        style={{
          display:               "flex",
          gap:                   12,
          overflowX:             "auto",
          padding:               "20px 20px 32px",
          WebkitOverflowScrolling: "touch",
          backgroundImage:       "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize:        "24px 24px",
          alignItems:            "center",
        }}
      >
        {cards.map((card, i) => (
          <div key={i} style={{ flexShrink: 0 }}>
            {card}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── section ────────────────────────────────────────────────── */
export default function FragmentsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) return <MobileFragments />;

  return (
    <section>
      <div className="px-8 py-5 flex items-baseline justify-between border-t border-[#111]/8">
        <p className="text-[9px] tracking-widest uppercase text-[#111]/30">Fragments</p>
        <p className="text-[9px] text-[#111]/25">drag anything</p>
      </div>

      {/* ── full-width dark stage ──────────────────────────────── */}
      <div
        style={{
          position: "relative",
          height: 1020,
          width: "100%",
          overflow: "hidden",
          background: "#0c0c0c",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >

        {/* ══ ROW 1  y 44–150 ════════════════════════════════════ */}

        <Card left="1.5%" top={56}>
          <Sticker bg="#FFE24B" color="#111" rotate={-10}>pixel perfect →</Sticker>
        </Card>

        <Card left="11%" top={44}>
          <Sticker bg="#0f172a" color="rgba(255,255,255,0.85)" rotate={5}>design engineer ⚡</Sticker>
        </Card>

        <Card left="21%" top={38}>
          <div style={D(224)}>
            <p style={lbl}>NOW PLAYING</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 6, background: "linear-gradient(135deg,#1DB954,#0a6b2d)", flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 12, fontWeight: 500 }}>Komọlẹ́</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Tems</p>
              </div>
            </div>
            <Bar pct={44} color="#1DB954" />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.22)" }}>1:24</span>
              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.22)" }}>3:18</span>
            </div>
          </div>
        </Card>

        <Card left="41%" top={50}>
          <Sticker bg="#027DFD" rotate={7}>Flutter dev 🦋</Sticker>
        </Card>

        <Card left="51%" top={38}>
          <div style={W(122)}>
            <p style={{ fontSize: 52, fontWeight: 700, lineHeight: 1, color: "#111", letterSpacing: "-0.04em" }}>5</p>
            <p style={{ fontSize: 9, color: "rgba(17,17,17,0.4)", marginTop: 4, letterSpacing: "0.04em", textTransform: "uppercase" }}>years of craft</p>
          </div>
        </Card>

        <Card left="63%" top={46}>
          <div style={D(192)}>
            <p style={lbl}>PALETTE</p>
            <div style={{ display: "flex", gap: 6 }}>
              {["#111", "#3b5bdb", "#f97316", "#FFE24B", "#f5f0e8"].map((c) => (
                <div key={c} style={{ width: 26, height: 26, borderRadius: 6, background: c }} />
              ))}
            </div>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.18)", marginTop: 8 }}>brand tokens</p>
          </div>
        </Card>

        <Card left="79%" top={44}>
          <div style={D(178)}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: "#ff7262" }} />
              <span style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}>FIGMA FILE</span>
            </div>
            <div style={{ background: "#2c2c2c", borderRadius: 6, padding: 10, marginBottom: 6 }}>
              <div style={{ height: 5, background: "rgba(255,255,255,0.1)", borderRadius: 3, marginBottom: 4, width: "70%" }} />
              <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 3, width: "50%" }} />
            </div>
            <p style={{ fontSize: 10, fontWeight: 500 }}>DP Design System</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>847 components</p>
          </div>
        </Card>

        <Card left="91%" top={52}>
          <Sticker bg="#4F46E5" rotate={-6}>ships code ↗</Sticker>
        </Card>

        {/* ══ ROW 2  y 200–340 ═══════════════════════════════════ */}

        <Card left="1%" top={205}>
          <div style={D(150)}>
            <p style={lbl}>PROTOTYPE</p>
            <div style={{ width: 74, height: 122, border: "2px solid rgba(255,255,255,0.13)", borderRadius: 14, margin: "0 auto", padding: 5 }}>
              <div style={{ width: 20, height: 3, background: "rgba(255,255,255,0.13)", borderRadius: 99, margin: "0 auto 5px" }} />
              <div style={{ height: 8, background: "rgba(59,91,219,0.6)", borderRadius: 2, marginBottom: 3 }} />
              <div style={{ height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 2, marginBottom: 2 }} />
              <div style={{ height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 2, marginBottom: 2 }} />
              <div style={{ display: "flex", gap: 3, marginTop: 8 }}>
                <div style={{ flex: 1, height: 24, background: "rgba(249,115,22,0.5)", borderRadius: 4 }} />
                <div style={{ flex: 1, height: 24, background: "rgba(255,255,255,0.06)", borderRadius: 4 }} />
              </div>
            </div>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", textAlign: "center", marginTop: 8 }}>F1 Money Race</p>
          </div>
        </Card>

        <Card left="13%" top={215}>
          <Sticker bg="#7c3aed" rotate={-9}>HCI researcher 🔬</Sticker>
        </Card>

        <Card left="23%" top={222}>
          <div style={W(204)}>
            <p style={lblW}>DAILY TOOLS</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 10px" }}>
              {["Figma", "Next.js", "Framer", "Flutter", "Tailwind", "VS Code", "Linear", "Notion"].map((t) => (
                <span key={t} style={{ fontSize: 11, color: "#111", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </Card>

        <Card left="41%" top={205}>
          <div style={D(252)}>
            <p style={{ fontSize: 13, fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
              &ldquo;Design without engineering<br />is just art.&rdquo;
            </p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", marginTop: 12 }}>— Femi Jimoh, probably</p>
          </div>
        </Card>

        <Card left="62%" top={210}>
          <Sticker bg="#0f766e" rotate={11}>zero figma handoffs 🚫</Sticker>
        </Card>

        <Card left="73%" top={200}>
          <div style={W(170)}>
            <p style={lblW}>DEPTH</p>
            {[
              { skill: "UI Design", pct: 95, color: "#3b5bdb" },
              { skill: "Frontend",  pct: 82, color: "#f97316" },
              { skill: "Research",  pct: 74, color: "#22c55e" },
              { skill: "Motion",    pct: 68, color: "#a855f7" },
            ].map(({ skill, pct, color }) => (
              <div key={skill} style={{ marginBottom: 7 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 9, color: "#111" }}>{skill}</span>
                  <span style={{ fontSize: 9, color: "rgba(17,17,17,0.3)" }}>{pct}%</span>
                </div>
                <div style={{ height: 3, background: "#f0f0f0", borderRadius: 99 }}>
                  <div style={{ height: 3, width: `${pct}%`, background: color, borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card left="89%" top={215}>
          <Sticker bg="#d97706" rotate={-7}>ships fast →</Sticker>
        </Card>

        {/* ══ ROW 3  y 388–510 ═══════════════════════════════════ */}

        <Card left="2%" top={392}>
          <div style={W(202)}>
            <p style={lblW}>CURRENTLY READING</p>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ width: 36, height: 50, borderRadius: 4, background: "linear-gradient(135deg,#3b5bdb,#1e3a8a)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 14 }}>📐</span>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: "#111", lineHeight: 1.3 }}>The Design of Everyday Things</p>
                <p style={{ fontSize: 9, color: "rgba(17,17,17,0.4)", marginTop: 3 }}>Don Norman</p>
              </div>
            </div>
          </div>
        </Card>

        <Card left="18%" top={404}>
          <Sticker bg="#ea580c" rotate={-5}>research first →</Sticker>
        </Card>

        <Card left="27%" top={386}>
          <div style={W(232)}>
            <p style={lblW}>IN PROGRESS</p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { col: "Todo",  items: ["Fragments", "About pg"], color: "#e2e8f0" },
                { col: "Doing", items: ["Contact"],               color: "#fef3c7" },
                { col: "Done",  items: ["Nav", "Hero", "Grid"],   color: "#dcfce7" },
              ].map(({ col, items, color }) => (
                <div key={col} style={{ flex: 1 }}>
                  <p style={{ fontSize: 8, color: "rgba(17,17,17,0.4)", marginBottom: 4 }}>{col}</p>
                  {items.map((item) => (
                    <div key={item} style={{ background: color, borderRadius: 4, padding: "3px 5px", fontSize: 9, color: "#111", marginBottom: 3 }}>{item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card left="49%" top={392}>
          <div style={D(186)}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
              <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", animation: "ping 1.2s cubic-bezier(0,0,0.2,1) infinite", opacity: 0.6 }} />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", position: "relative" }} />
              </span>
              <span style={{ fontSize: 11, fontWeight: 600 }}>Open to work</span>
            </div>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>Senior roles · Full-time<br />Remote or Lagos</p>
          </div>
        </Card>

        <Card left="63%" top={402}>
          <Sticker bg="#be185d" rotate={8}>no dev handoff 💅</Sticker>
        </Card>

        <Card left="74%" top={390}>
          <Sticker bg="#22c55e" rotate={-8}>PM brain 🧠</Sticker>
        </Card>

        <Card left="84%" top={384}>
          <div style={D(162, { transform: "rotate(2deg)" })}>
            <p style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>100%</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>shipped</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.15)", marginTop: 2 }}>no concepts in Figma</p>
          </div>
        </Card>

        {/* ══ ROW 4  y 560–680 ═══════════════════════════════════ */}

        <Card left="1.5%" top={568}>
          <div style={D(166)}>
            <p style={{ fontSize: 36, fontWeight: 700, color: "#f97316", letterSpacing: "-0.04em", lineHeight: 1 }}>847</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>components shipped</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.15)", marginTop: 2 }}>across 3 design systems</p>
          </div>
        </Card>

        <Card left="15%" top={578}>
          <Sticker bg="#FF4F4F" rotate={-7}>Lagos, NG →</Sticker>
        </Card>

        <Card left="25%" top={562}>
          <div style={D(158)}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 6 }}>
              <span style={{ fontSize: 14 }}>📍</span>
              <span style={{ fontSize: 11, fontWeight: 500 }}>Lagos, NG</span>
            </div>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", fontVariantNumeric: "tabular-nums" }}>6.5244° N, 3.3792° E</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.18)", marginTop: 3 }}>GMT+1 · WAT</p>
          </div>
        </Card>

        <Card left="38%" top={572}>
          <Sticker bg="#1e293b" color="rgba(255,255,255,0.85)" rotate={6}>technical PM 📋</Sticker>
        </Card>

        <Card left="49%" top={560}>
          <div style={D(154)}>
            <p style={{ fontSize: 32, fontWeight: 700, color: "#d97706", letterSpacing: "-0.04em", lineHeight: 1 }}>∞</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>coffees consumed</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.15)", marginTop: 2 }}>still counting</p>
          </div>
        </Card>

        <Card left="62%" top={565}>
          <div style={D(158)}>
            <p style={lbl}>SHIPPED FOR</p>
            {["Peer Finance", "Chainrails", "DP Fintech", "Blueprint"].map((co) => (
              <div key={co} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>{co}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card left="76%" top={573}>
          <Sticker bg="#FFE24B" color="#111" rotate={-9}>5 yrs, no excuses ✓</Sticker>
        </Card>

        <Card left="88%" top={560}>
          <Sticker bg="#4F46E5" rotate={5}>pixel first 🎨</Sticker>
        </Card>

        {/* ══ ROW 5  y 758–900 ═══════════════════════════════════ */}

        <Card left="3%" top={762}>
          <Sticker bg="#7c3aed" rotate={-11}>user-obsessed →</Sticker>
        </Card>

        <Card left="14%" top={755}>
          <div style={D(154)}>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#3b5bdb", letterSpacing: "-0.04em", lineHeight: 1 }}>12+</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>products shipped</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.15)", marginTop: 2 }}>live in production</p>
          </div>
        </Card>

        <Card left="28%" top={768}>
          <Sticker bg="#0891b2" rotate={9}>Figma + code ⚡</Sticker>
        </Card>

        <Card left="41%" top={756}>
          <div style={W(184)}>
            <p style={lblW}>AVAILABILITY</p>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>Q3 2025</p>
            <p style={{ fontSize: 9, color: "rgba(17,17,17,0.4)", marginTop: 3, lineHeight: 1.5 }}>Open to senior design<br />& engineering roles</p>
          </div>
        </Card>

        <Card left="59%" top={764}>
          <Sticker bg="#111" color="rgba(255,255,255,0.85)" rotate={-6}>built different 🔧</Sticker>
        </Card>

        <Card left="72%" top={758}>
          <div style={D(162)}>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#22c55e", letterSpacing: "-0.04em", lineHeight: 1 }}>36</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>states researched</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.15)", marginTop: 2 }}>across Nigeria</p>
          </div>
        </Card>

        <Card left="86%" top={766}>
          <Sticker bg="#f43f5e" rotate={8}>2025 → shipping</Sticker>
        </Card>

        <style>{`@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}`}</style>
      </div>
    </section>
  );
}
