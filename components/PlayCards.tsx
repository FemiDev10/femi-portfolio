"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";

type Card = {
  headline: string;
  tag: string;
  site?: boolean;
  href?: string;
  bg: string;
  ink: string;
  art: ReactNode;
};

const SAMI_VIEWS = ["1-hero", "2-work", "3-proof", "4-fees", "5-privacy"];

/* Sami: the real site, full bleed, moving through its sections. */
function SamiSite() {
  return (
    <div className="pc-site">
      {SAMI_VIEWS.map((v, i) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img key={v} src={`/playground/sami/${v}.webp`} alt="" loading="lazy" className="pc-site-shot" style={{ animationDelay: `${i * 1.4}s` }} />
      ))}
    </div>
  );
}

const BOP_VIEWS = ["1-hero", "2-everyday", "3-namecheck", "4-how", "5-faq"];

function BopSite() {
  return (
    <div className="pc-bop">
      <div className="pc-bop-win">
        <div className="pc-bop-bar">
          <span className="pc-bop-dots"><i /><i /><i /></span>
          <span className="pc-bop-url">bop concept</span>
        </div>
        <div className="pc-bop-view">
          {BOP_VIEWS.map((v, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img key={v} src={`/playground/bop/${v}.webp`} alt="" loading="lazy" className="pc-bop-shot" style={{ animationDelay: `${i * 2.6 + 1.3}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Stickers() {
  const stickers = [
    { t: "idea", x: 8, y: 14, r: -18, c: "#cfcfcf", d: 0 },
    { t: "built", x: 58, y: 8, r: 12, c: "#2fd18a", d: 0.6 },
    { t: "idea", x: 64, y: 62, r: -8, c: "#cfcfcf", d: 1.2 },
    { t: "live", x: 6, y: 66, r: 22, c: "#2fd18a", d: 1.8 },
    { t: "built", x: 34, y: 78, r: -26, c: "#2fd18a", d: 2.4 },
  ];
  return (
    <div className="pc-stickers">
      {stickers.map((s, i) => (
        <span key={i} className="pc-sticker"
          style={{ left: `${s.x}%`, top: `${s.y}%`, background: s.c, ["--r" as string]: `${s.r}deg`, animationDelay: `${s.d}s` }}>
          {s.t}
        </span>
      ))}
      <div className="pc-shipped">
        <span className="pc-check">✓</span>
        <p>Shipped</p>
      </div>
    </div>
  );
}

function PhoneFeed() {
  const rows = ["#ff6b4a", "#5b4bdb", "#2fd18a", "#f7d046", "#4f7cf0", "#ff8fc7"];
  return (
    <div className="pc-phone">
      <div className="pc-phone-notch" />
      <div className="pc-feed">
        {[...rows, ...rows].map((c, i) => (
          <div key={i} className="pc-feed-row">
            <span style={{ background: c }} />
            <div><i /><i /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Bars() {
  const bars = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="pc-bars">
      {bars.map((i) => <span key={i} style={{ animationDelay: `${i * -0.35}s` }} />)}
      <div className="pc-bars-line" />
    </div>
  );
}

function Typing() {
  const lines = [["const", "fun", "=", "true;"], ["design", "→", "code"], ["ship", "(", "it", ")"]];
  return (
    <div className="pc-code">
      {lines.map((l, i) => (
        <p key={i} style={{ animationDelay: `${i * 0.9}s` }}>
          {l.map((w, j) => <span key={j} className={j === 0 ? "pc-kw" : undefined}>{w} </span>)}
        </p>
      ))}
      <span className="pc-caret" />
    </div>
  );
}

function Bounce() {
  return (
    <div className="pc-bounce">
      {"PLAY".split("").map((ch, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.12}s` }}>{ch}</span>
      ))}
    </div>
  );
}

function Canvas() {
  return (
    <div className="pc-canvas">
      <div className="pc-frame">
        <span className="pc-handle pc-h1" /><span className="pc-handle pc-h2" />
        <span className="pc-handle pc-h3" /><span className="pc-handle pc-h4" />
      </div>
      <svg className="pc-cursor" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 3l7 17 2.5-7L21 10.5z" fill="#111" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <span className="pc-cursor-tag">Femi</span>
    </div>
  );
}

