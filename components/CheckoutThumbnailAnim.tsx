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

export default function CheckoutThumbnailAnim() {
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
        height: "100%",
        background: "linear-gradient(135deg, #1a1a3e 0%, #2d2d6b 60%, #1a1a3e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 170,
          background: "white",
          borderRadius: 6,
          boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
          overflow: "hidden",
        }}
      >
        <img
          src={IMAGES[current]}
          alt="PayZeep Checkout"
          style={{
            width: "100%",
            display: "block",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>
    </div>
  );
}
