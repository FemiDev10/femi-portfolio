"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* Realistic device mockups for the Bop case study.
   iPhone 17 Pro proportions: 402×874pt screen, ~55pt screen corner, titanium band, side buttons.
   Simulator screenshots already contain the status bar and Dynamic Island, so <IPhone> only adds the hardware. */

const SCREEN_W = 402, SCREEN_H = 874, BEZEL = 13, BAND = 3;
const OUTER_W = SCREEN_W + (BEZEL + BAND) * 2, OUTER_H = SCREEN_H + (BEZEL + BAND) * 2;

/* Scales a fixed-size device to whatever width its container gives it. */
function useFit(width: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);
  return { ref, scale };
}

function Hardware({ children, tone = "natural" }: { children: ReactNode; tone?: "natural" | "dark" }) {
  const band = tone === "dark"
    ? "linear-gradient(145deg,#5a5860 0%,#2a292e 30%,#4b4a50 52%,#1f1e22 78%,#47464c 100%)"
    : "linear-gradient(145deg,#e4e1e8 0%,#a29ea9 24%,#efedf2 50%,#8f8b96 76%,#d6d3db 100%)";
  const btn = tone === "dark" ? "#3a393f" : "#9a96a1";
  return (
    <div className="relative" style={{ width: OUTER_W, height: OUTER_H }}>
      <span className="absolute rounded-l-[3px]" style={{ left: -4, top: 172, width: 5, height: 34, background: btn }} />
      <span className="absolute rounded-l-[3px]" style={{ left: -4, top: 232, width: 5, height: 64, background: btn }} />
      <span className="absolute rounded-l-[3px]" style={{ left: -4, top: 308, width: 5, height: 64, background: btn }} />
      <span className="absolute rounded-r-[3px]" style={{ right: -4, top: 262, width: 5, height: 100, background: btn }} />
      <div className="absolute inset-0 rounded-[72px]" style={{ background: band, padding: BAND, boxShadow: "0 50px 90px -40px rgba(17,17,17,.45), 0 24px 40px -28px rgba(17,17,17,.35)" }}>
        <div className="h-full w-full rounded-[69px] bg-black" style={{ padding: BEZEL, boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.08)" }}>
          <div className="relative h-full w-full overflow-hidden rounded-[56px] bg-[#0e0e10]">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* A simulator screenshot in an iPhone. */
export function IPhone({ src, alt, tone, priority }: { src: string; alt: string; tone?: "natural" | "dark"; priority?: boolean }) {
  const { ref, scale } = useFit(OUTER_W + 8);
  return (
    <div ref={ref} className="w-full" style={{ height: (OUTER_H + 8) * scale }}>
      <div className="origin-top-left" style={{ transform: `scale(${scale})`, padding: 4, width: OUTER_W + 8 }}>
        <Hardware tone={tone}>
          <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 340px, 45vw" priority={priority} unoptimized style={{ objectFit: "cover" }} />
        </Hardware>
      </div>
    </div>
  );
}

/* The live app (Expo web export) in an iPhone. The frame draws the status bar, island and home indicator,
   and the app gets the area between them, the same as the safe area on a device. */
export function LiveIPhone({ src, title }: { src: string; title: string }) {
  const { ref, scale } = useFit(OUTER_W + 8);
  const [key, setKey] = useState(0);
  const STATUS = 54, HOME = 30;
  return (
    <div>
      <div ref={ref} className="w-full" style={{ height: (OUTER_H + 8) * scale }}>
        <div className="origin-top-left" style={{ transform: `scale(${scale})`, padding: 4, width: OUTER_W + 8 }}>
          <Hardware>
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-[#0e0e10] px-[36px] text-[17px] font-semibold text-white" style={{ height: STATUS, fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}>
              <span>9:41</span>
              <span className="flex items-center gap-[6px]">
                <svg width="19" height="12" viewBox="0 0 17 11" aria-hidden><rect y="7" width="3" height="4" rx="1" fill="#fff" /><rect x="4.6" y="5" width="3" height="6" rx="1" fill="#fff" /><rect x="9.2" y="2.5" width="3" height="8.5" rx="1" fill="#fff" /><rect x="13.8" width="3" height="11" rx="1" fill="#fff" /></svg>
                <svg width="17" height="12" viewBox="0 0 16 12" aria-hidden><path d="M8 2.5c2.3 0 4.4.9 6 2.4l1-1.1A10 10 0 0 0 8 1 10 10 0 0 0 1 3.8l1 1.1a8.5 8.5 0 0 1 6-2.4zm0 3c1.5 0 2.8.6 3.8 1.5l1-1.1A7 7 0 0 0 8 4a7 7 0 0 0-4.8 1.9l1 1.1C5.2 6.1 6.5 5.5 8 5.5zm0 3c.7 0 1.3.3 1.7.7L8 11 6.3 9.2c.4-.4 1-.7 1.7-.7z" fill="#fff" /></svg>
                <svg width="28" height="13" viewBox="0 0 24 12" aria-hidden><rect x=".5" y=".5" width="20" height="11" rx="3.5" fill="none" stroke="#fff" opacity=".45" /><rect x="2" y="2" width="17" height="8" rx="2" fill="#fff" /><rect x="21.5" y="4" width="1.6" height="4" rx=".8" fill="#fff" opacity=".45" /></svg>
              </span>
            </div>
            <div className="absolute left-1/2 top-[11px] z-20 h-[37px] w-[126px] -translate-x-1/2 rounded-full bg-black" />
            <iframe key={key} src={src} title={title} className="absolute left-0 border-0" style={{ top: STATUS, width: SCREEN_W, height: SCREEN_H - STATUS - HOME }} />
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center bg-[#0e0e10]" style={{ height: HOME }}>
              <span className="h-[5px] w-[138px] rounded-full bg-white/90" />
            </div>
          </Hardware>
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-2">
        <button type="button" onClick={() => setKey((k) => k + 1)} className="rounded-full border border-[#111]/12 px-4 py-2 text-xs hover:bg-[#f4f4f4] transition-colors">Restart the app</button>
      </div>
    </div>
  );
}

/* A Safari-style window around a website screenshot. */
export function Browser({ src, alt, url = "bop.app" }: { src: string; alt: string; url?: string }) {
  return (
    <div className="overflow-hidden rounded-[14px] bg-white shadow-[0_0_0_1px_rgba(17,17,17,.08),0_30px_60px_-30px_rgba(17,17,17,.35)]">
      <div className="flex h-10 items-center gap-3 border-b border-[#111]/8 bg-[#f6f5f8] px-4">
        <span className="flex gap-[7px]">
          <i className="block size-3 rounded-full bg-[#ff5f57]" />
          <i className="block size-3 rounded-full bg-[#febc2e]" />
          <i className="block size-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto flex h-6 w-full max-w-[320px] items-center justify-center gap-1.5 rounded-md bg-white text-[11px] text-[#111]/55 shadow-[0_0_0_1px_rgba(17,17,17,.06)]">
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden><rect x="2" y="5.5" width="8" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M4 5.5V3.5a2 2 0 0 1 4 0V5.5" stroke="currentColor" strokeWidth="1.3" /></svg>
          {url}
        </span>
        <span className="w-[50px]" />
      </div>
      <Image src={src} alt={alt} width={1400} height={875} unoptimized style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  );
}
