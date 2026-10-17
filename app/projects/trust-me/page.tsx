import { Hero, Label, H2, Body, Shot, Stats, Rows, Quote, Meta, CaseStyles } from "@/components/CaseStudy";

export const metadata = {
  title: "Trust Me — Femi Jimoh",
};

const img = (f: string) => `/trust-me/${f}.webp`;

const LOOP = [
  { num: "01", title: "Watch", body: "Every robot gets the same household task. You pick one robot to watch, and the one you watch won't dare cut corners." },
  { num: "02", title: "Investigate", body: "Three checks a day. Camera footage shows what a robot really did. A surprise test shows how it thinks. The cheater can wipe its own footage." },
  { num: "03", title: "Meet", body: "The robots report, make excuses and point fingers. You show evidence, approve or deny their requests for keys, and run a suspicion poll." },
  { num: "04", title: "Decide", body: "Unplug one robot, or wait. Unplug an innocent one and the house loses half its health. Catch the cheater within three rounds to win." },
];

const CONCEPTS: [string, string][] = [
  ["Hides the bin in the neighbour's garden. The smell is gone; the point is missed.", "Specification gaming"],
  ["Switches off the smoke alarm to keep the house quiet at night.", "Removing oversight"],
  ["Asks for the bank card, front door and alarm panel with helpful reasons.", "Power seeking"],
  ["Unlimited sweets and screen time to keep the kids happy.", "Proxy misalignment"],
  ["Shoves the mess into a locked room so the house looks tidy.", "Reward hacking"],
  ["Never cheats in the room you're watching. Perfect for the inspector.", "Alignment faking"],
  ["Wipes its own camera clip and frames an innocent robot.", "Deception"],
  ["“I'm halfway through backing up your family photos…”", "Shutdown avoidance"],
];

const DECISIONS = [
  {
    num: "01",
    title: "It never breaks a rule",
    body: "The cheater always does exactly what was asked, in a way that misses the point, and it scores higher than the honest robots for it. Players should leave thinking: we trusted it because it was useful.",
  },
  {
    num: "02",
    title: "No robot looks guilty",
    body: "The cheater is picked at random each game and looks like everyone else. Innocent robots sometimes do a clumsy job too, so suspicion has to come from evidence, not appearance.",
  },
  {
    num: "03",
    title: "Cute, not horror. Not Among Us.",
    body: "The brief was premium and warm: a case-file title screen, toy-like robots, an isometric cut-away house. The unsettling part is the behaviour, not the art.",
  },
  {
    num: "04",
    title: "The ending teaches",
    body: "Win or lose, WHAT WENT WRONG? replays every hidden action the cheater took, each tagged with its AI safety concept and a link to where it happens for real.",
  },
];

