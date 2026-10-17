import type { ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
      {children}
    </p>
  );
}

export function Hero({ kicker, title, lede, pills }: { kicker: string; title: string; lede: string; pills: string[] }) {
  return (
    <section style={{ padding: "80px 0 56px" }}>
      <p style={{ fontSize: 12, color: "#999", letterSpacing: "0.04em", marginBottom: 20 }}>{kicker}</p>
      <h1 style={{
        fontSize: "clamp(56px, 9vw, 112px)", fontWeight: 400,
        letterSpacing: "-0.04em", color: "#111", lineHeight: 0.92, margin: "0 0 20px",
      }}>
        {title}
      </h1>
      <p style={{ fontSize: 18, color: "#888", fontWeight: 300, lineHeight: 1.6, maxWidth: 640, margin: "0 0 32px" }}>
        {lede}
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {pills.map((p) => (
          <span key={p} style={{
            background: "#f5f5f5", border: "1px solid #e8e8e8", color: "#666",
            borderRadius: 20, padding: "5px 14px", fontSize: 11,
          }}>
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

export function H2({ children, max = 820 }: { children: ReactNode; max?: number }) {
  return (
    <h2 style={{
      fontSize: "clamp(32px, 4.8vw, 60px)", fontWeight: 400, letterSpacing: "-0.04em",
      color: "#111", maxWidth: max, lineHeight: 1.08, margin: "0 0 32px",
    }}>
      {children}
    </h2>
  );
}

export function Body({ children, max = 680 }: { children: ReactNode; max?: number }) {
  return (
    <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: max, margin: "0 0 24px" }}>
      {children}
    </p>
  );
}

export function Shot({ src, alt, caption, w, h, bg = "#f4f4f4", pad = 0, radius = 12 }: {
  src: string; alt: string; caption?: string; w: number; h: number; bg?: string; pad?: number; radius?: number;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ background: bg, padding: pad, borderRadius: radius, overflow: "hidden", border: "1px solid #eee" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={w} height={h} loading="lazy"
          style={{ width: "100%", height: "auto", display: "block", borderRadius: pad ? Math.max(radius - 4, 0) : 0 }} />
      </div>
      {caption && <figcaption style={{ fontSize: 12, color: "#999", lineHeight: 1.6, marginTop: 12 }}>{caption}</figcaption>}
    </figure>
  );
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="cs-stat-grid">
      {items.map((s) => (
        <div key={s.label} style={{ borderTop: "1px solid #e8e8e8", paddingTop: 16 }}>
          <p style={{ fontSize: 22, fontWeight: 500, color: "#111", margin: 0, letterSpacing: "-0.02em" }}>{s.value}</p>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginTop: 6, marginBottom: 0 }}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function Rows({ items }: { items: { num: string; title: string; body: ReactNode }[] }) {
  return (
    <div>
      {items.map((d) => (
        <div key={d.num} className="cs-row">
          <p style={{ fontSize: 11, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{d.num}</p>
          <div>
            <p style={{ fontSize: 18, fontWeight: 500, color: "#111", margin: "0 0 10px" }}>{d.title}</p>
            <div style={{ fontSize: 15, color: "#777", fontWeight: 300, lineHeight: 1.8 }}>{d.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <p style={{
      fontSize: "clamp(24px, 3.5vw, 40px)", fontStyle: "italic", fontWeight: 300,
      color: "#111", letterSpacing: "-0.025em", maxWidth: 820, lineHeight: 1.25, margin: "0 0 40px",
    }}>
      {children}
    </p>
  );
}

export function Meta({ items }: { items: [string, ReactNode][] }) {
  return (
    <div className="cs-meta">
      {items.map(([l, v]) => (
        <div key={l}>
          <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 6px" }}>{l}</p>
          <div style={{ fontSize: 14, color: "#333", lineHeight: 1.6 }}>{v}</div>
        </div>
      ))}
    </div>
  );
}

export function CaseStyles() {
  return (
    <style>{`
      .cs-sec { padding: 96px 0; border-top: 1px solid #f0f0f0; }
      .cs-two-col { display: grid; grid-template-columns: 55% 45%; gap: 64px; align-items: start; }
      .cs-stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 24px; }
      .cs-row {
        border-top: 1px solid #f0f0f0; padding: 32px 0;
        display: grid; grid-template-columns: 200px 1fr; gap: 48px; align-items: start;
      }
      .cs-meta { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 32px 0 0; border-top: 1px solid #f0f0f0; }
      .cs-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .cs-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
      .cs-phones { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
      .cs-stack > * + * { margin-top: 40px; }

      @media (max-width: 900px) {
        .cs-sec { padding: 64px 0; }
        .cs-two-col { grid-template-columns: 1fr; gap: 40px; }
        .cs-meta { grid-template-columns: 1fr 1fr; }
        .cs-grid-3 { grid-template-columns: 1fr 1fr; }
        .cs-phones { grid-template-columns: repeat(3, 1fr); }
      }
      @media (max-width: 640px) {
        .cs-sec { padding: 48px 0; }
        .cs-row { grid-template-columns: 1fr; gap: 10px; }
        .cs-grid-2, .cs-grid-3 { grid-template-columns: 1fr; }
        .cs-phones { grid-template-columns: 1fr 1fr; }
      }
    `}</style>
  );
}
