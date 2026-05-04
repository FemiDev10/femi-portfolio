"use client";

import { useRef, useState } from "react";

type PhotoItem =
  | { kind: "flip"; front: string; back: string; alt: string }
  | { kind: "img";  src: string; alt: string }
  | { kind: "video"; src: string };

const PHOTOS: PhotoItem[] = [
  { kind: "flip",  front: "/myImages/me_front.JPG",  back: "/myImages/me_flip.JPG", alt: "Femi" },
  { kind: "img",   src: "/myImages/workspace.JPG",   alt: "Workspace" },
  { kind: "img",   src: "/myImages/Me_graudationSolopic.JPEG", alt: "Graduation" },
  { kind: "img",   src: "/myImages/me%26friendseating.JPG",    alt: "Friends" },
  { kind: "video", src: "/myImages/picme_padel.MP4" },
  { kind: "img",   src: "/myImages/me%26friendmirror.JPG",     alt: "Mirror" },
];

function FlipPhoto({ front, back, alt }: { front: string; back: string; alt: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative w-full h-full cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped((v) => !v)}
    >
      <img
        src={front}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: flipped ? 0 : 1, transition: "opacity 0.45s ease" }}
      />
      <img
        src={back}
        alt={alt + " back"}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: flipped ? 1 : 0, transition: "opacity 0.45s ease" }}
      />
    </div>
  );
}

export default function PhotoStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const scrollTo = (dir: "prev" | "next") => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement | undefined;
    const w = (card?.offsetWidth ?? 284) + 16;
    el.scrollBy({ left: dir === "next" ? w : -w, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement | undefined;
    const w = (card?.offsetWidth ?? 284) + 16;
    setIdx(Math.round(el.scrollLeft / w));
  };

  return (
    <div className="w-full select-none">
      {/* scroll container — bleeds to edges */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        style={{ paddingLeft: 48, paddingRight: 48, WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"] }}
      >
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[70vw] md:w-100 aspect-[4/5] overflow-hidden snap-start bg-[#f0f0f0]"
            style={{ borderRadius: 4 }}
          >
            {photo.kind === "flip" && (
              <FlipPhoto front={photo.front} back={photo.back} alt={photo.alt} />
            )}
            {photo.kind === "img" && (
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
            )}
            {photo.kind === "video" && (
              <video
                src={photo.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* counter + arrows */}
      <div className="flex items-center justify-between mt-5" style={{ paddingLeft: 48, paddingRight: 48 }}>
        <span className="text-[10px] text-[#bbb] tracking-[0.15em] uppercase tabular-nums">
          {idx + 1}/{PHOTOS.length}
        </span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("prev")}
            aria-label="Previous photo"
            className="text-[11px] text-[#111]/35 hover:text-[#111] transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => scrollTo("next")}
            aria-label="Next photo"
            className="text-[11px] text-[#111]/35 hover:text-[#111] transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
