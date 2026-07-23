import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Sonakshi Miyanbazaz" },
      {
        name: "description",
        content:
          "Academic path: Jayshree Periwal Global School, Oxford Scholars Programme, Plaksha YTS, Ashoka Young Scholars.",
      },
      { property: "og:title", content: "Education — Sonakshi Miyanbazaz" },
      {
        property: "og:description",
        content: "High school studies and academic programmes shaping her research path.",
      },
    ],
  }),
  component: Education,
});

const programmes = [
  {
    name: "Oxford Scholars Programme",
    focus: "Engineering & Technology",
    year: "Summer Programme",
    bullets: [
      "Explored engineering and technology fundamentals",
      "Built and calibrated an S-500 drone from scratch",
      "Developed hands-on robotics and problem-solving skills",
    ],
  },
  {
    name: "Plaksha University — Young Technology Scholars",
    focus: "Technology & Sustainability",
    year: "Summer Programme",
    bullets: [
      "Explored technology and sustainability at scale",
      "Researched algae-based biofuel extraction",
      "Connected scientific concepts to real-world applications",
    ],
  },
  {
    name: "Ashoka University — Young Scholars Programme",
    focus: "Frontiers of Science",
    year: "Summer Programme",
    bullets: [
      "Studied frontiers of scientific thinking",
      "Explored interdisciplinary research approaches",
      "Engaged with faculty across disciplines",
    ],
  },
];

function Education() {
  return (
    <div className="container-prose pt-20 pb-16">
      <p className="eyebrow">Education</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
        Where the questions began.
      </h1>

      {/* Primary school */}
      <div className="mt-16 rounded-lg border border-border bg-card p-8 sm:p-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <p className="eyebrow">Current school</p>
            <h2 className="mt-2 font-serif text-3xl">Jayshree Periwal Global School</h2>
            <p className="mt-2 text-muted-foreground">High School Senior · Grade 12</p>
          </div>
          <div className="text-right">
            <p className="eyebrow">Graduating</p>
            <p className="mt-2 font-serif text-3xl">2027</p>
          </div>
        </div>
      </div>

      {/* Programmes */}
      <div className="mt-20">
        <p className="eyebrow">Academic programmes</p>
        <div className="mt-8 space-y-px overflow-hidden rounded-md border border-border">
          {programmes.map((p, i) => (
            <article
              key={p.name}
              className="grid gap-6 bg-card p-8 sm:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] sm:p-10"
            >
              <div>
                <p className="eyebrow">0{i + 1}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.focus} · {p.year}</p>
              </div>
              <ul className="space-y-2 text-base leading-relaxed text-foreground/85">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1 w-3 flex-none bg-foreground/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
