"use client";
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef, useState } from "react";

/* ─── Types ─────────────────────────────────────────────────────── */
type FlipItem  = { kind: "flip";  src: string; flipSrc: string; caption: string; width: number };
type ImgItem   = { kind: "img";   src: string; caption: string; width: number };
type VideoItem = { kind: "video"; src: string; caption: string; width: number };
type CarouselItem = FlipItem | ImgItem | VideoItem;

/* ─── Carousel data ─────────────────────────────────────────────── */
// HEIF/HEIC files require conversion to JPG for cross-browser support.
// Convert via macOS Preview: File → Export → JPEG
const ITEMS: CarouselItem[] = [
  { kind: "flip",  src: "/myImages/me_front.JPG",                    flipSrc: "/myImages/me_flip.JPG", caption: "FEMI. LAGOS. 2025.",                        width: 360 },
  { kind: "img",   src: "/myImages/me_flip.JPG",                     caption: "THE FLIP SIDE.",                                                              width: 360 },
  { kind: "img",   src: "/myImages/workspace.JPG",                   caption: "MY WORKSPACE. SOMEWHERE IN LAGOS.",                                           width: 580 },
  { kind: "img",   src: "/myImages/Me_graudationSolopic.JPEG",       caption: "SOLO. SUITED UP.",                                                            width: 340 },
  { kind: "img",   src: "/myImages/SchoolGrad.HEIF",                 caption: "BAGGED MY BACHELORS. WITH THE GUYS.",                                         width: 500 },
  { kind: "img",   src: "/myImages/me%40beach.heic",                 caption: "LAGOS BEACH. ALWAYS.",                                                        width: 460 },
  { kind: "img",   src: "/myImages/beachrandompic.HEIC",             caption: "BEACH RANDOM.",                                                               width: 420 },
  { kind: "img",   src: "/myImages/beachrandompic2.HEIC",            caption: "NEEDED THIS ONE.",                                                            width: 440 },
  { kind: "img",   src: "/myImages/me%26friendseating.JPG",          caption: "KFC WITH THE GUYS. CLASSIC LAGOS MOVE.",                                      width: 520 },
  { kind: "img",   src: "/myImages/me%26friendmirror.JPG",           caption: "YOU KNOW HOW IT IS.",                                                         width: 420 },
  { kind: "img",   src: "/myImages/me%26friends_kitcheneating.HEIC", caption: "KITCHEN GANG.",                                                               width: 500 },
  { kind: "img",   src: "/myImages/memirrorselfie.HEIC",             caption: "MIRROR SZNN.",                                                                width: 340 },
  { kind: "img",   src: "/myImages/pic%20mepadel.HEIC",              caption: "JUST FEMI THINGS.",                                                           width: 420 },
  { kind: "video", src: "/myImages/picme_padel.MP4",                 caption: "PADEL WALK.",                                                                 width: 400 },
  { kind: "video", src: "/myImages/Playingpadel.MOV",                caption: "PLAYING PADEL. NOT AS BAD AS I LOOK.",                                        width: 460 },
  { kind: "video", src: "/myImages/videofriendspadel.MOV",           caption: "PADEL WITH THE GUYS.",                                                        width: 440 },
];

/* ─── Experience ─────────────────────────────────────────────────── */
const EXPERIENCE = [
  { company: "DriveVault",      role: "Product Designer & PM",    date: "Feb '25 – now"     },
  { company: "Paymi Solutions", role: "Product Designer (UI/UX)", date: "Jun '24 – now"     },
  { company: "Contripay",       role: "Product Designer",          date: "Oct '24 – Mar '25" },
  { company: "FourthCanvas",    role: "UX Researcher",             date: "Apr '24 – Jun '24" },
  { company: "Aimsity",         role: "UI/UX Designer",            date: "Nov '23 – Dec '23" },
  { company: "Check-it",        role: "UI/UX Designer",            date: "Aug '22 – Oct '22" },
  { company: "Softkode",        role: "Lead Designer",             date: "Dec '20 – Dec '22" },
];

