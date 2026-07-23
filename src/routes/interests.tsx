import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/interests")({
  head: () => ({
    meta: [
      { title: "Interests — Sonakshi Miyanbazaz" },
      {
        name: "description",
        content:
          "Robotics, AI, sustainability research, and the humanities — interdisciplinary interests.",
      },
      { property: "og:title", content: "Research Interests — Sonakshi Miyanbazaz" },
      {
        property: "og:description",
        content: "Areas of intellectual exploration across engineering and the humanities.",
      },
    ],
  }),
  component: Interests,
});

const areas = [
  {
    t: "Robotics & Engineering",
    d: "Hands-on experience with hardware, drones, calibration, and engineering design.",
    tags: ["Drones", "Hardware", "Calibration"],
  },
  {
    t: "Artificial Intelligence",
    d: "Interest in AI applications and computational approaches to real-world problems.",
    tags: ["ML", "Applications", "Systems"],
  },
  {
    t: "Sustainability Research",
    d: "Exploration of renewable energy solutions, including algae-based biofuels.",
    tags: ["Biofuel", "Energy", "Fieldwork"],
  },
  {
    t: "Philosophy, Psychology & Literature",
    d: "Using writing and debate to understand human behaviour, ideas, and perspectives.",
    tags: ["Essays", "Debate", "Ethics"],
  },
];

const skills = {
  Research: ["Interdisciplinary research", "Academic writing", "Literature review", "Critical analysis"],
  Engineering: ["Robotics", "Drone building & calibration", "Mechanical systems", "Physics applications"],
  Communication: ["Debate", "Essay writing", "Public speaking", "Mentorship"],
  Leadership: ["Outreach", "Community building", "Event management", "Team collaboration"],
};

function Interests() {
  return (
    <div className="container-prose pt-20 pb-16">
      <p className="eyebrow">Research & Intellectual Interests</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
        What I keep coming back to.
      </h1>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {areas.map((a, i) => (
          <article
            key={a.t}
            className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-foreground/40"
          >
            <p className="eyebrow">Area 0{i + 1}</p>
            <h3 className="mt-3 font-serif text-3xl">{a.t}</h3>
            <p className="mt-3 text-base leading-relaxed text-foreground/80">{a.d}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {a.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-28">
        <p className="eyebrow">Skills</p>
        <h2 className="mt-3 font-serif text-4xl">A working toolkit.</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group}>
              <h3 className="border-b border-border pb-3 font-serif text-2xl">{group}</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {list.map((s) => (
                  <li key={s}>— {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
