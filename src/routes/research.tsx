import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Writing — Sonakshi Miyanbazaz" },
      {
        name: "description",
        content:
          "Ongoing research threads across robotics, sustainability, AI, and philosophy.",
      },
      { property: "og:title", content: "Research & Writing — Sonakshi Miyanbazaz" },
      {
        property: "og:description",
        content: "Curious about where engineering meets human questions.",
      },
    ],
  }),
  component: Research,
});

const threads = [
  {
    kind: "Engineering",
    title: "Building the S-500 drone",
    note:
      "Assembling and calibrating an S-500 quadcopter from scratch — a first proper conversation between theory and hardware.",
  },
  {
    kind: "Sustainability",
    title: "Algae-based biofuel extraction",
    note:
      "Investigated how microalgae can be cultivated and processed into viable fuels at Plaksha's Young Technology Scholars Programme.",
  },
  {
    kind: "Philosophy",
    title: "Objectivity, morality, motive",
    note:
      "Essays exploring perception, ethical intention, and the quiet spaces between certainty and doubt.",
  },
  {
    kind: "Science",
    title: "Frontiers of Science",
    note:
      "Interdisciplinary reading and discussion across physics, biology, and cognitive science at Ashoka University.",
  },
];

function Research() {
  return (
    <div className="container-prose pt-20 pb-16">
      <p className="eyebrow">Research & Writing</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
        Ongoing threads.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A working notebook of the projects, essays, and questions I'm currently exploring.
      </p>

      <div className="mt-16 grid gap-px overflow-hidden rounded-md bg-border sm:grid-cols-2">
        {threads.map((t) => (
          <article key={t.title} className="bg-card p-8">
            <p className="eyebrow">{t.kind}</p>
            <h3 className="mt-3 font-serif text-2xl leading-snug">{t.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{t.note}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-3xl">Read the writing</h2>
          <p className="mt-2 text-muted-foreground">
            Awarded and shortlisted essays live in the publications archive.
          </p>
        </div>
        <Link
          to="/publications"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background hover:bg-foreground/85"
        >
          View publications →
        </Link>
      </div>
    </div>
  );
}
