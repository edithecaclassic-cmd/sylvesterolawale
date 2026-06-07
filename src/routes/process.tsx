import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Process } from "@/components/site/Process";
import { ContactCTA } from "@/components/site/ContactCTA";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "My Process | Sylvester Olaleye" },
      {
        name: "description",
        content:
          "How Sylvester Olaleye carries out projects: discovery, structure, design, build, and launch.",
      },
      { property: "og:title", content: "My Process | Sylvester Olaleye" },
      {
        property: "og:description",
        content: "A clear, repeatable process from discovery to launch.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <main className="bg-background">
      <Nav />
      <div className="pt-16">
        <Process />
      </div>
      <ContactCTA />
    </main>
  );
}
