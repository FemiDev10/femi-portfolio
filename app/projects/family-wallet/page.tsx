import { Hero, Label, H2, Body, Shot, Stats, Rows, Quote, Meta, CaseStyles } from "@/components/CaseStudy";

export const metadata = {
  title: "Family Wallet — Femi Jimoh",
};

const img = (f: string) => `/family-wallet/${f}.webp`;

const CHECKS = [
  { num: "01", title: "Is the agent switched on?", body: "A stopped agent fails here, before anything else is looked at." },
  { num: "02", title: "Is it before its end date?", body: "Every agent's permission runs out. Nothing has a budget forever." },
  { num: "03", title: "Is the seller allowed?", body: "A ticked list of shops, or Any seller if the parent chooses it." },
  { num: "04", title: "Is the amount within the per-payment cap?", body: "One large purchase can't get through just because the daily budget has room." },
  { num: "05", title: "Would today's total stay within the daily cap?", body: "The last guard. The first check to fail is the reason shown to both screens." },
];

const DECISIONS = [
  {
    num: "01",
    title: "Stop means one agent",
    body: "Stopping an agent fails check 01 for that agent only. It cannot touch the others, so a parent can act fast without worrying about what else breaks. A five-second Undo is the safety net.",
  },
  {
    num: "02",
    title: "A decline is a conversation",
    body: "When a payment fails, David sees the exact rule that stopped it and gets a button to ask for more. The request lands on the dashboard where Parent A can approve, edit or decline it.",
  },
  {
    num: "03",
    title: "Plain words, never jargon",
    body: "\"Over per-payment cap (£10). No money was taken.\" Every reason is one sentence a parent or a 15-year-old understands without a glossary.",
  },
  {
    num: "04",
    title: "Two screens, one truth",
    body: "The dashboard and the phone read and write one shared state through a tiny sync server, so every change shows up on the other screen live, including on a real phone over WiFi.",
  },
];