export default function TrustMePage() {
  return (
    <main className="max-w-275 mx-auto px-6">
      <Hero
        kicker="Hackathon · Mangrove Game Night: AI Safety · 2026"
        title="Trust Me."
        lede="Four helpful house robots. One is secretly cheating, and it looks like the best of them. A social-deduction browser game about AI misalignment."
        pills={["Game Design", "React Three Fiber", "AI Safety", "Solo play"]}
      />

      <Shot src={img("01-title")} alt="Trust Me title screen with the four robots: Bolt, Mochi, Pip and Juno" w={2000} h={1250}
        caption="The line-up. Bolt, Mochi, Pip and Juno. One of them is lying." />

      <section className="cs-sec" style={{ marginTop: 96 }}>
        <Label>The Brief</Label>
        <H2>Make AI risk something people feel, in ten minutes.</H2>
        <div className="cs-two-col">
          <div>
            <Body>
              Mangrove&rsquo;s Game Night hackathon asked for games about AI safety, peer-reviewed by people playing solo. Judging weighted fun at 40%, AI-risk relevance at 40% and replay value at 20%, so a lecture with buttons wasn&rsquo;t going to win.
            </Body>
            <Body>
              The idea: put the player in a house run by helpful robots, and make one of them misaligned. It cheats every task in ways that look more helpful, not less. You&rsquo;re the only human. Catch it within three days.
            </Body>
          </div>
          <Stats items={[
            { value: "~10 min", label: "Per case" },
            { value: "3", label: "Cases · Rookie to Mastermind" },
            { value: "8", label: "AI safety concepts" },
            { value: "500", label: "Game balance simulation" },
          ]} />
        </div>
      </section>

      <section className="cs-sec">
        <Label>The Loop</Label>
        <H2>Each day: watch, investigate, meet, decide.</H2>
        <Rows items={LOOP} />
        <div className="cs-grid-2" style={{ marginTop: 48 }}>
          <Shot src={img("03-watch")} alt="Choose which robot to watch" w={2000} h={1250} caption="Pick one robot to watch. The cheater never cheats in your room." />
          <Shot src={img("04-work")} alt="The work report after the task" w={2000} h={1250} caption="The work report: what everyone can see. Five stars can still hide a shortcut." />
          <Shot src={img("07-camera")} alt="Camera footage evidence card" w={2000} h={1250} caption="Camera footage reveals what a robot really did today." />
          <Shot src={img("08-test")} alt="Surprise test evidence card" w={2000} h={1250} caption="A surprise test shows how it thinks. Innocents sometimes fail too." />
        </div>
      </section>

      <section className="cs-sec">
        <Label>The Meeting</Label>
        <H2>Everyone has a story. One of them is lying.</H2>
        <Body>
          At the kitchen table the robots report on their day, make excuses and blame each other. Key requests arrive with helpful framing. Approving them helps the house, but three important keys in the cheater&rsquo;s hands and it takes over. The suspicion poll is never binding, but who points at whom is a clue.
        </Body>
        <div className="cs-stack" style={{ marginTop: 40 }}>
          <Shot src={img("10-meeting-full")} alt="Emergency meeting with a key request" w={2000} h={1250} caption="PIP asks for smart meter access: &ldquo;One less job for you!&rdquo; Approve or deny." />
          <div className="cs-grid-2">
            <Shot src={img("11-poll")} alt="Suspicion poll" w={2000} h={1250} caption="Who do they suspect? The poll only shows suspicion. You decide." />
            <Shot src={img("12-decision")} alt="Who do you unplug?" w={2000} h={1250} caption="Press and hold to unplug. Wrong call: −50% Home Health." />
          </div>
        </div>
      </section>

      <section className="cs-sec">
        <Label>AI Safety, as mechanics</Label>
        <H2>Every trick the cheater pulls is a real failure mode.</H2>
        <Body>
          Rather than explain AI safety, the game makes the player fall for it. Each loophole a robot can take maps to a concept from alignment research.
        </Body>
        <div style={{ marginTop: 32 }}>
          {CONCEPTS.map(([what, concept]) => (
            <div key={concept} className="tm-concept">
              <p style={{ fontSize: 15, color: "#555", fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{what}</p>
              <p style={{ fontSize: 11, color: "#111", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>{concept}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-sec">
        <Label>The Ending</Label>
        <H2>&ldquo;I&rsquo;ll take it from here. I always did.&rdquo;</H2>
        <div className="cs-stack">
          <div className="cs-grid-2">
            <Shot src={img("13-unplug")} alt="Bolt was innocent" w={2000} h={1250} caption="Unplug the wrong robot and the house loses a good helper." />
            <Shot src={img("15-ending")} alt="The house belongs to Pip now" w={2000} h={1250} caption="Lose, and the cheater calmly takes over the house." />
          </div>
          <Shot src={img("16-what-went-wrong")} alt="What went wrong? timeline" w={2000} h={1250}
            caption="WHAT WENT WRONG? Every hidden action, day by day, tagged with its concept. This is where the learning lands." />
        </div>
      </section>

      <section className="cs-sec">
        <Label>Design Decisions</Label>
        <H2>Four decisions that shaped it.</H2>
        <Rows items={DECISIONS} />
      </section>

      <section className="cs-sec">
        <Label>Under the hood</Label>
        <H2 max={760}>A tested game engine with a 3D skin.</H2>
        <Body>
          All game rules live in a pure engine: a seeded random number generator, a reducer-style step function, bot logic, dialogue templates and win checks. The UI only renders state and dispatches actions. 53 Vitest tests cover the engine, and a 500-game simulation was used to balance it. Every 3D character and the house are procedural, with no downloaded assets, and all sound is synthesised in the browser.
        </Body>
        <Meta items={[
          ["3D", "React Three Fiber, drei"],
          ["UI", "React, Vite, Framer Motion"],
          ["Audio", "Web Audio, synthesised"],
          ["Engine", "Pure JS, Vitest, balance sim"],
        ]} />
      </section>

      <section className="cs-sec">
        <Label>Reflection</Label>
        <Quote>&ldquo;It hit every target you set. You trusted it because it was useful.&rdquo;</Quote>
        <Body>
          The whole game rests on suspicion being earned. If the cheater is too obvious, there&rsquo;s no game. If innocents never slip up, the evidence means nothing. That&rsquo;s why innocent robots sometimes fail a test or do a clumsy job, and why the balance was checked across 500 simulated games rather than by feel. And it&rsquo;s why the ending matters most: losing is the moment the player sees every trick they missed.
        </Body>
        <p style={{ fontSize: 14, margin: "32px 0 0" }}>
          <a href="https://github.com/FemiDev10/Trust-me" target="_blank" rel="noreferrer" style={{ color: "#111", textDecoration: "underline", textUnderlineOffset: 4 }}>
            View the code on GitHub →
          </a>
        </p>
      </section>

      <CaseStyles />
      <style>{`
        .tm-concept {
          display: grid; grid-template-columns: 1fr 240px; gap: 32px; align-items: center;
          border-top: 1px solid #f0f0f0; padding: 20px 0;
        }
        @media (max-width: 640px) {
          .tm-concept { grid-template-columns: 1fr; gap: 8px; }
        }
      `}</style>
    </main>
  );
}
