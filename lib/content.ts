// ─────────────────────────────────────────────────────────────────────────────
//  Single source of truth for all page copy and links.
//  Content condensed from the TLC resource pack (public/TLC-Resource-Pack.pdf).
//
//  ⚠️  PLACEHOLDERS: registerUrl and registerDeadline below are not final. Swap
//      them for the real register-interest URL and deadline before handoff.
// ─────────────────────────────────────────────────────────────────────────────

// Prefix a /public asset path with the Pages basePath. next/link applies the
// basePath automatically, but plain <a href> links and next/image with
// `unoptimized` do NOT, so anything pointing at a file in /public must go
// through here. BASE_PATH is set at build time by next.config.mjs and is an
// empty string in plain `next dev` or when hosting from a domain root.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const LINKS = {
  /** Register-interest destination, e.g. a Microsoft Forms / Qualtrics URL. */
  registerUrl: "#register", // TODO: replace with real registration URL
  /** Programme team contact address. */
  programmeEmail: "teachinglearningcircles@auckland.ac.nz",
  /** Full resource-pack PDF (lives in /public). */
  resourcePackHref: asset("/TLC-Resource-Pack.pdf"),
  /** Deadline shown in the call-to-action. */
  registerDeadline: "[date]", // TODO: replace with the real expression-of-interest deadline
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#cornerstones", label: "Cornerstones" },
  { href: "#process", label: "The process" },
  { href: "#contact", label: "Contact" },
] as const;

export const HERO = {
  eyebrow: "Waipapa Taumata Rau · University of Auckland",
  title: "Teaching and\nLearning Circles",
  tagline: "Peer-driven · Reflective · Collegial",
  intro:
    "A small group of 3 to 4 colleagues who are curious about teaching and want a dedicated space to think about it together. You visit each other's classes, not to assess or advise, but to observe with curiosity and reflect on what you see. The focus is always on your own practice: what watching someone else teach makes you notice, question, and want to try.",
  commitmentValue: "5–6",
  commitmentUnit: "hours across the semester",
  alignment: "Aligned with the Reflect & Contribute domains of TeachWell@UoA",
} as const;

export const ABOUT = {
  purpose:
    "Teaching and Learning Circles give staff a practical, structured way to learn from one another and broaden their teaching perspectives. They are intentionally developmental rather than evaluative, giving you a safe and collegial space to grow as a teacher. As a member you visit colleagues' classes and they visit yours, observing with curiosity and reflecting on your own practice, never to evaluate theirs.",
  benefits: [
    "Discover new teaching approaches by seeing colleagues in action across disciplines",
    "Build connections with educators beyond your immediate teaching team",
    "Deepen your understanding of how students experience learning",
    "Gain confidence in your own practice through collegial affirmation",
    "Set aside dedicated time for reflection in a busy semester",
    "Generate evidence of professional engagement that can support your career goals",
  ],
} as const;

export const STEPS = [
  {
    n: "01",
    title: "Connect and plan",
    body: "Your circle of three to four connects to share teaching contexts, choose observation lenses, and lock in every visit date in one go, ideally within six weeks of forming.",
  },
  {
    n: "02",
    title: "Visit each other's classes",
    body: "Each member visits the others' classes, sitting with students where possible and observing with curiosity, not judgement, guided by an agreed lens.",
  },
  {
    n: "03",
    title: "Reflect and apply",
    body: "Once observations are complete, the circle meets to share what each member noticed and turn it into insight and next steps for their own teaching.",
  },
] as const;

export const CORNERSTONES = [
  {
    title: "Reciprocity",
    body: "Every member both observes and is observed. There are no experts and no novices, only peers, each taking turns to open their classroom and to sit in someone else's.",
  },
  {
    title: "Appreciation",
    body: "Observations are oriented toward noticing and celebrating what works, in your colleagues' classrooms and in your own. The mindset is one of curiosity and generosity, not critique or correction.",
  },
  {
    title: "Self-referential reflection",
    body: "The focus is always on what you take away, not on evaluating the person you observed. Every insight is framed around your own teaching: “This made me think about…” rather than “They should have…”",
  },
  {
    title: "Mutual respect",
    body: "Members enter each other's classrooms with genuine empathy for the teacher, the students, and the context. Different disciplines, class sizes, and situations call for different approaches, and respect means recognising that.",
  },
] as const;

