import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Academic", "Personal"];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          index="02"
          label="The Logic Exhibit"
          title="Projects that compile curiosity into code."
          subtitle="Each one is a case study — a problem, a hypothesis, and an artifact. Click any card to open the deep trace."
        />

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                filter === cat
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground/70 hover:bg-foreground/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-mono text-sm text-muted-foreground">
              {"// no projects in this category yet"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
