import projectDeeplus from "@/assets/project-deeplus.jpg";
import projectAxion from "@/assets/project-axion.jpg";
import projectCaroline from "@/assets/project-caroline.jpg";
import projectForma from "@/assets/project-forma.jpg";

export type Project = {
  id: string;
  initials: string;
  title: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  deliverables: string[];
  results: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "deeplus-media",
    initials: "DM",
    title: "Deeplus Media",
    category: "Photography Studio",
    year: "2025",
    description:
      "Editorial website build for a Lagos-based wedding and portrait photography studio.",
    overview:
      "Deeplus Media is a Lagos-based photography studio specialising in weddings, portraits and the moments in between. I built an editorial, gallery-first website that lets the work breathe, with a refined dark hero, animated marquee, and a curated grid of recent frames. Every section was designed to feel like a printed magazine rather than a feed, matching the studio's promise of frames that feel like forever.",
    tags: ["Web Design", "Editorial", "Framer"],
    image: projectDeeplus,
    liveUrl: "https://deeplusdefinition.vercel.app",
    deliverables: [
      "Editorial homepage with animated hero",
      "Filterable photography gallery",
      "Services and about storytelling sections",
      "Responsive, mobile-first layout",
    ],
    results: [
      { label: "Projects delivered", value: "375+" },
      { label: "Verified reviews", value: "4.7\u2605" },
      { label: "Years behind the lens", value: "8" },
    ],
  },
  {
    id: "axion-logistics",
    initials: "AX",
    title: "AXION Logistics",
    category: "Logistics",
    year: "2024",
    description: "Website redesign for a logistics company with a bold editorial aesthetic.",
    overview:
      "AXION needed a website that felt as fast and dependable as their fleet. I delivered a bold, high-contrast redesign with a strong typographic system, real-time tracking visuals, and a conversion-focused quote flow that turned visitors into booked shipments.",
    tags: ["Web Design", "Branding", "Framer"],
    image: projectAxion,
    deliverables: [
      "Brand-led homepage redesign",
      "Service and coverage pages",
      "Quote request flow",
      "Performance optimisation",
    ],
    results: [
      { label: "Faster load", value: "2.1s" },
      { label: "More quote requests", value: "+38%" },
      { label: "Pages shipped", value: "12" },
    ],
  },
  {
    id: "caroline-ayeni",
    initials: "CA",
    title: "Caroline Ayeni Coaching",
    category: "Personal Brand",
    year: "2024",
    description: "Personal coaching website redesign with a warm, conversion-focused layout.",
    overview:
      "A warm, trust-building personal brand site for a life and business coach. The design balances approachable storytelling with clear calls to book, using soft gradients, testimonials, and a streamlined booking journey.",
    tags: ["Web Design", "Personal Brand"],
    image: projectCaroline,
    deliverables: [
      "Warm personal brand identity",
      "Programs and offers pages",
      "Testimonial system",
      "Booking integration",
    ],
    results: [
      { label: "More bookings", value: "+52%" },
      { label: "Bounce rate", value: "-27%" },
      { label: "Pages shipped", value: "8" },
    ],
  },
  {
    id: "forma-interior",
    initials: "FI",
    title: "FORMA Interior Design Studio",
    category: "Interior Design",
    year: "2023",
    description: "Luxury interior design studio speculative redesign with a refined gallery.",
    overview:
      "A speculative luxury redesign for an interior design studio, built around a refined project gallery and quiet, confident typography. The layout lets photography lead, with generous whitespace and subtle motion that feels premium and intentional.",
    tags: ["Web Design", "Luxury", "Framer"],
    image: projectForma,
    deliverables: [
      "Luxury visual identity",
      "Project gallery with case studies",
      "Studio and process pages",
      "Contact and enquiry flow",
    ],
    results: [
      { label: "Gallery views", value: "+64%" },
      { label: "Avg. session", value: "3m 12s" },
      { label: "Pages shipped", value: "10" },
    ],
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}