export default function FamilyWalletPage() {
  return (
    <main className="max-w-275 mx-auto px-6">
      <Hero
        kicker="Hackathon · ProductTank Newcastle Build-a-thon · 2026"
        title="Family Wallet."
        lede="One wallet, many AI helpers. A control centre where a family manages every AI agent that can spend its money, and can stop any one of them in a single tap."
        pills={["Agentic payments", "Product Design", "Frontend", "Team of 4"]}
      />

      <Shot src={img("01-overview")} alt="Family Wallet: Parent A's admin dashboard beside David's phone app" w={2000} h={1250}
        caption="The demo: Parent A's control centre on the left, David's phone on the right, both live on one shared state." />

      <section className="cs-sec" style={{ marginTop: 96 }}>
        <Label>The Brief</Label>
        <H2>AI agents are starting to buy things. Who&rsquo;s holding the card?</H2>
        <div className="cs-two-col">
          <div>
            <Body>
              Challenge 7 of the agentic wallet track asked a simple question with an uncomfortable answer: when a family has several AI helpers, a research assistant, a grocery bot, a homework tutor, all spending from one wallet, how does anyone stay in control?
            </Body>
            <Body>
              We built two screens that sync live. An admin dashboard for Parent A to create agents, set budgets, approve requests and stop spending. And a phone app for David, 15, whose agents buy things within those limits, who sees every payment, and who can ask for more.
            </Body>
            <Body>No real money moves. Everything runs on sample data.</Body>
          </div>
          <Stats items={[
            { value: "4", label: "Rules per agent" },
            { value: "5", label: "Checks per payment" },
            { value: "2", label: "Screens, synced live" },
            { value: "5s", label: "Undo after Stop" },
          ]} />
        </div>
      </section>

      <section className="cs-sec">
        <Label>The Rules Engine</Label>
        <H2>Every payment passes five checks, in order.</H2>
        <Body>
          Each agent carries four rules: max per payment, max per day, allowed sellers, and when its permission ends. A payment is checked against them in a fixed order, and the first failure becomes the reason everyone sees. Ordering matters: it means the explanation is always the most fundamental problem, never a side effect.
        </Body>
        <Rows items={CHECKS} />
      </section>

      <section className="cs-sec">
        <Label>Giving an agent a budget</Label>
        <H2>Three steps: who it is, spend rules, review.</H2>
        <div className="cs-stack">
          <div className="cs-grid-2">
            <Shot src={img("02-add-agent")} alt="Add an agent, step one" w={2000} h={1250} caption="Step 1. Name, what it buys, the kind of seller and who uses it. David's agents show on his phone." />
            <Shot src={img("03-spend-rules")} alt="Add an agent, spend rules" w={2000} h={1250} caption="Step 2. Per-payment and daily caps, allowed shops, and an end date." />
          </div>
          <div className="cs-grid-2">
            <Shot src={img("04-review")} alt="Add an agent, review" w={2000} h={1250} caption="Step 3. One review card with everything the agent will be allowed to do." />
            <Shot src={img("05-agent-added")} alt="Homework Tutor appears on David's phone" w={2000} h={1250} caption="The moment it's created, Homework Tutor appears on David's phone with its budget." />
          </div>
        </div>
      </section>

      <section className="cs-sec">
        <Label>The Demo Script</Label>
        <H2>Declined, asked, approved, stopped.</H2>
        <Body>
          The pitch ran as a five-step script across both screens. David tries to buy a £15 revision bundle with a £10 cap. It&rsquo;s declined, with the reason. He asks for more. Parent A approves £15 on the dashboard, and the phone buys it. Then Parent A hits Stop, and the phone shows Paused.
        </Body>
        <div className="cs-phones" style={{ marginTop: 40 }}>
          {[
            ["phone-07-buy-sheet", "Pay with the agent"],
            ["phone-08-declined", "Declined, with the rule"],
            ["phone-09-request-form", "Ask Parent A for more"],
            ["phone-13-paid", "Approved and paid"],
            ["phone-14-stop-confirm", "Stopped: Paused"],
          ].map(([f, c]) => (
            <Shot key={f} src={img(f)} alt={c} w={640} h={1325} bg="#e4e8f0" pad={10} caption={c} />
          ))}
        </div>
        <div className="cs-grid-2" style={{ marginTop: 48 }}>
          <Shot src={img("11-dash-requests")} alt="David's request waiting on the dashboard" w={2000} h={1250} caption="David's request arrives on the dashboard. Parent A decides how much." />
          <Shot src={img("14-stop-confirm")} alt="Homework Tutor stopped with Undo" w={2000} h={1250} caption="Stop pauses one agent. The toast says four others are still active, with Undo." />
        </div>
      </section>

      <section className="cs-sec">
        <Label>Design Decisions</Label>
        <H2>Four decisions that shaped it.</H2>
        <Rows items={DECISIONS} />
      </section>

      <section className="cs-sec">
        <Label>Team &amp; Role</Label>
        <H2 max={760}>Built in one hour by four people at the ProductTank buildathon.</H2>
        <Body>
          I built the admin dashboard with Aysegul, then joined the dashboard and the phone app into one system: the shared state, the sync server, and the live hand-off between the two screens. Afterwards I prepared the repo for open source with an MIT licence and a contributing guide.
        </Body>
        <Meta items={[
          ["Femi Jimoh", "Admin dashboard, combined both into one system"],
          ["Aysegul Sumeyra Kanca", "Admin dashboard"],
          ["Yuki", "Phone app"],
          ["Stephanie", "Phone app"],
        ]} />
      </section>

      <section className="cs-sec">
        <Label>Reflection</Label>
        <Quote>&ldquo;Control isn&rsquo;t a dashboard. It&rsquo;s being able to stop one thing without breaking everything else.&rdquo;</Quote>
        <Body>
          The interesting design problem wasn&rsquo;t the budgets. It was trust in both directions. Parents need a big red button that is safe to press. Teenagers need to know why they were told no, and a fair way to ask again. Making the decline reason and the request flow first-class turned a permissions screen into a conversation between two people.
        </Body>
        <p style={{ fontSize: 14, margin: "32px 0 0" }}>
          <a href="https://github.com/FemiDev10/Family-wallet" target="_blank" rel="noreferrer" style={{ color: "#111", textDecoration: "underline", textUnderlineOffset: 4 }}>
            View the code on GitHub →
          </a>
        </p>
      </section>

      <CaseStyles />
    </main>
  );
}
