import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sylvester Olaleye" },
      {
        name: "description",
        content:
          "Privacy Policy for Vibe x Vester — how Sylvester Olaleye collects, uses, and protects your personal information.",
      },
      { property: "og:title", content: "Privacy Policy | Sylvester Olaleye" },
      {
        property: "og:description",
        content: "How we collect, use, and protect your personal information.",
      },
    ],
  }),
  component: PrivacyPage,
});

type Section = {
  heading: string;
  short?: string;
  paragraphs?: string[];
  list?: string[];
};

const sections: Section[] = [
  {
    heading: "1. What Information Do We Collect?",
    short: "We collect personal information that you provide to us.",
    paragraphs: [
      "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.",
      "The personal information we collect may include the following:",
    ],
    list: ["Email addresses", "Job titles", "Phone numbers"],
  },
  {
    heading: "Information Automatically Collected",
    short:
      "Some information — such as your IP address and/or browser and device characteristics — is collected automatically when you visit our Services.",
    paragraphs: [
      "This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Services. This is primarily needed to maintain the security and operation of our Services, and for internal analytics and reporting.",
    ],
  },
  {
    heading: "2. How Do We Process Your Information?",
    short:
      "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.",
    list: [
      "To deliver and facilitate delivery of services to the user.",
      "To respond to user inquiries and offer support.",
      "To send administrative information to you.",
      "To fulfil and manage your orders, payments, and exchanges.",
      "To enable user-to-user communications.",
      "To send marketing and promotional communications you can opt out of at any time.",
      "To protect our Services, including fraud monitoring and prevention.",
      "To identify usage trends and improve our Services.",
    ],
  },
  {
    heading: "3. What Legal Bases Do We Rely On?",
    short:
      "We only process your personal information when we have a valid legal reason to do so under applicable law.",
    paragraphs: [
      "Depending on your location, we may rely on consent, performance of a contract, legitimate interests, legal obligations, or vital interests as the legal basis for processing your personal information. You can withdraw your consent at any time.",
    ],
  },
  {
    heading: "4. When And With Whom Do We Share Information?",
    short: "We may share information in specific situations described below.",
    paragraphs: [
      "We may share your personal information in connection with business transfers, with service providers who help us operate the Services, or where required to comply with legal obligations. We do not sell your personal information.",
    ],
  },
  {
    heading: "5. Do We Use Cookies And Tracking Technologies?",
    short:
      "We may use cookies and similar technologies to gather information and improve our Services.",
    paragraphs: [
      "We may use cookies and similar tracking technologies (like web beacons and pixels) to maintain the security and operation of our Services, and to analyse usage. You can control cookies through your browser settings.",
    ],
  },
  {
    heading: "6. How Long Do We Keep Your Information?",
    short:
      "We keep your information only for as long as necessary for the purposes set out in this notice.",
    paragraphs: [
      "We will retain your personal information only for as long as it is needed to fulfil the purposes outlined in this Privacy Notice, unless a longer retention period is required or permitted by law.",
    ],
  },
  {
    heading: "7. How Do We Keep Your Information Safe?",
    short:
      "We aim to protect your personal information through organisational and technical security measures.",
    paragraphs: [
      "However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise that unauthorised third parties will never be able to defeat our security and improperly access your information.",
    ],
  },
  {
    heading: "8. Do We Collect Information From Minors?",
    short: "We do not knowingly collect data from or market to children under 18 years of age.",
    paragraphs: [
      "By using the Services, you represent that you are at least 18 or that you are the parent or guardian of a minor and consent to the minor's use of the Services. If we learn that personal information from users under 18 has been collected, we will take steps to delete it.",
    ],
  },
  {
    heading: "9. What Are Your Privacy Rights?",
    short:
      "Depending on your location, you may have rights to access, correct, or delete your personal information.",
    paragraphs: [
      "You may review, change, or terminate your relationship with us at any time. To exercise your rights, you can submit a data subject access request or contact us using the details below.",
    ],
  },
  {
    heading: "10. Controls For Do-Not-Track Features",
    paragraphs: [
      "Most web browsers include a Do-Not-Track (DNT) feature. As no uniform technology standard for recognising DNT signals has been finalised, we do not currently respond to DNT browser signals.",
    ],
  },
  {
    heading: "11. United States Residents",
    paragraphs: [
      "If you are a resident of certain US states, you may have specific rights regarding access to and use of your personal information, including the right to know, access, correct, and delete your data.",
    ],
  },
  {
    heading: "12. Other Regions",
    paragraphs: [
      "Residents of other regions, including the EU, UK, and other jurisdictions, may have additional rights under applicable data protection laws.",
    ],
  },
  {
    heading: "13. Do We Make Updates To This Notice?",
    short: "Yes, we will update this notice as necessary to stay compliant with relevant laws.",
    paragraphs: [
      "The updated version will be indicated by a revised date and will be effective as soon as it is accessible. We encourage you to review this Privacy Notice frequently.",
    ],
  },
  {
    heading: "14. How Can You Contact Us?",
    paragraphs: [
      "If you have questions or comments about this notice, you may contact us by email at sylvesterolaleye4@gmail.com.",
    ],
  },
  {
    heading: "15. Review, Update, Or Delete Your Data",
    paragraphs: [
      "Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. To request this, please contact us at sylvesterolaleye4@gmail.com.",
    ],
  },
];

function PrivacyPage() {
  return (
    <main className="bg-background">
      <Nav />

      <section className="bg-hero pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
            Vibe x Vester
          </span>
          <h1 className="mt-5 font-display text-5xl leading-[0.9] tracking-tight text-white md:text-7xl">
            PRIVACY POLICY
          </h1>
          <p className="mt-4 text-sm text-white/70">Last updated June 07, 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-base leading-relaxed text-foreground/80">
            This Privacy Notice for Vibe x Vester ("we", "us", or "our") describes how and
            why we might access, collect, store, use, and/or share ("process") your personal
            information when you use our services ("Services"). This is a portfolio website
            for Olaleye Sylvester — a vibe coder, developer, ecommerce virtual assistant, AI
            automation specialist, and data analyst.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Questions or concerns? If you do not agree with our policies and practices, please
            do not use our Services. If you have any questions, contact us at{" "}
            <a
              href="mailto:sylvesterolaleye4@gmail.com"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              sylvesterolaleye4@gmail.com
            </a>
            .
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <div key={s.heading} className="border-t border-border pt-8">
                <h2 className="font-heading text-xl font-bold md:text-2xl">{s.heading}</h2>
                {s.short && (
                  <p className="mt-3 text-sm font-semibold italic text-foreground/70">
                    In short: {s.short}
                  </p>
                )}
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base text-muted-foreground">
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
