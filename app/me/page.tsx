"use client";
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef, useState } from "react";

type Sticker =
  { label: string; bg: string; color?: string; rotate?: number };

type BaseItem = {
  caption: string;
  width: number;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
};

type ImgItem = BaseItem & {
  kind: "img";
  src: string;
  mono?: boolean;
};

type VideoItem = BaseItem & {
  kind: "video";
  src: string;
};

type CarouselItem = ImgItem | VideoItem;

const STICKERS: Sticker[] = [
  { label: "P", bg: "#d7ff59", color: "#111", rotate: -2 },
  { label: "02", bg: "#111", color: "#fff", rotate: 2 },
  { label: "LA", bg: "#76d7ff", color: "#111", rotate: -3 },
  { label: "ME", bg: "#ff7a1a", color: "#fff", rotate: 2 },
];

const ITEMS: CarouselItem[] = [
  {
    kind: "img",
    src: "/myImages/me_front.JPG",
    caption: "FEMI. LAGOS. 2025.",
    width: 360,
    objectPosition: "center top",
  },
  {
    kind: "img",
    src: "/myImages/workspace.JPG",
    caption: "MY WORKSPACE. WHERE THE PIXELS GET ARGUED WITH.",
    width: 300,
    objectPosition: "center 52%",
  },
  {
    kind: "img",
    src: "/myImages/SchoolGrad.jpeg",
    caption: "BAGGED MY BACHELORS. WITH THE GUYS.",
    width: 520,
    objectPosition: "center center",
    mono: true,
  },
  {
    kind: "img",
    src: "/myImages/Me_graudationSolopic.JPEG",
    caption: "SOLO. SUITED UP.",
    width: 320,
    objectPosition: "center top",
  },
  {
    kind: "video",
    src: "/myImages/playingtennis.mp4",
    caption: "TENNIS WITH MY GUY. FORM IS STILL LOADING.",
    width: 460,
  },
  {
    kind: "img",
    src: "/myImages/me%40beach.jpeg",
    caption: "LAGOS BEACH. ALWAYS.",
    width: 410,
    objectPosition: "center center",
  },
  {
    kind: "video",
    src: "/myImages/Playingpadel.mp4",
    caption: "PLAYING PADEL. NOT AS BAD AS I LOOK.",
    width: 360,
  },
  {
    kind: "img",
    src: "/myImages/me%26friendseating.JPG",
    caption: "KFC WITH THE GUYS. CLASSIC LAGOS MOVE.",
    width: 540,
    objectPosition: "center 42%",
  },
  {
    kind: "img",
    src: "/myImages/memirrorselfie.jpeg",
    caption: "MIRROR SZNN.",
    width: 420,
    objectPosition: "center 36%",
  },
  {
    kind: "img",
    src: "/myImages/beachrandompic2.jpeg",
    caption: "BEACH RANDOM. NEEDED THIS ONE.",
    width: 520,
    objectPosition: "center 55%",
  },
  {
    kind: "img",
    src: "/myImages/me%26friendmirror.JPG",
    caption: "YOU KNOW HOW IT IS.",
    width: 340,
    objectPosition: "center 42%",
  },
  {
    kind: "img",
    src: "/myImages/me%26friends_kitcheneating.jpeg",
    caption: "KITCHEN GANG. VERY SERIOUS MEETING.",
    width: 530,
    objectPosition: "center 48%",
  },
  {
    kind: "img",
    src: "/myImages/beachrandompic.jpeg",
    caption: "BEACH RANDOM. THE FIRST TAKE.",
    width: 430,
    objectPosition: "center 50%",
  },
  {
    kind: "video",
    src: "/myImages/videofriendspadel.mp4",
    caption: "PADEL WITH THE GUYS.",
    width: 480,
  },
  {
    kind: "video",
    src: "/myImages/picme_padel.MP4",
    caption: "PADEL WALK. MAIN CHARACTER.",
    width: 340,
  },
];

const EXPERIENCE = [
  { company: "DriveVault", role: "Product Designer & PM", date: "Feb '25 - now" },
  { company: "Paymi Solutions", role: "Product Designer (UI/UX)", date: "Jun '24 - now" },
  { company: "Contripay", role: "Product Designer", date: "Oct '24 - Mar '25" },
  { company: "FourthCanvas", role: "UX Researcher", date: "Apr '24 - Jun '24" },
  { company: "Aimsity", role: "UI/UX Designer", date: "Nov '23 - Dec '23" },
  { company: "Check-it", role: "UI/UX Designer", date: "Aug '22 - Oct '22" },
  { company: "Softkode", role: "Lead Designer", date: "Dec '20 - Dec '22" },
];

const SKILLS = [
  "Product Design",
  "UX Research",
  "Design Engineering",
  "HCI",
  "Flutter",
  "React/Next.js",
];

function InlineSticker({ sticker }: { sticker: Sticker }) {
  return (
    <span
      className="inline-sticker"
      style={{
        background: sticker.bg,
        color: sticker.color ?? "#111",
        transform: `rotate(${sticker.rotate ?? 0}deg)`,
      }}
      aria-hidden="true"
    >
      {sticker.label}
    </span>
  );
}

