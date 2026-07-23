import { createFileRoute, Link } from "@tanstack/react-router";
import { Portrait } from "../components/Portrait";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonakshi Miyanbazaz — Researcher & Aspiring Mechatronics Engineer" },
      {
        name: "description",
        content:
          "Curiosity at the intersection of AI, robotics, physics, and interdisciplinary thinking.",
      },
      { property: "og:title", content: "Sonakshi Miyanbazaz — Portfolio" },
      {
        property: "og:description",
        content: "Researcher, builder, interdisciplinary thinker.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="container-prose pt-16 pb-24 sm:pt-24">
      <div>
        <p className="eyebrow">Portfolio · 2026</p>
        <div className="mt-6 flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
          <h1 className="text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Hello, I'm <span className="italic">Sonakshi</span>
            <br />
            Miyanbazaz.
          </h1>
          <Portrait className="w-40 flex-shrink-0 shadow-[0_30px_80px_-40px_rgba(30,30,30,0.35)] ring-1 ring-border sm:w-52 md:w-60" />
        </div>
        <p className="mt-8 max-w-xl font-serif text-xl italic text-muted-foreground">
          High School Senior · Aspiring Mechatronics Engineer · Researcher · STEM Enthusiast
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
          I'm drawn to the questions that sit between how technology works and how people
          behave. My curiosity lies at the intersection of AI, robotics, physics, and
          interdisciplinary thinking.
        </p>
        <div className="mt-4 flex gap-6 text-xs text-muted-foreground">
          <span className="eyebrow">Jaipur, India</span>
          <span className="eyebrow">Class of 2027</span>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/research"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-foreground/85"
          >
            Explore my work →
          </Link>
          <Link
            to="/publications"
            className="rounded-full border border-foreground/80 px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            View publications
          </Link>
          <Link
            to="/contact"
            className="rounded-full px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Connect with me
          </Link>
        </div>
      </div>

      </div>

      {/* focus areas strip */}
      <div className="mt-28">
        <div className="hairline" />
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:grid-cols-4">
          {[
            { k: "01", t: "Mechatronics" },
            { k: "02", t: "Robotics & Drones" },
            { k: "03", t: "Artificial Intelligence" },
            { k: "04", t: "Physics & Philosophy" },
          ].map((f) => (
            <div key={f.k}>
              <p className="eyebrow">{f.k}</p>
              <p className="mt-2 font-serif text-2xl">{f.t}</p>
            </div>
          ))}
        </div>
        <div className="hairline" />
      </div>

      {/* short bio teaser */}
      <div className="mt-24 grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <div>
          <p className="eyebrow">Currently</p>
          <h2 className="mt-3 font-serif text-3xl">A note from the desk</h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            I spend my days between soldering irons and philosophy essays — building drones one
            weekend, sitting with Kant the next. What ties it together is a stubborn belief that
            good engineering begins with good questions.
          </p>
          <p>
            Right now I'm exploring how mechatronic systems can be more responsive to the
            environments they inhabit, and writing about the human ideas that quietly shape the
            machines we make.
          </p>
          <Link
            to="/about"
            className="inline-block border-b border-foreground pb-0.5 text-sm hover:text-accent"
          >
            Read more about me →
          </Link>
        </div>
      </div>
    </div>
  );
}
