import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sonakshi Miyanbazaz" },
      {
        name: "description",
        content:
          "Ambassador at Oxford Scholars Programme and volunteer educator at Samarth Sansthan.",
      },
      { property: "og:title", content: "Experience — Sonakshi Miyanbazaz" },
      {
        property: "og:description",
        content: "Roles across academic outreach and inclusive education.",
      },
    ],
  }),
  component: Experience,
});

const roles = [
  {
    role: "Programme Ambassador",
    org: "Oxford Scholars Programme",
    period: "2025 — Present",
    bullets: [
      "Represented OSP through academic outreach and student engagement",
      "Mentored students through applications and interviews",
      "Created content sharing programme experiences",
      "Produced an outreach reel that reached 3.5K+ views",
      "Supported community building among prospective and current scholars",
    ],
  },
  {
    role: "Volunteer Educator",
    org: "Samarth Sansthan",
    period: "Ongoing",
    bullets: [
      "Completed 100+ hours of volunteering",
      "Supported students with learning differences including dyslexia and autism",
      "Taught mathematics and English to underprivileged students near Jaipur",
      "Advocated for inclusive, accessible education",
    ],
  },
];

function Experience() {
  return (
    <div className="container-prose pt-20 pb-16">
      <p className="eyebrow">Experience</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
        Work beyond the classroom.
      </h1>

      <ol className="mt-16 space-y-14 border-l border-border pl-8 sm:pl-12">
        {roles.map((r) => (
          <li key={r.role} className="relative">
            <span className="absolute -left-[41px] sm:-left-[57px] top-2 flex h-4 w-4 items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
              <span className="absolute inset-0 rounded-full ring-1 ring-foreground/30" />
            </span>
            <p className="eyebrow">{r.period}</p>
            <h2 className="mt-2 font-serif text-3xl">{r.role}</h2>
            <p className="mt-1 text-muted-foreground">{r.org}</p>
            <ul className="mt-5 space-y-2 text-base leading-relaxed text-foreground/85">
              {r.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-3 flex-none bg-foreground/40" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
