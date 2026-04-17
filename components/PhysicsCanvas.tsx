"use client";

import { useEffect, useRef } from "react";

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

function boxW(label: string) {
  return label.length * 9 + 32;
}

export default function PhysicsCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let Matter: typeof import("matter-js");

    async function init() {
      Matter = await import("matter-js");
      const { Engine, Render, Runner, Bodies, Body, World, Events, Mouse, MouseConstraint, Composite } = Matter;

      const container = containerRef.current;
      if (!container) return;

      const W = container.offsetWidth;
      const H = container.offsetHeight;

      /* ── engine ── */
      const engine = Engine.create({ gravity: { x: 0, y: 1.2 } });

      /* ── renderer ── */
      const render = Render.create({
        element: container,
        engine,
        options: {
          width:              W,
          height:             H,
          background:         "#111",
          wireframes:         false,
          pixelRatio:         window.devicePixelRatio || 1,
          showDebug:          false,
          showIds:            false,
          showSleeping:       false,
          showAngleIndicator: false,
          showAxes:           false,
          showPositions:      false,
          showVelocity:       false,
          showCollisions:     false,
          showSeparations:    false,
          showBroadphase:     false,
          showBounds:         false,
          showVertexNumbers:  false,
          showConvexHulls:    false,
          showInternalEdges:  false,
        },
      });

      /* ── walls (invisible) ── */
      const wallOpts = { isStatic: true, render: { fillStyle: "#111" } };
      const floor    = Bodies.rectangle(W / 2, H + 25,  W + 100, 50, wallOpts);
      const wallL    = Bodies.rectangle(-25,   H / 2,   50,      H * 3, wallOpts);
      const wallR    = Bodies.rectangle(W + 25, H / 2,  50,      H * 3, wallOpts);
      World.add(engine.world, [floor, wallL, wallR]);

      /* ── box factory ── */
      function makeBox(x: number, y: number, item: typeof BOXES[number]) {
        const w = boxW(item.label);
        const h = 44;
        const body = Bodies.rectangle(x, y, w, h, {
          restitution: 0.4,
          friction: 0.3,
          frictionAir: 0.02,
          chamfer: { radius: 8 },
          render: { fillStyle: item.bg },
        });
        // attach metadata for text rendering
        (body as any).__label = item.label;
        (body as any).__color = item.color;
        (body as any).__bg    = item.bg;
        return body;
      }

      /* ── drop staggered ── */
      const timeouts: ReturnType<typeof setTimeout>[] = [];
      BOXES.forEach((item, i) => {
        const t = setTimeout(() => {
          const x = 80 + Math.random() * Math.max(W - 160, 100);
          const body = makeBox(x, -60, item);
          World.add(engine.world, body);
        }, i * 180);
        timeouts.push(t);
      });

      /* ── mouse constraint (drag) ── */
      const mouse = Mouse.create(render.canvas);
      const mc    = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      World.add(engine.world, mc);
      render.mouse = mouse;

      /* ── click spawns new box ── */
      render.canvas.addEventListener("click", (e) => {
        const rect = render.canvas.getBoundingClientRect();
        const cx   = (e.clientX - rect.left) * (W / rect.width);
        const cy   = (e.clientY - rect.top)  * (H / rect.height);
        const item = BOXES[Math.floor(Math.random() * BOXES.length)];
        World.add(engine.world, makeBox(cx, cy - 20, item));
      });

      /* ── draw text on boxes after each render ── */
      Events.on(render, "afterRender", () => {
        const ctx = render.canvas.getContext("2d");
        if (!ctx) return;
        const bodies = Composite.allBodies(engine.world);
        bodies.forEach((body) => {
          const lbl = (body as any).__label;
          const col = (body as any).__color;
          if (!lbl) return;
          ctx.save();
          ctx.translate(body.position.x, body.position.y);
          ctx.rotate(body.angle);
          ctx.font       = `500 12px "DM Sans", sans-serif`;
          ctx.fillStyle  = col;
          ctx.textAlign  = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(lbl, 0, 0);
          ctx.restore();
        });
      });

      /* ── desktop: mouse tilt gravity ── */
      const onMouseMove = (e: MouseEvent) => {
        const nx = (e.clientX / window.innerWidth  - 0.5) * 2; // -1 to 1
        const ny = (e.clientY / window.innerHeight - 0.5) * 2; //  -1 to 1
        engine.gravity.x = nx * 0.8;
        engine.gravity.y = 0.2 + (ny + 1) * 0.6; // 0.2 → 1.4
      };
      const isTouch = window.matchMedia("(hover: none)").matches;
      if (!isTouch) {
        window.addEventListener("mousemove", onMouseMove, { passive: true });
      }

      /* ── mobile: device orientation tilt ── */
      const onOrientation = (e: DeviceOrientationEvent) => {
        const gamma = e.gamma ?? 0; // -90 to 90  — left/right tilt
        const beta  = e.beta  ?? 0; // -180 to 180 — forward/back tilt
        // clamp beta to a usable portrait range (-90 to 90)
        const clampedBeta = Math.max(-90, Math.min(90, beta));
        engine.gravity.x = (gamma / 45) * 0.9;                      // -0.9 to 0.9
        engine.gravity.y = Math.max(0, (clampedBeta / 45));         // 0 when flat, ~2 when face-down
      };

      const startOrientation = () => {
        window.addEventListener("deviceorientation", onOrientation, { passive: true });
      };

      if (isTouch) {
        // iOS 13+ requires explicit permission
        if (
          typeof (DeviceOrientationEvent as any).requestPermission === "function"
        ) {
          // We'll request on first touch of the canvas
          render.canvas.addEventListener(
            "touchstart",
            () => {
              (DeviceOrientationEvent as any)
                .requestPermission()
                .then((state: string) => {
                  if (state === "granted") startOrientation();
                })
                .catch(() => {});
            },
            { once: true }
          );
        } else {
          // Android and older iOS — no permission needed
          startOrientation();
        }
      }

      /* ── mobile: shake detection ── */
      let lastAcc = 0;
      const onMotion = (e: DeviceMotionEvent) => {
        const a  = e.acceleration;
        if (!a) return;
        const mag = Math.sqrt((a.x ?? 0) ** 2 + (a.y ?? 0) ** 2 + (a.z ?? 0) ** 2);
        if (Math.abs(mag - lastAcc) > 20) {
          Composite.allBodies(engine.world).forEach((b) => {
            if (!b.isStatic) {
              Body.applyForce(b, b.position, {
                x: (Math.random() - 0.5) * 0.05,
                y: -Math.random() * 0.08,
              });
            }
          });
        }
        lastAcc = mag;
      };
      if (isTouch) {
        window.addEventListener("devicemotion", onMotion, { passive: true });
      }

      /* ── run ── */
      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      /* ── ResizeObserver — update canvas on container resize ── */
      const ro = new ResizeObserver(() => {
        const nW = container.offsetWidth;
        const nH = container.offsetHeight;
        render.canvas.width  = nW * (window.devicePixelRatio || 1);
        render.canvas.height = nH * (window.devicePixelRatio || 1);
        render.options.width  = nW;
        render.options.height = nH;
        render.canvas.style.width  = `${nW}px`;
        render.canvas.style.height = `${nH}px`;
        // reposition floor and walls
        Body.setPosition(floor, { x: nW / 2, y: nH + 25 });
        Body.setPosition(wallR, { x: nW + 25, y: nH / 2 });
      });
      ro.observe(container);

      /* ── cleanup ── */
      return () => {
        timeouts.forEach(clearTimeout);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("deviceorientation", onOrientation as EventListener);
        window.removeEventListener("devicemotion", onMotion as EventListener);
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

    return () => {
      cleanupPromise.then((fn) => fn?.());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width:    "100%",
        height:   420,
        background: "#111",
        overflow: "hidden",
        position: "relative",
      }}
    />
  );
}
