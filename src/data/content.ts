export const EMAIL = "sawantvinay289@gmail.com";

export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
  icon: 'linkedin' | 'github' | 'youtube' | 'x' | 'figma';
}

export const SOCIALS: SocialLink[] = [
  {
    name: "LinkedIn",
    handle: "sawantvinay",
    url: "https://www.linkedin.com/in/sawantvinay/",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    handle: "sawantvinay",
    url: "https://github.com/sawantvinay",
    icon: "github"
  },
  {
    name: "X (Twitter)",
    handle: "@sawantvinay",
    url: "https://x.com/sawantvinay",
    icon: "x"
  },
  {
    name: "YouTube",
    handle: "@vinaysawant",
    url: "https://youtube.com/@vinaysawant",
    icon: "youtube"
  },
  {
    name: "Figma Community",
    handle: "@sawantvinay",
    url: "https://www.figma.com/@sawantvinay",
    icon: "figma"
  }
];

export const IMAGES = {
  portrait: "/images/portrait_clean_transparent.png",
  portraitFallback: "/images/portrait_studio.jpg"
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" }
];

export const MARQUEE_ITEMS = [
  "UX Research",
  "Design Systems",
  "Figma Auto-Layout",
  "WCAG 2.2 AA",
  "Tailwind Tokens",
  "Developer Handoff",
  "Mobile · SaaS · Consumer"
];

export interface ProjectMetric {
  k: string;
  v: string;
}

export interface DeepQA {
  label: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  num: string;
  badges: string[];
  category: string;
  title: string;
  summary: string;
  role: string;
  platform: string;
  timeline: string;
  figma: string | null;
  image: string;
  metrics: ProjectMetric[];
  deep: DeepQA[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "healthapp",
    num: "01",
    badges: ["UX RESEARCH", "78 Survey Responses", "Multilingual"],
    category: "Mobile & Consumer Healthcare",
    title: "HealthApp — Quantitative UX Research & Accessible Multilingual Mobile UI",
    summary:
      "Synthesizing 78 quantitative user survey responses into an accessible, multilingual mobile health application optimized for Devanagari script legibility and WCAG 4.5:1 text contrast compliance.",
    role: "UX Researcher & Product Designer",
    platform: "Android & iOS Mobile App",
    timeline: "2023 — 2024",
    figma:
      "https://www.figma.com/design/nkF1GwcqesYjIYWyJRVH2B/healthApp-casestudy?node-id=0-1&t=NTDB48DYdRQGsYQI-1",
    image: "/images/healthapp.jpg",
    metrics: [
      {
        k: "92%",
        v: "Practitioner Trust Requirement — verified by certified B.A.M.S. doctors"
      },
      {
        k: "78%",
        v: "Bilingual Preference — native Devanagari Hindi with medical terms"
      },
      {
        k: "WCAG AA",
        v: "48px touch targets & color-blind safe status indicators"
      }
    ],
    deep: [
      {
        label: "Design Rationale",
        detail: "Implemented high-trust verification badges and dual-script typography scales with adjusted line-height to avoid Devanagari matra clipping."
      },
      {
        label: "Problem Solved",
        detail: "Eliminated user skepticism toward unverified home remedies by displaying doctor accreditation and registration details prominently."
      },
      {
        label: "User Validation",
        detail: "“Having the certified doctor’s registration number visible makes me feel safe giving this to my parents.”"
      }
    ]
  },
  {
    id: "spotify",
    num: "02",
    badges: ["UI ARCHITECTURE", "Figma Design System", "Micro-Interactions"],
    category: "Mobile & Community UI Architecture",
    title: "Spotify App Clone — UI Architecture, Micro-Interactions & Dark Mode System",
    summary:
      "A systematic teardown and reproduction of Spotify’s mobile player hierarchy, dark surface elevation tokens, and auto-layout component variants.",
    role: "Systems UI Designer",
    platform: "iOS Mobile App · Figma",
    timeline: "Design System",
    figma:
      "https://www.figma.com/design/AUQlmiif5LkwxiPKjNhCnI/Spotify-App-Clone-UI-Design--Community-?node-id=1-2&t=KezqwunEA5dSyfJX-1",
    image: "/images/spotify.jpg",
    metrics: [
      {
        k: "20+",
        v: "Auto-Layout 5.0 Component Variants for playback states"
      },
      {
        k: "#121212",
        v: "Dark Surface Elevation System with structured tokens"
      },
      {
        k: "Thumb-Zone",
        v: "Persistent mini-player for one-handed control while browsing"
      }
    ],
    deep: [
      {
        label: "Design Rationale",
        detail: "Audio platforms require seamless switching between passive listening and active discovery without losing player state."
      },
      {
        label: "Problem Solved",
        detail: "Solved dark-mode contrast fatigue and navigation friction with a persistent gesture-driven bottom mini-player."
      },
      {
        label: "User Validation",
        detail: "“The auto-layout variant naming matches actual React components 1:1, making handoff exceptionally clean.”"
      }
    ]
  },
  {
    id: "dholo",
    num: "03",
    badges: ["CONSUMER MOBILE", "Design System", "Live Tracking"],
    category: "Consumer Mobile & Design Systems",
    title: "Dholo — iOS Laundry Marketplace App & Modular Design System",
    summary:
      "Mobile interaction design, end-to-end service ordering journey (booking, visual weight estimator, live GPS tracking), and a reusable 15+ component tokenized Figma UI system.",
    role: "Solo Product Designer",
    platform: "iOS Mobile App & UI Kit",
    timeline: "Product Design",
    figma: null,
    image: "/images/dholo.jpg",
    metrics: [
      {
        k: "60%",
        v: "Reduction in UI inconsistencies through standardized tokens"
      },
      {
        k: "3-Step",
        v: "Express checkout from load estimation to driver booking"
      },
      {
        k: "Live ETA",
        v: "Real-time order progress timeline with driver chat"
      }
    ],
    deep: [
      {
        label: "Design Rationale",
        detail: "Hostel students and young professionals face opaque pricing and unscheduled pickups — requiring upfront pricing and scheduling clarity."
      },
      {
        label: "Problem Solved",
        detail: "Eliminated price anxiety with an interactive load calculator and live driver GPS status tracking."
      },
      {
        label: "User Validation",
        detail: "“Knowing exactly when my clothes will be picked up without calling the shopkeeper saves 20 minutes every week.”"
      }
    ]
  },
  {
    id: "sitemate",
    num: "04",
    badges: ["FIELD SAAS", "Construction ERP", "Offline-Ready"],
    category: "Enterprise Field SaaS & Workflows",
    title: "SiteMate ERP — Construction Project Management & Automated DPR",
    summary:
      "Role-based construction management platform featuring automated Daily Progress Report (DPR) generation, labor headcount tracking, and real-time inventory alerts for site engineers.",
    role: "Product Designer",
    platform: "Field Mobile App & Web Dashboard",
    timeline: "Enterprise Field SaaS",
    figma: null,
    image: "/images/sitemate.jpg",
    metrics: [
      {
        k: "2.5 hrs",
        v: "Saved daily by replacing paper registers with mobile inputs"
      },
      {
        k: "1-Click",
        v: "Automated daily progress report rollups and material logs"
      },
      {
        k: "4 min",
        v: "To submit complete daily field reports right from the site"
      }
    ],
    deep: [
      {
        label: "Design Rationale",
        detail: "Designed for outdoor sunlight legibility with high contrast, large numeric buttons, and offline-first caching for remote construction sites."
      },
      {
        label: "Problem Solved",
        detail: "Removed 24-hour reporting delays between remote site supervisors and head-office project directors."
      },
      {
        label: "User Validation",
        detail: "“Site engineers can submit the complete daily report in 4 minutes right from the scaffold.”"
      }
    ]
  }
];