const CARDS: Card[] = [
  { headline: "Sami: visa and money tracking for students.", tag: "Concept website", href: "https://sami-kohl.vercel.app", bg: "#f3f3f1", ink: "#000000", art: <SamiSite />, site: true },
  { headline: "Apps you can scroll all day.", tag: "Coming soon", bg: "#f7d046", ink: "#17142e", art: <PhoneFeed /> },
  { headline: "Bop: tap phones to send money.", tag: "Concept website", bg: "#b0a3ff", ink: "#2c2552", art: <BopSite /> },
  { headline: "Dashboards that actually move.", tag: "Coming soon", bg: "#29b6f6", ink: "#08243a", art: <Bars /> },
  { headline: "Experiments that made it all the way to live.", tag: "Coming soon", bg: "#ecebe7", ink: "#17142e", art: <Stickers /> },
  { headline: "From design straight to code.", tag: "Coming soon", bg: "#ff6b4a", ink: "#2a0d05", art: <Typing /> },
  { headline: "Things made only because they were fun.", tag: "Coming soon", bg: "#ff8fc7", ink: "#3a0a22", art: <Bounce /> },
  { headline: "Designs, start to finish, on the canvas.", tag: "Coming soon", bg: "#ffffff", ink: "#17142e", art: <Canvas /> },
];

