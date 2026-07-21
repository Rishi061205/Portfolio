import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const milestones = [
  {
    year: "2021",
    title: "The Spark — 10th CBSE",
    text: "Scored 94.60/100 at Kendriya Vidyalaya, Chennai. Fell in love with mathematics and logic — the foundation of every program I'd later write.",
  },
  {
    year: "2023",
    title: "The First Build — 12th CBSE",
    text: "Scored 80/100 and wrote my first real programs. Chose to pursue Artificial Intelligence & Machine Learning — a deliberate bet on the future.",
  },
  {
    year: "2023",
    title: "RNSIT, Bengaluru",
    text: "Joined RNS Institute of Technology's B.E. AI & ML program. GPA: 8.16/10. Started building real projects — from deep learning models to compression algorithms.",
  },
  {
    year: "2027",
    title: "Ready to Compile the Future",
    text: "Graduating with hands-on AI projects, a GitHub full of shipped code, and a conviction that the best software is not just functional — it's intelligent.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
        index="01"
        label="The Human"
        title="Not just a developer — an engineer who thinks in models."
        subtitle="From a 94/100 in 10th grade to building AI systems at college — here's the story of how curiosity became craft."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="images/img_workspace.png"
                alt="A clean, minimalist workspace with a green plant and a physical notebook"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-foreground/60 to-transparent">
                <p className="font-mono text-xs text-background/90">
                  {"// where the magic happens"}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-5 text-foreground/85 leading-relaxed text-lg"
            >
              <p>
                I'm <span className="text-foreground font-medium">Rishi Raj</span>, a
                B.E. Artificial Intelligence & Machine Learning student at RNS Institute
                of Technology, Bengaluru — and an SDE who believes
                great software doesn't just work, it <em className="text-accent not-italic font-medium">thinks</em>.
              </p>
              <p>
                I build across the full stack — PyTorch deep learning models, Flask REST
                APIs, React frontends, and C++ algorithms — but my edge is connecting
                intelligent backends to real user problems. I don't just write code;
                I engineer solutions.
              </p>
              <p>
                Driven by continuous learning and a commitment to clean, scalable
                software. If there's a complex problem, I'm already thinking about
                the most elegant way to compile a solution.
              </p>
            </motion.div>

            <div className="mt-12 space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-6 pb-8 last:pb-0 relative"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-sm text-accent font-medium">
                      {m.year}
                    </span>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h4 className="font-heading text-xl text-foreground mb-1">
                      {m.title}
                    </h4>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}