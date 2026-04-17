"use client";

import { useRef } from "react";
import Link from "next/link";

/* ─── photo data ─────────────────────────────────────────────── */
type PhotoItem = {
  w: number;
  h: number;
  bg: string;
  caption: string;
};

const PHOTOS: PhotoItem[] = [
  {
    w: 280, h: 380,
    bg: "linear-gradient(160deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
    caption: "product design / 2024",
  },
  {
    w: 380, h: 300,
    bg: "linear-gradient(135deg, #e8ddd0 0%, #d4c5b0 100%)",
    caption: "ux research / lagos",
  },
  {
    w: 240, h: 340,
    bg: "linear-gradient(160deg, #2d1b69 0%, #11998e 100%)",
    caption: "design systems / 2025",
  },
  {
    w: 300, h: 300,
    bg: "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)",
    caption: "frontend / f1 race",
  },
  {
    w: 280, h: 380,
    bg: "linear-gradient(160deg, #c9b99a 0%, #b5a898 100%)",
    caption: "motion design / 2023",
  },
  {
    w: 380, h: 300,
    bg: "linear-gradient(135deg, #1c2b1c 0%, #2d5016 100%)",
    caption: "strategy / hci",
  },
  {
    w: 240, h: 340,
    bg: "linear-gradient(160deg, #3b4a6b 0%, #2c3e6b 100%)",
    caption: "branding / 2024",
  },
  {
    w: 300, h: 300,
    bg: "linear-gradient(135deg, #f5f0e8 0%, #e8ddd0 100%)",
    caption: "engineering / prod",
  },
  {
    w: 280, h: 380,
    bg: "linear-gradient(160deg, #2a1f3d 0%, #4a1942 100%)",
    caption: "peer cards / 2025",
  },
  {
    w: 380, h: 300,
    bg: "linear-gradient(135deg, #1a0a00 0%, #3d1a00 100%)",
    caption: "chainrails / live",
  },
];

/* ─── single item ────────────────────────────────────────────── */
function Item({ photo }: { photo: PhotoItem }) {
  return (
    <div className="photo-strip-item" style={{ flexShrink: 0, width: photo.w }}>
      {/* photo block — clamp height for mobile */}
      <div style={{
        width: photo.w,
        height: `clamp(160px, ${photo.h}px, ${photo.h}px)`,
        borderRadius: 6,
        overflow: "hidden",
        background: photo.bg,
        position: "relative",
      }}>
        {/* grain overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        }} />
      </div>
      {/* caption */}
      <p style={{
        fontFamily:    "monospace",
        fontSize:      10,
        color:         "#aaa",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginTop:     10,
      }}>
        {photo.caption}
      </p>
    </div>
  );
}

/* ─── section ────────────────────────────────────────────────── */
export default function PhotoCarousel() {
  const stripRef = useRef<HTMLDivElement>(null);

  const items = [...PHOTOS, ...PHOTOS]; // duplicate for seamless loop

  return (
    <section className="py-20 border-t border-[#111]/8">

      {/* ── two-col header ── */}
      <div className="max-w-275 mx-auto px-6 mb-8 md:mb-12 flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-16">
        <h2
          className="font-medium text-[#111] leading-[1.1] tracking-[-0.03em] shrink-0"
          style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)", maxWidth: "20ch" }}
        >
          Behind every pixel is a person who gives a damn.
        </h2>
        <p className="text-xs text-[#111]/40 leading-relaxed max-w-[30ch] pt-1">
          Researcher. Designer. Engineer.<br />
          One person. Full stack of care.<br />
          Five years. No excuses.
        </p>
      </div>

      {/* ── strip ── */}
      <div style={{
        overflow: "hidden",
        maskImage:
          "linear-gradient(90deg, transparent 0, #fff 40px, #fff calc(100% - 40px), transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0, #fff 40px, #fff calc(100% - 40px), transparent)",
      }}>
        <div
          ref={stripRef}
          style={{
            display:   "flex",
            gap:       16,
            width:     "max-content",
            animation: "photo-scroll 32s linear infinite",
            alignItems: "flex-end",
          }}
          onMouseEnter={() => {
            if (stripRef.current)
              stripRef.current.style.animationPlayState = "paused";
          }}
          onMouseLeave={() => {
            if (stripRef.current)
              stripRef.current.style.animationPlayState = "running";
          }}
        >
          {items.map((photo, i) => (
            <Item key={i} photo={photo} />
          ))}
        </div>
      </div>

      {/* ── bottom separator row ── */}
      <div className="max-w-275 mx-auto px-6 mt-8 md:mt-12 pt-6 border-t border-[#111]/8 flex items-center justify-between gap-4">
        {/* availability */}
        <div className="flex items-center gap-2.5">
          <span style={{ position: "relative", display: "inline-flex", width: 7, height: 7 }}>
            <span style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              background: "#22c55e",
              animation: "ping 1.4s cubic-bezier(0,0,0.2,1) infinite",
              opacity: 0.65,
            }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", position: "relative" }} />
          </span>
          <span className="text-xs text-[#111]/40">Available for new projects</span>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="text-sm text-[#111] underline underline-offset-4 decoration-[#111]/30 hover:decoration-[#111] transition-all"
        >
          Get in touch →
        </Link>
      </div>

      <style>{`
        @keyframes photo-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @media (max-width: 640px) {
          .photo-strip-item div:first-child {
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
