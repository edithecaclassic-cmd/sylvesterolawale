import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { SelectedWork } from "@/components/site/SelectedWork";
import { Services } from "@/components/site/Services";
import { Experience } from "@/components/site/Experience";
import { ProcessSection } from "@/components/site/ProcessSection";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { StatsBand } from "@/components/site/StatsBand";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sylvester Olaleye | Vibe Coder & Website Developer" },
      {
        name: "description",
        content:
          "Sylvester Olaleye builds fast, bold, conversion-focused websites. Web design, ecommerce, branding, and data analytics for ambitious brands.",
      },
      { property: "og:title", content: "Sylvester Olaleye | Vibe Coder & Website Developer" },
      {
        property: "og:description",
        content:
          "Designing digital experiences that are fast, bold, and conversion-focused.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <StatsBand />
      <SelectedWork />
      <Services />
      <ProcessSection />
      <Testimonials />
      <Experience />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
