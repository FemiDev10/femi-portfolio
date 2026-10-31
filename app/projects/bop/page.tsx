"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Browser, IPhone, LiveIPhone } from "@/components/bop/Devices";

/* The Bop website (and the live Expo web build under /app). Update once the site is deployed. */
const BOP_URL = "http://localhost:3020";
const img = (f: string) => `/bop-app/${f}`;

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

function Divider() {
  return <div className="border-t border-[#111]/8 my-16" />;
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-4">{children}</p>;
}

function Screen({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure>
      <div className="rounded-2xl bg-[#f3f2f5] px-[12%] pb-8 pt-10">
        <IPhone src={img(src)} alt={alt} />
      </div>
      {caption && <figcaption className="mt-3 text-xs text-[#111]/50 leading-relaxed">{caption}</figcaption>}
    </figure>
  );
}

function Wide({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure>
      <Browser src={img(src)} alt={alt} />
      {caption && <figcaption className="mt-4 text-xs text-[#111]/50 leading-relaxed">{caption}</figcaption>}
    </figure>
  );
}

const FLOW = [
  { src: "1-home.png", t: "Home", b: "Balance, a single big Bop to pay action, and the people whose phones are close right now." },
  { src: "2-nearby.png", t: "Who's nearby", b: "A radar of phones within range, ranked by distance. Pay goes straight to the amount." },
  { src: "3-amount.png", t: "Amount", b: "A custom keypad, quick amounts, a note, and the balance after so nobody overspends." },
  { src: "4-hold.png", t: "Hold", b: "The invisible handshake made visible: rings while it searches, a three-step progress bar." },
  { src: "5-connected.png", t: "Connected", b: "Phones snap together with a heavy haptic, then the bank's name check runs." },
  { src: "6-review.png", t: "Review", b: "Both people, the amount, and the name check result before anything moves." },
  { src: "7-sent.png", t: "Sent", b: "A burst, a success haptic, and a receipt with the new balance." },
  { src: "8-received.png", t: "Received", b: "The other side: who paid, the note, reactions, and Bop back." },
  { src: "9-split.png", t: "Split", b: "Shares recalculate live as people are added, with collection progress." },
];

const DECISIONS = [
  { t: "Show the name, not the numbers", b: "Account numbers never appear on either phone. What you see is the name the recipient's bank has on file, checked through Confirmation of Payee. People recognise names; nobody recognises 14 digits." },
  { t: "Make the handshake visible", b: "Phone-to-phone pairing is invisible and takes about a second. Without feedback, people pull their phones apart too early. The Hold screen splits it into Searching, Connected and Name check, with a haptic at each step, so you know when to stop holding." },
  { t: "Counterparty on every screen", b: "Every step of the flow shows who you're paying, with their avatar and account ending. If you've tapped the wrong person, you notice on screen two, not after the money's gone." },
  { t: "Slow down only where scams happen", b: "Most bops take two seconds. Paying someone new over £250 adds a pause and a question, because authorised push payment scams rely on people rushing." },
  { t: "Dark app, bright website", b: "Inside the app, a near-black canvas makes money and names the brightest things on screen. The website does the opposite: lavender, coins and clouds, so a payments idea feels friendly." },
];

const STACK = [
  ["App", "Expo SDK 58, Expo Router, React Native 0.88"],
  ["Motion", "Reanimated 4 for rings, springs and layout transitions"],
  ["Feel", "expo-haptics at every state change"],
  ["Graphics", "react-native-svg icons and radar sweep"],
  ["Web", "Same code exported for the web and embedded in the site"],
  ["Website", "Next.js 16, Tailwind 4, Motion, six pages"],
];