export const PILLARS = [
  {
    num: "01",
    title: "Research-First",
    body: "Grounding every layout in quantitative data and root-cause clarity rather than surface decoration. 78 survey responses shaped HealthApp before a single frame was drawn."
  },
  {
    num: "02",
    title: "User-Centered Problem Solving",
    body: "Mapping complex behavioral journeys, user intent, and cognitive ergonomics to remove operational friction and build effortless, calm daily workflows."
  },
  {
    num: "03",
    title: "Iterative Prototyping & Craft",
    body: "Refining interaction fidelity through hands-on testing, motion choreography, and high-precision UI components that withstand real-world user testing."
  }
];

export interface CompetencyItem {
  num: string;
  title: string;
  body: string;
  tags: string[];
}

export const COMPETENCIES: CompetencyItem[] = [
  {
    num: "01",
    title: "User Research & Behavioral Insights",
    body: "Synthesizing quantitative surveys, cohort interviews, and task-completion friction data into actionable product requirements before designing.",
    tags: ["Quantitative Surveys", "Persona Synthesis", "Cognitive Friction Analysis"]
  },
  {
    num: "02",
    title: "Design Systems Architecture",
    body: "Structuring scalable Figma component libraries, responsive token sets, and auto-layout variants that keep product surfaces coherent across screens.",
    tags: ["Auto-Layout 5.0", "Design Tokens", "Component Variants"]
  },
  {
    num: "03",
    title: "Interaction & Micro-Animations",
    body: "Designing fluid gesture responses, state transitions, and responsive micro-interactions that communicate system state and delight users without lag.",
    tags: ["Micro-Interactions", "Motion Choreography", "State Feedback"]
  },
  {
    num: "04",
    title: "Cross-Functional Handoff & Specs",
    body: "Documenting complete state matrices — empty states, loading skeletons, partial failures, and responsive constraints for frictionless engineering collaboration.",
    tags: ["State Matrices", "Redlines & Specs", "Developer Alignment"]
  }
];

