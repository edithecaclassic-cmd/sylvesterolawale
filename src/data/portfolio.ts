import projectDeeplus from "@/assets/project-deeplus.jpg";
import projectAxion from "@/assets/project-axion.jpg";
import projectCaroline from "@/assets/project-caroline.jpg";
import projectForma from "@/assets/project-forma.jpg";
import mockupDeeplus from "@/assets/mockup-deeplus.jpg";

export type Project = {
  slug: string;
  initials: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  mockup?: string;
  liveUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: "deeplus-media",
    initials: "DM",
    title: "Deeplus Media",
    category: "Photography Studio Website",
    year: "2025",
    description: "Editorial website build for a Lagos-based wedding and portrait photography studio.",
    tags: ["Web Design", "Editorial", "Framer"],
    image: projectDeeplus,
    mockup: mockupDeeplus,
    liveUrl: "https://deeplusdefinition.vercel.app",
    overview:
      "Deeplus Media is a Lagos-based photography studio specialising in weddings, portraits and the moments in between. They needed a website that felt as intentional as their photography: cinematic, calm, and built to let the images do the talking.",
    challenge:
      "The studio had 8 years of work and 375+ delivered projects, but no digital home that matched the quality of the craft. Galleries felt like a feed instead of a wall, and there was no clear path from browsing to booking a shoot.",
    solution:
      "I designed and built a dark, editorial layout with a large serif hero, a curated selected-work gallery, and a clear services breakdown for weddings, portraits, convocations and editorial brand work. Typography and spacing were tuned so every frame is given room to breathe.",
    results: [
      "375+ projects showcased in a curated, gallery-first layout",
      "4.7 star reputation across 137 verified reviews surfaced for trust",
      "Clear booking path from gallery to enquiry",
      "Fast, image-first experience optimised for mobile",
    ],
    deliverables: ["Web Design", "Art Direction", "Gallery System", "Responsive Build"],
  },
  {
    slug: "axion-logistics",
    initials: "AX",
    title: "AXION Logistics",
    category: "Logistics Website Redesign",
    year: "2024",
    description: "Website redesign for a logistics company with a bold editorial aesthetic.",
    tags: ["Web Design", "Framer"],
    image: projectAxion,
    overview:
      "AXION is a logistics company moving freight across borders. The brief was to replace a dated brochure site with a bold, confident presence that signals scale and reliability.",
    challenge:
      "The old site buried key services and tracking under cluttered navigation, and the visual language felt generic next to bolder competitors.",
    solution:
      "I rebuilt the site around a strong editorial grid with large type, clear service tiers, and a streamlined quote flow that gets visitors to action faster.",
    results: [
      "Clearer service hierarchy and stronger first impression",
      "Faster path to requesting a quote",
      "Distinct, confident brand presence",
    ],
    deliverables: ["Web Design", "Information Architecture", "Responsive Build"],
  },
  {
    slug: "caroline-ayeni",
    initials: "CA",
    title: "Caroline Ayeni Coaching",
    category: "Coaching Website Redesign",
    year: "2024",
    description: "Personal coaching website redesign with a warm, conversion-focused layout.",
    tags: ["Web Design", "Framer"],
    image: projectCaroline,
    overview:
      "Caroline is a personal coach helping clients grow with clarity. She needed a warm, trustworthy website that turns visitors into booked discovery calls.",
    challenge:
      "Her previous site felt cold and made it hard to understand her offers or take the next step.",
    solution:
      "I crafted a warm, human layout with clear program tiers, testimonials, and a focused call-to-action that leads to a discovery call.",
    results: [
      "Warm, on-brand experience that builds trust",
      "Clear program structure and pricing",
      "Stronger conversion to discovery calls",
    ],
    deliverables: ["Web Design", "Copy Direction", "Responsive Build"],
  },
  {
    slug: "forma-interior",
    initials: "FI",
    title: "FORMA Interior Design Studio",
    category: "Interior Design Studio (Concept)",
    year: "2023",
    description: "Luxury interior design studio speculative redesign with a refined gallery.",
    tags: ["Web Design", "Concept", "Framer"],
    image: projectForma,
    overview:
      "FORMA is a speculative concept for a luxury interior design studio, exploring how a refined gallery experience can feel as considered as the spaces it presents.",
    challenge:
      "Luxury interior work demands a presentation that feels premium without being heavy or slow.",
    solution:
      "I designed a refined, gallery-led layout with generous whitespace, subtle motion, and a portfolio system that lets each project breathe.",
    results: [
      "Premium, gallery-first presentation",
      "Subtle motion that elevates without distraction",
      "Flexible project showcase system",
    ],
    deliverables: ["Web Design", "Art Direction", "Concept Build"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export type Service = {
  slug: string;
  title: string;
  description: string;
  details: string;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Vibe Coding & Web Development",
    description:
      "I build fast, bold, conversion-focused websites using Framer, Webflow, and modern builders. From first concept to launch day: clean, modern, and client-ready.",
    details:
      "Every build starts with strategy and ends with a site that loads fast, ranks well, and converts. I handle design, build, and launch so you get a polished, client-ready website without the back-and-forth.",
    features: ["Custom design systems", "Framer & Webflow builds", "SEO-ready structure", "Fast, responsive performance"],
    image: projectAxion,
  },
  {
    slug: "ecommerce",
    title: "Ecommerce Shop Design & Optimization",
    description:
      "Storefronts that turn visitors into buyers. Streamlined product pages, frictionless checkout, and layouts tuned for higher conversion.",
    details:
      "I design storefronts around the buyer journey, removing friction at every step so more visitors reach checkout and come back again.",
    features: ["Product page design", "Frictionless checkout", "Conversion optimisation", "Mobile-first layouts"],
    image: projectDeeplus,
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Reporting",
    description:
      "Clear dashboards and reports that make your numbers easy to read, so every business decision is backed by real insight.",
    details:
      "I turn raw numbers into clear dashboards and reports, so you can see what's working and make confident, data-backed decisions.",
    features: ["Custom dashboards", "Automated reporting", "KPI tracking", "Clear data storytelling"],
    image: projectForma,
  },
  {
    slug: "branding",
    title: "Branding & Identity",
    description:
      "Memorable brand systems with logos, type, and color built to feel cohesive everywhere your business shows up.",
    details:
      "I build cohesive brand systems, logo, type, colour and voice, so your business looks consistent and memorable everywhere it appears.",
    features: ["Logo & identity", "Typography systems", "Colour direction", "Brand guidelines"],
    image: projectCaroline,
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Experience = {
  org: string;
  role: string;
  period: string;
  detail: string;
};

export const experiences: Experience[] = [
  {
    org: "Fiverr Platform",
    role: "Freelance Web Designer & Vibe Coder",
    period: "2021 to Now",
    detail:
      "Delivering bold, conversion-focused websites for clients worldwide with consistent 5-star ratings.",
  },
  {
    org: "PeoplePerHour",
    role: "Freelance Proposal Writer & Developer",
    period: "2022 to Now",
    detail:
      "Crafting winning proposals and shipping production-ready builds for startups and small businesses.",
  },
  {
    org: "Contra",
    role: "Web Developer & Challenge Competitor",
    period: "2023 to Now",
    detail:
      "Competing in design challenges and building independent projects with a sharp editorial edge.",
  },
  {
    org: "Obafemi Awolowo University",
    role: "B.Eng Mechanical Engineering",
    period: "2020 to 2025",
    detail:
      "Engineering foundation that shapes a structured, problem-solving approach to every product I build.",
  },
];

export type Social = {
  label: string;
  url: string;
};

export const socials: Social[] = [
  { label: "Fiverr", url: "https://www.fiverr.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sylvester-olawale-5286b82a2/" },
  { label: "Contra", url: "https://contra.com" },
  { label: "Instagram", url: "https://www.instagram.com/vesterweb3/" },
  { label: "WhatsApp", url: "https://wa.me/2348058496536" },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We start with a deep dive into your goals, audience, and competitors, so every decision that follows is backed by a clear plan.",
  },
  {
    number: "02",
    title: "Wireframe & Structure",
    description:
      "I map the journey, content hierarchy and layout before any visuals, making sure the experience guides visitors toward action.",
  },
  {
    number: "03",
    title: "Design & Direction",
    description:
      "Bold, on-brand visuals come to life, typography, colour and motion crafted to feel premium and convert.",
  },
  {
    number: "04",
    title: "Build & Develop",
    description:
      "I bring the design to life with clean, fast, responsive code, optimised for performance and SEO from day one.",
  },
  {
    number: "05",
    title: "Launch & Optimise",
    description:
      "We ship, test, and refine, then keep improving with real data so your site gets better over time.",
  },
];
