"use client";
import { useState, useEffect } from "react";

const IMAGES = [
  "/checkout/Card.png",
  "/checkout/Card-2.png",
  "/checkout/Card-7.png",
  "/checkout/Success.png",
  "/checkout/Transfer.png",
  "/checkout/USSD-2.png",
  "/checkout/QR%20Code.png",
];

export default function CheckoutHeroAnimation() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      const t = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % IMAGES.length);
        setVisible(true);
      }, 400);
      return () => clearTimeout(t);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: 600,
        background: "linear-gradient(135deg, #1a1a3e 0%, #2d2d6b 60%, #1a1a3e 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 24px",
      }}
    >
      <div
        style={{
          width: 380,
          maxWidth: "100%",
          background: "white",
          borderRadius: 16,
          boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
          overflow: "hidden",
        }}
      >
        <img
          src={IMAGES[current]}
          alt="PayZeep Checkout"
          style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>
      <p
        style={{
          fontSize: 12,
          fontWeight: 400,
          color: "rgba(255,255,255,0.5)",
          marginTop: 24,
          textAlign: "center",
          letterSpacing: "0.04em",
        }}
      >
        5 payment methods · Web + Mobile · 2025
      </p>
    </div>
  );
}