export type ServiceCapability = { title: string; description: string };
export type ServiceWorkflow = { step: string; title: string; description: string };
export type ServiceFeedback = { quote: string; name: string; role: string };
export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  overview: string;
  image: string;
  skills: string[];
  capabilities: ServiceCapability[];
  workflow: ServiceWorkflow[];
  outcomes: { label: string; value: string }[];
  featured: string[];
  feedbacks: ServiceFeedback[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "website-design",
    title: "Website Design & Development",
    eyebrow: "Design & Build",
    description:
      "I design and build fast, bold, conversion-focused websites using Framer, Webflow, and modern builders. From first concept to launch day: clean, modern, and client-ready.",
    overview:
      "I turn ideas into websites that look premium and actually convert. Every build starts with strategy, moves through a bold visual direction, and ships as clean, fast, responsive code. Whether it is a single landing page or a full multi-page marketing site, the goal is the same: a site that feels unmistakably yours and earns real results.",
    image: projectAxion,
    skills: [
      "Framer",
      "Webflow",
      "Responsive UI / UX",
      "Design Systems",
      "Conversion Copy Layout",
      "Motion & Micro-interactions",
      "SEO Foundations",
      "Performance Optimisation",
    ],
    capabilities: [
      {
        title: "Landing pages that convert",
        description:
          "High-impact single pages built around one clear action, tuned for speed and clarity so visitors know exactly what to do next.",
      },
      {
        title: "Full marketing sites",
        description:
          "Multi-page sites with a consistent design system, reusable components, and a structure that scales as your brand grows.",
      },
      {
        title: "Design systems",
        description:
          "Reusable typography, colour, and component libraries that keep every page on-brand and speed up future updates.",
      },
      {
        title: "Motion & polish",
        description:
          "Smooth scroll animations and micro-interactions that make a site feel alive without hurting performance.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Discover",
        description: "Deep dive into your goals, audience, and competitors to ground every decision in strategy.",
      },
      {
        step: "02",
        title: "Design",
        description: "Wireframes then bold high-fidelity mockups, refined until the look feels unmistakably yours.",
      },
      {
        step: "03",
        title: "Build",
        description: "Pixel-perfect, responsive development with smooth motion, clean code, and SEO baked in.",
      },
      {
        step: "04",
        title: "Launch & iterate",
        description: "Test across devices, ship, then track performance and refine so the site keeps converting.",
      },
    ],
    outcomes: [
      { label: "Faster load times", value: "2.1s" },
      { label: "More conversions", value: "+38%" },
      { label: "Projects delivered", value: "50+" },
    ],
    featured: ["axion-logistics", "deeplus-media", "forma-interior"],
  },
  {
    slug: "ai-automation",
    title: "AI Automation & Workflow Design",
    eyebrow: "Automate & Scale",
    description:
      "I design intelligent automations and workflows that remove repetitive work, connect your tools, and let your business run smoothly with less manual effort.",
    overview:
      "Repetitive work quietly drains time and money. I map your operations, then design intelligent automations that connect your tools and let data flow on its own, from lead capture to follow-up to reporting. The result is a business that runs smoothly with far less manual effort and fewer dropped balls.",
    image: projectForma,
    skills: [
      "Make (Integromat)",
      "Zapier",
      "n8n",
      "OpenAI / LLM APIs",
      "Webhooks & APIs",
      "Airtable / Notion",
      "CRM Automation",
      "Process Mapping",
    ],
    capabilities: [
      {
        title: "Workflow automation",
        description:
          "Connect your apps so tasks trigger automatically, replacing copy-paste work with reliable, hands-off flows.",
      },
      {
        title: "AI-powered assistants",
        description:
          "Custom GPT-driven helpers that draft replies, summarise, classify, and answer questions using your own data.",
      },
      {
        title: "Lead & CRM pipelines",
        description:
          "Automated capture, enrichment, and follow-up so no lead slips through and every contact is nurtured.",
      },
      {
        title: "Reporting & ops",
        description:
          "Dashboards and scheduled reports that pull from all your tools, so the numbers are always up to date.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Map",
        description: "Audit your current process and pinpoint the repetitive tasks worth automating first.",
      },
      {
        step: "02",
        title: "Design",
        description: "Architect the flow: triggers, logic, AI steps, and how each tool connects to the next.",
      },
      {
        step: "03",
        title: "Build & test",
        description: "Build the automation, test edge cases, and add safeguards so it runs reliably unattended.",
      },
      {
        step: "04",
        title: "Handover",
        description: "Document everything, train your team, and monitor so the system keeps saving you hours.",
      },
    ],
    outcomes: [
      { label: "Hours saved weekly", value: "15+" },
      { label: "Manual tasks removed", value: "80%" },
      { label: "Tools connected", value: "10+" },
    ],
    featured: ["forma-interior", "axion-logistics"],
    feedbacks: [
      {
        quote:
          "Sylvester automated our lead flow end to end. What used to take hours of copy-paste now happens on its own.",
        name: "Grace N.",
        role: "Ops Lead, Forma Interior",
      },
      {
        quote:
          "The AI assistant he built drafts our replies and reports flawlessly. It's like adding a teammate that never sleeps.",
        name: "David K.",
        role: "Founder, AXION Logistics",
      },
    ],
    faqs: [
      {
        q: "Which tools can you connect?",
        a: "Make, Zapier, n8n, OpenAI and other LLM APIs, plus CRMs, Airtable, Notion, Google Workspace and almost anything with an API or webhook.",
      },
      {
        q: "Is my data safe in these automations?",
        a: "Yes. I build with least-access credentials, add error handling and safeguards, and document exactly what each flow touches so nothing runs unchecked.",
      },
      {
        q: "What happens if an automation breaks?",
        a: "Every flow includes error notifications and fallbacks. I document everything and can provide monitoring so issues are caught and fixed fast.",
      },
    ],
  },
  {
    slug: "ecommerce",
    title: "Ecommerce Shop Design & Optimization",
    eyebrow: "Sell More",
    description:
      "Storefronts that turn visitors into buyers. Streamlined product pages, frictionless checkout, and layouts tuned for higher conversion.",
    overview:
      "A beautiful store is only worth it if it sells. I design and optimise storefronts around the buyer journey: clear product pages, trust signals, and a frictionless checkout that removes every excuse not to buy. Then I refine based on real behaviour so conversion keeps climbing after launch.",
    image: projectDeeplus,
    skills: [
      "Shopify",
      "Framer / Webflow Commerce",
      "Product Page Design",
      "Checkout Optimisation",
      "Conversion Rate Optimisation",
      "Trust & Social Proof",
      "Analytics",
      "Email Capture",
    ],
    capabilities: [
      {
        title: "Storefront design",
        description:
          "On-brand, mobile-first stores that make products look irresistible and browsing effortless.",
      },
      {
        title: "Product pages that sell",
        description:
          "Clear layouts, strong imagery, reviews, and buy buttons placed exactly where buyers expect them.",
      },
      {
        title: "Checkout optimisation",
        description:
          "Streamlined, low-friction checkout flows that reduce abandonment and recover lost carts.",
      },
      {
        title: "Conversion tuning",
        description:
          "Data-led tweaks to layout, copy, and offers based on how real shoppers actually behave.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Audit",
        description: "Review your store, funnel, and analytics to find where visitors drop off and why.",
      },
      {
        step: "02",
        title: "Design",
        description: "Craft product and category pages built around trust, clarity, and the path to purchase.",
      },
      {
        step: "03",
        title: "Optimise",
        description: "Streamline checkout, add social proof, and tune every step for higher conversion.",
      },
      {
        step: "04",
        title: "Grow",
        description: "Track performance, run improvements, and iterate so revenue keeps compounding.",
      },
    ],
    outcomes: [
      { label: "Higher conversion", value: "+29%" },
      { label: "Cart abandonment", value: "-22%" },
      { label: "Avg. order value", value: "+18%" },
    ],
    featured: ["deeplus-media", "caroline-ayeni"],
    feedbacks: [
      {
        quote:
          "Our store finally feels premium and it sells. Product pages are clearer and checkout drop-off dropped noticeably.",
        name: "Bimpe L.",
        role: "Owner, Lumo Skincare",
      },
      {
        quote:
          "Sylvester understood our buyers better than we did. The optimisations paid for themselves in the first month.",
        name: "Marcus D.",
        role: "Ecommerce Manager",
      },
    ],
    faqs: [
      {
        q: "Which platforms do you build on?",
        a: "Primarily Shopify, plus Framer and Webflow commerce for smaller catalogues. I recommend the best fit for your products and budget.",
      },
      {
        q: "Can you improve my existing store instead of rebuilding?",
        a: "Absolutely. I run a conversion audit and apply targeted improvements to product pages, checkout, and trust signals without a full rebuild.",
      },
      {
        q: "How do you measure success?",
        a: "Conversion rate, cart abandonment, and average order value, tracked before and after so you can see the real revenue impact.",
      },
    ],
  },
  {
    slug: "virtual-assistance",
    title: "Virtual Assistance & Operations",
    eyebrow: "Stay Organised",
    description:
      "Reliable virtual assistance for busy founders: inbox and calendar management, research, data entry, and the day-to-day operations that keep things moving.",
    overview:
      "Founders should spend time on the work only they can do. I take the rest off your plate, from inbox and calendar to research, data entry, and everyday operations, with clear communication and dependable follow-through. Think of it as a calm, organised engine running quietly behind your business.",
    image: projectCaroline,
    skills: [
      "Inbox & Calendar Management",
      "Research & Data Entry",
      "Notion / Airtable",
      "Google Workspace",
      "Project Coordination",
      "Customer Support",
      "SOP Documentation",
      "Scheduling",
    ],
    capabilities: [
      {
        title: "Inbox & calendar",
        description:
          "A tidy inbox and a calendar that runs itself, with meetings booked and priorities surfaced for you.",
      },
      {
        title: "Research & data",
        description:
          "Accurate research, list building, and data entry delivered clean and ready to use.",
      },
      {
        title: "Operations support",
        description:
          "Day-to-day coordination, task tracking, and follow-ups that keep projects moving forward.",
      },
      {
        title: "Systems & SOPs",
        description:
          "Documented processes and templates so your operations stay consistent as you grow.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Onboard",
        description: "Understand your tools, priorities, and preferences so I can work the way you do.",
      },
      {
        step: "02",
        title: "Organise",
        description: "Set up systems for inbox, calendar, and tasks to bring order to the chaos.",
      },
      {
        step: "03",
        title: "Execute",
        description: "Handle the daily work reliably, with clear updates so you always know the status.",
      },
      {
        step: "04",
        title: "Improve",
        description: "Document SOPs and refine workflows so operations run smoother every week.",
      },
    ],
    outcomes: [
      { label: "Hours freed weekly", value: "20+" },
      { label: "Response time", value: "24h" },
      { label: "Tasks handled", value: "100%" },
    ],
    featured: ["caroline-ayeni", "forma-interior"],
    feedbacks: [
      {
        quote:
          "Having Sylvester manage my inbox and calendar gave me back my mornings. Nothing falls through the cracks anymore.",
        name: "Caroline A.",
        role: "Coach & Consultant",
      },
      {
        quote:
          "Reliable, organised, and proactive. He set up systems that keep my whole operation running without me chasing tasks.",
        name: "Tunde O.",
        role: "Founder, Studio Loop",
      },
    ],
    faqs: [
      {
        q: "What tasks can you take off my plate?",
        a: "Inbox and calendar management, research, data entry, scheduling, customer support, project coordination, and documenting SOPs, whatever keeps you from focusing on high-value work.",
      },
      {
        q: "How do we communicate and share access?",
        a: "We agree on your preferred channels and tools up front. I work securely inside your systems with clear, regular status updates so you always know what's handled.",
      },
      {
        q: "Do you offer ongoing support or one-off help?",
        a: "Both. I take on ongoing monthly support as well as short, focused projects like inbox cleanups or system setups.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Experience = {
  id: string;
  org: string;
  role: string;
  period: string;
  detail: string;
  summary: string;
  highlights: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    id: "fiverr",
    org: "Fiverr Platform",
    role: "Freelance Website Designer & Automation Expert",
    period: "2021 to Now",
    detail:
      "Delivering bold, conversion-focused websites for clients worldwide with consistent 5-star ratings.",
    summary:
      "As a top-rated freelancer on Fiverr, I partner with founders and brands across the globe to ship websites that look premium and convert. Every project is treated like a flagship product: strategy first, then a bold visual direction, then clean, fast code.",
    highlights: [
      "Maintained a consistent 5-star rating across global clients",
      "Shipped landing pages, portfolios, and full marketing sites",
      "Built repeatable design systems for faster delivery",
      "Owned projects end to end, from brief to launch and support",
    ],
    skills: ["Web Design", "Conversion Strategy", "Framer", "Client Management"],
  },
  {
    id: "peopleperhour",
    org: "PeoplePerHour",
    role: "Freelance Proposal Writer & Developer",
    period: "2022 to Now",
    detail:
      "Crafting winning proposals and shipping production-ready builds for startups and small businesses.",
    summary:
      "On PeoplePerHour I blend persuasive proposal writing with hands-on development, helping startups and small businesses turn early ideas into production-ready products that earn trust and revenue.",
    highlights: [
      "Wrote winning proposals that turned briefs into booked projects",
      "Delivered production-ready builds for early-stage startups",
      "Translated business goals into clear, scoped deliverables",
      "Built long-term relationships through reliable delivery",
    ],
    skills: ["Proposal Writing", "Development", "Startups", "Scoping"],
  },
  {
    id: "contra",
    org: "Contra",
    role: "Web Developer & Challenge Competitor",
    period: "2023 to Now",
    detail:
      "Competing in design challenges and building independent projects with a sharp editorial edge.",
    summary:
      "Contra is where I push my craft. I compete in design challenges, experiment with bold editorial layouts, and build independent projects that keep my work sharp and ahead of the curve.",
    highlights: [
      "Competed in community design challenges",
      "Explored bold, editorial-led layout systems",
      "Built independent passion projects and concepts",
      "Stayed current with modern web design trends",
    ],
    skills: ["Editorial Design", "Experimentation", "Independent Projects"],
  },
  {
    id: "oau",
    org: "Obafemi Awolowo University",
    role: "B.Eng Mechanical Engineering",
    period: "2020 to 2025",
    detail:
      "Engineering foundation that shapes a structured, problem-solving approach to every product I build.",
    summary:
      "My mechanical engineering background gave me a structured, first-principles approach to problem solving. It is the discipline behind every product I build: break the problem down, test, iterate, and ship something that actually works.",
    highlights: [
      "Trained in structured, first-principles problem solving",
      "Applied analytical thinking to creative and technical work",
      "Balanced rigorous academics with a growing freelance career",
      "Developed strong project and time management habits",
    ],
    skills: ["Problem Solving", "Systems Thinking", "Project Management"],
  },
];

export function getExperience(id: string) {
  return experiences.find((e) => e.id === id);
}

export type Social = { label: string; href: string };

export const socials: Social[] = [
  { label: "Fiverr", href: "https://www.fiverr.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sylvester-olawale-5286b82a2/" },
  { label: "Contra", href: "https://contra.com" },
  { label: "Instagram", href: "https://www.instagram.com/vesterweb3/" },
  { label: "WhatsApp", href: "https://wa.me/2348058496536" },
];

export type ProcessStep = {
  no: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "Discover",
    description:
      "We start with a deep dive into your goals, audience, and competitors so every decision is grounded in strategy, not guesswork.",
  },
  {
    no: "02",
    title: "Design",
    description:
      "I craft a bold, on-brand visual direction with wireframes and high-fidelity mockups, refining until the look feels unmistakably yours.",
  },
  {
    no: "03",
    title: "Build",
    description:
      "Pixel-perfect, responsive development with smooth motion and clean code, optimised for speed and search from the first commit.",
  },
  {
    no: "04",
    title: "Launch",
    description:
      "We test across devices, polish the details, and ship. Then I track performance and iterate so the site keeps converting.",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "50+", label: "Projects delivered" },
  { value: "4+", label: "Years of experience" },
  { value: "5.0", label: "Average client rating" },
  { value: "24h", label: "Typical response time" },
];

