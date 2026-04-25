import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  bg?: string;
  className?: string;
}

export default function BrowserMockup({
  src,
  alt,
  bg = "#f5f5f5",
  className,
}: BrowserMockupProps) {
  return (
    <div
      className={className}
      style={{
        background: bg,
        borderRadius: 12,
        padding: 12,
        boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          background: "#e8e8e8",
          height: 32,
          borderRadius: "8px 8px 0 0",
          display: "flex",
          alignItems: "center",
          paddingLeft: 12,
          position: "relative",
          gap: 6,
          flexShrink: 0,
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "40%",
            height: 16,
            background: "#d0d0d0",
            borderRadius: 8,
          }}
        />
      </div>

      {/* Screenshot */}
      <div style={{ borderRadius: "0 0 8px 8px", overflow: "hidden", lineHeight: 0 }}>
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </div>
  );
}
