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

export type Service = {
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Website Design & Development",
    description:
      "I design and build fast, bold, conversion-focused websites using Framer, Webflow, and modern builders. From first concept to launch day: clean, modern, and client-ready.",
    image: projectAxion,
  },
  {
    title: "AI Automation & Workflow Design",
    description:
      "I design intelligent automations and workflows that remove repetitive work, connect your tools, and let your business run smoothly with less manual effort.",
    image: projectForma,
  },
  {
    title: "Ecommerce Shop Design & Optimization",
    description:
      "Storefronts that turn visitors into buyers. Streamlined product pages, frictionless checkout, and layouts tuned for higher conversion.",
    image: projectDeeplus,
  },
  {
    title: "Virtual Assistance & Operations",
    description:
      "Reliable virtual assistance for busy founders: inbox and calendar management, research, data entry, and the day-to-day operations that keep things moving.",
    image: projectCaroline,
  },
];

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
