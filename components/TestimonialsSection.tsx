"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── data ───────────────────────────────────────────────────── */

const BORDER = "1px solid rgba(17,17,17,0.08)";

const STATS = [
  { value: 500, suffix: "+", label: "Users researched",  company: "FourthCanvas"    },
  { value: 25,  suffix: "%", label: "Dev time saved",    company: "Paymi Solutions"  },
  { value: 5,   suffix: "",  label: "Years experience",  company: "Contripay"        },
];

const QUOTES = [
  {
    text: "Femi shipped our design system in 3 weeks. What was going to take months.",
    name: "Adaeze Okonkwo",
    role: "CPO, Paymi Solutions",
  },
  {
    text: "He understood our users better than we did after the first week.",
    name: "Sarah Adeyemi",
    role: "CEO, Contripay",
  },
  {
    text: "500+ users across all 36 states in Nigeria. His rigour and ability to translate findings into design is rare.",
    name: "Tunde Kehinde",
    role: "Research Lead, FourthCanvas",
  },
];

/* ─── shared cell shell ──────────────────────────────────────── */

const cellBase: React.CSSProperties = {
  borderRight:  BORDER,
  borderBottom: BORDER,
  minHeight:    240,
  position:     "relative",
};

/* ─── quote cell ─────────────────────────────────────────────── */

function QuoteCell({ quote, revealed, onReveal }: {
  quote:    typeof QUOTES[number];
  revealed: boolean;
  onReveal: () => void;
}) {
  return (
    <div
      style={{ ...cellBase, background: "#fafafa" }}
      onMouseEnter={onReveal}
    >
      <div
        style={{
          padding:        "40px 36px",
          height:         "100%",
          display:        "flex",
          flexDirection:  "column",
          justifyContent: "space-between",
          opacity:        revealed ? 1 : 0,
          transition:     "opacity 0.4s ease",
        }}
      >
        <p style={{ fontSize: 14, color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
          &ldquo;{quote.text}&rdquo;
        </p>
        <div style={{ marginTop: 28 }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{quote.name}</p>
          <p style={{ fontSize: 11, color: "#aaa",  fontWeight: 300, marginTop: 3 }}>{quote.role}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── stat (logo) cell ───────────────────────────────────────── */

function StatCell({ stat, count, hovered, onEnter, onLeave }: {
  stat:    typeof STATS[number];
  count:   number;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div style={cellBase} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div style={{
        height:         "100%",
        minHeight:      240,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "40px 36px",
      }}>

        {/* number + label — fades out on hover */}
        <div style={{
          textAlign:  "center",
          opacity:    hovered ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}>
          <p style={{
            fontSize:      42,
            fontWeight:    400,
            color:         "#111",
            letterSpacing: "-0.04em",
            lineHeight:    1,
          }}>
            {count}{stat.suffix}
          </p>
          <p style={{
            fontSize:      9,
            color:         "#bbb",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginTop:     10,
          }}>
            {stat.label}
          </p>
        </div>

        {/* company name — fades in on hover, delayed so number clears first */}
        <div style={{
          position:       "absolute",
          inset:          0,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          opacity:        hovered ? 1 : 0,
          transition:     hovered
            ? "opacity 0.2s ease 0.18s"   // delay = number fade-out duration
            : "opacity 0.15s ease",
          pointerEvents:  "none",
        }}>
          <p style={{ fontSize: 15, color: "#ccc", fontWeight: 500 }}>
            {stat.company}
          </p>
        </div>

      </div>
    </div>
  );
}

/* ─── section ────────────────────────────────────────────────── */

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasRun     = useRef(false);

  const [counts,       setCounts]       = useState([0, 0, 0]);
  const [hoveredStat,  setHoveredStat]  = useState<number | null>(null);
  const [revealed,     setRevealed]     = useState([false, false, false]);

  /* count-up ─────────────────────────────────────────────────── */
  const runCountUp = useCallback(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const start    = performance.now();
    const DURATION = 1000;

    const tick = (now: number) => {
      const raw    = Math.min((now - start) / DURATION, 1);
      const eased  = 1 - Math.pow(1 - raw, 3);
      setCounts(STATS.map((s) => Math.floor(eased * s.value)));
      if (raw < 1) requestAnimationFrame(tick);
      else         setCounts(STATS.map((s) => s.value));
    };

    requestAnimationFrame(tick);
  }, []);

  /* IntersectionObserver ─────────────────────────────────────── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { runCountUp(); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [runCountUp]);

  /* reveal helper ────────────────────────────────────────────── */
  const reveal = (i: number) => {
    setRevealed((prev) => {
      if (prev[i]) return prev;           // already revealed — keep stable reference
      const next = [...prev];
      next[i] = true;
      return next;
    });
  };

  /* grid cell order: Q L Q / L Q L ───────────────────────────── */
  const cells = [
    <QuoteCell key="q0" quote={QUOTES[0]} revealed={revealed[0]} onReveal={() => reveal(0)} />,
    <StatCell  key="l0" stat={STATS[0]}   count={counts[0]}      hovered={hoveredStat === 0} onEnter={() => setHoveredStat(0)} onLeave={() => setHoveredStat(null)} />,
    <QuoteCell key="q1" quote={QUOTES[1]} revealed={revealed[1]} onReveal={() => reveal(1)} />,
    <StatCell  key="l1" stat={STATS[1]}   count={counts[1]}      hovered={hoveredStat === 1} onEnter={() => setHoveredStat(1)} onLeave={() => setHoveredStat(null)} />,
    <QuoteCell key="q2" quote={QUOTES[2]} revealed={revealed[2]} onReveal={() => reveal(2)} />,
    <StatCell  key="l2" stat={STATS[2]}   count={counts[2]}      hovered={hoveredStat === 2} onEnter={() => setHoveredStat(2)} onLeave={() => setHoveredStat(null)} />,
  ];

  return (
    <section ref={sectionRef}>

      {/* heading */}
      <div className="max-w-275 mx-auto px-6 pt-20 pb-12">
        <h2
          className="font-medium text-[#111] tracking-tight leading-snug"
          style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)", maxWidth: "34ch" }}
        >
          Trusted by amazing people and teams across the globe.
        </h2>
      </div>

      {/* 3 × 2 grid — same max-width as the rest of the page */}
      <div className="max-w-275 mx-auto px-6">
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop:           BORDER,
            borderLeft:          BORDER,
          }}
        >
          {cells}
        </div>
      </div>

    </section>
  );
}
