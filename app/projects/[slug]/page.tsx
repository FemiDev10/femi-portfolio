import { notFound } from "next/navigation";
import ClosingSection, { type ClosingContent } from "./ClosingSection";

type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
    };

type Project = {
  title: string;
  hero: string;
  meta: {
    role: string;
    client?: string;
    company: string;
    timeline: string;
    platform: string;
    deliverables: string;
  };
  closing: ClosingContent;
  sections: {
    title: string;
    content: ContentBlock[];
  }[];
};

const projects: Record<string, Project> = {
  "payzeep-merchant-portal": {
    title: "PayZeep Merchant Portal",
    hero:
      "Building trust, one transaction at a time, through a payment dashboard for Nigeria's everyday merchant.",
    meta: {
      role: "Product Designer",
      company: "PayZeep (Paymi Solutions Limited)",
      timeline: "June 2024 — Ongoing",
      platform: "Web (Desktop-first, responsive)",
      deliverables:
        "End-to-end UX, UI design, component system, interaction design",
    },
    closing: {
      closer: [
        "This work made me pay closer attention to the emotional side of financial products. A merchant is rarely opening a dashboard for fun. They are checking if money came in, if something failed, or if the system can be trusted enough for tomorrow's business.",
        "Working on the portal with Oladunni Treasure also reminded me how much stronger product decisions get when different perspectives are in the room. If I were pushing the work further, I would spend even more time watching real merchants move through the flow in their normal environment, not just in review sessions.",
      ],
      reflection: [
        "Designing for finance means designing for reassurance",
        "Clear status communication beats clever interface tricks every time",
        "Good onboarding is less about forms and more about confidence",
        "Real merchant behavior should shape the next round of decisions",
      ],
      ps: [
        "PS: If a merchant has to guess whether money is real, pending, or stuck, the design has already lost the argument.",
        "Also, test mode confusion has probably caused more emotional drama than some actual product bugs.",
      ],
      credits: [
        {
          name: "Oladunni Treasure",
          role: "Product Designer",
        },
        {
          name: "Femi Jimoh",
          role: "Product Designer",
        },
      ],
    },
    sections: [
      {
        title: "The Brief",
        content: [
          {
            type: "paragraph",
            text: "When I joined PayZeep in June 2024, the Merchant Portal already existed, but it was still evolving. Multiple iterations, shifting product priorities, and expanding capabilities meant the experience needed steady refinement.",
          },
          {
            type: "paragraph",
            text: "As new licensed offerings like PSSP, PTSP, and agency banking came into play, the challenge was not only adding features. We also needed the product to feel cohesive, usable, and trustworthy for merchants navigating digital payments.",
          },
          {
            type: "paragraph",
            text: "My role was to rethink and redesign key parts of the merchant experience. The goal: help merchants understand their money, confidently use the platform, and rely less on fragmented processes like manual onboarding and support.",
          },
          {
            type: "paragraph",
            text: "That sounds straightforward. It wasn’t.",
          },
        ],
      },
      {
        title: "The Context",
        content: [
          {
            type: "paragraph",
            text: "PayZeep targets the everyday Nigerian merchant, the trader in Surulere, the restaurant owner in Ikeja, the small logistics company in Port Harcourt. These are people moving from cash-heavy, trust-heavy relationships into digital transactions. They are not early adopters. They are practical business owners who need a clear reason to switch and a strong reason to stay.",
          },
          {
            type: "paragraph",
            text: "The Merchant Portal needed to serve two distinct moments in a merchant's life with PayZeep: the pre-live phase (onboarding, KYC, setting up payment tools) and the live phase (transacting, tracking, withdrawing, growing). A single product. Two very different jobs.",
          },
        ],
      },
      {
        title: "The Problem",
        content: [
          {
            type: "paragraph",
            text: "Managing payments as a Nigerian merchant can be frustrating. Between unreliable POS infrastructure, unclear settlement timelines, and products that often feel designed for bank managers instead of everyday traders, there was a clear need for something shaped by local context.",
          },
          {
            type: "paragraph",
            text: "As we looked more closely, a few issues kept showing up:",
          },
          {
            type: "list",
            items: [
              "1. Test mode was invisible. Merchants would onboard, set up their account, and then wonder why nothing was processing. They were in test mode, but nothing explained that clearly or showed them what to do next.",
              "2. KYC activation was a maze. Four different business types, Sole Proprietor, Private Limited, Public Limited, and NGO or Religious Organisation, each needed different documents. There was no structured flow. Merchants submitted what they thought was right and then waited for an email that might never come.",
              "3. Payment tools were hard to find. PayZeep offers payment links, virtual accounts, and POS, but merchants landing on the dashboard had no obvious path into any of these tools.",
              "4. Settlements were a black box. When does my money arrive? Why is the balance ₦0.00? Is this an error or just the weekend? These questions were filling support channels because the product had no answers on-screen.",
              "5. There was no single dashboard to return to. Most merchants only check their finances when something feels wrong. If the first thing they see doesn't immediately answer \"am I okay?\" they lose confidence fast. There was no designed version of that reassurance.",
            ],
          },
        ],
      },
      {
        title: "The Goals",
        content: [
          {
            type: "paragraph",
            text: "The team aligned around four outcomes:",
          },
          {
            type: "list",
            items: [
              "Make test vs. live mode unmissable, so a merchant knows exactly where they stand within 3 seconds of logging in",
              "Turn KYC activation into a guided journey with business-type-specific steps and visible progress",
              "Surface payment tools as first-class features, organised around how merchants think about money",
              "Give every transaction more clarity through real-time data, downloadable records, and clear settlement status",
            ],
          },
        ],
      },
      {
        title: "The Approach",
        content: [
          {
            type: "paragraph",
            text: "Naming the modes",
          },
          {
            type: "paragraph",
            text: "One of the earliest decisions I pushed for was making the Test Mode and Live Mode split a persistent, visible part of the experience. It could not live inside a hidden settings menu.",
          },
          {
            type: "paragraph",
            text: "In the final direction, the top navigation bar carries a red \"Test Mode\" badge alongside a \"Switch to live\" prompt throughout the pre-live phase. The dashboard also shows a contextual subtitle, \"Want to switch to live mode? Activate your business\", with an \"Activate Account\" button in the top right. Merchants do not have to guess where they are. The answer is always visible.",
          },
          {
            type: "paragraph",
            text: "We explored six distinct dashboard states, Empty, Test Active, Test Inactive, Live Active, Live Inactive, and Filled. Each one reflects a different moment in the merchant journey and helps preserve a clear mental model.",
          },
          {
            type: "paragraph",
            text: "The KYC activation flow",
          },
          {
            type: "paragraph",
            text: "The KYC Business Activation section was one of the most structurally complex parts of the portal. Nigerian regulatory requirements mean a Sole Proprietor needs different documents from a Private Limited company, and both differ from an NGO. A single generic form with conditional fields might have worked technically, but it would have created too much friction for real users.",
          },
          {
            type: "paragraph",
            text: "So we shaped each business type into its own clear journey:",
          },
          {
            type: "list",
            items: [
              "Sole Proprietor → Payout Account → Sole Proprietor's Details → Business Information",
              "Private Limited → Payout Account → Director's Details → Shareholder's Details → Business Details",
              "Public Limited → Extended version of the above",
              "NGO / Association / Religious Organisation → Organisation-specific documentation",
            ],
          },
          {
            type: "paragraph",
            text: "Merchants select their business type at the top, and from there the product walks them through only what applies to them. No irrelevant fields. No guessing. At the end of the flow, a \"BA in Review\" state confirms that the submission is in and waiting in queue.",
          },
          {
            type: "paragraph",
            text: "Building the sidebar",
          },
          {
            type: "paragraph",
            text: "The sidebar was treated less like a feature list and more like a map of how money moves.",
          },
          {
            type: "paragraph",
            text: "We grouped it into three main sections: Business Tools, which includes Point of Sale, Payment Links, and Virtual Accounts, Incoming, which includes Web Transactions, POS Transactions, and Dispute, and Outgoing, which includes Payout, Transfer, Settlements, and Sub Accounts. Support, Developer Tools, and Settings sit below that.",
          },
          {
            type: "paragraph",
            text: "That structure matches how merchants think. The question is not \"what does the product do\". It is \"what am I trying to do with my money right now\". That shift made the navigation feel more like a workflow guide and less like a list of features.",
          },
          {
            type: "paragraph",
            text: "The dashboard",
          },
          {
            type: "paragraph",
            text: "The dashboard opens with three numbers merchants care about most: Transaction Volume, Transaction Value, and Total Available Amount. The Available Amount card has a dark navy background, a bold Naira figure, and a prominent \"Withdraw Money\" CTA. That contrast helped the money card stand apart without making the screen feel heavy.",
          },
          {
            type: "paragraph",
            text: "Below the metrics sits a transaction volume and value chart with a date range filter. Under that is a Recent Transactions table with S/N, Customer Name, Date, Amount, Payment Method, and Status, plus search, filter, and download controls inline.",
          },
          {
            type: "paragraph",
            text: "The empty state for the transactions table uses a custom illustration instead of a generic \"no data\" message. A merchant seeing an empty table for the first time should not assume something is broken. The illustration helps communicate that the system is ready and waiting.",
          },
          {
            type: "paragraph",
            text: "Payment tools",
          },
          {
            type: "paragraph",
            text: "Business Tools, including Payment Links, Virtual Accounts, and POS, sit at the first level of navigation instead of being buried in settings. Virtual Account management is especially robust, with screens to generate a VA, view all VAs, link a VA to a POS terminal, create new VA transactions, and review VA transaction history.",
          },
          {
            type: "paragraph",
            text: "The Checkout flows, Card Checkout, Transfer Checkout, and USSD Checkout, are all accessible from the Preview and Checkout section. The team also supported customizable payment link generation with preview functionality. For merchants operating in mixed-connectivity environments, USSD needed to be treated as a real checkout option, not an afterthought.",
          },
        ],
      },
      {
        title: "Key Screens",
        content: [
          {
            type: "list",
            items: [
              "Dashboard (Test Mode). Three metric cards, a transaction chart, a recent transactions table, a persistent \"Test Mode\" indicator, and an \"Activate Account\" CTA. The \"Switch To Live\" confirmation modal stays minimal, with one explanation and one action.",
              "Dashboard (Live, Active). The same structure, but with live data, no mode badge, and an active Withdraw Money CTA. The screen feels fuller and more settled.",
              "KYC Activation, Sole Proprietor flow. A step-by-step progression across Payout Account, Business Details, and Sole Proprietor's Details, with a visible progress indicator and a final \"BA in Review\" state.",
              "KYC Activation, Private Limited flow. This extends the journey to include Director's Details and Shareholder's Details while keeping the same design language.",
              "Payment Links. Generate a link, customize the amount, and copy or share it. The Preview and Checkout system supports testing before going live.",
              "Virtual Accounts. Generate, view, link to POS, and track transactions per VA.",
              "Transfer and Settlements. Single Transfer, Batch Transfer with file upload, Pending Approval queue, and Settlement history.",
              "Account Settings. Personal Info, Business Profile, Teams, Role Management, Security, and Change Password, organized as a settings hub instead of a linear flow.",
            ],
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "The Merchant Portal evolved into a more navigable, multi-flow product across two key phases of the merchant journey, pre-live and live. Onboarding moved closer to an in-product guided flow, and the KYC funnel now supports four business types with clearer paths for each.",
          },
          {
            type: "paragraph",
            text: "The test and live mode visibility system addressed one of the biggest sources of early confusion. Support questions around \"why isn't my account working\" dropped once the persistent mode indicator shipped.",
          },
          {
            type: "paragraph",
            text: "The sidebar structure, Business Tools, Incoming, and Outgoing, also became a useful reference point for how the mobile product is being reconsidered.",
          },
        ],
      },
      {
        title: "Reflection",
        content: [
          {
            type: "paragraph",
            text: "Mobile should have had more weight earlier. The portal is designed at 1440px, but a meaningful percentage of merchant logins happen on mid-range Android browsers. Several screen patterns had to be adapted later for responsive behavior, and some of that cleanup is still ongoing. If I were approaching it again, I would design the core transaction and settlement screens with mobile much earlier in mind, and treat desktop as the priority mainly for tools and settings.",
          },
          {
            type: "paragraph",
            text: "I would also push harder for usability sessions with actual market traders earlier in the process. A lot of the KYC decisions came from stakeholder conversations and assumptions. The flow works, but I would trust it even more after watching people move through it without prior context.",
          },
          {
            type: "paragraph",
            text: "This project sharpened the way I think about financial anxiety in product design. Every zero, every pending status, and every loading spinner carries emotional weight. Designing with that in mind changed the way I approach product decisions.",
          },
        ],
      },
    ],
  },
  "payzeep-merchant-admin": {
    title: "PayZeep Merchant Admin",
    hero:
      "The operating room, an internal platform that helps keep PayZeep's merchant ecosystem compliant, functional, and in control.",
    meta: {
      role: "Product Designer",
      company: "PayZeep (Paymi Solutions Limited)",
      timeline: "June 2024 — Ongoing",
      platform: "Web (Desktop)",
      deliverables:
        "Full UX/UI design, role-based access system, KYC compliance workflows, transaction and terminal management",
    },
    closing: {
      closer: [
        "The Merchant Admin sharpened my thinking around internal tools in a very direct way. Most of the work here sat with me, and it forced me to think beyond screens into responsibility, traceability, and the pace at which real operations teams make decisions.",
        "What stayed with me most is that internal users deserve the same level of care as public-facing users. If I were revisiting this product, I would go even harder on live notification systems and prototype more of the operational edge cases earlier with the team.",
      ],
      reflection: [
        "Internal tools carry real business risk, even when they look quiet on the surface",
        "Permission systems need clarity more than complexity",
        "Auditability is part of the user experience",
        "Operations teams notice every bit of friction, even when they work around it",
      ],
      ps: [
        "PS: Nothing will humble a designer faster than a bulk transfer flow with approvals, edge cases, and compliance people in the room.",
        "And yes, internal dashboards also deserve good spacing.",
      ],
      credits: [
        {
          name: "Oladunni Treasure",
          role: "Product Designer",
        },
        {
          name: "Femi Jimoh",
          role: "Product Designer",
        },
      ],
    },
    sections: [
      {
        title: "The Brief",
        content: [
          {
            type: "paragraph",
            text: "Every merchant using PayZeep's portal is supported by an operations team that reviews KYC documents, manages terminal assignments, processes payouts, and resolves disputes. As the merchant products evolved, the internal systems supporting them also needed to become more structured, usable, and scalable.",
          },
          {
            type: "paragraph",
            text: "My role was to rethink and redesign key parts of the admin experience so the ops team could work from a system that matched the complexity of the business, rather than relying on fragmented workflows spread across spreadsheets, inboxes, and manual processes.",
          },
          {
            type: "paragraph",
            text: "The Merchant Admin became the operational layer the team needed, and I led most of the work to shape it into something clearer, more controlled, and more accountable.",
          },
        ],
      },
      {
        title: "The Context",
        content: [
          {
            type: "paragraph",
            text: "PayZeep holds a PTSP licence — which means they don't just process payments, they own and deploy physical POS terminals. Combined with their PSSP licence and agency banking operations, their operations team juggles a genuinely complex set of responsibilities: KYC compliance review, terminal management, charge configuration, transaction monitoring, payout processing, and internal access control across a growing team.",
          },
          {
            type: "paragraph",
            text: "None of these workflows had a designed interface. They had workarounds.",
          },
        ],
      },
      {
        title: "The Problem",
        content: [
          {
            type: "paragraph",
            text: "Scaling operations without tooling is a fragile equilibrium. For PayZeep's ops team, the cracks were visible:",
          },
          {
            type: "list",
            items: [
              "1. KYC review was entirely manual. Documents arrived by email. Staff reviewed them by eye, cross-referenced regulatory requirements for each business type, and responded by hand. With four different business structures (Sole Proprietor, Private Limited, Public Limited, NGO) each requiring different documentation, the margin for error — and delay — was significant.",
              "2. No one knew who had done what. When a merchant's status changed, or a payout was triggered, or a role was modified — there was no audit trail. No log. No accountability. For a licensed financial services provider, this isn't just an operational inconvenience. It's a compliance liability.",
              "3. Bulk transfer approvals had no structure. This was actively flagged during design review: \"We are missing a flow here — while initiating a batch transfer, the user will need to select the approval stage.\" The ops team was processing bulk transfers without a formal approval layer. The risk was real.",
              "4. Access was undifferentiated. Anyone with admin credentials could see everything and do everything. There was no concept of role-based scope. A support agent could accidentally — or intentionally — modify a settlement that should only be touched by a finance lead.",
              "5. Terminal management had no home. As a PTSP, PayZeep deploys physical POS hardware. Tracking which terminal is active, which merchant it's assigned to, its transaction history, and its status required manual cross-referencing. There was no operational view that brought this together.",
            ],
          },
        ],
      },
      {
        title: "The Goals",
        content: [
          {
            type: "list",
            items: [
              "Give the ops team a single source of truth — every merchant, every status, every action in one place",
              "Structure KYC review by business type — the interface should reflect the actual compliance pathway for each entity structure",
              "Introduce a meaningful RBAC system — staff should only access and action what their role requires",
              "Build a bulk transfer approval workflow — with defined stages, not just a send button",
              "Create terminal management as a first-class feature — not a spreadsheet",
            ],
          },
        ],
      },
      {
        title: "The Approach",
        content: [
          {
            type: "paragraph",
            text: "Starting with the org, not the features",
          },
          {
            type: "paragraph",
            text: "Before designing screens, I spent time understanding how the ops team was actually structured. There are clear functional lines: compliance (KYC), finance (payouts, settlements, charges), infrastructure (terminals), and internal admin (user roles). These aren't the same people. Designing a flat admin with everything on one level would have served none of them well.",
          },
          {
            type: "paragraph",
            text: "The Merchant Admin's architecture reflects those lines. KYC & Compliance, Transaction, Payout, Charges, Transaction Limit, Terminals, and Merchants are each distinct sections, not sub-tabs. Each has its own navigation entry point because each represents a distinct operational function.",
          },
          {
            type: "paragraph",
            text: "KYC & Compliance, the core of the admin",
          },
          {
            type: "paragraph",
            text: "KYC & Compliance is the most extensive section in the admin, spanning a 15,000+ pixel canvas of screens across every state of a merchant's compliance journey. Rather than relying on a generic status table with a details drawer, I treated each compliance state as a named, distinct screen.",
          },
          {
            type: "paragraph",
            text: "The ops team can see a merchant's KYC status at multiple levels: which business type they registered as, which documents they've submitted, what stage of review they're in, submitted to under review to approved or rejected, and what action, if any, is required. Each business type maps to a distinct document checklist, so the reviewer always knows what should be there, not just whether a box is ticked.",
          },
          {
            type: "paragraph",
            text: "The section is that large because KYC isn't one flow. It's four (business type) × multiple (document states) × multiple (review stages). Trying to collapse that into less space would mean losing the fidelity that compliance work actually needs.",
          },
          {
            type: "paragraph",
            text: "Role & Permission, real RBAC instead of a simple dropdown",
          },
          {
            type: "paragraph",
            text: "The Role Management section went through more iterations than any other part of the admin. Early conversations leaned toward three tiers, Admin, Standard, and View-Only. That is common in internal tools, but it was not enough for a licensed financial services company with multiple functional teams.",
          },
          {
            type: "paragraph",
            text: "The final permission model covers six categories:",
          },
          {
            type: "list",
            items: [
              "Dashboard, what metrics and summaries each role can see",
              "KYC & Compliance, who can review, approve, or reject submissions",
              "POS Management, terminal assignment and management access",
              "Communication, internal messaging and merchant-facing notifications",
              "Admins & Controls, who can create and manage other users",
              "Developer Tools, API key management and technical access",
            ],
          },
          {
            type: "paragraph",
            text: "Each role is fully configurable within those categories. The Admin Management screen shows every staff member, their assigned role, and status in a sortable table. Role Creation and Role Editing are separate flows, because creating a new role is different from updating an existing one, and that distinction matters for audit trails.",
          },
          {
            type: "paragraph",
            text: "Bulk Transfer Approval, closing a clear gap",
          },
          {
            type: "paragraph",
            text: "The Transfer / Bulk Transfer section handles four distinct operations: Single Transfer, Batch Transfer (manual), Upload Batch Transfer (file import), and Pending Approval management.",
          },
          {
            type: "paragraph",
            text: "The approval layer that was missing and flagged in review is now a structured, multi-stage flow. A transfer does not leave the system on submission. It moves to a Pending Approval queue where it can be reviewed at First Approval or Second Approval stages before release. Rejected transfers move to a separate state with a reason attached. Every stage creates an audit entry.",
          },
          {
            type: "paragraph",
            text: "This direction helped close a financial risk gap the team had already identified, and it was one of the parts of the admin I felt strongest about getting right.",
          },
          {
            type: "paragraph",
            text: "Merchant Management",
          },
          {
            type: "paragraph",
            text: "The Merchants section gives the ops team a searchable, filterable list of every PayZeep merchant, with key status indicators visible inline, including KYC status, account status, and last activity. Clicking a merchant opens a Preview Details panel in a side drawer instead of a new page, so the team can review merchant details, KYC state, and linked terminals without losing their place in the list.",
          },
          {
            type: "paragraph",
            text: "This decision came directly from observing how the ops team worked: they often needed to compare multiple merchants or track several reviews at once. Full-page navigation breaks that flow.",
          },
          {
            type: "paragraph",
            text: "Transaction & Terminal Monitoring",
          },
          {
            type: "paragraph",
            text: "Transaction monitoring gives the ops team a view of all payment activity, filterable by merchant, terminal, status, date, and payment method. The Terminal Management section tracks POS hardware, including terminal ID, assigned merchant, current status, and transaction volume per device.",
          },
          {
            type: "paragraph",
            text: "For a PTSP, terminal status is operational intelligence. A terminal going offline mid-day at a merchant's location is a service event that needs a response, not just a log entry. The design makes that visible.",
          },
        ],
      },
      {
        title: "Key Screens",
        content: [
          {
            type: "list",
            items: [
              "Login and Auth. Admin-specific login with Email Re-verification and Forgot or Reset Password flows. This stays separate from merchant portal auth to preserve access boundaries.",
              "Merchant List. A filterable table, searchable by name or ID, sortable by KYC status and account status. A side-drawer preview panel shows merchant details.",
              "KYC & Compliance, Review View. Per-business-type KYC status screens, document checklist, review stage indicators, and action buttons for Approve, Request More Info, or Reject.",
              "Transaction Monitor. A full transaction ledger, filterable by merchant, terminal, status, and date, with CSV export and transaction detail on click.",
              "Terminal Management. A terminal list with assigned merchant, status badge, and transaction summary per device.",
              "Charges. Charge type configuration and rate management by merchant tier or plan.",
              "Transaction Limit. Per-merchant and system-wide transaction limit settings with edit and history views.",
              "Role Management. Admin Management table, Role Creation flow, and Role Editing with the full permission matrix across six categories.",
              "Transfer and Bulk Transfer. Single transfer, batch transfer, file upload, and a Pending Approval queue with First, Second, and Rejected states.",
            ],
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "The Merchant Admin gave PayZeep's operations team a more structured and accountable interface. I designed the core workflows that moved KYC review from email-based work into the product, with business-type-specific paths that map directly to regulatory requirements. The Role & Permission system also introduced meaningful access control, so staff now operate within defined scopes instead of a shared credential pool.",
          },
          {
            type: "paragraph",
            text: "The bulk transfer approval workflow helped close an active financial risk gap before it became a larger problem. I also designed around audit visibility across admin actions, including role changes, KYC updates, and payout approvals, so the compliance function had the accountability layer it needed.",
          },
          {
            type: "paragraph",
            text: "Just as importantly, the ops team now has a shared vocabulary for the state of the business. When someone says \"this merchant is in KYC review\" or \"this terminal is offline\", those are not loose descriptions. They are statuses the product reflects clearly.",
          },
        ],
      },
      {
        title: "Reflection",
        content: [
          {
            type: "paragraph",
            text: "The Merchant Admin reminded me that internal tools are often underdesigned because their users do not always complain loudly. Ops staff adapt. They build workarounds. They tolerate friction that would never be acceptable in a consumer product. Since I did most of the work on this product, it pushed me to advocate more directly for the people doing the work every day and to make sure the system respected their time.",
          },
          {
            type: "paragraph",
            text: "If I were revisiting it, I would invest earlier in the Merchant Admin's notification and alerting system. Right now, the ops team still has to actively check for updates, whether that is a KYC submission, a flagged transaction, or a terminal going offline. A more proactive notification layer would make the platform feel much more responsive.",
          },
          {
            type: "paragraph",
            text: "I would also get the ops team into Figma earlier. Some of the role permission decisions that took days of back and forth in meetings would likely have been resolved much faster with a clickable prototype in front of the people doing the work.",
          },
          {
            type: "paragraph",
            text: "Both products are live and still evolving at PayZeep. Product designers: Oladunni Treasure and Femi Jimoh. June 2024 to present.",
          },
        ],
      },
    ],
  },
  "payzeep-checkout": {
    title: "PayZeep Checkout",
    hero:
      "Designing the moment money moves, through a checkout widget built for the real ways Nigerians pay online.",
    meta: {
      role: "Product Designer",
      company: "PayZeep (CBN-licensed PSSP/PTSP)",
      timeline: "2025",
      platform: "Web, embedded modal",
      deliverables:
        "Checkout UX/UI design, payment flow design, interaction design, state design, responsive checkout patterns",
    },
    closing: {
      closer: [
        "This project reminded us that checkout is never just a form. It is the exact moment trust gets tested. Every payment method, every timer, every confirmation screen, and every error message either calms the user down or adds one more reason to leave.",
        "Working on PayZeep Checkout also made the local context impossible to ignore in a good way. Nigerian payment behavior is varied, practical, and deeply shaped by trust. If we revisit this again, we would push even further on payment method intelligence and merchant-level customization without losing the clarity that made the core flow work.",
      ],
      reflection: [
        "Checkout design is really trust design",
        "Parity across payment methods matters more than a visually perfect default",
        "Error states deserve just as much writing care as success states",
        "A payment flow should feel like guidance, not pressure",
      ],
      ps: [
        "PS: If the transfer screen feels abandoned for even ten seconds, users will start emotionally preparing for a failed payment.",
        "Also, someone should study how much national anxiety has been caused by vague OTP screens.",
      ],
      credits: [
        {
          name: "Oladunni Treasure",
          role: "Product Designer",
        },
        {
          name: "Femi Jimoh",
          role: "Product Designer",
        },
      ],
    },
    sections: [
      {
        title: "The Brief",
        content: [
          {
            type: "paragraph",
            text: "In most countries, asking \"How do you want to pay?\" is a routine question. In Nigeria, it can shape the whole experience. One customer may have a Mastercard. Another may trust only bank transfer because they can see the account name before sending money. Someone else may prefer USSD because data is unreliable. Another person may choose QR because their bank app is faster than typing.",
          },
          {
            type: "paragraph",
            text: "That was the real brief behind PayZeep Checkout. We were not just designing a modal. We were designing a payment experience that treats the genuinely different ways Nigerians pay online as first-class options, then making every state of that checkout feel intentional.",
          },
        ],
      },
      {
        title: "The Context",
        content: [
          {
            type: "paragraph",
            text: "We studied the category by opening Paystack, Flutterwave, and OPay side by side, then paying for things. The goal was not to copy them. It was to understand what they were really solving for, and where they still made assumptions about how people should pay.",
          },
          {
            type: "paragraph",
            text: "Paystack felt the cleanest, but card clearly sat at the center of the experience. Flutterwave offered range, but the flow could feel dense for someone who just wanted confidence that nothing would go wrong. OPay made a stronger call by centering bank transfer and writing the transfer screen in a way that actually builds trust.",
          },
          {
            type: "paragraph",
            text: "Across all three, one weakness kept showing up. Error states often felt generic and slightly dismissive. A payment fails, a red banner appears, and the user gets no real explanation or next step. We knew early that PayZeep Checkout had to do better there.",
          },
        ],
      },
      {
        title: "The Goals",
        content: [
          {
            type: "list",
            items: [
              "Treat Card, Transfer, Bank, USSD, and QR Code as equal citizens inside the same checkout",
              "Design each payment method with its own complete logic, not as an afterthought behind card",
              "Reduce anxiety through better copy, clearer transitions, and more trustworthy status communication",
              "Make switching payment methods feel flexible instead of punishing",
              "Design status and error states with enough specificity that users know what happened and what to do next",
            ],
          },
        ],
      },
      {
        title: "The Approach",
        content: [
          {
            type: "paragraph",
            text: "Five methods, zero hierarchy",
          },
          {
            type: "paragraph",
            text: "The first structural decision shaped everything else. We could have placed card first, made it the default, and treated every other method as a secondary option. That would have matched common Western checkout conventions, but it would have quietly told a lot of Nigerian users that their preferred method was second-class.",
          },
          {
            type: "paragraph",
            text: "Instead, we designed five visible tabs with equal weight: Card, Transfer, Bank, USSD, and QR Code. The tab bar became more than navigation. It became a statement that whichever of these methods works for you, the checkout has been built properly for it.",
          },
          {
            type: "paragraph",
            text: "We also kept the tabs visible through every flow and preserved entered state when switching. That meant someone could begin typing card details, decide transfer feels less stressful, switch over, then come back without losing what they had entered. In planning, that felt like a small detail. In practice, it changed the tone of the whole experience.",
          },
          {
            type: "paragraph",
            text: "The card flow, trust in three steps",
          },
          {
            type: "paragraph",
            text: "Card payment compresses a lot of anxiety into a few screens. Someone is entering card details, then a PIN, then an OTP, all while wondering if the system is safe enough to trust. We designed the card flow so each step felt earned rather than abrupt.",
          },
          {
            type: "paragraph",
            text: "The card details screen stays focused, with the amount embedded directly in the CTA so there is no ambiguity at the point of commitment. We also introduced a \"Remember this card\" toggle and a returning-user option to use a saved card. Those decisions appear early, before the user is buried in the flow.",
          },
          {
            type: "paragraph",
            text: "On the PIN screen, the masked card number remains visible. That detail mattered because people hesitate when they are authorizing a card they can no longer identify. The OTP step then sets a clear expectation window and offers resend support without encouraging panic-clicking.",
          },
          {
            type: "paragraph",
            text: "The transfer flow, designed for a country that transfers",
          },
          {
            type: "paragraph",
            text: "Transfer was one of the most sensitive parts of the checkout. We were asking users to send real money to a one-time account they had never seen before, often at a bank they may not recognize, all while a countdown is running.",
          },
          {
            type: "paragraph",
            text: "To reduce that tension, we designed the transfer screen more like a receipt than a form. Account Name, Bank Name, Account Number, and Amount are all presented in a structured breakdown. The countdown is explicit. The CTA says \"I've transferred the money\", which acknowledges that the action happens outside the modal and that the interface is now catching up with the user's reality.",
          },
          {
            type: "paragraph",
            text: "We also kept account details accessible while the transfer is still processing. That fallback matters because many users move between their banking app and the checkout screen more than once before they feel done.",
          },
          {
            type: "paragraph",
            text: "USSD and QR, designing for off-screen moments",
          },
          {
            type: "paragraph",
            text: "USSD is a particularly strange interaction to design because the actual payment happens outside the browser. The right response was to design the departure and return with care. We made the bank selector searchable, displayed the code prominently, made it one-tap copyable, and clearly communicated expiry so it would not read like a bug.",
          },
          {
            type: "paragraph",
            text: "QR had the opposite challenge. It does very little, but it still has to feel complete. So we committed to a large scannable code, a download option, and copy that changes depending on whether the user should scan through a banking app or through their phone camera.",
          },
          {
            type: "paragraph",
            text: "Error states as part of the product, not leftovers",
          },
          {
            type: "paragraph",
            text: "We spent more time on error and status states than most people would notice. Instead of a generic failure banner, the checkout now handles success, failure, invalid amount, in-progress transfer, in-progress USSD, timeout, and system error with more specific language and clearer recovery paths. That writing work mattered because a payment interface should not leave people guessing when money is involved.",
          },
          {
            type: "table",
            headers: ["State", "What it says", "What it means"],
            rows: [
              [
                "Checking transaction status",
                '"Checking transaction status..."',
                "Processing, hold on",
              ],
              [
                "Transaction Successful",
                `"Congratulations, you've paid NGN 520 to Excel Supermarket"`,
                "Done. Specific. Affirming.",
              ],
              [
                "Transaction Failed",
                '"Your transaction could not be processed at the moment."',
                "Failed. Try again.",
              ],
              [
                "Transaction Error",
                '"Your transaction could not be processed at the moment"',
                "System-level failure",
              ],
              [
                "Invalid Transaction Amount",
                '"The amount entered is not valid. Please ensure it is greater than ₦0.00 and does not exceed your available balance."',
                "User input error, with clear guidance",
              ],
              [
                "In Progress (Transfer)",
                '"Your transfer is on the way. It can take up to a minute to confirm"',
                "Expected delay, do not panic",
              ],
              [
                "In Progress (USSD)",
                '"Your transaction is on the way. It can take up to a minute to confirm"',
                "Same reassurance, same language pattern",
              ],
              [
                "Session Timeout",
                '"For your security, your session has ended due to inactivity."',
                "Expired, restart with context",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Saved cards and quiet brand memory",
          },
          {
            type: "paragraph",
            text: "For returning users, saved cards reduce the feeling that every payment is a first-time event. We designed a dedicated selection screen for returning cards and kept \"Add New Card\" available at all times. We also kept a quiet \"Powered by PayZeep\" badge throughout the flow. That badge is subtle, but it turns every merchant checkout into a small brand familiarity moment.",
          },
        ],
      },
      {
        title: "Key Screens",
        content: [
          {
            type: "list",
            items: [
              "Payment Method Tabs. Card, Transfer, Bank, USSD, and QR Code presented with equal weight and persistent switching.",
              "Card Flow. Card Details, Card PIN, and OTP steps with amount-aware CTAs, saved card support, and clear back paths.",
              "Transfer Flow. Structured account breakdown, visible countdown, transfer confirmation CTA, and in-progress state with account detail fallback.",
              "USSD Flow. Searchable bank picker, one-tap code copy, explicit expiry, and completion handoff.",
              "QR Code Flow. Large scannable code, download support, and instruction variants for banking app or phone camera usage.",
              "Saved Cards. Returning-user selection screen with masked numbers, expiry, and add new card path.",
              "Status and Error States. Success, checking status, transaction failed, transaction error, invalid transaction amount, in-progress transfer, in-progress USSD, and session timeout.",
              "Responsive Checkout. Mobile and desktop variants designed as part of the system, not after the fact.",
            ],
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "PayZeep Checkout shipped as a payment experience where five different methods were treated with real parity instead of one primary flow and four weak alternatives. The transfer flow in particular became stronger because it was written and designed to maintain trust while money was moving.",
          },
          {
            type: "paragraph",
            text: "The card flow also became more grounded through clearer step logic, stateful switching, and more direct CTA language. The result was a checkout that felt less like a technical handoff and more like a guided experience built around how Nigerians already pay.",
          },
          {
            type: "paragraph",
            text: "Just as important, the status and error screens finally felt like part of the product. They gave users more dignity, more clarity, and a better sense of what happens next.",
          },
        ],
      },
      {
        title: "Reflection",
        content: [
          {
            type: "paragraph",
            text: "If we keep pushing the work, payment method intelligence is the next obvious layer. The checkout still presents the same five tabs to every user, regardless of context. A smarter version could bring the most likely method forward based on device, connectivity, or returning behavior.",
          },
          {
            type: "paragraph",
            text: "FlashPay as a native shortcut is another strong direction. There is already a hint of it in the designs, and it points toward a future where PayZeep Checkout becomes more than a neutral gateway. It becomes a stronger product advantage inside PayZeep's own ecosystem.",
          },
          {
            type: "paragraph",
            text: "This project also reinforced something simple. Checkout is one of the most psychologically loaded screens in any product. If it feels cheap, vague, or stressful, everything before it starts to collapse. That made it one of the most rewarding design problems to work on.",
          },
        ],
      },
    ],
  },
  safepulse: {
    title: "SafePulse",
    hero:
      "Designing Nigeria's real-time public safety intelligence platform, where verified incident data reaches people quickly, clearly, and without unnecessary friction.",
    meta: {
      role: "Product Designer (Client Project)",
      client: "SafePulse",
      company: "SafePulse",
      timeline: "October 2025 to January 2026",
      platform: 'Web (Desktop, MacBook Pro 14")',
      deliverables:
        "Full UX/UI design, user flow mapping, information architecture, KYC-gated reporting system, data visualisation design, design system",
    },
    closing: {
      closer: [
        "SafePulse pushed me into a different kind of design mindset. When the product is about public safety, every interaction carries more urgency. People are not just browsing. They may be trying to decide whether to move, wait, reroute, or warn someone else.",
        "Because I handled this work myself, the project also became a lesson in focus. I had to make constant calls about what needed depth now and what could wait. If I revisit it, I would spend more time stress-testing the mobile experience and the low-data moments where trust is easiest to lose.",
      ],
      reflection: [
        "Public safety products need speed, but they also need trust",
        "Verification is a design problem, not only a policy problem",
        "Maps are useful only when the surrounding context is clear",
        "Constraint-heavy projects force sharper product judgment",
      ],
      ps: [
        "PS: Designing a civic tech product will make you question every label, every loading state, and every empty map.",
        "Also, if the incident page raises your pulse instead of lowering it, something in the design needs work.",
      ],
      credits: [
        {
          name: "Femi Jimoh",
          role: "Product Designer",
        },
      ],
    },
    sections: [
      {
        title: "The Brief",
        content: [
          {
            type: "paragraph",
            text: "The client came to me with a clear problem and an ambitious product idea. Nigeria is one of the most complex public safety environments in the world. There are bandit attacks on highways, traffic collisions in Lagos, street fires in Port Harcourt, and suspicious gatherings that can shift quickly. Information about these events exists, but it lives across Twitter, WhatsApp groups, radio stations, and word of mouth. It is fragmented, hard to verify, difficult to access as a system, and almost impossible to act on at scale.",
          },
          {
            type: "paragraph",
            text: "SafePulse wanted to change that. The idea was a real-time public safety platform with a live map of incidents across Nigeria, searchable and filterable, plus a verified reporting mechanism that keeps data quality high. It needed to work for citizens, journalists, emergency responders, and researchers.",
          },
          {
            type: "paragraph",
            text: "My job was to design the full product from the ground up. Four months. One designer.",
          },
        ],
      },
      {
        title: "The Context",
        content: [
          {
            type: "paragraph",
            text: "The safety information problem in Nigeria is not a lack of data. It is a lack of structure. Every day, incidents are reported in some form on social media, in community groups, and through news alerts. But that information is rarely centralized, often unverified, and difficult to access without effort.",
          },
          {
            type: "list",
            items: [
              "Centralized. People often need to check several different sources just to understand what is happening across states.",
              "Verified. The line between rumor and confirmed incident is often blurred.",
              "Accessible without effort. Looking up incident history for a place like Kaduna over the last year usually means a manual journalism research process, or no access at all.",
            ],
          },
          {
            type: "paragraph",
            text: "SafePulse sits in that gap. It is part civic tech, part safety tool, and part data platform. The challenge was that the users are genuinely different from each other. A citizen wants to know if their route home is safe. A journalist wants to export state-level incident data for a story. An emergency coordinator wants to see what is active right now on a map.",
          },
          {
            type: "paragraph",
            text: "Designing for all three without building something too broad or too shallow became the main tension of the project.",
          },
        ],
      },
      {
        title: "The Problem",
        content: [
          {
            type: "list",
            items: [
              "1. Safety information in Nigeria takes too much effort to find, and even more effort to trust. Twitter threads, WhatsApp forwards, and local news are fragmented and often unverified. A citizen in Abuja may hear about unrest near their office but still have no reliable way to know whether it is confirmed or just rumor.",
              "2. Existing tools often treat reporting as the entry point. Many safety products gate everything behind login, which is backwards for a product that needs public trust and regular usage. Most people are information consumers first, not reporters.",
              "3. Fake and low-quality reports can damage trust in the whole system. If anyone can report anything without accountability, the feed becomes noise. If verification is too heavy, genuine reporters stop. Finding the balance between accessibility and integrity was the hardest product problem in the project.",
              "4. Safety data across Nigerian states had not really been visualised at scale. Comparing Kaduna's incident rate, Lagos's resolution speed, or Kano's concentration of risk was difficult because the data was scattered and rarely presented as an interactive intelligence layer.",
              "5. Responding to an incident matters as much as knowing it happened. A listing alone is not enough. When something serious happens, users need updates, nearby context, media evidence, and a way to share verified information with others who need it.",
            ],
          },
        ],
      },
      {
        title: "The Goals",
        content: [
          {
            type: "paragraph",
            text: "Before moving into Figma, I mapped the core intent of the product. It needed to:",
          },
          {
            type: "list",
            items: [
              "Let anyone access safety information without friction, with no login barrier to see what is happening.",
              "Only introduce authentication when a user takes an action that requires it, specifically reporting an incident.",
              "Gate reporting behind identity verification, so data quality stays high without punishing passive users.",
              "Give power users, including researchers, journalists, and responders, a proper analytical layer instead of only a feed.",
              "Visualise incidents geographically across Nigeria through state-level heatmaps, demographic breakdowns, and time-of-day patterns.",
            ],
          },
          {
            type: "paragraph",
            text: "One line from my user flow diagram stayed visible throughout the project: \"Let users access safety information without friction. Only introduce login and KYC when an action is required.\"",
          },
        ],
      },
      {
        title: "The Approach",
        content: [
          {
            type: "paragraph",
            text: "Progressive disclosure of authentication",
          },
          {
            type: "paragraph",
            text: "This became the foundational product decision. Many comparable platforms put login at the front door, which loses the exact audience they need most, casual users who are still deciding whether the product is useful.",
          },
          {
            type: "paragraph",
            text: "SafePulse flips that model. Home, Incidents, and Historical Data are fully accessible without an account. People can browse the live map, read incident details, and explore historical data across Nigerian states without signing in. Authentication only appears when someone clicks \"Report Incident\", and the product explains why it is needed.",
          },
          {
            type: "paragraph",
            text: "The sign-in gate does not behave like a wall. The modal explains, \"You need to sign in to report an incident. This helps us verify the authenticity of reports.\" It then offers three clear paths, Sign In, Create Account, or Continue Browsing. That last option mattered. It told users that browsing still has value, even if they never report anything.",
          },
          {
            type: "paragraph",
            text: "Two layers of gate, auth, then KYC",
          },
          {
            type: "paragraph",
            text: "Signing in is not enough to report an incident. Once authenticated, anyone who has not completed KYC sees a second gate that explains why identity verification is required. Their KYC status is visible as \"Not Started\" and the product offers two next steps, Start KYC Verification or Go to Profile.",
          },
          {
            type: "list",
            items: [
              "Browsing. Anyone, no friction.",
              "Reporting. Authenticated and KYC-verified users only.",
            ],
          },
          {
            type: "paragraph",
            text: "The KYC flow itself follows three simple steps, Upload Government ID, Face Verification, and Review & Submit. After submission, the confirmation screen tells users their documents are under review and that approval usually takes 24 to 48 hours. The tone stays clear and accountable.",
          },
          {
            type: "paragraph",
            text: "Designing the live map as the anchor",
          },
          {
            type: "paragraph",
            text: "The Home dashboard is built around a live map. Incidents are plotted across Nigeria with severity-coded pins for Critical, High, Medium, and Low. The map is not decorative. It is the core product surface. Four stat cards at the top, Total Incidents, High Severity count, Top Incident Type, and Verification Rate, provide the national picture. The map shows where that picture is unfolding.",
          },
          {
            type: "paragraph",
            text: "Alongside the map, an Activity Feed surfaces the latest incidents with just enough information to trigger a click, incident type, location, time, verification status, and severity. Below that, the Recent Incident Log gives a fuller table view with filtering and download capability.",
          },
          {
            type: "paragraph",
            text: "The design tension I kept coming back to was simple. How much information is useful, and how much is overwhelming, for someone who just wants to know if they should take a different route home? I landed on summary first. The stat cards and activity feed answer the immediate question. The incident log is there for deeper exploration.",
          },
          {
            type: "paragraph",
            text: "Individual incident detail as a reporting unit",
          },
          {
            type: "paragraph",
            text: "An incident on SafePulse is not just a row in a table. It is a full information package. The incident detail view includes an ID number, incident title, timestamp, precise location, verification count, distance from the user, a description narrative, media evidence, a live mini-map, share and export actions, a timeline feed of updates, and a nearby incidents panel.",
          },
          {
            type: "paragraph",
            text: "The timeline inside each incident became especially important. Safety events develop over time. Incident Reported, Verification Complete, and Emergency Response Dispatched are not just updates. They help people move from panic to clarity. The verification count also became one of the fastest trust signals on the page. In a context where safety information is often exaggerated or fabricated, that small piece of information helps readers calibrate their response.",
          },
          {
            type: "paragraph",
            text: "The Historical Data section, three analytical lenses",
          },
          {
            type: "paragraph",
            text: "Historical Data was designed for users who need depth, not just recency. I structured it around three named tabs, each answering a different question.",
          },
          {
            type: "list",
            items: [
              "Incident Overview answers, what is the trend. It includes stat cards, a trend-over-time chart, a time-of-day activity chart, monthly comparison, and a detailed dataset table.",
              "Geographic Insights answers, where is the risk concentrated. It includes a Nigeria heatmap, state bar chart, demographic breakdown, and state-level performance table.",
              "Patterns & Risk answers, what patterns point to future risk. This is the analytical layer for users moving from description into prediction.",
            ],
          },
          {
            type: "paragraph",
            text: "Naming the tabs by the question they answer, instead of by the chart type they contain, made the section easier to understand. \"Geographic Insights\" tells you what you will learn. \"Heatmap & Charts\" only tells you what you will see.",
          },
          {
            type: "paragraph",
            text: "KYC embedded in Profile, not hidden inside reporting",
          },
          {
            type: "paragraph",
            text: "The Profile & Settings page carries KYC status as a first-class element. It is not buried inside a submenu. Users can see their personal information, identity verification status, notification preferences, and security settings in one place. That way, KYC is not only encountered under pressure during the first reporting attempt. It also appears in a calmer, more contextual space.",
          },
        ],
      },
      {
        title: "Key Screens",
        content: [
          {
            type: "list",
            items: [
              "Home Dashboard. Four metric cards, a live Nigeria map with severity legend, an Activity Feed, and a Recent Incident Log table with filters and download.",
              "Incident Detail. Full incident record with ID, title, timestamp, location, verification count, description, media evidence, share and export actions, live mini-map, timeline, and Nearby Incidents panel.",
              "Incidents Page, Map View. Real-time monitoring with a map and list toggle, department filter, and split view with incident list panel.",
              "Incidents Page, List View. A searchable and filterable table with map preview on click.",
              "Historical Data, Incident Overview. Trend chart, time-of-day chart, monthly comparison, and detailed dataset table.",
              "Historical Data, Geographic Insights. Nigeria heatmap, state bar chart, demographic breakdown, and state performance table.",
              "Report Incident, Sign In Gate. A sign-in modal with clear reason copy and three paths, Sign In, Create Account, and Continue Browsing.",
              "Report Incident, KYC Gate. An identity verification gate with visible KYC status and two clear paths.",
              "KYC Flow. Government ID upload, Face Verification, Review & Submit, then a 24 to 48 hour confirmation notice.",
              "Profile & Settings. Personal info, KYC status card, notification preferences, and security settings.",
              "Auth Flow. Sign In, Sign Up, Forgot Password, Password Instructions Sent, Reset Password, and Password Reset Successful.",
            ],
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "SafePulse moved from a brief into a fully designed multi-section product in four months. Every core user journey was designed end to end, from a first-time visitor browsing the live map without an account, to a verified citizen submitting a geo-tagged report, to a researcher running state-level incident analysis.",
          },
          {
            type: "paragraph",
            text: "The progressive authentication model became the most important product decision in the work. By removing the login barrier from browsing, SafePulse creates room for adoption among people who would never get past a gated landing page. Over time, some of that audience can become the verified reporters the ecosystem depends on.",
          },
          {
            type: "paragraph",
            text: "The three-tab Historical Data section gave the analytical use case a proper home, instead of treating it like a bolt-on. The KYC-gated reporting system also protects data integrity without punishing casual users. In a market where safety information can be fabricated or weaponised, that trust layer is one of the product's most important promises.",
          },
        ],
      },
      {
        title: "Reflection",
        content: [
          {
            type: "paragraph",
            text: "If I were pushing the work further, I would start with mobile. SafePulse was designed at MacBook Pro 14\" dimensions, but many of the most safety-critical moments happen on a phone. The product needs a mobile-first incident feed and a lighter map experience that works well even under poor connectivity.",
          },
          {
            type: "paragraph",
            text: "I would also invest more deliberately in empty states. The live map with no verified incidents nearby, or Historical Data charts for places with low reporting density, need just as much care as full-data states. Trust is often built in those quieter moments.",
          },
          {
            type: "paragraph",
            text: "This project also changed how I think about civic infrastructure. Designing for public safety is different from designing for commerce. The emotional stakes are higher, and every decision around information hierarchy, loading behavior, and status labeling carries more weight. That became a useful filter for the whole product, does this help someone act faster, or does it slow them down?",
          },
          {
            type: "paragraph",
            text: "The other thing the project sharpened was the value of designing inside real constraints. Four months. One designer. Multiple user types, plus a genuinely complex information architecture. That kind of scope forces clear prioritisation. It helped me separate what the product needed to do well at launch from what it could grow into later.",
          },
          {
            type: "paragraph",
            text: "SafePulse is the kind of product that makes a strong case for Nigerian-built civic tech. Getting to design it was the right kind of hard.",
          },
        ],
      },
    ],
  },
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function renderContentBlock(block: ContentBlock) {
  if (block.type === "list") {
    return (
      <ul className="space-y-4 max-w-[72ch]">
        {block.items.map((item) => (
          <li key={item} className="text-sm text-[#111]/65 leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "table") {
    return (
      <div className="max-w-[72ch] overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#111]/10">
              {block.headers.map((header) => (
                <th
                  key={header}
                  className="py-3 pr-6 text-[10px] font-medium tracking-widest uppercase text-[#111]/35"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.join("|")} className="border-b border-[#111]/8 align-top">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${row[0]}-${cellIndex}`}
                    className="py-4 pr-6 text-sm text-[#111]/65 leading-relaxed"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <p className="text-sm text-[#111]/65 leading-relaxed max-w-[72ch]">
      {block.text}
    </p>
  );
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-275 mx-auto px-6 pt-20 pb-32">
      <section className="max-w-[72ch]">
        <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-5">
          Case Study
        </p>
        <h1
          className="font-medium leading-[1.03] tracking-[-0.03em] max-w-[12ch]"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}
        >
          {project.title}
        </h1>
        <p className="mt-8 text-base text-[#111]/55 leading-relaxed max-w-[58ch]">
          {project.hero}
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">
              Role
            </p>
            <p className="text-xs text-[#111]/60 leading-relaxed">
              {project.meta.role}
            </p>
          </div>
          {project.meta.client ? (
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">
                Client
              </p>
              <p className="text-xs text-[#111]/60 leading-relaxed">
                {project.meta.client}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">
                Company
              </p>
              <p className="text-xs text-[#111]/60 leading-relaxed">
                {project.meta.company}
              </p>
            </div>
          )}
          <div>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">
              Timeline
            </p>
            <p className="text-xs text-[#111]/60 leading-relaxed">
              {project.meta.timeline}
            </p>
          </div>
          <div>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">
              Platform
            </p>
            <p className="text-xs text-[#111]/60 leading-relaxed">
              {project.meta.platform}
            </p>
          </div>
          <div>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">
              Deliverables
            </p>
            <p className="text-xs text-[#111]/60 leading-relaxed">
              {project.meta.deliverables}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24">
        {project.sections.map((section, index) => (
          <div key={section.title}>
            <section className="max-w-[72ch] py-10">
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">
                {section.title}
              </p>
              <div className="space-y-6">
                {section.content.map((block, blockIndex) => (
                  <div key={`${section.title}-${blockIndex}`}>
                    {renderContentBlock(block)}
                  </div>
                ))}
              </div>
            </section>

            {index < project.sections.length - 1 && (
              <div className="my-16">
                <div className="w-full h-[400px] bg-gray-100 rounded-xl" />
              </div>
            )}
          </div>
        ))}
      </section>

      <ClosingSection content={project.closing} />
    </main>
  );
}
