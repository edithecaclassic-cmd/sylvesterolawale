import projectDeeplus from "@/assets/project-deeplus.jpg";
import projectAxion from "@/assets/project-axion.jpg";
import projectCaroline from "@/assets/project-caroline.jpg";
import projectForma from "@/assets/project-forma.jpg";

export type Project = {
  id: string;
  initials: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: "deeplus-media",
    initials: "DM",
    title: "Deeplus Media",
    description: "Full brand identity and website build for a Nigerian media company.",
    tags: ["Web Design", "Framer"],
    image: projectDeeplus,
  },
  {
    id: "axion-logistics",
    initials: "AX",
    title: "AXION Logistics",
    description: "Website redesign for a logistics company with a bold editorial aesthetic.",
    tags: ["Web Design", "Framer"],
    image: projectAxion,
  },
  {
    id: "caroline-ayeni",
    initials: "CA",
    title: "Caroline Ayeni Coaching",
    description: "Personal coaching website redesign with a warm, conversion-focused layout.",
    tags: ["Web Design", "Framer"],
    image: projectCaroline,
  },
  {
    id: "forma-interior",
    initials: "FI",
    title: "FORMA Interior Design Studio",
    description: "Luxury interior design studio speculative redesign with a refined gallery.",
    tags: ["Web Design", "Framer"],
    image: projectForma,
  },
];

export type Service = {
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Vibe Coding & Web Development",
    description:
      "I build fast, bold, conversion-focused websites using Framer, Webflow, and modern builders. From first concept to launch day: clean, modern, and client-ready.",
    image: projectAxion,
  },
  {
    title: "Ecommerce Shop Design & Optimization",
    description:
      "Storefronts that turn visitors into buyers. Streamlined product pages, frictionless checkout, and layouts tuned for higher conversion.",
    image: projectDeeplus,
  },
  {
    title: "Data Analytics & Reporting",
    description:
      "Clear dashboards and reports that make your numbers easy to read, so every business decision is backed by real insight.",
    image: projectForma,
  },
  {
    title: "Branding & Identity",
    description:
      "Memorable brand systems with logos, type, and color built to feel cohesive everywhere your business shows up.",
    image: projectCaroline,
  },
];

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

export const socials = ["Fiverr", "LinkedIn", "Contra", "Instagram"];
