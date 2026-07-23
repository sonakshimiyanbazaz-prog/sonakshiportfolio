import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sonakshi Miyanbazaz" },
      {
        name: "description",
        content:
          "Sonakshi is a high school student passionate about building, researching, and exploring ideas across disciplines.",
      },
      { property: "og:title", content: "About — Sonakshi Miyanbazaz" },
      {
        property: "og:description",
        content: "Curiosity-driven learning across engineering, science, and the humanities.",
      },
    ],
  }),
  component: About,
});

const focus = [
  { t: "AI & Computational Approaches", d: "Applying computation to messy real-world problems." },
  { t: "Robotics & Engineering", d: "Hands-on hardware, drones, mechanical systems." },
  { t: "Physics", d: "The quiet, patient discipline that grounds every other science." },
  { t: "Philosophy & Literature", d: "Because how we think shapes what we build." },
  { t: "Research-Driven Problem Solving", d: "Slow questions, careful method." },
];

function About() {
  return (
    <div className="container-prose pt-20 pb-16">
      <p className="eyebrow">About</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
        A student of machines, ideas, and the space between them.
      </h1>

      <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <aside className="space-y-6">
          <div>
            <p className="eyebrow">Values</p>
            <ul className="mt-3 space-y-2 font-serif text-xl">
              <li>Curiosity-driven learning</li>
              <li>An engineer's mindset</li>
              <li>Love for complex questions</li>
              <li>Technology with a human lens</li>
            </ul>
          </div>
        </aside>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Sonakshi is a high school student passionate about building, researching, and
            exploring ideas across disciplines. Her journey extends beyond classrooms — through
            robotics projects, sustainability research, academic writing, and leadership
            experiences.
          </p>
          <p>
            She works comfortably between the technical and the humanistic: calibrating a drone
            one afternoon, drafting a philosophy essay the next. What connects them, she'd say,
            is the same instinct — to look closely, to ask why, and to try building something
            better from what she finds.
          </p>
          <p>
            She believes the interesting problems live at the seams — where engineering meets
            ethics, where physics meets philosophy, where a research question quietly reshapes a
            product.
          </p>
        </div>
      </div>

      <div className="mt-24">
        <p className="eyebrow">Focus areas</p>
        <div className="mt-6 grid gap-px overflow-hidden rounded-md bg-border sm:grid-cols-2 lg:grid-cols-3">
          {focus.map((f) => (
            <div key={f.t} className="bg-card p-6">
              <h3 className="font-serif text-2xl">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
