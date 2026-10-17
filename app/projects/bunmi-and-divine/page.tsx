import { Hero, Label, H2, Body, Shot, Stats, Rows, Quote, Meta, CaseStyles } from "@/components/CaseStudy";

export const metadata = {
  title: "Bunmi & Divine — Femi Jimoh",
};

const img = (f: string) => `/wedding/${f}.webp`;

const LISTS: [string, string, string][] = [
  ["Daddy's friends", "D", "#c9a227"],
  ["Mummy's friends", "MM", "#7d8a3a"],
  ["Groom's family", "GF", "#1f8a83"],
  ["Awon ebi", "AE", "#e0735a"],
  ["Couple's friends", "CF", "#7a52b3"],
  ["NPA & Neighbours", "NP", "#3f6fd1"],
  ["Bufem & NAPPS", "BN", "#d65d9a"],
  ["Femi & Uche's friends", "BR", "#7b3f63"],
  ["RCCG", "RC", "#2f8f4e"],
];

const AUDIENCES = [
  { num: "Public", title: "Anyone with the link", body: "Sees the church ceremony. Must never see the reception or traditional engagement address." },
  { num: "Guests", title: "A private invitation link", body: "Sees everything they were invited to, their table, and their entry code. Can change their RSVP any time." },
  { num: "Couple", title: "The admin panel", body: "Edits every word, photo, venue and guest without touching code. No markdown, no YAML, no “ask Femi”." },
  { num: "Gate", title: "The ushers' check-in app", body: "Looks up entry codes and records arrivals on the day, on a bad connection, with a queue." },
];

const INCIDENTS = [
  {
    num: "8.1",
    title: "A missing role meant the whole guest list",
    body: "Signed-in users without a role defaulted to “door”, and the door app downloads every guest's entry code. With public sign-up enabled, anyone could have pulled the list. Fixed twice over: no role now means no access, and sign-up was switched off.",
  },
  {
    num: "8.2",
    title: "“Nothing is destroyed. It moves to Trash.”",
    body: "The confirm dialog said that for every action, including Revoke, which permanently burns a guest's link. My sister believed it and revoked six guests. Now each dialog says what will actually happen.",
  },
  {
    num: "8.5",
    title: "A table number is a promise",
    body: "The seating engine kept tables numbered with no gaps. That's right until the first invitation goes out with a table printed on it. Numbers now change only when a person changes them.",
  },
  {
    num: "8.9",
    title: "“I've sent half the invitations and they aren't recording”",
    body: "Nobody used the Mark as sent button. Sending through WhatsApp from the admin now records itself, and an opened invitation counts as proof. 144 guests were backfilled from their own link-opens.",
  },
];

const LESSONS = [
  { num: "01", title: "Create the operational accounts first, not last", body: "The gate app was built, tested and deployed, but no door accounts were ever created, so the ushers worked the door the traditional way. Build the feature and the access to it in the same breath." },
  { num: "02", title: "Make duplicate registration impossible, not detectable", body: "One guest registered seven times because nothing confirmed his first attempt. The fix is a clear confirmation screen, not a dedupe script." },
  { num: "03", title: "Design the approval step in from the start", body: "“Registration is not an invitation” was a rule in the copy, but there was no screen to work through approvals. 121 were still waiting on the morning of the wedding." },
  { num: "04", title: "Once it's printed, the system no longer owns it", body: "Table numbers, entry codes and venue addresses each became fixed the moment they were on a card in someone's hand. Write those rules down early." },
];