function CarouselCard({
  item,
  onRef,
}: {
  item: CarouselItem;
  onRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={onRef}
      className="carousel-card"
      style={{ width: `min(${item.width}px, 82vw)` }}
    >
      <div
        className="media-frame"
        style={{ width: `min(${item.width}px, 82vw)` }}
      >
        {item.kind === "img" && (
          <img
            src={item.src}
            alt={item.caption}
            className={item.mono ? "mono-media" : undefined}
            style={{
              objectPosition: item.objectPosition ?? "center",
              objectFit: item.objectFit ?? "cover",
            }}
          />
        )}

        {item.kind === "video" && (
          <video src={item.src} autoPlay muted loop playsInline />
        )}
      </div>

      <p className="carousel-caption" style={{ maxWidth: `min(${item.width}px, 82vw)` }}>
        {item.caption}
      </p>
    </div>
  );
}

export default function MePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<number | null>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    document.title = "Femi Jimoh - Me";
  }, []);

  const goTo = (next: number) => {
    const bounded = Math.max(0, Math.min(next, ITEMS.length - 1));
    const el = itemRefs.current[bounded];
    if (el && containerRef.current) {
      containerRef.current.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
    }
    setIdx(bounded);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const tick = () => {
      const loopWidth = el.scrollWidth / 2;
      el.scrollLeft += 1.5;
      if (el.scrollLeft >= loopWidth) {
        el.scrollLeft -= loopWidth;
      }
      animationRef.current = window.requestAnimationFrame(tick);
    };

    animationRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const loopWidth = el.scrollWidth / 2;
    const scrollLeft = loopWidth > 0 ? el.scrollLeft % loopWidth : el.scrollLeft;

    const nearest = itemRefs.current.reduce(
      (best, item, index) => {
        if (!item) return best;
        const distance = Math.abs(item.offsetLeft - scrollLeft);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    );

    setIdx(nearest.index);
  };

  return (
    <main className="me-page">
      <section className="hero-statement">
        <p>
          A designer with 5 years of experience spanning product, HCI research,
          and design engineering; who enjoys padel sessions <InlineSticker sticker={STICKERS[0]} />,
          building random apps at <InlineSticker sticker={STICKERS[1]} />, guitar,
          long Lagos drives, tennis with the guys,
          and taking way too many mirror selfies <InlineSticker sticker={STICKERS[3]} />.
          Overall, my design philosophy is simple: make people feel something,
          then move fast enough to ship it yourself.
        </p>
      </section>

      <section className="bio-section">
        <div>
          <p>
          I stumbled into engineering as a way to solve real problems, and into
          design because I wanted those solutions to feel human. The intersection
          is where I live now: research, interface, code, motion, and the tiny
          details that make someone trust a product before they have to think too
          hard.
          </p>
          <p>
            I started in electrical engineering, built a fall detection device
            for my thesis, then spent five years designing fintech tools, health
            products, dashboards, checkout flows, and the occasional late-night
            app that probably should have stayed in the notes app. I'm based in
            Lagos, and I like work that has a pulse.
          </p>

          <span className="dot-label">.skills</span>
          <p className="skills-row">
            {SKILLS.map((skill, i) => (
              <span key={skill}>
                {skill}
                {i < SKILLS.length - 1 && <span className="separator">·</span>}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="carousel-section">
        <div className="carousel-controls">
          <span>{idx + 1}/{ITEMS.length}</span>
          <div>
            <button
              onClick={() => goTo(idx - 1)}
              aria-label="Previous photo"
              disabled={idx === 0}
            >
              ←
            </button>
            <button
              onClick={() => goTo(idx + 1)}
              aria-label="Next photo"
              disabled={idx === ITEMS.length - 1}
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="carousel-strip"
          onScroll={handleScroll}
        >
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <CarouselCard
              key={`${item.caption}-${i}`}
              item={item}
              onRef={(el) => {
                if (i < ITEMS.length) itemRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </section>

      <section className="closing-line">
        <p>- And yes, I built this website myself. No templates. Every line of code.</p>
      </section>

      <section className="currently-section">
        <span className="dot-label">.currently</span>
        <div>
          {["Open to new roles", "Lagos, Nigeria", "Applying HCI Masters 2025"].map((item) => (
            <span key={item}>
              <i />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <h2>Experience</h2>
        <div>
          {EXPERIENCE.map((exp, i) => (
            <article key={exp.company} className={i === 0 ? "first-row" : undefined}>
              <div>
                <h3>{exp.company}</h3>
                <p>{exp.role}</p>
              </div>
              <time>{exp.date}</time>
            </article>
          ))}
        </div>
      </section>

      <style jsx>{`
        .me-page {
          background: #fff;
          color: #111;
        }

        .hero-statement {
          padding: 88px 48px 92px;
        }

        .hero-statement p {
          margin: 0;
          color: #050505;
          font-size: 46px;
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: 0;
          max-width: 1520px;
        }

        .inline-sticker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 0.82em;
          height: 0.82em;
          margin: 0 0.08em;
          border-radius: 0.16em;
          font-family: monospace;
          font-size: 0.46em;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 1;
          vertical-align: 0.02em;
        }

        .bio-section {
          padding: 0 48px 112px;
        }

        .bio-section > div {
          max-width: 780px;
          margin: 0 auto;
        }

        .bio-section p {
          margin: 0 0 24px;
          color: #707070;
          font-size: 21px;
          font-weight: 300;
          line-height: 1.42;
          letter-spacing: 0;
        }

        .dot-label {
          display: block;
          margin: 40px 0 16px;
          color: #111;
          font-family: monospace;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0;
        }

        .skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          margin: 0 !important;
          color: #111 !important;
          font-size: 18px !important;
          line-height: 1.8 !important;
        }

        .separator {
          color: #d8d8d8;
          margin: 0 16px;
        }

        .carousel-section {
          padding-bottom: 64px;
        }

        .carousel-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 48px 28px;
        }

        .carousel-controls span {
          color: #111;
          font-size: 32px;
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1;
        }

        .carousel-controls div {
          display: flex;
          gap: 28px;
        }

        .carousel-controls button {
          border: 0;
          background: transparent;
          color: #111;
          padding: 0;
          font-size: 34px;
          font-weight: 300;
          line-height: 1;
          transition: opacity 0.2s ease;
        }

        .carousel-controls button:disabled {
          opacity: 0.2;
        }

        .carousel-strip {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          overflow-x: auto;
          padding: 0 48px 18px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }

        .carousel-strip::-webkit-scrollbar {
          display: none;
        }

        .carousel-card {
          flex: 0 0 auto;
        }

        .media-frame {
          position: relative;
          height: 370px;
          overflow: hidden;
          background: #f0f0f0;
        }

        .media-frame img,
        .media-frame video,
        .flip-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .mono-media {
          filter: grayscale(1);
        }

        .flip-frame {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .flip-frame img {
          position: absolute;
          inset: 0;
          transition: opacity 0.3s ease;
        }

        .carousel-caption {
          margin: 0;
          padding: 14px 4px 0;
          color: #8f8f8f;
          font-family: monospace;
          font-size: 12px;
          line-height: 1.45;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          overflow-wrap: break-word;
        }

        .closing-line {
          padding: 6px 48px 56px;
        }

        .closing-line p {
          margin: 0;
          color: #777;
          font-size: 15px;
          font-style: italic;
          font-weight: 300;
        }

        .currently-section {
          margin: 0 48px;
          padding: 24px 0 56px;
          border-top: 1px solid #f0f0f0;
        }

        .currently-section .dot-label {
          margin-top: 0;
        }

        .currently-section > div {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 48px;
        }

        .currently-section span:not(.dot-label) {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #555;
          font-size: 14px;
          font-weight: 300;
        }

        .currently-section i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7ab87a;
          flex: 0 0 auto;
        }

        .experience-section {
          padding: 0 48px 96px;
        }

        .experience-section h2 {
          margin: 44px 0 0;
          color: #111;
          font-size: 40px;
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: 0;
        }

        .experience-section > div {
          margin-top: 28px;
        }

        .experience-section article {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .experience-section article.first-row {
          border-top: 1px solid #f0f0f0;
        }

        .experience-section h3 {
          margin: 0;
          color: #111;
          font-size: 17px;
          font-weight: 400;
        }

        .experience-section article p {
          margin: 3px 0 0;
          color: #999;
          font-size: 13px;
          font-weight: 300;
        }

        .experience-section time {
          color: #bbb;
          font-size: 13px;
          font-weight: 300;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .hero-statement p {
            font-size: 40px;
          }
        }

        @media (max-width: 720px) {
          .hero-statement {
            padding: 52px 24px 64px;
          }

          .hero-statement p {
            font-size: 30px;
            line-height: 1.18;
          }

          .bio-section {
            padding: 0 24px 88px;
          }

          .bio-section p {
            font-size: 16px;
            line-height: 1.65;
          }

          .skills-row {
            font-size: 15px !important;
          }

          .separator {
            margin: 0 10px;
          }

          .carousel-controls {
            padding: 0 24px 20px;
          }

          .carousel-controls span {
            font-size: 28px;
          }

          .carousel-controls button {
            font-size: 30px;
          }

          .carousel-strip {
            padding-left: 24px;
            padding-right: 24px;
          }

          .carousel-caption {
            font-size: 11px;
          }

          .media-frame {
            height: min(370px, 50vh);
          }

          .closing-line {
            padding: 0 24px 48px;
          }

          .currently-section {
            margin: 0 24px;
            padding-bottom: 48px;
          }

          .experience-section {
            padding: 0 24px 80px;
          }

          .experience-section article {
            flex-direction: column;
            gap: 6px;
          }

          .experience-section h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </main>
  );
}
