"use client";

import { useState } from "react";
import BrowserMockup from "./BrowserMockup";

interface CarouselScreen {
  src: string;
  label: string;
}

export default function ScreenCarousel({
  screens,
  bg = "#0d1117",
  mockupBg = "#e8edf5",
}: {
  screens: CarouselScreen[];
  bg?: string;
  mockupBg?: string;
}) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(screens.length - 1, i + 1));

  return (
    <div style={{ background: bg, padding: "72px 0 56px" }}>
      {/* Screen */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px" }}>
        <BrowserMockup src={screens[idx].src} alt={screens[idx].label} bg={mockupBg} />
        <p style={{
          textAlign: "center", fontSize: 10, fontFamily: "monospace",
          textTransform: "uppercase", letterSpacing: "0.14em",
          color: "rgba(255,255,255,0.3)", marginTop: 20, marginBottom: 0,
        }}>
          {screens[idx].label}
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginTop: 40 }}>
        <button
          onClick={prev}
          disabled={idx === 0}
          style={{
            background: "none", border: "1px solid rgba(255,255,255,0.12)",
            color: idx === 0 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.7)",
            width: 48, height: 48, borderRadius: "50%",
            cursor: idx === 0 ? "default" : "pointer", fontSize: 20,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "border-color 0.2s, color 0.2s",
          }}
        >←</button>

        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "monospace", letterSpacing: "0.1em", minWidth: 48, textAlign: "center" }}>
          {idx + 1} / {screens.length}
        </span>

        <button
          onClick={next}
          disabled={idx === screens.length - 1}
          style={{
            background: "none", border: "1px solid rgba(255,255,255,0.12)",
            color: idx === screens.length - 1 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.7)",
            width: 48, height: 48, borderRadius: "50%",
            cursor: idx === screens.length - 1 ? "default" : "pointer", fontSize: 20,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "border-color 0.2s, color 0.2s",
          }}
        >→</button>
      </div>

      {/* Progress dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? 28 : 8, height: 8, borderRadius: 4,
              background: i === idx ? "#fff" : "rgba(255,255,255,0.18)",
              border: "none", cursor: "pointer",
              transition: "all 0.3s ease", padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