function InvitationCard() {
  return (
    <div style={{ background: "#fdfbf5", border: "1px solid #e9e2cf", aspectRatio: "1080 / 1350", width: "100%", maxWidth: 360, margin: "0 auto", padding: 22, boxSizing: "border-box", display: "flex" }}>
      <div style={{ border: "1px solid #c9b98f", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "26px 18px", textAlign: "center" }}>
        <p style={{ fontSize: 8, letterSpacing: "0.22em", color: "#7a7a7a", margin: 0 }}>REQUEST THE PLEASURE OF YOUR COMPANY</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 30, color: "#24453f", margin: "14px 0 0", lineHeight: 1.1 }}>Bunmi &amp; Divine</p>
        <p style={{ fontSize: 10, letterSpacing: "0.14em", color: "#555", margin: "10px 0 0" }}>SAT 10 OCT 2026 · PORT HARCOURT</p>
        <div style={{ width: 40, height: 1, background: "#c9b98f", margin: "18px 0" }} />
        <p style={{ fontSize: 9, letterSpacing: "0.18em", color: "#999", margin: 0 }}>INVITED GUEST</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 18, color: "#222", margin: "6px 0 0" }}>Adaeze Okafor</p>
        <div style={{ display: "flex", gap: 8, margin: "16px 0 0", alignItems: "stretch" }}>
          <span style={{ background: "#7a52b3", color: "#fff", fontSize: 9, letterSpacing: "0.14em", padding: "6px 10px", fontWeight: 600 }}>PURPLE</span>
          <span style={{ border: "1px solid #ddd", fontSize: 9, letterSpacing: "0.14em", padding: "6px 10px", color: "#333" }}>TABLE 14</span>
        </div>
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="54" height="54" viewBox="0 0 9 9" aria-hidden="true" shapeRendering="crispEdges">
            {"101101011010011001110100110101100111001011010110100101101011011101".split("").slice(0, 81).map((b, i) =>
              b === "1" ? <rect key={i} x={i % 9} y={Math.floor(i / 9)} width="1" height="1" fill="#222" /> : null
            )}
          </svg>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: 8, letterSpacing: "0.18em", color: "#999", margin: 0 }}>ENTRY CODE</p>
            <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 18, color: "#111", margin: "2px 0 0", letterSpacing: "0.08em" }}>CF0193</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeatingTable() {
  const seats = Array.from({ length: 10 }, (_, i) => {
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    return { x: 120 + Math.cos(a) * 78, y: 120 + Math.sin(a) * 78 };
  });
  return (
    <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 12, padding: 28, display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
      <svg viewBox="0 0 240 240" width="220" height="220" role="img" aria-label="Table 07 with ten seats filled and seven guests over">
        <circle cx="120" cy="120" r="52" fill="#fff" stroke="#d9d9d9" />
        <text x="120" y="116" textAnchor="middle" fontSize="11" fill="#999" letterSpacing="2">TABLE</text>
        <text x="120" y="134" textAnchor="middle" fontSize="18" fill="#111">07</text>
        {seats.map((s, i) => <circle key={i} cx={s.x} cy={s.y} r="11" fill="#c9a227" />)}
      </svg>
      <div style={{ maxWidth: 280 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#d23b3b", letterSpacing: "0.06em", margin: "0 0 8px" }}>7 TOO MANY</p>
        <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: "0 0 14px" }}>
          Seats 11–17 have no chair. The chart now names everyone past the tenth seat instead of silently dropping them.
        </p>
        <span style={{ display: "inline-block", border: "1px solid #111", fontSize: 11, padding: "7px 12px", color: "#111" }}>Move 7 to the next free table</span>
      </div>
    </div>
  );
}

