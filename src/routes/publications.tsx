import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publication & Writing — Sonakshi Miyanbazaz" },
      {
        name: "description",
        content:
          "Essays and awards including John Locke Institute Global Essay Prize and Lumiere Scholars Essay Prize.",
      },
      { property: "og:title", content: "Publication & Writing — Sonakshi Miyanbazaz" },
      {
        property: "og:description",
        content: "A digital archive of essays, competitions, and recognitions.",
      },
    ],
  }),
  component: Publications,
});

type Pub = {
  competition: string;
  year: string;
  category?: string;
  title?: string;
  recognition: string;
  description: string;
  link?: string;
};

const pubs: Pub[] = [
  {
    competition: "John Locke Institute Global Essay Prize",
    year: "2025",
    category: "Psychology",
    title: "Is objectivity all in the mind?",
    recognition: "Commendation",
    description:
      "Explored questions surrounding objectivity, perception, and human understanding.",
    link: "https://docs.google.com/document/d/1LNdvjUSDTlo5njJMG4CsOu1JAOdEad1iXatWRFfd9Mo/edit?tab=t.0",
  },
  {
    competition: "Lumiere Scholars Essay Prize",
    year: "2026",
    title:
      "In the new age of Generative AI, what are the most important impacts on education?",
    recognition: "Distinction Award",
    description:
      "Academic essay demonstrating analytical thinking and independent exploration of complex ideas.",
    link: "https://docs.google.com/document/d/1uzzfMzjhiucrB6NU35UhJWgwELU8s5nr_gUJEUr5oXk/edit?tab=t.2fau81m54lz7",
  },
  {
    competition: "John Locke Institute Global Essay Prize",
    year: "2026",
    category: "Philosophy",
    title: "Is it ever wrong to do the right thing for the wrong reasons?",
    recognition: "Shortlisted for the Global Essay Prize",
    description: "Explored morality, intention, and ethical reasoning.",
    link: "https://docs.google.com/document/d/1b7IL_iTNFMWobOxwnMT5kkoffkTobgjVzYjKPzIKlxw/edit?usp=sharing",
  },
];

function Publications() {
  return (
    <div className="container-prose pt-20 pb-16">
      <p className="eyebrow">Publication & Writing Archive</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
        Publication & Writing.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A working archive of essays submitted to international competitions — the arguments
        I've tried to make and the questions I've kept.
      </p>

      <div className="mt-16 space-y-6">
        {pubs.map((p, i) => (
          <article
            key={i}
            className="grid gap-8 rounded-lg border border-border bg-card p-8 sm:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] sm:p-10"
          >
            <div>
              <p className="eyebrow">Entry 0{i + 1}</p>
              <p className="mt-3 font-serif text-2xl leading-snug">{p.competition}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.year}</p>
              {p.category && (
                <span className="mt-4 inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {p.category}
                </span>
              )}
            </div>
            <div>
              {p.title && (
                <h3 className="font-serif text-3xl italic leading-tight">"{p.title}"</h3>
              )}
              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <p className="text-sm font-medium tracking-wide">{p.recognition}</p>
              </div>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/80">
                {p.description}
              </p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block border-b border-foreground pb-0.5 text-sm hover:text-accent"
                >
                  Read essay →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
