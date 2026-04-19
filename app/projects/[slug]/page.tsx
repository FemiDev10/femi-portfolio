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
  links?: { label: string; href: string }[];
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
  "paymi-agent": {
    title: "Payzeep Mobile App (Android & iOS)",
    hero:
      "Building the mobile command centre for Nigeria's most important financial infrastructure — an agency banking app designed for the people who are the bank.",
    meta: {
      role: "Product Designer",
      company: "PayZeep (Paymi Solutions Limited)",
      timeline: "2024 — Ongoing",
      platform: "Mobile (iOS & Android)",
      deliverables:
        "End-to-end UX/UI — Onboarding, Core Banking, Bill Payments, Network Intelligence, Device Management",
    },
    links: [
      { label: "App Store ↗", href: "https://apps.apple.com/us/app/payzeep/id6743746129" },
      { label: "Play Store ↗", href: "https://play.google.com/store/apps/details?id=ng.com.paymi.mpos&pcampaignid=web_share" },
    ],
    closing: {
      closer: [
        "The most lasting lesson from Payzeep is that designing for the infrastructure layer of financial inclusion means designing for failure as much as success. Every screen is someone's livelihood. Every failed transaction is real money gone. That's not a product constraint — it's a design brief.",
        "The Network Monitor was the hardest feature to get approved and the most-requested feature by agents once they had it. That gap — between what businesses think agents need and what agents actually need — is exactly the gap good design is supposed to close. I want to keep closing that gap.",
      ],
      reflection: [
        "Speed is a feature, not a luxury — for an agent processing 40+ transactions a day, every extra tap is a design failure",
        "Failure is information, not shame — when a transaction fails, the app should tell the agent why, and if possible, tell them before they try",
        "Commission is motivation, not an afterthought — if it matters to agents, it should be first-class in the product",
        "Operational intelligence that lives in WhatsApp groups belongs in the app",
      ],
      ps: [
        "PS: 'Yippee!' is the right word for a successful airtime purchase. Anyone who disagrees hasn't spent enough time in a market.",
        "Also: the Network Monitor was the hardest sell and the best outcome. Push for the features that feel hardest to explain.",
      ],
      credits: [
        {
          name: "Femi Jimoh",
          role: "Product Designer",
        },
        {
          name: "Treasure Oladunni",
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
            text: "It's 8:47am on a Tuesday in Ojuelegba. A woman named Chidinma unlocks a small shop the size of a parking space. On the counter: a POS terminal, a phone, and a notebook she uses when the network dies.",
          },
          {
            type: "paragraph",
            text: "In the next six hours, she will process forty-three transactions. Airtime for a student who's late to class. A ₦5,000 withdrawal for a man who doesn't own a bank account. A data bundle for a mechanic who needs Google Maps to find a client. Cable TV renewal for her neighbour who always forgets.",
          },
          {
            type: "paragraph",
            text: "She is not a branch. She is not a teller. She is Chidinma, and she is the bank for everyone on her street.",
          },
          {
            type: "paragraph",
            text: "There are over 1.5 million agents like her in Nigeria. And almost every app built for them was designed like a back-office tool — dense, clinical, transactional in the worst sense of the word. Built for what the business needed agents to do, not for what agents actually needed to survive their day. That was the design problem we inherited.",
          },
        ],
      },
      {
        title: "The Context",
        content: [
          {
            type: "paragraph",
            text: "Agency banking in Nigeria exists because formal banking failed to scale fast enough. The CBN's financial inclusion mandate pushed a policy reality: licensed fintechs could appoint human agents to offer basic banking services — deposits, withdrawals, bill payments, transfers — no branch required.",
          },
          {
            type: "paragraph",
            text: "The business model is simple and elegant: agents earn a commission on every successful transaction. The more they process, the more they earn. The faster they process, the more customers they serve. And the more reliably they serve customers, the better their reputation — which in a market environment is everything.",
          },
          {
            type: "paragraph",
            text: "The design implication of this model is enormous and almost always missed: for an agent, every failed transaction is a financial loss. Not just an inconvenience. Real money gone. In an industry where network downtime, card scheme failures, and interbank transfer delays are facts of life — not edge cases — designing for failure wasn't optional. It was the whole job.",
          },
        ],
      },
      {
        title: "The Problem",
        content: [
          {
            type: "paragraph",
            text: "We spent time inside existing agency banking apps — competitor products and the earlier version of Payzeep. The pattern was consistent and frustrating: every app looked like a form. Input. Submit. Wait. Success or failure. No context. No intelligence.",
          },
          {
            type: "paragraph",
            text: "Agents were working around their tools constantly — WhatsApp groups where they'd share which banks were processing today, notebook tallies of card scheme failures, mental heuristics built from months of hard-won experience. That knowledge existed. It just lived in their heads and in group chats, not in the app they opened fifty times a day.",
          },
          {
            type: "list",
            items: [
              "1. Blind processing. Agents initiated withdrawals and transfers with zero visibility into whether the receiving bank or card network was even functioning. A declined transaction meant a frustrated customer, a refund dispute, and lost commission — often for a reason the agent had no way to know about in advance.",
              "2. Onboarding as a wall. The KYC and account setup process was compliance-first — it dumped every documentation requirement on new agents at once. No progression. No guidance. No sense of how close they were to being operational.",
              "3. Commission opacity. Agents earned commissions on transactions but had no clean way to track, understand, or redeem them inside the app. Commission was the whole point of the job — it should have been a first-class feature.",
            ],
          },
        ],
      },
      {
        title: "The Principles",
        content: [
          {
            type: "paragraph",
            text: "Before touching a single screen, we aligned on what this app actually needed to be.",
          },
          {
            type: "list",
            items: [
              "Speed is a feature. An agent processing 40+ transactions a day cannot afford a 6-tap flow to buy airtime. Every screen should reduce to its essential action as fast as possible.",
              "Failure is information, not shame. When a transaction fails, the app should tell the agent exactly why — and if possible, tell them before they try.",
              "Compliance is a journey, not a gate. KYC requirements are real and non-negotiable, but onboarding should feel like forward motion, not a bureaucratic wall.",
              "Commission is motivation, not an afterthought. If we want agents to be invested in the platform, they need to see what they're earning and control when they get it.",
            ],
          },
        ],
      },
      {
        title: "The Approach",
        content: [
          {
            type: "paragraph",
            text: "Onboarding: the gauntlet that shouldn't feel like one",
          },
          {
            type: "paragraph",
            text: "Agency banking KYC in Nigeria is no joke. A new Payzeep agent needs to provide: phone number, BVN, NIN, proof of ID, proof of address, and for business accounts, SCUML clearance above certain transaction thresholds. Dumping that on a new agent in one screen — which most agency banking apps do — creates immediate drop-off. People don't quit because the requirements are too hard. They quit because the requirements feel endless.",
          },
          {
            type: "paragraph",
            text: "Our onboarding is structured in six numbered steps. Not because we needed six steps, but because an agent needs to know they're at Step 5 of 6, not standing in front of an unmarked door. The SCUML decision tree is conditional — after account type selection, only business accounts are routed through it. Individual agents never see it. The 'Skip for later' option on KYC documents was deliberate: an agent who's seen the dashboard and knows what they're working toward is more likely to complete KYC than one who's been blocked at Step 2 on day one.",
          },
          {
            type: "paragraph",
            text: "Authentication: layers that make sense",
          },
          {
            type: "paragraph",
            text: "The app has three distinct security layers. Login is personalised — 'Welcome Back! Hello Joshua' — because the agent's name on the login screen signals this app belongs to them. Every money movement is PIN-gated, with the transaction amount shown before the PIN is requested so there's no ambiguity about what's being authorised. For POS card transactions, a processing countdown runs during the physical swipe — not a spinner. A clock. Because silence during a POS transaction feels like failure; a countdown feels like progress.",
          },
          {
            type: "paragraph",
            text: "The home: calm command",
          },
          {
            type: "paragraph",
            text: "A home screen for an agent is different from a home screen for a consumer. A consumer wants to see their balance. An agent wants to see everything they need to act. Account details — bank name, account number, account name — are surfaced immediately because the agent hands these out dozens of times a day. A 'Copy Account Number' button is present without needing to navigate anywhere. Account tier limits are visible and contextual, with a clear path to the next tier for agents who hit their ceiling.",
          },
          {
            type: "paragraph",
            text: "Bill payments: volume UX",
          },
          {
            type: "paragraph",
            text: "Bill payment is where agents make a significant portion of their daily commission. Airtime and data alone can account for 20–30 transactions in a busy day. The flow has to be fast and right the first time. A summary screen before every bill payment is non-negotiable — not for compliance, for the agent. Someone handling 50 transactions in a noisy market, where customers are giving them numbers verbally, needs one final moment to confirm what they're about to commit. Then the receipt: 'yippee! Airtime Top-up was successful.' That word was deliberate. In an app agents look at dozens of times a day, a moment of personality is worth more than a moment of professionalism.",
          },
          {
            type: "paragraph",
            text: "Transfers: where the stakes are highest",
          },
          {
            type: "paragraph",
            text: "The transfer form is where we put the most thought. Account number to name resolution populates the account holder's name as soon as a number is entered — the agent confirms they're sending to the right person before going further. This single feature eliminates an entire category of transfer errors. The post-transfer receipt is a document, not a screen: a full timeline showing when the transfer was submitted, when it was received, the session ID for dispute resolution, and a Query Transaction option for contested transfers.",
          },
        ],
      },
      {
        title: "The Network Monitor",
        content: [
          {
            type: "paragraph",
            text: "This is where Payzeep does something we hadn't seen in any Nigerian agency banking product. Nigerian interbank transfers and POS card processing are not uniformly reliable. Success rates vary by bank, by card scheme, and by time of day. An agent who tries to process a withdrawal from a First Bank card on Mastercard might see a 60% success rate. The same card scheme through Stanbic IBTC might see 23%. But the same customer's Visa card at Stanbic would be 99.45%.",
          },
          {
            type: "paragraph",
            text: "Agents already know this intuitively. They talk about it in WhatsApp groups. They learn from experience which banks to be cautious about. But that intelligence was social and tribal — it lived in group chats, not in the app they opened fifty times a day. We put it in the app.",
          },
          {
            type: "paragraph",
            text: "The Bank Network Monitor shows real-time success rates for interbank transfers — banks experiencing delays flagged clearly, stable banks listed with their current percentages. The Withdrawal Network Monitor goes further: a table breaking success rates by bank and card scheme.",
          },
          {
            type: "table",
            headers: ["Bank", "Mastercard", "Visa", "Verve"],
            rows: [
              ["Wema Bank", "81.45%", "81.45%", "81.45%"],
              ["Stanbic IBTC", "23.01%", "99.45%", "97.09%"],
              ["Palmpay Finance", "70.00%", "12.34%", "12.34%"],
              ["First Bank", "60.12%", "12.34%", "12.34%"],
            ],
          },
          {
            type: "paragraph",
            text: "This table tells an agent something invaluable: a Stanbic card on Mastercard is unreliable today, but the same customer's Visa card will almost certainly work. If the customer has both, try Visa. If they only have Mastercard, manage the expectation before you swipe. The design is deliberately simple — no charts, no graphs. Agents are checking this quickly, between customers, often in bad lighting. A clean table with percentage figures and a refresh button is the right tool.",
          },
          {
            type: "paragraph",
            text: "The Network Monitor was the hardest feature to get approved internally and the most-requested feature by agents once they had it. That gap — between what businesses think agents need and what agents actually need — is exactly the gap good design is supposed to close.",
          },
        ],
      },
      {
        title: "The Rest of the Flows",
        content: [
          {
            type: "paragraph",
            text: "Withdrawals",
          },
          {
            type: "paragraph",
            text: "POS withdrawals involve a card, a terminal, and a person — not just an app. The Withdrawal Network Monitor is accessible directly from the withdrawal screen — not buried in settings, but contextually available exactly when you need it. The processing countdown during the physical swipe is explicit: 'Processing transaction in 56 secs.' Not a spinner. A clock.",
          },
          {
            type: "paragraph",
            text: "Commission: making the reward visible",
          },
          {
            type: "paragraph",
            text: "Commissions are why agents are agents. In most agency banking apps, commission is buried in a reporting tab no one opens. In Paymi, it's a named feature: Redeem Commission. The balance is prominent. Redemption errors are specific — 'You have insufficient balance. Total commission balance is ₦3,000.' Making commission redeemable on demand, rather than batched weekly, was a product-level decision — but the design had to make it feel easy and safe. An agent shouldn't have to think hard about accessing their own earnings.",
          },
          {
            type: "paragraph",
            text: "Device management: the physical layer",
          },
          {
            type: "paragraph",
            text: "Most banking apps pretend the physical world doesn't exist. Payzeep doesn't. The Devices section shows every PayZeep terminal linked to an agent's account — device name, status, terminal ID, connection action. Request New Device lets agents choose their hardware self-serve: Card Reader or T3 Android Smart Mobile POS. For an agent in Aba who can't get to a PayZeep office, this isn't a nice-to-have. It's a necessity.",
          },
        ],
      },
      {
        title: "Key Screens",
        content: [
          {
            type: "list",
            items: [
              "Six-step progressive KYC with conditional SCUML routing for business accounts and a skip-for-later option on document uploads.",
              "Three-layer authentication — login, transaction PIN, card PIN — each in its own clear context with no PIN collision.",
              "Home dashboard with account details, Copy Account Number, tier limits, and Tier 3 upgrade path.",
              "Bill payments across Airtime, Data, and Cable TV with summary confirmation and humanised success receipts ('yippee!').",
              "Transfer flow with live account name resolution, full transaction timeline, session ID callout, and Query Transaction for disputes.",
              "Withdrawal flow with Withdrawal Network Monitor accessible from within the flow, custom keypad, and processing countdown.",
              "Bank Network Monitor — real-time deposit success rates by bank, split into stable and at-risk categories.",
              "Withdrawal Network Monitor — POS success rates by bank × card scheme (Mastercard, Visa, Verve) in a clean refresh-able table.",
              "Redeem Commission — on-demand, PIN-secured, with balance visibility and specific insufficient-balance error states.",
              "Device Management — active/inactive terminal view, multi-device support, and new device request by hardware type.",
              "Add Money — bank transfer and debit card funding, both designed to complete in under 60 seconds.",
            ],
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "Payzeep shipped as an end-to-end agency banking platform that treats agents as operational professionals, not just form-fillers. The Network Monitor transformed intelligence that previously lived in WhatsApp groups into a real-time, in-app tool — giving agents the ability to make decisions before a transaction fails, not after.",
          },
          {
            type: "paragraph",
            text: "The six-step KYC system moved onboarding from a compliance wall into a navigable journey. Commission became a first-class feature rather than an afterthought. And Device Management took something that previously required a customer service call and made it self-serve.",
          },
          {
            type: "paragraph",
            text: "The product is live and still evolving at PayZeep as the agent network grows.",
          },
        ],
      },
      {
        title: "What's Next",
        content: [
          {
            type: "list",
            items: [
              "Commission analytics. Agents currently see their balance and can redeem. They can't see which transaction types earn most, which hours are most profitable, or how their commission trends week-over-week. A lightweight earnings dashboard would turn Payzeep from a tool into a business partner.",
              "Network Monitor push notifications. The monitor is reactive — you check it when you remember. A proactive alert when a major bank drops below 30% ('UBA transfers are currently unreliable') would make it genuinely predictive.",
              "Customer profiles. The 'Save Customer's Details' button hints at a CRM layer that doesn't fully exist. An agent who serves the same 200 people regularly should pull up a customer's usual data bundle in two taps.",
              "Offline mode. An agent who can draft a transaction offline and submit when connectivity returns is an agent who never loses a customer. Technically complex but operationally transformative.",
            ],
          },
        ],
      },
      {
        title: "Reflection",
        content: [
          {
            type: "paragraph",
            text: "Agency banking in Nigeria is not a niche. It is the financial system that serves the majority. Designing tools that actually serve the people who run it — with intelligence, with clarity, with a little warmth — is the work that matters.",
          },
          {
            type: "paragraph",
            text: "Chidinma doesn't open Payzeep thinking about compliance. She opens it thinking: is this going to work today? Is the network up? Will the Zenith card process? Does she have enough float? Every screen we designed was an answer to one of those questions.",
          },
          {
            type: "paragraph",
            text: "If I were pushing the work further, I'd invest more in the proactive layer — notifications, predictive routing, usage analytics — so Payzeep moves from a tool agents use to a tool that works with them. The foundation is there. The next version gets smarter.",
          },
        ],
      },
    ],
  },
  "payzeep-api-docs": {
    title: "PayZeep API Documentation",
    hero:
      "Good documentation is a product. We designed it like one — building the developer experience for a CBN-licensed payment gateway from scattered resources into a structured, navigable portal.",
    meta: {
      role: "Product Designer · Content Design · IA",
      company: "PayZeep (Paymi Solutions Limited)",
      timeline: "2024 — Ongoing",
      platform: "Web (Redocly)",
      deliverables:
        "Information Architecture, Developer Onboarding Flow, API Reference Structure, Content Design, Go-Live Checklist",
    },
    links: [
      { label: "Live Docs ↗", href: "https://payzeep-apidoc.redocly.app" },
      { label: "Checkout Demo ↗", href: "https://zeepway.com/checkout-demo" },
    ],
    closing: {
      closer: [
        "Developer documentation sits in an interesting gap in design practice. It is not consumer UX. It is not visual design. It is not content strategy alone. It is all three — applied to an audience that is highly technical, highly critical, and deeply impatient.",
        "Designing the PayZeep API docs taught me that documentation quality is product quality. A merchant who cannot integrate because the documentation confused their developer is a lost merchant — one that a clearer onboarding sequence or a go-live checklist might have saved. That is not an engineering problem. That is a design problem.",
      ],
      reflection: [
        "Start with the journey, not the reference — a developer's first question is never 'what does this endpoint return?'",
        "Separate guide from reference — conceptual content and technical reference serve different reading modes",
        "Say the obvious things — documentation that assumes too much leaves the majority behind",
        "Mock servers are UX — removing the credential barrier changes how quickly developers form confidence",
        "Error states are documentation too — document decline codes with the same care as the happy path",
      ],
      ps: [
        "PS: If a developer can't find how to authenticate in under 60 seconds, the documentation has already failed — regardless of how thorough the endpoint reference is.",
        "Also: 'documentation is never done' is not an excuse for shipping it broken. It is a reason to build on a platform that keeps it accurate automatically.",
      ],
      credits: [
        {
          name: "Femi Jimoh",
          role: "Product Designer",
        },
        {
          name: "Treasure Oladunni",
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
            text: "Most fintech companies treat developer documentation as an engineering afterthought. The API works. The endpoints are live. The documentation is a README on GitHub that hasn't been updated since the first sprint.",
          },
          {
            type: "paragraph",
            text: "PayZeep was different in intention — but the problem was the same in practice. As ZeepWay, PayZeep's payment gateway product, grew and more merchants needed to integrate, the developer-facing documentation was scattered, inconsistent, and not designed for the people who actually had to use it.",
          },
          {
            type: "paragraph",
            text: "We were asked to design and build a centralised documentation hub. Not just write docs — design the whole experience of what it feels like to be a developer trying to integrate PayZeep.",
          },
        ],
      },
      {
        title: "The Context",
        content: [
          {
            type: "paragraph",
            text: "Developers integrate payment APIs at a specific moment of pressure. They have been tasked with adding payments to a product, they have a deadline, and they need to get from zero to live as fast as possible. Any friction in that journey — unclear authentication steps, missing error code references, ambiguous endpoint descriptions — translates directly into failed integrations, support tickets, and lost merchant activations.",
          },
          {
            type: "paragraph",
            text: "PayZeep is a CBN-licensed PSSP and PTSP. The payment gateway handles card payments, bank transfers, and mobile money across Nigeria. The developers integrating it are typically mid-level engineers at merchant businesses — competent, deadline-driven, and not especially patient with documentation that buries the answers.",
          },
        ],
      },
      {
        title: "The Problem",
        content: [
          {
            type: "paragraph",
            text: "The instinct in most engineering orgs is to treat documentation as technical writing. Put the endpoints somewhere. Explain the parameters. Ship it. But documentation is a UX problem before it is a content problem.",
          },
          {
            type: "paragraph",
            text: "A developer landing on a documentation site for the first time has a specific mental model: I need to know three things before I do anything else. What does this API actually do? How do I authenticate? What does a successful response look like? If those three answers are not findable in under 60 seconds, the documentation has already failed.",
          },
          {
            type: "list",
            items: [
              "No structured starting point. Developers had no clear path from 'I need to integrate PayZeep' to 'I have a working integration.' Resources were scattered across Notion pages, Postman collections, and verbal onboarding calls.",
              "Authentication was underdocumented. The difference between test and production credentials, how to generate API keys, and what each key type could authorise were all areas where developers regularly got stuck and opened support tickets.",
              "No onboarding sequence. Most API docs skipped account creation entirely, assuming the reader already had credentials. In practice, developers hit the authentication step, realised they needed to create an account first, and left the docs to go sign up — losing context and momentum.",
              "No go-live clarity. Developers finishing a test integration had no structured way to know whether they had done everything they needed to do before going live.",
            ],
          },
        ],
      },
      {
        title: "Platform Choice — Why Redocly",
        content: [
          {
            type: "paragraph",
            text: "When we evaluated platforms for building the documentation, the options fell into two camps. Custom-built: full design control, but enormous ongoing maintenance cost where every update requires a developer. Wiki-style tools like Notion or Confluence: easy to write, hard to structure as developer reference, with no native OpenAPI rendering.",
          },
          {
            type: "paragraph",
            text: "Redocly enforces a separation between two types of content most API docs conflate — the guide (how to think about the product) and the reference (what every endpoint does). That structural separation was a design decision baked into the platform. We could focus on content design and information architecture instead of rebuilding document rendering from scratch.",
          },
          {
            type: "paragraph",
            text: "The Redocly choice also meant the documentation could live alongside the codebase. Updates to the API spec automatically reflected in the docs, keeping reference content accurate without manual maintenance. For a growing product, that was the most important long-term decision we made.",
          },
        ],
      },
      {
        title: "Information Architecture",
        content: [
          {
            type: "paragraph",
            text: "The navigation structure went through several iterations. The final architecture separates the developer journey into two distinct zones — a reading path and a reference layer.",
          },
          {
            type: "paragraph",
            text: "Zone 1 — Journey: Get Started, Guide, Transfer, API Keys, Incoming Payments. This is the linear path a developer follows on their first integration. Each section builds on the previous. A developer who reads these in order is ready to integrate before ever opening the API Reference.",
          },
          {
            type: "paragraph",
            text: "Zone 2 — Tools: Integration Tools and API Reference. These are reference resources developers return to repeatedly. Placed last not because they are less important, but because they are not the starting point.",
          },
          {
            type: "list",
            items: [
              "Get Started — the onboarding journey: Create account → KYC verification → Go Live",
              "Guide — conceptual explanations of how PayZeep's payment system works",
              "Transfer — transfer-specific flows and edge cases",
              "API Keys — authentication, test vs. production, key rotation",
              "Incoming Payments — Card, Bank Transfer, Mobile Money documentation",
              "Integration Tools — SDKs, webhooks, go-live checklist",
              "API Reference — full OpenAPI endpoint documentation rendered by Redocly",
            ],
          },
        ],
      },
      {
        title: "Developer Onboarding",
        content: [
          {
            type: "paragraph",
            text: "One of the most important design decisions was not about endpoints at all — it was about what a developer needed to understand before they could write a single line of code. Most API documentation skips account creation entirely. Then developers hit the authentication step, realise they need to create an account first, and leave the docs to go sign up — losing context and momentum.",
          },
          {
            type: "paragraph",
            text: "We surfaced the account creation requirement at the very beginning of the documentation, before a single endpoint is shown. Three steps, in order. No ambiguity about what comes first.",
          },
          {
            type: "list",
            items: [
              "01 — Create an Account: Sign up at zeepway.com with business name, personal details, email, phone, and password. Verify email via OTP.",
              "02 — Complete KYC Verification: Submit business registration certificate, tax ID, and owner identification to unlock live transaction capability.",
              "03 — Go Live: After KYC approval, transfer test settings to the production environment and begin accepting real payments.",
            ],
          },
          {
            type: "paragraph",
            text: "This is content design solving a problem that no amount of technical accuracy can fix. The endpoint reference can be perfect and it still won't help a developer who doesn't have credentials yet.",
          },
        ],
      },
      {
        title: "The API Reference",
        content: [
          {
            type: "paragraph",
            text: "The API reference is where most developer documentation dies. A wall of endpoints, parameters, and response schemas with no context, no examples, no sense of what you would actually use any of it for.",
          },
          {
            type: "paragraph",
            text: "We structured the PayZeep API Reference with Redocly's native OpenAPI rendering. Four principles guided the work:",
          },
          {
            type: "list",
            items: [
              "Endpoint grouping by category — operations and transactions grouped semantically, not alphabetically, so developers navigate by intent, not by name.",
              "Mock server included — developers can test requests against a live mock without needing production credentials. Removing that credential barrier changes how quickly a developer forms confidence in the product.",
              "Production URL clearly separated — no ambiguity between mock and live environments, one of the most common sources of developer confusion during integration.",
              "Request and response schemas always in sync — rendered directly from the OpenAPI spec, so when the API changes, the documentation reflects it automatically.",
            ],
          },
          {
            type: "paragraph",
            text: "Every endpoint exists in context. A developer looking at a payments endpoint should understand why you would call it and what comes before and after it in a typical integration flow — not just what parameters it accepts.",
          },
        ],
      },
      {
        title: "Incoming Payments",
        content: [
          {
            type: "paragraph",
            text: "The PayZeep API supports three payment collection methods. Each has different developer requirements, different customer experiences, and different failure modes. Designing documentation for three distinct payment rails under a single section required careful information architecture.",
          },
          {
            type: "list",
            items: [
              "Card Payments — covers authentication flow, 3DS handling, card tokenisation for recurring charges, and decline code interpretation. The most familiar method for web integrations.",
              "Bank Transfer — Nigeria's fastest-growing online payment method. The API generates one-time virtual accounts per transaction, covering lifecycle, expiry handling, and webhook confirmation.",
              "Mobile Money — mobile wallet integrations including initiating charges, handling pending states, and managing confirmation callbacks.",
            ],
          },
          {
            type: "paragraph",
            text: "We used a consistent structure for each method — how it works, how to implement it, how to handle errors — so developers familiar with one payment method could onboard to another without re-learning the documentation structure.",
          },
        ],
      },
      {
        title: "Authentication & API Keys",
        content: [
          {
            type: "paragraph",
            text: "Authentication is where integrations most commonly break — not because the API is wrong, but because the documentation does not clearly explain the difference between test and production credentials, when to use which, and how to manage key rotation.",
          },
          {
            type: "list",
            items: [
              "Generating API keys from the merchant dashboard",
              "Test vs. Production keys — what each environment allows and how to switch between them",
              "Key security — what to do with keys in a codebase, and what not to do",
              "Key rotation — how to update keys without causing downtime",
              "Scoped permissions — which operations each key type can authorise",
            ],
          },
          {
            type: "paragraph",
            text: "The documentation is written assuming the reader is a competent developer but not necessarily familiar with PayZeep's specific security model. Every assumption is stated explicitly. This is not condescension — it is the only approach that works for an audience you cannot interview in advance.",
          },
        ],
      },
      {
        title: "The Go-Live Checklist",
        content: [
          {
            type: "paragraph",
            text: "A go-live checklist was one of the most practically useful pieces of content we designed. It answers the question every developer asks before flipping a payment integration to production: have I actually done everything I need to do?",
          },
          {
            type: "paragraph",
            text: "This content does not come from the API spec. It comes from understanding the developer journey end-to-end and identifying the moments where people make mistakes or lose confidence. That is a design job.",
          },
          {
            type: "list",
            items: [
              "Account fully KYC-verified and approved",
              "API keys generated for the production environment",
              "Webhook endpoints configured and tested",
              "At least one successful test transaction confirmed",
              "Error handling implemented for key decline codes",
              "Customer-facing payment UI reviewed",
              "Support contact added for payment disputes",
            ],
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "The PayZeep API documentation portal went live at payzeep-apidoc.redocly.app — a centralised hub for every developer working with PayZeep's payment infrastructure, replacing scattered resources across Notion pages and Postman collections with a single, structured, navigable portal.",
          },
          {
            type: "list",
            items: [
              "Structured documentation covering the full developer journey from account creation to live transactions",
              "Clear three-step onboarding sequence surfaced before any endpoint reference",
              "Incoming payments coverage for all three methods: Card, Bank Transfer, Mobile Money",
              "API Reference powered by OpenAPI, with mock server for zero-credential testing",
              "Go-live checklist giving developers a clear pre-launch framework",
              "Authentication guide covering test and production key separation, security best practices, and key rotation",
              "Built on Redocly for long-term maintainability — docs update with the API, not behind it",
            ],
          },
        ],
      },
    ],
  },
  "drivevault-driver": {
    title: "DriveVault — Driver",
    hero:
      "Making eight words true — Drive on your terms. Get paid fairly. — through a ride-hailing app designed around the Lagos driver's actual day.",
    meta: {
      role: "Product Designer (Solo)",
      company: "DriveVault",
      timeline: "2025",
      platform: "Mobile (iOS — iPhone 14 & 15 Pro)",
      deliverables:
        "End-to-end UX/UI — Onboarding, Preferences, Home, Opportunity Planner, Ride Flows, Document Management, Payouts",
    },
    closing: {
      closer: [
        "The most lasting insight from this project is that gig economy apps are designed for the platform, not the worker. Driver information needs are treated as secondary. Safety is handled by a policy page. Earnings are a number buried in settings. DriveVault was designed with the premise that the driver is the product — and every decision followed from that.",
        "The Opportunity Planner is the feature I am most proud of. Not because it is technically complex, but because it came from actually listening. Drivers already knew which events drove demand. They already knew airport timing. That intelligence lived in WhatsApp groups and years of experience. Putting it in the app, specific and actionable, was the work.",
      ],
      reflection: [
        "Operational intelligence that exists in WhatsApp groups belongs in the product",
        "Transparency about commission is not generosity — it is table stakes for driver trust",
        "Showing the 'not eligible' state clearly is more motivating than hiding it",
        "Auto-rest is not a safety checkbox — it is what a platform looks like when it actually cares",
      ],
      ps: [
        "PS: If a driver has to join a WhatsApp group to find out which areas have demand tonight, the product has already failed them.",
        "Also: 'Drive on your terms' is a promise. A minimum price filter is the mechanism that makes it real.",
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
            text: "Drive on your terms. Get paid fairly. Eight words. A bold claim.",
          },
          {
            type: "paragraph",
            text: "In a market where Uber and Bolt drivers feel squeezed — where commission structures are opaque, surge logic is a mystery, and cancellation penalties feel arbitrary — those eight words are either the most compelling promise in the product, or the fastest way to get laughed at.",
          },
          {
            type: "paragraph",
            text: "Designing DriveVault's driver experience meant making those words true. Not in copy. In screens. Every driver who downloads the app has already been burned by something: a cancellation fee they did not understand, a surge that did not materialise, a payout that arrived two weeks late with no breakdown. They come with experience, frustration, and a very low bar for marketing language they have heard before.",
          },
          {
            type: "paragraph",
            text: "The only way to earn them was to show — not tell — that this platform was built differently.",
          },
        ],
      },
      {
        title: "The Context",
        content: [
          {
            type: "paragraph",
            text: "A Lagos driver's day starts with a decision: is it worth going online today?",
          },
          {
            type: "paragraph",
            text: "That calculation is more complex than most people realise. Traffic patterns. Fuel cost. Which areas have demand. Whether it is a weekday, a weekend, or an event day at the National Stadium. Which card networks are processing. Whether the airport has international arrivals coming in.",
          },
          {
            type: "paragraph",
            text: "Before DriveVault, drivers made this decision using WhatsApp groups, experience, and guesswork. Other apps gave them a map and a toggle. That was it. DriveVault was designed to give drivers the information they need to make that decision well — and then get out of the way while they work.",
          },
        ],
      },
      {
        title: "The Problem",
        content: [
          {
            type: "paragraph",
            text: "There is a design failure that runs through most gig economy apps: they treat workers as a resource, not a user. The driver is a revenue source to be optimised. Their information needs are secondary. Their questions get directed to an FAQ. Their earnings are a number somewhere in settings.",
          },
          {
            type: "paragraph",
            text: "Studying the category made three specific failures visible:",
          },
          {
            type: "list",
            items: [
              "1. No pricing control. Drivers received a suggested fare, took it or left it, and had no input into the rates they were willing to work for. A driver who needed ₦3,000 minimum to make a trip worthwhile had no way to express that — the app would keep sending ₦1,500 requests until the driver learned to ignore them.",
              "2. No demand intelligence. Every competitor showed a map. If demand was clustered somewhere, maybe the map lit up. That was the extent of it. A driver who knew the National Stadium had a concert tonight had no in-app way to validate that, plan for it, or know where to position.",
              "3. Earnings opacity. Commission deductions happened, but the breakdown was not shown per trip. A driver who saw ₦5,100 credited to their account after a ₦6,000 cash trip did not know why the difference was ₦900 — and had no receipt to reference in a dispute.",
            ],
          },
        ],
      },
      {
        title: "The Goals",
        content: [
          {
            type: "paragraph",
            text: "Four outcomes shaped the design direction:",
          },
          {
            type: "list",
            items: [
              "Give drivers real pricing control — a minimum price filter that the platform enforces, not just a preference the driver has to manage manually",
              "Surface demand intelligence that exists in WhatsApp groups and driver experience into an in-app Opportunity Planner",
              "Make every earnings breakdown transparent at the per-trip level, so commission deductions are never a surprise",
              "Build onboarding that communicates the full journey upfront — so drivers commit knowing what they are committing to",
            ],
          },
        ],
      },
      {
        title: "The Approach",
        content: [
          {
            type: "paragraph",
            text: "Onboarding: a promise, then a process",
          },
          {
            type: "paragraph",
            text: "The splash screen does not waste time. No carousel of feature illustrations. Just the value proposition — drive on your terms, get paid fairly — followed immediately by Get Started and Login.",
          },
          {
            type: "paragraph",
            text: "Then, before any form, a How It Works screen. Four steps, plain English: verify identity, register vehicle, get approved, set preferences and go online. This screen exists because of a specific failure I observed across every competitor: drivers who start an onboarding flow and abandon it midway because they do not know how long it will take or what they will need. Showing the full journey upfront lets a driver make an informed decision to commit before they have typed a single character.",
          },
          {
            type: "paragraph",
            text: "The five-step onboarding covers Driver Details, Identity Verification with a liveness check (Face, Light, Blink, Smile), Vehicle Details with live ride category eligibility feedback, Vehicle Documents, and KYC. When a document photo is rejected, the feedback is not a generic error. It lists the specific issue — face not visible, sunglasses detected, blurry image — so the driver knows exactly what to fix without guessing or contacting support.",
          },
          {
            type: "paragraph",
            text: "On approval, the screen does not just say congratulations and push the driver online. It shows their profile summary and offers a fork: set preferences now, or skip and go online with defaults. This respects autonomy. A driver who wants to configure everything before their first trip can. A driver who just wants to start earning can skip and return later. Neither choice is wrong.",
          },
          {
            type: "paragraph",
            text: "Preferences setup: the feature that makes the tagline true",
          },
          {
            type: "paragraph",
            text: "Most ride-hailing apps give drivers one control: online or offline. DriveVault gives them a four-step preference configuration system that runs once after approval and shapes every trip they will ever take.",
          },
          {
            type: "paragraph",
            text: "Step one is ride request type: instant booking only, flexible price only, or both. The recommended option is clearly labelled with the reasoning — instant booking plus flexible negotiation gives the most opportunities. The default parameters are shown: maximum discount 10%, peak-demand cap 40%, negotiation on. This is transparency most platforms never offer. The driver knows what rules the platform is applying to their trips before they go online.",
          },
          {
            type: "paragraph",
            text: "Step two is minimum trip price. Set the lowest price you are willing to accept. Requests below this are automatically declined. The default is ₦2,500, with quick suggestions at ₦1,500, ₦2,000, ₦3,000, ₦5,000, and ₦8,000. Three honest explanations sit below the input: riders who offer below this amount will not reach you, you can always accept a lower offer during a live negotiation, and you can change this at any time in settings. A driver who sets ₦5,000 minimum knows they will not see short, cheap trips. The platform does not judge. It executes.",
          },
          {
            type: "paragraph",
            text: "Step three is driving safety. Auto-rest after long driving, recommended on, with an explicit reason: this helps prevent fatigue and keeps you safe on the road. Most apps never write that sentence. Making the reason explicit is what separates a genuine feature from a PR feature.",
          },
          {
            type: "paragraph",
            text: "The home screen: command centre",
          },
          {
            type: "paragraph",
            text: "The driver home has more information density than the rider home, deliberately. A driver who has decided to work needs operational intelligence, not a minimal interface. Earnings visible at all times. A slider for going online and offline, not a tap, which prevents accidental mode changes. A wait time indicator that shows the average wait for trips over the last hour — not a vague 'riders nearby' signal but a real estimate. Today's total earnings and current rating visible without navigating anywhere.",
          },
          {
            type: "paragraph",
            text: "Ride requests and earnings breakdown",
          },
          {
            type: "paragraph",
            text: "When a request comes in, the driver sees distance to pickup, trip length, the offered price, the negotiable price range, and the rider's rating. The price range is the key design element: a driver in negotiation mode can counter anywhere within it, and the system tells them when the maximum negotiation limit has been reached so they know to stop.",
          },
          {
            type: "paragraph",
            text: "After a cash trip, the earnings screen shows the full financial breakdown — rider paid, base fare, surge, service fee, commission deducted, and the driver's actual earnings. No other Nigerian ride-hailing platform shows drivers this breakdown per trip. The driver knows exactly what they made, how it was calculated, and where the commission went. Download receipt and contact support sit below for any disputes.",
          },
          {
            type: "paragraph",
            text: "Document management and payouts",
          },
          {
            type: "paragraph",
            text: "Documents do not just matter at onboarding. They expire. They get rejected. They need renewal. Each document has a clear status — approved, pending review, expired, or rejected — visible at the dashboard level, not buried in settings. A pending document shows a verification timeline: document received, verification check in progress, decision pending. A driver waiting for a document review knows exactly where in the process it is. No anxiety, no unnecessary support tickets.",
          },
          {
            type: "paragraph",
            text: "The payouts section covers standard weekly automatic transfers, early payout for on-demand withdrawal before the weekly cycle, transaction history, tax identification, and a connection to verified tax partners for filing support. The tax partner integration acknowledges that gig economy drivers have real tax obligations — and rather than ignoring that reality, the platform connects drivers to help.",
          },
        ],
      },
      {
        title: "The Opportunity Planner",
        content: [
          {
            type: "paragraph",
            text: "This is the design decision I am most proud of on the driver side, and the one that most clearly separates DriveVault from every competitor in the Nigerian market.",
          },
          {
            type: "paragraph",
            text: "Most ride-hailing apps show drivers a map. If there are clusters of demand somewhere, maybe the map lights up. The driver has to figure out the rest. DriveVault's Opportunity Planner shows drivers why demand will be high, where it will be, when to leave, and how much they could earn.",
          },
          {
            type: "paragraph",
            text: "A demand forecast chart shows HIGH, MED, and LOW periods across the day. A driver looking at their schedule can see at a glance that the next HIGH window is at 6PM and plan accordingly.",
          },
          {
            type: "paragraph",
            text: "Three types of opportunity cards surface in the planner:",
          },
          {
            type: "list",
            items: [
              "Events. Concert at National Stadium — Event starting soon, +₦200 per trip, 2:30PM–4:00PM. Tapping opens the full detail: 20,000+ attendees expected, 1.8x surge, estimated 4–6 trips per hour, potential ₦12,000–₦18,000, and specific tips — position near the main gates 30 minutes before the event ends, expect high demand for trips to Victoria Island and Lekki, stay online until 11:30PM for maximum earnings.",
              "Airport Arrivals. Multiple international flights landing between 2:30PM and 4:00PM — high passenger demand expected at MMA. Tips: arrive 15 minutes before peak time, position near Terminal 2 for international arrivals, check flight schedules for optimal timing.",
              "Turbo Bonus Zones. Limited-time areas with a per-trip bonus, visible until they expire, with a clear deadline so drivers know exactly when the window closes.",
            ],
          },
          {
            type: "paragraph",
            text: "What makes this feature genuinely different is not just the information — it is the specificity of the tips. Position near Terminal 2 is not generic advice. It is the kind of knowledge a Lagos driver with three years of airport runs has figured out through trial and error. DriveVault puts it in the app for every driver, on day one.",
          },
          {
            type: "paragraph",
            text: "A Gold tier progress bar sits alongside the planner — 253 of 300 points — connecting daily positioning decisions to a longer-term rewards journey.",
          },
        ],
      },
      {
        title: "Key Screens",
        content: [
          {
            type: "list",
            items: [
              "Splash and How It Works. Value proposition upfront, four-step journey preview before any form — so drivers commit knowing the full scope.",
              "Five-step onboarding. Driver details, liveness-verified identity check, vehicle details with live category eligibility, vehicle documents, and KYC. Rejection feedback is specific, not generic.",
              "Approval screen with preference setup fork. Profile summary, then a choice: configure now or go online with defaults.",
              "Four-step preferences setup. Ride request type with default parameters shown, minimum price with quick suggestions and honest explanations, auto-rest with explicit safety reasoning, and a review confirmation before going online.",
              "Driver home. Earnings counter, online/offline slider, wait time estimate with data source, trip counter, rating, and referral promo.",
              "Opportunity Planner. Demand forecast chart, three opportunity card types (events, airport arrivals, turbo zones), full opportunity detail with surge, trip estimates, earnings range, and actionable positioning tips.",
              "Ride request flow. Price, range, negotiation, accept or counter, maximum negotiation toast, cancellation and reporting states.",
              "Cash trip earnings breakdown. Per-trip itemised view: rider paid, base fare, surge, service fee, commission, driver earnings. Download receipt option.",
              "Ride categories. Economy, Comfort, XL, Executive — with eligibility status shown and requirements listed for categories the driver does not yet qualify for.",
              "Document management. Per-document status: approved with details, pending with verification timeline, expired with overdue indicator, rejected with specific issue list.",
              "Payouts and compliance. Weekly automatic transfers, early payout, transaction history, TIN, account statement, and tax partner connection.",
            ],
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "DriveVault Driver shipped as an end-to-end driver platform where the core promise — drive on your terms, get paid fairly — was embedded in the mechanics of the product rather than left to marketing copy.",
          },
          {
            type: "paragraph",
            text: "The minimum price filter made driver autonomy structural. The Opportunity Planner moved demand intelligence out of WhatsApp groups and into the app. The per-trip earnings breakdown made commission deductions transparent at the level where they actually mattered.",
          },
          {
            type: "paragraph",
            text: "The onboarding flow — with its upfront journey preview and post-approval preference setup — was designed to reduce the drop-off that competitor apps see when drivers hit the first form without knowing how many more follow.",
          },
        ],
      },
      {
        title: "Reflection",
        content: [
          {
            type: "paragraph",
            text: "This project pushed me to think more carefully about what it means to design for someone whose workplace is their vehicle and whose income depends on every decision the platform makes on their behalf. That is a different design responsibility than a consumer app.",
          },
          {
            type: "paragraph",
            text: "If I were pushing the work further, the next layer would be predictive: push notifications that turn the Opportunity Planner from a screen you check into a tool that checks in with you. The concert at National Stadium starts in 90 minutes — position now. That shift from passive to active would make the planner genuinely operational rather than informational.",
          },
          {
            type: "paragraph",
            text: "Earnings projections would also be the right next investment — not just what you earned today, but what you are on track to earn this week and how many more trips to reach a goal. That kind of forward visibility changes how drivers plan their time, and planning their time is the core job the app exists to support.",
          },
        ],
      },
    ],
  },
  "drivevault-rider": {
    title: "DriveVault — Rider",
    hero:
      "The ride starts before the car does — designing a Lagos ride-hailing experience around the quiet anxiety that opens with every booking.",
    meta: {
      role: "Product Designer (Solo)",
      company: "DriveVault",
      timeline: "2025",
      platform: "Mobile (iOS — iPhone 14 & 15 Pro)",
      deliverables:
        "End-to-end UX/UI — Authentication, Booking, Ride for Someone, Scheduled Rides, Safety, Support, Account",
    },
    closing: {
      closer: [
        "The hardest thing to design in ride-hailing is trust. You cannot manufacture it. You cannot animate your way to it. You earn it by being honest about price, clear about what happens next, real about safety, and useful when things go wrong. Every screen in the DriveVault rider experience was designed with one question: what does this rider need to feel confident right now?",
        "The Ride for Someone feature is the one I keep returning to. It came from an observation about how Lagos actually works, not from a product brief. A mother booking a ride for her child coming home from school. A colleague arranging transport for a partner who does not use smartphones. That use case was real, frequent, and underserved across every competitor. Putting it on the home screen was the right call.",
      ],
      reflection: [
        "Trust is built in details — a 10-minute pickup window is more honest than a single promised time",
        "Start with the trip, not the ticket — support that shows your recent rides first is faster for everyone",
        "Ride for Someone deserved to be on the home screen, not buried in a menu",
        "Showing competitor prices on the booking screen only works if the price is actually better",
      ],
      ps: [
        "PS: 'Good morning, Chidi 👋' is not a small detail. It is the first signal that this app knows who you are.",
        "Also: surfacing the cancellation fee before a rider commits, not after, is the difference between a policy and a product decision.",
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
            text: "The ride starts before the car does. That is the insight nobody in Nigerian ride-hailing talks about enough.",
          },
          {
            type: "paragraph",
            text: "The moment a rider opens the app, something psychological begins. A quiet audit: is this going to work? Will the driver actually show up? Is the price fair? What if something goes wrong? In a market where Uber, Bolt, and InDriver have all had their trust-breaking moments — drivers cancelling on arrival, surge pricing that does not feel honest, zero recourse when something goes wrong — every rider carries a baseline anxiety into every booking.",
          },
          {
            type: "paragraph",
            text: "DriveVault's rider experience was designed to answer that anxiety at every step. Not with reassurance copy. Not with empty animations. With decisions — information surfacing at the right moment, controls existing where they are expected, safety that is not a tab buried in settings.",
          },
        ],
      },
      {
        title: "The Context",
        content: [
          {
            type: "paragraph",
            text: "Lagos is not a city that forgives a bad ride-hailing app. Traffic is unpredictable. Routes are political. Drivers have their own logic about what is worth their time. Riders have learned — through repeated experience — to negotiate, to verify, to screenshot conversations, to share their location with someone who is watching.",
          },
          {
            type: "paragraph",
            text: "The market shapes the product. Designing for a Lagos rider means designing for someone with strong opinions, limited patience, and real stakes. A ride at 10pm in Lekki is not a casual UX interaction. It is a safety decision.",
          },
          {
            type: "paragraph",
            text: "Five things I knew a DriveVault rider needed before designing a single screen: price clarity, not just the fare but whether it is a good fare. Booking flexibility, for themselves, for others, for later. Safety infrastructure — real tools, not checkbox features. Promos that feel real, not buried and expired by the time you find them. And support that works when something goes wrong, because something will.",
          },
        ],
      },
      {
        title: "The Problem",
        content: [
          {
            type: "paragraph",
            text: "Broken trust in Nigerian ride-hailing has specific shapes. After studying the category and riding with multiple platforms, four failure patterns stood out:",
          },
          {
            type: "list",
            items: [
              "1. Price opacity. The fare shows, but not whether it is fair. Riders switching between Uber and Bolt to compare prices are doing manually what the product should do for them.",
              "2. Booking only for yourself. The most common booking edge case — getting a ride for someone who cannot book for themselves — was treated as a hidden feature by every competitor, if it was supported at all.",
              "3. Safety as a tab. Trusted contacts, verify your driver, emergency tools — these lived in menus riders found after the fact. Safety infrastructure that requires navigation to find is safety infrastructure that does not work.",
              "4. Support that starts from scratch. Filing a support issue required remembering the date, route, and driver details of the trip. A rider who had a problem last night should not have to reconstruct the context — the app should know.",
            ],
          },
        ],
      },
      {
        title: "The Goals",
        content: [
          {
            type: "paragraph",
            text: "Four design goals shaped the rider experience:",
          },
          {
            type: "list",
            items: [
              "Surface price comparison at the booking screen — show what the same trip costs on other platforms so the price earns trust rather than requiring it",
              "Put Ride for Someone and Schedule Ahead on the home screen, not in menus, because frequency of use should determine placement",
              "Make safety tools visible before they are needed — trusted contacts, driver verification, and real-time location sharing as first-class features",
              "Build support that starts with the trip, not a blank ticket — recent rides visible immediately so a rider can tap rather than type",
            ],
          },
        ],
      },
      {
        title: "The Approach",
        content: [
          {
            type: "paragraph",
            text: "Authentication: short, honest, human",
          },
          {
            type: "paragraph",
            text: "The signup flow asks for first name, last name, and phone number. The phone field has a nudge — we will send a verification code here — which does two things simultaneously: it tells you what is going to happen next and it explains why the phone number is needed. Social sign-in via Google and Apple sits below as an alternative, not the primary, because phone-first is right for this market.",
          },
          {
            type: "paragraph",
            text: "OTP verification is a 4-digit code with an explicit 60-second countdown. Error states are specific — incorrect code, try again — not a generic red banner. The forgot password flow sets a 5-minute expectation for the reset email, preventing the premature support tickets that come from users who assume no email means a broken product.",
          },
          {
            type: "paragraph",
            text: "The home screen: a dashboard that knows you",
          },
          {
            type: "paragraph",
            text: "Good morning, Chidi 👋. That greeting — personalised, time-aware — sets the tone for the entire home screen. This is not a utility app. It knows who you are.",
          },
          {
            type: "paragraph",
            text: "The home is built around a central search bar — Where are you heading? — with saved shortcuts directly below: Home, Work, and custom locations. A rider going to the same destination five times a week should never have to type it again after the first time. Schedule ahead and Ride for someone sit as quick-action chips below the shortcuts, promoted to the home screen because they represent real use cases that competitors treat as afterthoughts.",
          },
          {
            type: "paragraph",
            text: "The promo section is visible without scrolling, with specific amounts and real expiry times — 10% off your next ride, expires tonight — not vague up-to discounts. DriveVault Rewards shows progress in a way that makes the next goal feel reachable: three of five rides this week, twenty points away from the next reward. Twenty points is one ride. That specificity turns an abstract loyalty programme into a concrete next-trip feeling.",
          },
          {
            type: "paragraph",
            text: "Booking: every decision, in order",
          },
          {
            type: "paragraph",
            text: "The route screen shows saved places at the top and recent searches below — so the two most likely destinations are tappable before a character is typed. Multi-stop is supported with a clear Add another stop structure, which matters for riders dropping a package before getting home or picking someone up en route.",
          },
          {
            type: "paragraph",
            text: "The pickup confirmation screen shows a map with a draggable pin — drag or edit address to set your pickup — because in Lagos, building numbers are approximate and a compound description is more reliable than a postcode. Add note for driver sits at the bottom for gate codes, guard names, and landmark instructions that no GPS can capture. Airport pickups surface specific terminal options: MMA1, MMA2.",
          },
          {
            type: "paragraph",
            text: "The ride category screen is where the design earns its keep. Categories — Economy, Comfort, Executive, XL, Courier — each show estimated arrival, price, and relevant detail. Economy leads with Faster Pickup because speed is its core value. The standout element: Save ₦1,000 — Typical price on other apps: NGN 7,200–9,500. DriveVault shows its price and the competitor price for the same ride. This is a bold, honest signal that assumes the rider is already comparing apps and chooses to win that comparison transparently. Uber and Bolt do not do this.",
          },
          {
            type: "paragraph",
            text: "Ride for Someone: a feature built for how Lagos actually works",
          },
          {
            type: "paragraph",
            text: "In Lagos, it is common to book a ride for someone else. An older parent who does not use smartphones. A child coming home from school. A friend stranded after an event. Uber treats this as a secondary mode hidden in menus. DriveVault puts Ride for Someone on the home screen.",
          },
          {
            type: "paragraph",
            text: "The flow asks who is riding — Me, or Add someone — then takes the rider's name and phone number. The driver receives the actual rider's contact details. After booking, a Share ride details prompt lets the booker send vehicle number, arrival time, and driver location directly. The booker stays in the loop. The driver knows who to expect. The actual rider has the information they need. Three people, one booking, zero confusion.",
          },
          {
            type: "paragraph",
            text: "Scheduled rides: trust expressed as time",
          },
          {
            type: "paragraph",
            text: "Scheduling a ride is an act of trust — committing to a pickup time hours or days in advance. The design has to earn that commitment. The review screen shows a pickup window — 4:13 AM to 4:23 AM — not a single promised time, because a range is honest and a single time overpromises. The cancellation policy appears before the rider commits: a fee of ₦1,500 applies if you cancel within 60 minutes of pickup. Not after. Before. So no one feels ambushed by a fee they did not know about.",
          },
          {
            type: "paragraph",
            text: "Scheduled rides surface as a persistent card on the home screen — Tomorrow, 6:30 AM, destination, view or cancel. Riders do not have to go hunting to confirm or cancel a booking they made yesterday.",
          },
        ],
      },
      {
        title: "Safety and Support",
        content: [
          {
            type: "paragraph",
            text: "Safety: real tools, not checkbox features",
          },
          {
            type: "paragraph",
            text: "The Safety section is not a wall of text. It is a set of actual tools designed for actual risk scenarios.",
          },
          {
            type: "paragraph",
            text: "Trusted Contacts asks riders to add at least one person they trust to be called in an emergency. The relationship field — spouse, parent, family, friend — is not just metadata. A rider who adds a trusted contact has done something that makes them meaningfully safer. A rider who sees Trusted contacts: None added next to the warning is more likely to act than one who reads a generic safety tips page.",
          },
          {
            type: "paragraph",
            text: "Verify your driver surfaces before boarding, giving riders a way to confirm the car, plate, and driver details match before getting in. Safety tips are curated, not comprehensive — short enough to be read, specific enough to be useful.",
          },
          {
            type: "paragraph",
            text: "Support: designed for the unhappy path",
          },
          {
            type: "paragraph",
            text: "A support system that is hard to use is a broken promise. The most important design decision in the support flow was to start with the trip, not the ticket. Get help with a recent ride shows the last few trips immediately. A rider reporting a problem with last night's ride taps it directly — no date, no route, no driver name required.",
          },
          {
            type: "paragraph",
            text: "Issue categories — charged twice, cancellation fee issue, ride did not happen — lead to an explanation before escalation. Selecting 'charged twice' shows context about temporary card authorisations first, then asks whether that information resolved the issue. If yes: resolved without human contact. If no: chat with us. The escalation path exists. The self-resolution path is always tried first.",
          },
          {
            type: "paragraph",
            text: "Active support cases show in the Inbox with a clear status: our team is reviewing your case. A rider with an open case knows it is open. No wondering whether the message was received.",
          },
        ],
      },
      {
        title: "Key Screens",
        content: [
          {
            type: "list",
            items: [
              "Auth flow. Sign up with phone-first approach, OTP with explicit countdown, password creation with live validation checklist, forgot password with timed expectation for the reset email.",
              "Home. Personalised time-aware greeting, destination search bar, saved shortcuts, Schedule Ahead and Ride for Someone as home screen chips, specific promos with real expiry, Rewards progress with points-to-next-reward shown.",
              "Route and pickup. Saved places and recent searches, multi-stop support, draggable pickup pin, driver note field, airport terminal selection.",
              "Ride category selection. Economy through XL and Courier, with arrival times, prices, and competitor price comparison shown inline.",
              "Ride for Someone. Who is riding selector, rider name and phone input, post-booking share details prompt covering vehicle, ETA, and driver location.",
              "Scheduled rides. Date and time picker, category selection with scheduled availability, pickup window (not a single time), cancellation fee disclosed pre-booking, home screen persistent card with view or cancel.",
              "Payment selection. Saved card or cash, selection at booking not at drop-off, specific decline error with reason and recovery path.",
              "Flexible pricing and negotiation. Price range shown, rider proposal input, negotiation cancelled toast on collapse.",
              "Safety section. Trusted contacts with relationship field and minimum-one nudge, verify your driver, curated safety tips.",
              "Support. Recent rides as entry point, issue categories, self-resolution explanation before escalation, chat escalation path, Inbox with active case status.",
              "Account. Rider rating and trip count visible on profile, passkeys with device context and last-used date, Request my data in plain view, Become a driver path at the bottom.",
            ],
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "DriveVault Rider shipped as a booking experience where the anxiety that opens with every booking in Nigerian ride-hailing was addressed with decisions rather than reassurance copy.",
          },
          {
            type: "paragraph",
            text: "The competitor price comparison on the category screen made price trust structural rather than assumed. The Ride for Someone flow served a use case that competitors had left to workarounds. Scheduled rides showed the pickup window honestly and disclosed the cancellation fee before commitment.",
          },
          {
            type: "paragraph",
            text: "Safety tools were placed where riders would find them before they needed them, not after. Support was redesigned around the trip rather than the ticket, reducing the reconstruction burden on riders who already had a bad experience.",
          },
        ],
      },
      {
        title: "Reflection",
        content: [
          {
            type: "paragraph",
            text: "Designing for trust taught me that most of the work is in what you choose to say and when you choose to say it. The cancellation fee disclosed before the rider commits rather than after. The competitor price shown at the booking screen rather than left to the rider to find. The pickup window as a range rather than a single time. These are writing decisions as much as design decisions.",
          },
          {
            type: "paragraph",
            text: "If I were pushing the work further, real-time negotiation transparency would be the next layer — showing riders when a driver has countered, with the specific counter-offer and a clear accept, counter, or decline path. Right now the negotiation interaction is opaque enough to feel like a guessing game. It should feel like a conversation.",
          },
          {
            type: "paragraph",
            text: "In-trip safety escalation would also be the right next investment — a discreet SOS flow that alerts trusted contacts silently, without requiring the rider to navigate anywhere during an active ride. The trusted contacts infrastructure is already there. The in-trip trigger is the missing piece.",
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

        {project.links && project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#111]/55 border border-[#111]/15 rounded-full px-4 py-2 hover:border-[#111]/35 hover:text-[#111]/75 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
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