export const PROCESS = [
  {
    phase: "Pre-observation",
    title: "Connect, share & schedule",
    body: "Your circle connects to share teaching contexts, complete a private pre-observation reflection, choose the lenses each observer will bring, and timetable every visit for the semester before diaries fill up.",
  },
  {
    phase: "Observe",
    title: "Visit your peers",
    body: "Observe as a learner, not an evaluator. Sit with students, let your lens guide your attention, and notice what you find interesting or surprising. There's nothing to perform. The host just teaches as they normally would.",
  },
  {
    phase: "Reflect & apply",
    title: "What · So what · Now what",
    body: "Once observations are complete, the circle turns what each member noticed into shared insight and practical next steps, using a simple three-part structure focused on your own practice.",
  },
] as const;

export const DEBRIEF = [
  {
    n: "1",
    label: "What?",
    body: "Each member shares descriptive observations: factual and specific, no evaluation. “I noticed that…” “I was struck by…”",
  },
  {
    n: "2",
    label: "So what?",
    body: "What did those observations prompt you to think about in your own teaching? “This made me reflect on my own practice because…”",
  },
  {
    n: "3",
    label: "Now what?",
    body: "What is each member considering trying or changing? “One thing I want to try is…” “A question I want to keep exploring is…”",
  },
] as const;

export const LENSES = [
  {
    n: "1",
    domain: "Teach",
    title: "Student engagement & learning",
    body: "How students respond to questions, tasks, and transitions, what draws them in or loses their attention, and whether participation feels equitable across the class.",
  },
  {
    n: "2",
    domain: "Design",
    title: "Course design in action",
    body: "How the session's structure and sequencing supports learning, whether activities connect clearly to outcomes, and what you might borrow or adapt for your own course design.",
  },
  {
    n: "3",
    domain: "Teach · Te Tiriti",
    title: "Inclusive & responsive teaching",
    body: "How the teacher acknowledges and works with student diversity, whether the environment feels welcoming and safe for all, and moments of manaakitanga visible in practice.",
  },
  {
    n: "4",
    domain: "Assess",
    title: "Feedback & assessment in practice",
    body: "How the teacher checks and responds to student understanding, how uncertainty is noticed and addressed, and what assessment thinking is embedded beyond formal tasks.",
  },
  {
    n: "5",
    domain: "Reflect",
    title: "Teaching as professional reflection",
    body: "Which teaching decisions are most visible and what they reveal, what assumptions about learning underpin the session, and what here challenges or confirms your own approach.",
  },
] as const;

export const TEMPLATES = [
  { code: "A", title: "Pre-Observation Reflection", note: "Complete privately before your circle first connects; a conversation starter, not an evaluation." },
  { code: "B", title: "Observation Lenses", note: "A quick one-page reference to the five lenses to bring to every visit." },
  { code: "C", title: "Observation Notes", note: "Eight observation categories to guide attention during a class visit." },
  { code: "D1", title: "Reflect & Apply: Individual", note: "Complete privately before your group debrief." },
  { code: "D2", title: "Reflect & Apply: Group", note: "Structures the What / So what / Now what conversation." },
  { code: "E", title: "Circle Scheduling", note: "Lock in all members' observations when your circle first connects." },
] as const;

export const TEACHWELL = {
  body:
    "TLCs align directly with the Reflect and Contribute domains of the TeachWell@UoA Framework, and through the observation lenses you choose, your circle also touches on Teach, Design, and Assess. Any reflections or insights you generate are yours to use however you find meaningful, in your ADPR, your Academic Career Portfolio, or simply in your own teaching.",
  domains: ["Reflect", "Contribute", "Teach", "Design", "Assess"],
} as const;

export const CONTACT = {
  intro:
    "Teaching and Learning Circles are designed to be flexible and genuinely supportive. If you have questions at any stage of the semester, we are here to help.",
  support: [
    "Need help with timetabling or rescheduling observations",
    "Have questions about observation protocols or reflection tools",
    "Are unsure how to approach a conversation or debrief",
    "Have any concerns about participation or group dynamics",
  ],
  confidentiality:
    "All TLC activities are developmental and non-evaluative. Any concerns raised are handled respectfully and, where appropriate, confidentially, so the experience stays constructive and positive for everyone.",
} as const;
