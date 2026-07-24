import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Distinctions — Sonakshi Miyanbazaz" },
      {
        name: "description",
        content:
          "Recognitions including Lumiere Scholars Essay Prize, John Locke Institute Global Essay Prize, and Bharat Open National Taekwondo Championship.",
      },
      { property: "og:title", content: "Awards & Distinctions — Sonakshi Miyanbazaz" },
      {
        property: "og:description",
        content:
          "A record of awards, shortlists, and distinctions across academic writing and sport.",
      },
    ],
  }),
  component: Awards,
});

const awards = [
  {
    title: "John Locke Institute Global Essay Prize 2026",
    detail:
      "Shortlisted — Philosophy: \"Is it ever wrong to do the right thing for the wrong reasons?\"",
  },
  {
    title: "Lumiere Scholars Essay Prize 2026",
    detail:
      "Distinction Award — \"In the new age of Generative AI, what are the most important impacts on education?\"",
  },
  {
    title: "John Locke Institute Global Essay Prize 2025",
    detail: "Commendation — Psychology: \"Is objectivity all in the mind?\"",
  },
  {
    title: "Bharat Open National Taekwondo Championship 2023",
    detail: "Gold medal — Open Nationals, Grade 9",
  },
];

function Awards() {
  return (
    <div className="container-prose pt-20 pb-16">
      <p className="eyebrow">Recognition</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
        Awards & distinctions.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A record of awards, shortlists, and distinctions across academic writing, research, and sport.
      </p>

      <div className="mt-16 space-y-14 border-l border-border pl-8 sm:pl-12">
        {awards.map((a, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[41px] sm:-left-[57px] top-2 flex h-4 w-4 items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
              <span className="absolute inset-0 rounded-full ring-1 ring-foreground/30" />
            </span>
            <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-2 font-serif text-3xl">{a.title}</h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground/85">
              {a.detail}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
