"use client";

import { useEffect, useRef } from "react";

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch / no-hover devices (phones, tablets)
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    // Current mouse position (dot follows this instantly)
    let mx = -100;
    let my = -100;
    // Ring lerp position
    let rx = -100;
    let ry = -100;
    let rafId: number;

    // ── Dot + label track mouse instantly ──────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      label.style.left = `${mx}px`;
      label.style.top = `${my + 22}px`;
    };

    // ── Ring lerps toward mouse each frame ─────────────────────
    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Per-card magnetic listeners ────────────────────────────
    const cards =
      document.querySelectorAll<HTMLElement>("[data-magnetic-card]");

    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const imgWrap = card.querySelector<HTMLElement>("[data-card-image]");

      const onCardMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        // Card body shift
        card.style.transform = `translate(${dx * 0.12}px, ${dy * 0.12}px)`;
        card.style.transition = "transform 0.15s ease-out";

        // Image parallax + subtle scale
        if (imgWrap) {
          imgWrap.style.transform = `translate(${dx * 0.08}px, ${dy * 0.08}px) scale(1.02)`;
          imgWrap.style.transition = "transform 0.15s ease-out";
        }

        // Ring expands + darkens
        ring.style.width = "60px";
        ring.style.height = "60px";
        ring.style.borderColor = "rgba(0,0,0,0.4)";

        // Dot shrinks
        dot.style.width = "5px";
        dot.style.height = "5px";

        // Show label
        label.style.opacity = "1";
      };

      const onCardLeave = () => {
        const ease = "0.4s cubic-bezier(0.16, 1, 0.3, 1)";

        card.style.transform = "translate(0px, 0px)";
        card.style.transition = `transform ${ease}`;

        if (imgWrap) {
          imgWrap.style.transform = "translate(0px, 0px) scale(1)";
          imgWrap.style.transition = `transform ${ease}`;
        }

        // Reset ring
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "rgba(0,0,0,0.18)";

        // Reset dot
        dot.style.width = "10px";
        dot.style.height = "10px";

        // Hide label
        label.style.opacity = "0";
      };

      card.addEventListener("mousemove", onCardMove);
      card.addEventListener("mouseleave", onCardLeave);

      cleanups.push(() => {
        card.removeEventListener("mousemove", onCardMove);
        card.removeEventListener("mouseleave", onCardLeave);
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      {/* Lagging ring — hidden on touch devices via CSS */}
      <div
        ref={ringRef}
        className="magnetic-cursor-el"
        style={{
          position: "fixed",
          left: "-100px",
          top: "-100px",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.18)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
        }}
      />

      {/* Instant dot */}
      <div
        ref={dotRef}
        className="magnetic-cursor-el"
        style={{
          position: "fixed",
          left: "-100px",
          top: "-100px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#111",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.15s ease, height 0.15s ease",
        }}
      />

      {/* "View →" label that appears on card hover */}
      <div
        ref={labelRef}
        className="magnetic-cursor-el"
        style={{
          position: "fixed",
          left: "-100px",
          top: "-100px",
          fontSize: "9px",
          letterSpacing: "0.04em",
          color: "#111",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, 0)",
          opacity: 0,
          transition: "opacity 0.2s ease",
          whiteSpace: "nowrap",
        }}
      >
        View →
      </div>

      <style>{`
        @media (hover: none) {
          .magnetic-cursor-el { display: none !important; }
        }
      `}</style>
    </>
  );
}