// Backwards-compatible alias for existing imports
export const EMPATHY = COMPETENCIES;

export const EXPERIENCE = [
  {
    period: "Oct 2026 — Present",
    title: "Tech Support Executive",
    org: "Softmate Systems LLP",
    body: "Delivering technical troubleshooting, system workflow coordination, and customer escalation management — aligning customer support insights with product reliability and performance."
  },
  {
    period: "Dec 2025 — Present",
    title: "Product Designer",
    org: "Silicon Mount",
    body: "Leading end-to-end user experience and interface design across web and mobile products. Designing tokenized Figma component libraries, conducting usability research, and partnering closely with engineers for implementation."
  },
  {
    period: "Nov 2022 — July 2026",
    title: "B.Tech — Information Technology",
    org: "Maharashtra, India",
    body: "Solid foundation in computer science, systems architecture, and frontend engineering — enabling design decisions deeply grounded in how real software is built."
  }
];

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  relationship: string;
  highlight: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "ananya",
    quote: "Vinay transformed our clinical discovery phase. Instead of rushing to draw frames, his quantitative analysis of 78 user surveys identified that practitioner accreditation was the single biggest friction point. The resulting bilingual Devanagari system reduced drop-offs by 34%.",
    name: "Ananya Sharma",
    role: "Senior Product Manager",
    company: "HealthApp Platform",
    relationship: "Collaborated on HealthApp Discovery & Mobile UI",
    highlight: "-34% Drop-off Rate"
  },
  {
    id: "rahul",
    quote: "Working with Vinay is a breath of fresh air for frontend engineering. His Figma design tokens map 1:1 to component props, and every edge case — from network timeouts to offline state rollbacks — is clearly documented. Zero handoff ambiguity.",
    name: "Rahul Deshmukh",
    role: "Lead Frontend Engineer",
    company: "Softmate Systems LLP",
    relationship: "Engineering Partner on Enterprise Workflows",
    highlight: "100% Token-to-Code Parity"
  },
  {
    id: "pooja",
    quote: "Vinay has a rare ability to reduce complex logistical friction into clean, calm micro-interactions. The 3-step checkout and visual weight estimator he designed solved user price anxiety immediately after launch.",
    name: "Pooja Kulkarni",
    role: "Product Lead",
    company: "Dholo Marketplace",
    relationship: "Led consumer mobile launch together",
    highlight: "3-Step Express Checkout"
  },
  {
    id: "aditya",
    quote: "His Spotify architectural teardown and auto-layout system in Figma Community is one of the cleanest community files I’ve audited. The variant hierarchy and dark surface elevation tokens are textbook quality.",
    name: "Aditya Verma",
    role: "Design Systems Architect",
    company: "Figma Community Reviewer",
    relationship: "Reviewed Open-Source UI Architecture",
    highlight: "20+ Auto-Layout Variants"
  }
];

export const TOOLS = [
  {
    category: "Design",
    items: ["Figma", "Auto-Layout 5.0", "Component Variants", "Variables & Semantic Tokens"]
  },
  {
    category: "Research",
    items: ["Quantitative Surveys", "NotebookLM", "Sentiment Clustering", "Usability Feedback Loops"]
  },
  {
    category: "Prototyping & Validation",
    items: ["Interactive Prototypes", "Component States", "User Flow Mapping", "Usability Testing"]
  },
  {
    category: "Frontend Feasibility",
    items: ["HTML / CSS", "Tailwind CSS", "React Component Logic", "REST API Alignment"]
  },
  {
    category: "Accessibility",
    items: ["WCAG 2.2 AA", "Devanagari Typography", "Color-blind Safe States", "48px Touch Targets"]
  }
];

export const FAQS = [
  {
    q: "Why does an IT background matter in product design?",
    a: "Because products live in code, not in static frames. My B.Tech in Information Technology means I design with component logic, state machines and token structures in mind — so what I hand off compiles cleanly, with zero rework for engineers."
  },
  {
    q: "How do you approach research before designing?",
    a: "Quantitative first. For HealthApp, 78 structured survey responses surfaced hard requirements before any layout: 92% practitioner trust, 89% routine tracking, 78% bilingual preference. Design decisions then trace back to a data point — not a hunch."
  },
  {
    q: "What does your developer handoff look like?",
    a: "Variant naming maps 1:1 to React props, tokens export straight into Tailwind configuration, and every state — empty, loading, error, permission boundary, optimistic rollback — is drawn and documented before handoff."
  }
];
