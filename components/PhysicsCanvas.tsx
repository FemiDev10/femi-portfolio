"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from "react";

const BOXES = [
  { label: "femijimoh@gmail.com", color: "#fff",     bg: "#1a1a1a" },
  { label: "Product Designer",    color: "#fff",     bg: "#1a1a1a" },
  { label: "Lagos, NG 🇳🇬",       color: "#f5c518",  bg: "#111"    },
  { label: "Design Engineer",     color: "#fff",     bg: "#1a1a1a" },
  { label: "93% accuracy",        color: "#7ab87a",  bg: "#0a1a0a" },
  { label: "Technical PM",        color: "#fff",     bg: "#1a1a1a" },
  { label: "Open to work ●",      color: "#7ab87a",  bg: "#0a1a0a" },
  { label: "HCI Research",        color: "#a06ad8",  bg: "#0d0818" },
  { label: "Flutter · React",     color: "#4a8af0",  bg: "#060d18" },
  { label: "Hire me lol",         color: "#f5c518",  bg: "#111"    },
  { label: "Built by hand",       color: "#555",     bg: "#161616" },
  { label: "No handoff.",         color: "#e63c2f",  bg: "#1a0505" },
  { label: "500+ users",          color: "#e8a030",  bg: "#120800" },
  { label: "5 years",             color: "#bbb",     bg: "#161616" },
  { label: "LinkedIn ↗",          color: "#fff",     bg: "#1a1a1a" },
  { label: "Paymi · DriveVault",  color: "#bbb",     bg: "#161616" },
];

function boxW(label: string) { return label.length * 9 + 32; }

