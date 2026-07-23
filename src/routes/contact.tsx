import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sonakshi Miyanbazaz" },
      {
        name: "description",
        content:
          "Get in touch with Sonakshi Miyanbazaz — email and LinkedIn.",
      },
      { property: "og:title", content: "Contact — Sonakshi Miyanbazaz" },
      {
        property: "og:description",
        content: "Always open to conversations around technology, research, innovation, and ideas.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="container-prose pt-20 pb-16">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
        Let's talk.
      </h1>
      <p className="mt-8 max-w-2xl font-serif text-2xl italic text-foreground/80">
        "Always open to conversations around technology, research, innovation, and ideas."
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        <a
          href="mailto:sonakshimiyanbazaz@gmail.com"
          className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-foreground/40"
        >
          <p className="eyebrow">Email</p>
          <p className="mt-3 font-serif text-2xl transition-colors group-hover:text-accent">
            sonakshimiyanbazaz@gmail.com
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            For research collaborations, mentorship, or a curious question.
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/sonakshi-miyanbazaz-15545b298"
          target="_blank"
          rel="noreferrer"
          className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-foreground/40"
        >
          <p className="eyebrow">LinkedIn</p>
          <p className="mt-3 break-words font-serif text-2xl transition-colors group-hover:text-accent">
            sonakshi-miyanbazaz-15545b298
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Connect for professional networking and updates on new work.
          </p>
        </a>
      </div>

      <div className="mt-20 border-t border-border pt-10 text-center">
        <p className="font-serif text-3xl italic">Thank you for reading.</p>
        <p className="mt-3 text-sm text-muted-foreground">— Sonakshi</p>
      </div>
    </div>
  );
}