export default function BopCaseStudy() {
  return (
    <main className="max-w-275 mx-auto px-6 pt-20 pb-32">
      <section className="max-w-[72ch]">
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <p className="text-[9px] tracking-widest uppercase text-[#111]/30">Case Study</p>
          <span className="text-[9px] text-[#111]/30">·</span>
          <span className="inline-flex items-center gap-2 text-[9px] tracking-widest uppercase bg-[#f1eeff] text-[#5b4bdb] border border-[#ddd6ff] rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9483f5] inline-block" />
            Concept · Built and playable
          </span>
        </div>
        <h1 className="font-medium leading-[1.03] tracking-[-0.03em]" style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}>
          Bop.<br />Pay anyone with a tap.
        </h1>
        <p className="mt-8 text-base text-[#111]/55 leading-relaxed max-w-[58ch]">
          A concept for UK bank transfers without account details. Hold your phone to theirs, Bop checks the name with their bank,
          and the money lands as an instant transfer in about two seconds. I designed the app and the brand, then built both: a
          React Native app in Expo and a six-page marketing site where the real app runs in the browser.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`${BOP_URL}/try`} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[#111] px-5 py-2.5 text-sm text-white hover:bg-[#333] transition-colors">Try the app</a>
          <a href={BOP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-[#111]/15 px-5 py-2.5 text-sm hover:bg-[#f4f4f4] transition-colors">Visit the website</a>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Role", value: "Product designer and engineer, solo" },
            { label: "Type", value: "Self-initiated concept" },
            { label: "Timeline", value: "October 2026" },
            { label: "Platform", value: "iOS app (Expo) and web" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">{label}</p>
              <p className="text-xs text-[#111]/60 leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 overflow-hidden rounded-3xl px-[6%] pt-14 sm:pt-20" style={{ background: "linear-gradient(180deg,#f5f2ff 0%,#e3dcff 55%,#b0a3ff 100%)" }}>
        <div className="mx-auto grid max-w-[900px] grid-cols-3 items-start gap-[4%]">
          {[["1-home.png", "mt-[18%] rotate-[-5deg]"], ["5-connected.png", ""], ["7-sent.png", "mt-[18%] rotate-[5deg]"]].map(([f, c], i) => (
            <Fade key={f} delay={i * 0.08}>
              <div className={c}><IPhone src={img(f)} alt="Bop app screen" priority={i === 1} /></div>
            </Fade>
          ))}
        </div>
        <div className="h-0 sm:-mb-24" />
      </div>

      <Divider />

      <section className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Label>The problem</Label>
        <div className="max-w-[62ch] space-y-5 text-base text-[#111]/70 leading-relaxed">
          <p>UK bank transfers are already fast and free. The slow part is the people. Paying a friend for pizza means asking for a sort code, reading it aloud in a noisy room, typing fourteen digits on a phone keyboard, adding them as a new payee, and sending a screenshot to prove it went.</p>
          <p>Every one of those steps is a chance to get it wrong, and the copy-and-paste habit is exactly what payment scams exploit. Card readers solve it for businesses, but not between people.</p>
          <p className="text-[#111]">The question: what if paying the person next to you felt like tapping a card, but the money still moved bank to bank?</p>
        </div>
      </section>

      <Divider />

      <section className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Label>Who it&rsquo;s for</Label>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Splitting the cab", "Four friends, one fare, a driver waiting. Bop splits it before the car pulls away."],
            ["Paying the barber", "Small businesses without a card reader, plus a tip in one step."],
            ["Collecting the sofa", "A stranger on a doorstep, where checking the name matters most."],
          ].map(([t, b]) => (
            <div key={t} className="bg-[#f6f6f6] rounded-xl p-5">
              <p className="text-sm font-medium">{t}</p>
              <p className="mt-2 text-xs text-[#111]/55 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      <section>
        <Label>The flow</Label>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] max-w-[24ch]">Nine screens, one tap in the middle.</h2>
        <p className="mt-4 text-sm text-[#111]/55 leading-relaxed max-w-[60ch]">Captured from the running app in the iOS Simulator. Every screen keeps the same skeleton: 12pt gutters, 14pt card radius, the person you&rsquo;re paying visible, and the main action pinned to the bottom.</p>
        <div className="mt-10 grid gap-x-4 gap-y-10 grid-cols-2 sm:grid-cols-3">
          {FLOW.map((s, i) => (
            <Fade key={s.src} delay={(i % 3) * 0.06}>
              <Screen src={s.src} alt={`${s.t} screen`} caption={`${String(i + 1).padStart(2, "0")}  ${s.t}. ${s.b}`} />
            </Fade>
          ))}
        </div>
      </section>

      <Divider />

      <section className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Label>Key decisions</Label>
        <div className="space-y-10">
          {DECISIONS.map((d) => (
            <div key={d.t} className="max-w-[62ch]">
              <p className="text-lg font-medium tracking-[-0.01em]">{d.t}</p>
              <p className="mt-2 text-sm text-[#111]/60 leading-relaxed">{d.b}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      <section>
        <Label>Play with it</Label>
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] items-center">
          <div className="max-w-[56ch]">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em]">The real app, running in the page.</h2>
            <p className="mt-4 text-sm text-[#111]/60 leading-relaxed">Expo lets the same React Native code export for the web, so the website embeds the actual app inside an iPhone frame rather than a video. Tap Tobi, type an amount, and watch the bop. Haptics and Face ID are simulated in the browser.</p>
            <a href={`${BOP_URL}/try`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-full bg-[#111] px-5 py-2.5 text-sm text-white hover:bg-[#333] transition-colors">Open it full size</a>
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <LiveIPhone src="/bop-live" title="Bop app, live" />
          </div>
        </div>
      </section>

      <Divider />

      <section>
        <Label>The website</Label>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] max-w-[26ch]">A bright, playful site for a serious money idea.</h2>
        <p className="mt-4 text-sm text-[#111]/55 leading-relaxed max-w-[62ch]">Six pages: home, how it works, try it, security, fees, help and about. The design leans on Phantom&rsquo;s language (soft 3D objects, full-bleed colour moments, a glass nav that changes tone per section) and on Wise for clarity around money, like the &ldquo;you send exactly / they get exactly&rdquo; calculator.</p>
        <div className="mt-10 space-y-6">
          <Fade><Wide src="web-hero.png" alt="Bop website hero" caption="Hero. Three phones fanned out; the middle one plays the bop and reacts to the cursor. Step tabs let you jump through the flow." /></Fade>
          <div className="grid gap-6 sm:grid-cols-2">
            <Fade><Wide src="web-try.png" alt="Try the app section" caption="The live app embedded in an iPhone frame." /></Fade>
            <Fade delay={0.06}><Wide src="web-fees.png" alt="Fees calculator" caption="A Wise-style calculator: type an amount, see exactly what lands." /></Fade>
            <Fade><Wide src="web-namecheck.png" alt="Name check section" caption="One idea per screen, one big object. Glossy coins, a tick and a holographic card, all drawn in SVG." /></Fade>
            <Fade delay={0.06}><Wide src="web-everyday.png" alt="Everyday section" caption="Real UI cards for everyday moments instead of another phone mockup." /></Fade>
          </div>
        </div>
      </section>

      <Divider />

      <section className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Label>How it&rsquo;s built</Label>
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {STACK.map(([k, v]) => (
            <div key={k} className="border-t border-[#111]/8 pt-4">
              <dt className="text-[9px] tracking-widest uppercase text-[#111]/30">{k}</dt>
              <dd className="mt-2 text-sm text-[#111]/70 leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Divider />

      <section className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Label>What I&rsquo;d test next</Label>
        <div className="max-w-[62ch] space-y-4 text-sm text-[#111]/65 leading-relaxed">
          <p><span className="text-[#111]">Real proximity.</span> The handshake is simulated. A device build would use ultra-wideband ranging where both phones support it, with NFC as a fallback, and I&rsquo;d measure how long people actually hold their phones together.</p>
          <p><span className="text-[#111]">Name check latency.</span> Confirmation of Payee can take longer than the 0.6 seconds the flow assumes. The Hold screen needs a calm state for slow banks.</p>
          <p><span className="text-[#111]">The person without Bop.</span> Most first payments will be to someone who hasn&rsquo;t installed it. The link fallback deserves as much design as the tap.</p>
          <p className="text-[#111]/45">Bop is a design concept. It isn&rsquo;t a real company and can&rsquo;t move money.</p>
        </div>
      </section>
    </main>
  );
}
