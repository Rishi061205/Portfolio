import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "C++", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["ReactJS", "Flask", "PyTorch"],
  },
  {
    label: "Core CS",
    items: ["Data Structures", "Algorithms", "Machine Learning", "REST APIs"],
  },
  {
    label: "Tools & Soft Skills",
    items: ["Git", "GitHub", "Problem Solving", "Communication", "Vibe Coding"],
  },
];

const stats = [
  { value: "3+", label: "AI Projects Built" },
  { value: "8.16", label: "CGPA at RNSIT" },
  { value: "~50ms", label: "API Response Time" },
  { value: "∞", label: "Curiosity" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          index="03"
          label="The Toolkit"
          title="The stack I think in."
          subtitle="Tools are just syntax. The real skill is knowing which one solves the problem elegantly."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <p className="font-heading text-4xl md:text-5xl text-accent font-medium">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-accent">{"//"}</span>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground">
                  {group.label}
                </h3>
                <div className="syntax-rule flex-1" aria-hidden="true" />
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm px-4 py-2 rounded-full bg-background border border-border text-foreground/80 hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}