const SKILLS = ["Product Design", "UX Research", "Design Engineering", "HCI", "Flutter", "React/Next.js"];

/* ─── Carousel card component ────────────────────────────────────── */
function CarouselCard({
  item,
  onRef,
}: {
  item: CarouselItem;
  onRef: (el: HTMLDivElement | null) => void;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div ref={onRef} style={{ flexShrink: 0, width: item.width }}>
      <div
        style={{
          width:    item.width,
          height:   480,
          overflow: "hidden",
          position: "relative",
          background: "#ebebeb",
        }}
      >
        {item.kind === "flip" && (
          <div
            style={{ position: "relative", width: "100%", height: "100%", cursor: "crosshair" }}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
          >
            <img
              src={item.src}
              alt="Femi"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                opacity: flipped ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
            <img
              src={item.flipSrc}
              alt="Femi"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                opacity: flipped ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            />
          </div>
        )}

        {item.kind === "img" && (
          <img
            src={item.src}
            alt={item.caption}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = "none";
            }}
          />
        )}

        {item.kind === "video" && (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )}
      </div>

      <p
        style={{
          fontFamily:    "monospace",
          fontSize:      11,
          color:         "#aaa",
          letterSpacing: "0.1em",
          paddingTop:    10,
          margin:        0,
          lineHeight:    1.4,
          textTransform: "uppercase",
        }}
      >
        {item.caption}
      </p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function MePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    document.title = "Femi Jimoh — Me";
  }, []);

  const goTo = (next: number) => {
    if (next < 0 || next >= ITEMS.length) return;
    const el = itemRefs.current[next];
    if (el && containerRef.current) {
      containerRef.current.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
    }
    setIdx(next);
  };

  return (
    <main>

      {/* ── 1. BIG STATEMENT ──────────────────────────────────────── */}
      <section style={{ padding: "72px 48px 64px" }}>
        <p
          style={{
            fontSize:      "clamp(28px, 4vw, 46px)",
            fontWeight:    400,
            lineHeight:    1.3,
            letterSpacing: "-0.02em",
            color:         "#111",
            margin:        0,
          }}
        >
          A designer with 5 years of experience spanning product design, HCI research, and design engineering; who enjoys padel sessions, building random apps at 2am, guitar, long Lagos drives, and taking way too many mirror selfies. My design philosophy: make people feel something — then ship it yourself.
        </p>
      </section>

      {/* ── 2. BIO + SKILLS ──────────────────────────────────────── */}
      <section
        style={{ padding: "0 48px 72px" }}
        className="sm:pl-[calc(40%+0px)]"
      >
        <div style={{ maxWidth: 640 }}>
          <p
            style={{
              fontSize:    15,
              color:       "#777",
              fontWeight:  300,
              lineHeight:  1.85,
              marginBottom: 20,
              marginTop:   0,
            }}
          >
            I stumbled into engineering as a way to solve problems, and into design as a way to make those solutions actually worth using. The intersection — where research meets interface, where code meets colour — is where I live. I started in electrical engineering, built a fall detection device for my thesis, then spent five years learning that the most important thing in any product isn't the technology. It's whether someone can pick it up and trust it immediately.
          </p>
          <p
            style={{
              fontSize:   15,
              color:      "#777",
              fontWeight: 300,
              lineHeight: 1.85,
              margin:     0,
            }}
          >
            I'm based in Lagos. I work with fintech companies, health startups, and occasionally myself — building things that probably shouldn't exist but definitely should be designed well.
          </p>
          <span
            style={{
              display:    "block",
              fontFamily: "monospace",
              fontSize:   13,
              color:      "#aaa",
              marginTop:  28,
              marginBottom: 10,
            }}
          >
            .skills
          </span>
          <p style={{ fontSize: 14, color: "#555", fontWeight: 300, margin: 0 }}>
            {SKILLS.map((s, i) => (
              <span key={s}>
                {s}
                {i < SKILLS.length - 1 && (
                  <span style={{ color: "#ddd", margin: "0 8px" }}>·</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ── 3. PHOTO CAROUSEL ────────────────────────────────────── */}
      <section style={{ paddingBottom: 72 }}>

        {/* counter + arrows */}
        <div
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "center",
            padding:        "0 48px 16px",
          }}
        >
          <span
            style={{
              fontSize:   14,
              color:      "#111",
              fontWeight: 400,
              fontFamily: "monospace",
            }}
          >
            {idx + 1}/{ITEMS.length}
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <button
              onClick={() => goTo(idx - 1)}
              aria-label="Previous photo"
              style={{
                background: "none",
                border:     "none",
                padding:    0,
                cursor:     idx === 0 ? "default" : "pointer",
                fontSize:   18,
                color:      idx === 0 ? "#ddd" : "#111",
                lineHeight: 1,
              }}
            >
              ←
            </button>
            <button
              onClick={() => goTo(idx + 1)}
              aria-label="Next photo"
              style={{
                background: "none",
                border:     "none",
                padding:    0,
                cursor:     idx >= ITEMS.length - 1 ? "default" : "pointer",
                fontSize:   18,
                color:      idx >= ITEMS.length - 1 ? "#ddd" : "#111",
                lineHeight: 1,
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* scroll strip */}
        <div
          ref={containerRef}
          className="no-scrollbar"
          style={{
            display:    "flex",
            gap:        16,
            overflowX:  "auto",
            alignItems: "flex-start",
            paddingLeft: 48,
            paddingRight: 48,
          }}
        >
          {ITEMS.map((item, i) => (
            <CarouselCard
              key={i}
              item={item}
              onRef={(el) => { itemRefs.current[i] = el; }}
            />
          ))}
        </div>
      </section>

      {/* ── 4. CLOSING LINE ──────────────────────────────────────── */}
      <section style={{ padding: "0 48px 48px" }}>
        <p style={{ fontSize: 15, color: "#777", fontWeight: 300, fontStyle: "italic", margin: 0 }}>
          — And yes, I built this website myself. Every line of code.
        </p>
      </section>

      {/* ── 5. CURRENTLY ─────────────────────────────────────────── */}
      <section
        style={{
          padding:   "0 48px 48px",
          borderTop: "1px solid #f0f0f0",
          marginTop: 48,
        }}
      >
        <span
          style={{
            display:    "block",
            fontFamily: "monospace",
            fontSize:   13,
            color:      "#aaa",
            marginTop:  24,
            marginBottom: 16,
          }}
        >
          .currently
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px" }}>
          {["Open to new roles", "Lagos, Nigeria", "Applying HCI Masters 2025"].map((item) => (
            <span
              key={item}
              style={{
                display:    "flex",
                alignItems: "center",
                gap:        8,
                fontSize:   14,
                color:      "#555",
                fontWeight: 300,
              }}
            >
              <span
                style={{
                  width:        6,
                  height:       6,
                  borderRadius: "50%",
                  background:   "#7ab87a",
                  display:      "inline-block",
                  flexShrink:   0,
                }}
              />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── 6. EXPERIENCE ────────────────────────────────────────── */}
      <section style={{ padding: "0 48px 96px" }}>
        <h2
          style={{
            fontSize:      "clamp(28px, 4vw, 40px)",
            fontWeight:    400,
            letterSpacing: "-0.025em",
            color:         "#111",
            margin:        "48px 0 0",
          }}
        >
          Experience
        </h2>
        <div style={{ marginTop: 0 }}>
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.company}
              style={{
                display:        "flex",
                justifyContent: "space-between",
                alignItems:     "flex-start",
                padding:        "18px 0",
                borderBottom:   "1px solid #f0f0f0",
                borderTop:      i === 0 ? "1px solid #f0f0f0" : undefined,
              }}
            >
              <div>
                <div style={{ fontSize: 17, fontWeight: 400, color: "#111" }}>{exp.company}</div>
                <div style={{ fontSize: 13, color: "#999", fontWeight: 300, marginTop: 3 }}>{exp.role}</div>
              </div>
              <div style={{ fontSize: 13, color: "#bbb", fontWeight: 300, whiteSpace: "nowrap" }}>
                {exp.date}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
