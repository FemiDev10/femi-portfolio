"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$&";

const STEPS = [
  { word: "production.",     sub: "No handoff. No translator. No waiting. Just the work, shipped." },
  { word: "the browser.",    sub: "Designed in Figma. Coded by hand. Zero dev dependencies." },
  { word: "your hands.",     sub: "Research, design, code — one person, full ownership." },
  { word: "the real world.", sub: "Shipped. Live. Used by real people. That's the metric." },
  { word: "shipped.",        sub: "From brief to browser. No excuses. Just delivery." },
];

/* ─── mobile static version ─────────────────────────────────── */
function MobileScramble() {
  return (
    <section style={{
      padding:     "48px 24px",
      borderTop:   "1px solid rgba(17,17,17,0.08)",
      background:  "#fff",
    }}>
      <p style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(17,17,17,0.3)", marginBottom: 28 }}>
        In plain terms
      </p>
      <h2
        style={{
          fontSize:      "clamp(1.6rem, 7vw, 2.8rem)",
          fontWeight:    500,
          letterSpacing: "-0.03em",
          lineHeight:    1.05,
          color:         "#111",
          marginBottom:  32,
        }}
      >
        Most designers stop
        <br />at Figma. I stop at
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {STEPS.map(({ word, sub }) => (
          <div key={word} style={{ paddingLeft: 16, borderLeft: "2px solid rgba(17,17,17,0.1)" }}>
            <p style={{
              fontSize:      "clamp(1.3rem, 5.5vw, 2rem)",
              fontStyle:     "italic",
              fontWeight:    400,
              color:         "#bbb",
              letterSpacing: "-0.02em",
              lineHeight:    1.1,
              marginBottom:  6,
            }}>
              {word}
            </p>
            <p style={{ fontSize: 12, color: "rgba(17,17,17,0.4)", lineHeight: 1.65 }}>
              {sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── desktop scroll-pinned version ─────────────────────────── */
export default function ScrambleSection() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevStepRef = useRef(0);

  const [isMobile,    setIsMobile]    = useState(false);
  const [activeStep,  setActiveStep]  = useState(0);
  const [displayWord, setDisplayWord] = useState(STEPS[0].word);
  const [displaySub,  setDisplaySub]  = useState(STEPS[0].sub);

  /* detect mobile — runs client-side only */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrambleTo = useCallback((idx: number) => {
    const { word, sub } = STEPS[idx];
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (subRef.current) subRef.current.style.opacity = "0";

    let frame = 0;
    const FRAMES = 16;
    intervalRef.current = setInterval(() => {
      const settled = Math.floor((frame / FRAMES) * word.length);
      let result = "";
      for (let i = 0; i < word.length; i++) {
        result += i < settled
          ? word[i]
          : CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setDisplayWord(result);
      frame++;
      if (frame > FRAMES) {
        clearInterval(intervalRef.current!);
        setDisplayWord(word);
        setTimeout(() => {
          setDisplaySub(sub);
          if (subRef.current) subRef.current.style.opacity = "1";
        }, 100);
      }
    }, 35);
  }, []);

  /* scroll-driven step changes — desktop only */
  useEffect(() => {
    if (isMobile) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onScroll = () => {
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const scrolled   = window.scrollY - wrapperTop;
      const pct        = scrolled / (wrapper.offsetHeight - window.innerHeight);
      const step       = Math.max(0, Math.min(4, Math.floor(pct * 5)));

      if (step !== prevStepRef.current) {
        prevStepRef.current = step;
        setActiveStep(step);
        scrambleTo(step);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile, scrambleTo]);

  /* render mobile static version */
  if (isMobile) return <MobileScramble />;

  return (
    <div ref={wrapperRef} style={{ height: "200vh" }}>
      <div
        style={{
          position:        "sticky",
          top:             0,
          padding:         "80px 0",
          backgroundColor: "#fff",
          borderTop:       "1px solid rgba(17,17,17,0.08)",
        }}
      >
        <div className="max-w-275 mx-auto px-6 flex items-start justify-between">

          {/* left: text */}
          <div style={{ maxWidth: 560 }}>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-8">
              In plain terms
            </p>

            <h2
              className="font-medium text-[#111] leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.6rem)" }}
            >
              Most designers stop
              <br />
              at Figma. I stop at
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#bbb", letterSpacing: "-0.02em" }}>
                {displayWord}
              </em>
            </h2>

            <div className="flex items-center gap-3 mt-8">
              <div className="w-6 h-px bg-[#111]/20 shrink-0" />
              <p
                ref={subRef}
                className="text-xs text-[#111]/40 leading-relaxed"
                style={{ transition: "opacity 0.25s ease" }}
              >
                {displaySub}
              </p>
            </div>
          </div>

          {/* right: progress dots — hidden on mobile (mobile version doesn't reach here) */}
          <div className="flex flex-col gap-2.5 mt-1 shrink-0">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  prevStepRef.current = i;
                  setActiveStep(i);
                  scrambleTo(i);
                }}
                style={{
                  width: 6, height: 6, borderRadius: "50%", border: "none", padding: 0,
                  background: i === activeStep ? "#111" : "rgba(17,17,17,0.15)",
                  transition: "background 0.3s ease, transform 0.3s ease",
                  transform: i === activeStep ? "scale(1.35)" : "scale(1)",
                  minHeight: "unset",
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