export default function PhysicsCanvas() {
  const containerRef   = useRef<HTMLDivElement>(null);
  const engineRef      = useRef<any>(null);
  // null = not yet determined, true = needs tap, false = granted / not needed
  const [iosPrompt, setIosPrompt] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    async function init() {
      const Matter = await import("matter-js");
      const { Engine, Render, Runner, Bodies, Body, World, Events,
              Mouse, MouseConstraint, Composite } = Matter;

      const container = containerRef.current;
      if (!container) return;

      const W = container.offsetWidth;
      const H = container.offsetHeight;

      const engine = Engine.create({ gravity: { x: 0, y: 1.2 } });
      engineRef.current = engine;

      const render = Render.create({
        element: container,
        engine,
        options: {
          width: W, height: H,
          background: "#111",
          wireframes: false,
          pixelRatio: window.devicePixelRatio || 1,
          showDebug: false, showIds: false, showSleeping: false,
          showAngleIndicator: false, showAxes: false, showPositions: false,
          showVelocity: false, showCollisions: false, showSeparations: false,
          showBroadphase: false, showBounds: false, showVertexNumbers: false,
          showConvexHulls: false, showInternalEdges: false,
        },
      });

      /* walls */
      const wallOpts = { isStatic: true, render: { fillStyle: "#111" } };
      const floor = Bodies.rectangle(W / 2, H + 25, W + 100, 50, wallOpts);
      const wallL = Bodies.rectangle(-25,   H / 2,  50, H * 3,   wallOpts);
      const wallR = Bodies.rectangle(W + 25, H / 2, 50, H * 3,   wallOpts);
      World.add(engine.world, [floor, wallL, wallR]);

      /* box factory */
      function makeBox(x: number, y: number, item: typeof BOXES[number]) {
        const body = Bodies.rectangle(x, y, boxW(item.label), 44, {
          restitution: 0.4, friction: 0.3, frictionAir: 0.02,
          chamfer: { radius: 8 },
          render: { fillStyle: item.bg },
        });
        (body as any).__label = item.label;
        (body as any).__color = item.color;
        return body;
      }

      /* staggered drop */
      const timeouts: ReturnType<typeof setTimeout>[] = [];
      BOXES.forEach((item, i) => {
        const t = setTimeout(() => {
          const x = 80 + Math.random() * Math.max(W - 160, 100);
          World.add(engine.world, makeBox(x, -60, item));
        }, i * 180);
        timeouts.push(t);
      });

      /* drag */
      const mouse = Mouse.create(render.canvas);
      const mc = MouseConstraint.create(engine, {
        mouse, constraint: { stiffness: 0.2, render: { visible: false } },
      });
      World.add(engine.world, mc);
      render.mouse = mouse;

      /* click spawns box */
      render.canvas.addEventListener("click", (e) => {
        const r  = render.canvas.getBoundingClientRect();
        const cx = (e.clientX - r.left) * (W / r.width);
        const cy = (e.clientY - r.top)  * (H / r.height);
        World.add(engine.world, makeBox(cx, cy - 20,
          BOXES[Math.floor(Math.random() * BOXES.length)]));
      });

      /* text overlay */
      Events.on(render, "afterRender", () => {
        const ctx = render.canvas.getContext("2d");
        if (!ctx) return;
        Composite.allBodies(engine.world).forEach((body) => {
          const lbl = (body as any).__label;
          const col = (body as any).__color;
          if (!lbl) return;
          ctx.save();
          ctx.translate(body.position.x, body.position.y);
          ctx.rotate(body.angle);
          ctx.font = `500 12px "DM Sans", sans-serif`;
          ctx.fillStyle = col;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(lbl, 0, 0);
          ctx.restore();
        });
      });

      /* ── gravity control ── */
      const isTouch = window.matchMedia("(hover: none)").matches;

      /* desktop — mouse moves gravity */
      const onMouseMove = (e: MouseEvent) => {
        const nx = (e.clientX / window.innerWidth  - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        engine.gravity.x = nx * 0.8;
        engine.gravity.y = 0.2 + (ny + 1) * 0.6;
      };
      if (!isTouch) {
        window.addEventListener("mousemove", onMouseMove, { passive: true });
      }

      /* orientation handler (shared by iOS + Android) */
      const onOrientation = (e: DeviceOrientationEvent) => {
        const gamma       = e.gamma ?? 0;
        const beta        = e.beta  ?? 0;
        const clampedBeta = Math.max(-90, Math.min(90, beta));
        engine.gravity.x  = (gamma / 45) * 0.9;
        engine.gravity.y  = Math.max(0, clampedBeta / 45);
      };

      const startOrientation = () => {
        setIosPrompt(false);
        window.addEventListener("deviceorientation", onOrientation, { passive: true });
      };

      if (isTouch) {
        const needsPermission =
          typeof (DeviceOrientationEvent as any).requestPermission === "function";

        if (needsPermission) {
          /* iOS 13+ — show prompt, wait for user tap on the overlay button */
          setIosPrompt(true);
          // The overlay button calls window.__iosOrientationGrant() defined below
          (window as any).__iosOrientationGrant = () => {
            (DeviceOrientationEvent as any)
              .requestPermission()
              .then((state: string) => {
                if (state === "granted") startOrientation();
                else setIosPrompt(false); // dismissed — hide anyway
              })
              .catch(() => setIosPrompt(false));
          };
        } else {
          /* Android — fire immediately */
          startOrientation();
        }
      }

      /* shake */
      let lastAcc = 0;
      const onMotion = (e: DeviceMotionEvent) => {
        const a = e.acceleration;
        if (!a) return;
        const mag = Math.sqrt((a.x ?? 0) ** 2 + (a.y ?? 0) ** 2 + (a.z ?? 0) ** 2);
        if (Math.abs(mag - lastAcc) > 20) {
          Composite.allBodies(engine.world).forEach((b) => {
            if (!b.isStatic) Body.applyForce(b, b.position, {
              x: (Math.random() - 0.5) * 0.05,
              y: -Math.random() * 0.08,
            });
          });
        }
        lastAcc = mag;
      };
      if (isTouch) window.addEventListener("devicemotion", onMotion, { passive: true });

      /* run */
      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      /* resize */
      const ro = new ResizeObserver(() => {
        const nW = container.offsetWidth;
        const nH = container.offsetHeight;
        render.canvas.width  = nW * (window.devicePixelRatio || 1);
        render.canvas.height = nH * (window.devicePixelRatio || 1);
        render.options.width  = nW;
        render.options.height = nH;
        render.canvas.style.width  = `${nW}px`;
        render.canvas.style.height = `${nH}px`;
        Body.setPosition(floor, { x: nW / 2, y: nH + 25 });
        Body.setPosition(wallR, { x: nW + 25, y: nH / 2 });
      });
      ro.observe(container);

      return () => {
        timeouts.forEach(clearTimeout);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("deviceorientation", onOrientation as EventListener);
        window.removeEventListener("devicemotion", onMotion as EventListener);
        delete (window as any).__iosOrientationGrant;
        ro.disconnect();
        Runner.stop(runner);
        Render.stop(render);
        World.clear(engine.world, false);
        Engine.clear(engine);
        render.canvas.remove();
        render.textures = {};
      };
    }

    const cleanupPromise = init();
    return () => { cleanupPromise.then((fn) => fn?.()); };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: 420, background: "#111", overflow: "hidden", position: "relative" }}
    >
      {/* iOS tilt permission overlay — only shown on iPhone/iPad */}
      {iosPrompt && (
        <div style={{
          position:       "absolute",
          inset:          0,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          zIndex:         10,
          pointerEvents:  "none",
        }}>
          <button
            onClick={() => (window as any).__iosOrientationGrant?.()}
            style={{
              pointerEvents:  "auto",
              background:     "rgba(255,255,255,0.08)",
              border:         "1px solid rgba(255,255,255,0.15)",
              borderRadius:   40,
              padding:        "12px 24px",
              color:          "rgba(255,255,255,0.7)",
              fontSize:       13,
              letterSpacing:  "0.02em",
              backdropFilter: "blur(8px)",
            }}
          >
            Tap to enable tilt →
          </button>
        </div>
      )}
    </div>
  );
}