export const marqueeItems: string[] = [
  "Website Design",
  "AI Automation",
  "Workflow Design",
  "Framer",
  "Webflow",
  "Ecommerce",
  "Virtual Assistant",
  "Conversion",
  "UI / UX",
  "SEO",
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sylvester turned our vague idea into a website that finally feels like us. Bold, fast, and converting better than anything we had before.",
    name: "Daniel A.",
    role: "Founder, AXION Logistics",
  },
  {
    quote:
      "The whole process was smooth and genuinely creative. He understood the brand instantly and delivered ahead of schedule.",
    name: "Caroline Ayeni",
    role: "Business Coach",
  },
  {
    quote:
      "Our gallery-first site looks like a printed magazine. Clients keep telling us how premium it feels. Worth every naira.",
    name: "Deeplus Media",
    role: "Photography Studio",
  },
  {
    quote:
      "Clear communication, sharp eye for design, and clean code. Rare to find all three in one person.",
    name: "Tomiwa O.",
    role: "Startup Founder",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What kind of projects do you take on?",
    a: "Marketing sites, portfolios, ecommerce storefronts, personal brands, and data dashboards. If it lives on the web and needs to convert, I can build it.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most landing pages take one to two weeks, while full multi-page sites usually run three to five weeks depending on scope and content readiness.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. I work with clients worldwide and keep communication clear across time zones, with regular updates at every stage.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A short brief on your goals, any brand assets you have, and examples of work you love. We refine everything together in the discovery step.",
  },
];