export default function BunmiAndDivinePage() {
  return (
    <main className="max-w-275 mx-auto px-6">
      <Hero
        kicker="Full-stack · Personal · 2026"
        title="Bunmi & Divine."
        lede="My sister got married. I built the system her 396 guests registered through, received their invitations from, and were seated by."
        pills={["Next.js 16", "Supabase", "Product Design", "Live event"]}
      />

      <Shot src={img("01-home-desktop")} alt="The Bunmi & Divine wedding website homepage" w={2000} h={1250}
        caption="bunmianddivine.live, the public face of a four-part system." />

      <section className="cs-sec" style={{ marginTop: 96 }}>
        <Label>The Brief</Label>
        <H2>&ldquo;Build a wedding website&rdquo; turned out to be an operations system.</H2>
        <div className="cs-two-col">
          <div>
            <Body>
              This was the third attempt at the site. The first two were rejected: one on design, and one because its database had quietly auto-paused and the site had been dead for weeks without anyone noticing. That history shaped every decision.
            </Body>
            <Body>
              The constraints that mattered weren&rsquo;t technical. The couple aren&rsquo;t technical. Invitations in Nigeria travel through WhatsApp, as images. Half the guest list didn&rsquo;t exist in advance. And a wedding happens once: there&rsquo;s no fixing it next sprint.
            </Body>
          </div>
          <Stats items={[
            { value: "396", label: "Guests on the day" },
            { value: "291", label: "Registrations" },
            { value: "29", label: "Tables seated" },
            { value: "69", label: "Commits · Jul–Oct" },
          ]} />
        </div>
      </section>

      <section className="cs-sec">
        <Label>Four audiences, one site</Label>
        <H2>Who sees what is the whole design.</H2>
        <Rows items={AUDIENCES} />
        <div className="cs-grid-3" style={{ marginTop: 48 }}>
          <Shot src={img("07-m-home")} alt="Homepage on mobile" w={780} h={1688} caption="Most guests arrived from WhatsApp, on a phone." />
          <Shot src={img("08-m-schedule")} alt="Schedule on mobile" w={780} h={1688} caption="The public schedule shows the church only." />
          <Shot src={img("09-m-registry")} alt="Registry on mobile" w={780} h={1688} caption="A registry the couple manage themselves." />
        </div>
      </section>

      <section className="cs-sec">
        <Label>Guests who don&rsquo;t exist yet</Label>
        <H2>Nine shared links, each with its own letter and colour.</H2>
        <Body>
          The father of the bride wanted to invite &ldquo;my committee of friends&rdquo;. There is no list of them and never will be. So each group got a link of its own: open it, enter your name and number, and you become an ordinary guest with your own code. Every link has a cap and an off switch, because a shared link gets forwarded. That&rsquo;s what group chats are for.
        </Body>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: "32px 0 0" }}>
          {LISTS.map(([name, prefix, colour]) => (
            <span key={prefix} style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1px solid #eee", borderRadius: 999, padding: "6px 14px 6px 6px", fontSize: 13, color: "#333" }}>
              <span style={{ background: colour, color: "#fff", borderRadius: 999, fontSize: 10, fontWeight: 600, padding: "4px 8px", letterSpacing: "0.06em" }}>{prefix}</span>
              {name}
            </span>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#999", lineHeight: 1.7, margin: "20px 0 0", maxWidth: 680 }}>
          Registering doesn&rsquo;t admit anyone. Invitations went out in October, after a human decided. Of 291 registrations, 121 were still unapproved on the morning of the wedding.
        </p>
      </section>

      <section className="cs-sec">
        <Label>The invitation</Label>
        <div className="cs-two-col">
          <div>
            <H2>Designed for WhatsApp, not the web.</H2>
            <Body>
              Each guest gets a 1080&times;1350 card, the size WhatsApp and Instagram show uncropped, rendered on the server from JSX. It carries their name, table, their list&rsquo;s colour as a named block, a short entry code, and a QR that opens the gate app on that code.
            </Body>
            <Body>
              Two credentials, two jobs. The long invite token in the link is reusable, so a guest can reopen their invitation and change their RSVP any time. The short entry code is what an usher reads off a phone at night with forty people waiting, and it checks in once.
            </Body>
            <p style={{ fontSize: 12, color: "#999", margin: 0 }}>Recreated with a made-up guest. No real guest data is shown.</p>
          </div>
          <InvitationCard />
        </div>
      </section>

      <section className="cs-sec">
        <Label>Seating</Label>
        <H2>A seating plan you can look at, not read.</H2>
        <Body>
          Ten to a table, families never split. When one table ended up with 32 people, the old chart drew ten and silently dropped the rest. The picture looked perfect. Now an overfull table says so in red, names everyone past the tenth chair, and offers to move them. The fix is offered, not automatic: a locked table is the couple saying &ldquo;this one is agreed&rdquo;.
        </Body>
        <div style={{ marginTop: 32 }}><SeatingTable /></div>
      </section>

      <section className="cs-sec">
        <Label>The incident log</Label>
        <H2>Every one of these was found by my sister, using it for real.</H2>
        <Body>There was no QA team. The tester was the bride, planning a wedding.</Body>
        <Rows items={INCIDENTS} />
      </section>

      <section className="cs-sec">
        <Label>The public site</Label>
        <div className="cs-grid-2">
          <Shot src={img("03-schedule")} alt="Schedule page with map" w={2000} h={2434} caption="Map pins resolve from the Google Maps link the couple already had, not a guessed address." />
          <Shot src={img("04-registry")} alt="Registry page" w={2000} h={2434} caption="Gifts mark themselves as already gifted." />
        </div>
      </section>

      <section className="cs-sec">
        <Label>Under the hood</Label>
        <H2 max={760}>Row-level security is the actual security model.</H2>
        <Body>
          The public key lives in the browser by design, so anything it can read is public forever. Guests, check-ins and the audit log have no public policy at all. Private events are redacted in SQL, where no application bug can skip it. Every server action re-checks the user&rsquo;s role, because the optimistic checks in front of it never see a direct request.
        </Body>
        <Meta items={[
          ["Frontend", "Next.js 16, React 19, Tailwind 4"],
          ["Backend", "Supabase Postgres, Auth, Storage"],
          ["Scale", "18 tables, 8 SQL functions, 14 routes"],
          ["Code", "24,135 lines, 37 components"],
        ]} />
      </section>

      <section className="cs-sec">
        <Label>What I&rsquo;d do differently</Label>
        <Quote>&ldquo;The one feature designed for the day itself went unused, because I never closed the loop on who could log in.&rdquo;</Quote>
        <Rows items={LESSONS} />
        <p style={{ fontSize: 14, margin: "40px 0 0" }}>
          <a href="https://bunmianddivine.live" target="_blank" rel="noreferrer" style={{ color: "#111", textDecoration: "underline", textUnderlineOffset: 4 }}>
            Visit bunmianddivine.live →
          </a>
        </p>
      </section>

      <CaseStyles />
    </main>
  );
}
