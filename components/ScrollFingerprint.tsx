"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── types ──────────────────────────────────────────────────── */
type Waveform = number[]; // array of velocity samples

const STORAGE_KEY = "femi_scroll_waveforms";
const MAX_SAVED   = 8;
const SAMPLE_COUNT = 60; // how many velocity points we capture

/* ─── personality classifier ─────────────────────────────────── */
function classify(samples: number[]): string {
  if (!samples.length) return "Ghost";
  const avg  = samples.reduce((a, b) => a + b, 0) / samples.length;
  const max  = Math.max(...samples);
  const spikes = samples.filter((v) => v > avg * 2.5).length;

  if (avg < 5)                        return "Patient Reader";
  if (spikes > samples.length * 0.3)  return "Chaotic Scanner";
  if (max > 80 && avg > 30)           return "Speed Demon";
  if (avg > 20 && spikes < 3)         return "Smooth Operator";
  if (samples[0] > 40)                return "Eager Starter";
  return "Methodical Thinker";
}

/* ─── normalise samples → SVG path ───────────────────────────── */
function samplesToPath(samples: number[], W = 800, H = 64): string {
  if (!samples.length) return `M 0 ${H / 2} L ${W} ${H / 2}`;
  const max   = Math.max(...samples, 1);
  const step  = W / (samples.length - 1);
  const mid   = H / 2;
  const scale = (H / 2) * 0.85;

  return samples
    .map((v, i) => {
      const x = i * step;
      const y = mid - (v / max) * scale;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

/* ─── saved waveforms from localStorage ──────────────────────── */
function loadSaved(): Waveform[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSaved(waveforms: Waveform[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(waveforms.slice(-MAX_SAVED)));
  } catch { /* storage blocked */ }
}

/* ─── component ──────────────────────────────────────────────── */
export default function ScrollFingerprint() {
  const sectionRef   = useRef<HTMLElement>(null);
  const samplesRef   = useRef<number[]>([]);
  const lastScrollY  = useRef(0);
  const lastTime     = useRef(0);
  const capturing    = useRef(false);

  const [currentPath,  setCurrentPath]  = useState<string | null>(null);
  const [personality,  setPersonality]  = useState<string | null>(null);
  const [savedWaves,   setSavedWaves]   = useState<Waveform[]>([]);
  const [added,        setAdded]        = useState(false);

  /* load saved on mount */
  useEffect(() => {
    setSavedWaves(loadSaved());
  }, []);

  /* scroll velocity capture */
  const onScroll = useCallback(() => {
    if (!capturing.current) return;
    const now = performance.now();
    const dy  = Math.abs(window.scrollY - lastScrollY.current);
    const dt  = now - lastTime.current || 1;
    const vel = (dy / dt) * 100; // px / ms * 100 → 0-100 ish

    samplesRef.current.push(Math.min(vel, 100));
    if (samplesRef.current.length > SAMPLE_COUNT)
      samplesRef.current = samplesRef.current.slice(-SAMPLE_COUNT);

    lastScrollY.current = window.scrollY;
    lastTime.current    = now;

    /* live preview */
    setCurrentPath(samplesToPath(samplesRef.current));
    setPersonality(classify(samplesRef.current));
  }, []);

  /* IntersectionObserver — start capturing when section enters viewport */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        capturing.current   = entry.isIntersecting;
        lastScrollY.current = window.scrollY;
        lastTime.current    = performance.now();
        if (entry.isIntersecting && samplesRef.current.length === 0) {
          setCurrentPath(samplesToPath([]));
          setPersonality(null);
        }
      },
      { threshold: 0.2, root: null }
    );

    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  /* save waveform */
  const handleAdd = () => {
    if (added || !samplesRef.current.length) return;
    const updated = [...loadSaved(), samplesRef.current].slice(-MAX_SAVED);
    saveSaved(updated);
    setSavedWaves(updated);
    setAdded(true);
  };

  return (
    <section ref={sectionRef} className="border-t border-[#111]/8 py-20">
      <div className="max-w-275 mx-auto px-6">

        {/* heading row */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-3">
              Scroll Fingerprint
            </p>
            <h2
              className="font-medium text-[#111] leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.2rem)" }}
            >
              Your scroll tells me<br />how you think.
            </h2>
          </div>
          <p className="text-xs text-[#111]/35 max-w-[28ch] leading-relaxed text-right mb-1">
            Scroll this page to draw your waveform.
            No two are the same.
          </p>
        </div>

        {/* live waveform box */}
        <div style={{
          border: "1px solid rgba(17,17,17,0.1)",
          borderRadius: 12,
          padding: "28px 28px 20px",
          marginBottom: 32,
          background: "#fafafa",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <p style={{ fontSize: 11, color: "rgba(17,17,17,0.4)", letterSpacing: "0.04em" }}>
              YOUR WAVEFORM
            </p>
            {personality && (
              <span style={{
                fontSize: 10, fontWeight: 600, color: "#111",
                background: "#f5c518", padding: "3px 10px", borderRadius: 20,
                letterSpacing: "0.02em",
              }}>
                {personality}
              </span>
            )}
          </div>

          <svg
            viewBox="0 0 800 64"
            style={{ width: "100%", height: 64, display: "block" }}
            preserveAspectRatio="none"
          >
            {/* baseline */}
            <line x1="0" y1="32" x2="800" y2="32" stroke="rgba(17,17,17,0.06)" strokeWidth="1" />
            {/* waveform */}
            {currentPath ? (
              <path
                d={currentPath}
                stroke="#111"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <text x="400" y="36" textAnchor="middle" fontSize="11"
                fill="rgba(17,17,17,0.2)" fontFamily="inherit">
                scroll to begin
              </text>
            )}
          </svg>

          {/* add mine CTA */}
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button
              onClick={handleAdd}
              style={{
                fontSize: 12, color: "#111", background: "none", border: "none",
                padding: 0, textDecoration: "underline", textUnderlineOffset: "4px",
                opacity: 1, // always fully visible as spec says
                fontFamily: "inherit",
              }}
            >
              {added ? "Added to the wall ✓" : "Add mine to the wall →"}
            </button>
            {samplesRef.current.length > 0 && (
              <p style={{ fontSize: 10, color: "rgba(17,17,17,0.3)" }}>
                {samplesRef.current.length} samples captured
              </p>
            )}
          </div>
        </div>

        {/* previous visitor waveforms */}
        {savedWaves.length > 0 && (
          <div>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/25 mb-6">
              Previous visitors
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {savedWaves.map((wave, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontSize: 9, color: "rgba(17,17,17,0.2)", width: 14, textAlign: "right", flexShrink: 0 }}>
                    {savedWaves.length - i}
                  </span>
                  <svg
                    viewBox="0 0 800 32"
                    style={{ flex: 1, height: 32, display: "block" }}
                    preserveAspectRatio="none"
                  >
                    <path
                      d={samplesToPath(wave, 800, 32)}
                      stroke="rgba(17,17,17,0.15)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ fontSize: 9, color: "rgba(17,17,17,0.25)", flexShrink: 0 }}>
                    {classify(wave)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