export default function PlayCards() {
  const track = useRef<HTMLDivElement>(null);
  const nudge = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".pc-card");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 20), behavior: "smooth" });
  };

  return (
    <section className="max-w-275 mx-auto px-6 pb-20 md:pb-32">
      <div className="pc-shell">
        <div className="pc-head">
          <span className="pc-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
            </svg>
            Playground
          </span>
          <div className="pc-arrows">
            <button type="button" aria-label="Previous" onClick={() => nudge(-1)}>‹</button>
            <button type="button" aria-label="Next" onClick={() => nudge(1)}>›</button>
          </div>
        </div>

        <div ref={track} className="pc-track">
          {CARDS.map((c, i) => {
            const body = (
              <>
                {c.site ? (
                  <>
                    <div className="pc-art pc-art--full">{c.art}</div>
                    <div className="pc-reveal">
                      <p className="pc-headline">{c.headline}</p>
                      <span className="pc-tag">{c.tag}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="pc-headline" style={{ color: c.ink }}>{c.headline}</p>
                    <span className="pc-tag" style={{ color: c.ink }}>{c.tag}</span>
                    <div className="pc-art">{c.art}</div>
                  </>
                )}
              </>
            );
            if (c.href?.startsWith("http")) {
              return <a key={i} href={c.href} target="_blank" rel="noreferrer" className="pc-card" style={{ background: c.bg }} aria-label={`${c.headline} Opens in a new tab`}>{body}</a>;
            }
            return c.href ? (
              <Link key={i} href={c.href} className="pc-card" style={{ background: c.bg }}>{body}</Link>
            ) : (
              <div key={i} className="pc-card" style={{ background: c.bg }}>{body}</div>
            );
          })}
        </div>
      </div>

      <style>{`
        .pc-shell { background: #f6f4fb; border-radius: 24px; padding: 24px; }
        .pc-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; }
        .pc-label { display: inline-flex; align-items: center; gap: 8px; background: #fff; border-radius: 999px; padding: 8px 14px; font-size: 13px; color: #111; }
        .pc-arrows { display: flex; gap: 4px; background: #fff; border-radius: 999px; padding: 4px; }
        .pc-arrows button { width: 30px; height: 30px; border-radius: 999px; border: 0; background: transparent; color: #111; font-size: 18px; line-height: 1; cursor: pointer; }
        .pc-arrows button:hover { background: #e9e6ff; }

        .pc-track { display: grid; grid-template-rows: repeat(2, auto); grid-auto-flow: column; grid-auto-columns: calc((100% - 40px) / 3); gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; }
        .pc-track::-webkit-scrollbar { display: none; }
        .pc-card { position: relative; aspect-ratio: 1 / 1; border-radius: 20px; overflow: hidden; scroll-snap-align: start; display: block; transition: transform .4s ease; box-shadow: inset 0 0 0 1px rgba(23,20,46,.06); }
        a.pc-card:hover { transform: translateY(-4px); }
        .pc-headline { position: relative; z-index: 2; margin: 0; padding: 26px 26px 0; font-size: clamp(17px, 1.6vw, 21px); line-height: 1.3; letter-spacing: -0.01em; max-width: 22ch; }
        .pc-tag { position: relative; z-index: 2; display: block; padding: 10px 26px 0; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.45; }
        .pc-art { position: absolute; inset: 32% 0 0 0; }

        /* Sami card: real screenshots, full bleed, a new section every 1.4s; the write-up shows on hover */
        .pc-art--full { inset: 0; }
        .pc-site { position: absolute; inset: 0; }
        .pc-site-shot { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top; opacity: 0; animation: pc-site 7s cubic-bezier(.22,1,.36,1) infinite; }
        @keyframes pc-site {
          0% { opacity: 0; transform: translateY(18px) scale(1.03); }
          5% { opacity: 1; transform: translateY(0) scale(1); }
          18% { opacity: 1; transform: translateY(-8px) scale(1); }
          22%, 100% { opacity: 0; transform: translateY(-18px) scale(1); }
        }
        .pc-reveal { position: absolute; inset: auto 0 0 0; z-index: 3; padding: 80px 0 22px; color: #fff; background: linear-gradient(to top, rgba(10,10,14,.92) 30%, rgba(10,10,14,0)); opacity: 0; transform: translateY(10px); transition: opacity .3s ease, transform .3s ease; }
        .pc-reveal .pc-headline { padding-top: 0; }
        .pc-card:hover .pc-reveal, .pc-card:focus-visible .pc-reveal { opacity: 1; transform: none; }
        @media (hover: none) { .pc-reveal { opacity: 1; transform: none; } }

        /* card: Bop, its site in a browser window cycling through five sections (13s loop) */
        .pc-bop { position: absolute; inset: 0; }
        .pc-bop-win { position: absolute; left: 8%; right: -18%; top: 6%; bottom: -12%; border-radius: 12px; overflow: hidden; background: #fff; box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 24px 44px -20px rgba(0,0,0,.35); }
        .pc-bop-bar { height: 26px; display: flex; align-items: center; gap: 10px; padding: 0 10px; background: #f3f3f1; border-bottom: 1px solid #e7e7e5; }
        .pc-bop-dots { display: flex; gap: 4px; }
        .pc-bop-dots i { width: 7px; height: 7px; border-radius: 9px; background: #d4d4d0; }
        .pc-bop-url { font-size: 9.5px; color: #6e6e6e; background: #fff; border-radius: 6px; padding: 2px 10px; }
        .pc-bop-view { position: absolute; inset: 26px 0 0 0; }
        .pc-bop-shot { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: left top; opacity: 0; animation: pc-bop 13s cubic-bezier(.22,1,.36,1) infinite; }
        @keyframes pc-bop {
          0% { opacity: 0; transform: translateY(14px) scale(1.02); }
          4% { opacity: 1; transform: translateY(0) scale(1); }
          19% { opacity: 1; transform: translateY(-6px) scale(1); }
          23%, 100% { opacity: 0; transform: translateY(-14px) scale(1); }
        }

        /* card 3: stickers stamping in around a check */
        .pc-stickers { position: absolute; inset: 0; }
        .pc-sticker { position: absolute; padding: 6px 16px; font-size: 20px; font-weight: 600; color: #17142e; border-radius: 4px; transform: rotate(var(--r)) scale(0); animation: pc-stamp 4.8s cubic-bezier(.2,1.6,.4,1) infinite; }
        .pc-shipped { position: absolute; left: 50%; top: 44%; transform: translate(-50%, -50%); text-align: center; }
        .pc-shipped p { margin: 10px 0 0; font-size: 15px; color: #17142e; }
        .pc-check { display: inline-flex; width: 64px; height: 64px; border-radius: 50%; background: #a99cf3; color: #17142e; align-items: center; justify-content: center; font-size: 28px; animation: pc-pop 4.8s ease-in-out infinite; }
        @keyframes pc-stamp {
          0%       { transform: rotate(var(--r)) scale(0); opacity: 0; }
          10%, 70% { transform: rotate(var(--r)) scale(1); opacity: 1; }
          85%,100% { transform: rotate(calc(var(--r) + 20deg)) scale(.6) translateY(30px); opacity: 0; }
        }
        @keyframes pc-pop { 0%, 40%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } 60% { transform: scale(.95); } }


        /* card: phone with an endless feed */
        .pc-phone { position: absolute; left: 50%; top: 10%; width: 46%; height: 120%; margin-left: -23%; background: #111; border-radius: 26px; padding: 22px 8px 0; box-shadow: 0 20px 40px rgba(0,0,0,.25); overflow: hidden; }
        .pc-phone-notch { position: absolute; left: 50%; top: 8px; width: 34%; height: 9px; margin-left: -17%; background: #000; border-radius: 9px; }
        .pc-feed { animation: pc-feed 9s linear infinite; }
        .pc-feed-row { display: flex; gap: 8px; align-items: center; background: #1f1f24; border-radius: 10px; padding: 8px; margin-bottom: 6px; }
        .pc-feed-row > span { width: 22px; height: 22px; border-radius: 7px; flex: none; }
        .pc-feed-row div { flex: 1; display: flex; flex-direction: column; gap: 4px; }
        .pc-feed-row i { height: 5px; border-radius: 5px; background: #3a3a42; }
        .pc-feed-row i + i { width: 60%; }
        @keyframes pc-feed { to { transform: translateY(-50%); } }

        /* card: bar chart breathing */
        .pc-bars { position: absolute; left: 14%; right: 14%; bottom: 16%; top: 12%; display: flex; align-items: flex-end; gap: 8%; border-bottom: 2px solid rgba(8,36,58,.35); }
        .pc-bars span { flex: 1; background: #fff; border-radius: 6px 6px 2px 2px; height: 40%; animation: pc-bar 2.8s ease-in-out infinite; }
        .pc-bars span:nth-child(odd) { background: #08243a; }
        .pc-bars-line { position: absolute; left: 0; right: 0; top: 30%; border-top: 2px dashed rgba(255,255,255,.7); animation: pc-line 2.8s ease-in-out infinite; }
        @keyframes pc-bar { 0%, 100% { height: 30%; } 50% { height: 92%; } }
        @keyframes pc-line { 50% { transform: translateY(18px); } }

        /* card: code typing out */
        .pc-code { position: absolute; left: 12%; right: 12%; top: 10%; background: #2a0d05; border-radius: 12px; padding: 16px 18px; font-family: ui-monospace, monospace; font-size: 13px; color: #ffd6c9; box-shadow: 0 16px 34px rgba(42,13,5,.3); }
        .pc-code p { margin: 0 0 8px; white-space: nowrap; overflow: hidden; width: 0; animation: pc-type 4.5s steps(18) infinite; }
        .pc-kw { color: #ffb199; }
        .pc-caret { display: inline-block; width: 7px; height: 14px; background: #ffd6c9; animation: pc-caret .8s steps(1) infinite; }
        @keyframes pc-type { 0% { width: 0; } 30%, 85% { width: 100%; } 100% { width: 0; } }
        @keyframes pc-caret { 50% { opacity: 0; } }

        /* card: bouncing letters */
        .pc-bounce { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; gap: 2px; }
        .pc-bounce span { font-size: clamp(48px, 6vw, 76px); font-weight: 800; color: #3a0a22; letter-spacing: -0.04em; display: inline-block; animation: pc-hop 1.6s cubic-bezier(.3,1.8,.5,1) infinite; }
        .pc-bounce span:nth-child(even) { color: #fff; }
        @keyframes pc-hop { 0%, 60%, 100% { transform: translateY(0) rotate(0); } 30% { transform: translateY(-26px) rotate(-8deg); } }

        /* card: cursor resizing a frame on a dotted canvas */
        .pc-canvas { position: absolute; inset: 0; background-image: radial-gradient(rgba(23,20,46,.14) 1px, transparent 1px); background-size: 14px 14px; }
        .pc-frame { position: absolute; left: 22%; top: 18%; width: 40%; height: 46%; background: #e9e6ff; border: 1.5px solid #5b4bdb; animation: pc-resize 4s ease-in-out infinite; }
        .pc-handle { position: absolute; width: 8px; height: 8px; background: #fff; border: 1.5px solid #5b4bdb; }
        .pc-h1 { left: -5px; top: -5px; } .pc-h2 { right: -5px; top: -5px; } .pc-h3 { left: -5px; bottom: -5px; } .pc-h4 { right: -5px; bottom: -5px; }
        .pc-cursor { position: absolute; left: 62%; top: 64%; animation: pc-drag 4s ease-in-out infinite; }
        .pc-cursor-tag { position: absolute; left: 66%; top: 72%; background: #5b4bdb; color: #fff; font-size: 11px; padding: 3px 8px; border-radius: 6px; animation: pc-drag 4s ease-in-out infinite; }
        @keyframes pc-resize { 50% { width: 56%; height: 58%; } }
        @keyframes pc-drag { 50% { transform: translate(52px, 27px); } }

        @media (max-width: 900px) {
          .pc-track { grid-auto-columns: 46%; }
        }
        @media (max-width: 640px) {
          .pc-shell { padding: 16px; border-radius: 20px; }
          .pc-track { grid-auto-columns: 82%; gap: 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pc-card *, .pc-card *::before { animation: none !important; }
          .pc-sticker { transform: rotate(var(--r)) scale(1); }
          .pc-site-shot:first-child, .pc-bop-shot:first-child { opacity: 1; }

        }
      `}</style>
    </section>
  );
}
