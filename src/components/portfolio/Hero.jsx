import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Hero() {
  const typed = useTypewriter([
    "Software Development Engineer",
    "AI & ML Enthusiast",
    "React · Python · C++",
    "Logic with Soul",
  ]);

  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 grain overflow-hidden"
    >
      <div className="logic-bloom absolute top-1/4 -right-20 w-[500px] h-[500px]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Available for SDE Roles · B.E. AI&ML · RNSIT Bengaluru
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] text-foreground text-balance"
            >
              I am Rishi, and I build{" "}
              <span className="italic text-accent">intelligence with intent.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 font-mono text-sm md:text-base text-muted-foreground flex items-center min-h-[28px]"
            >
              <span className="text-accent mr-2">{"›"}</span>
              <span className="text-foreground/80">{typed}</span>
              <span className="ml-0.5 w-2 h-5 bg-accent inline-block animate-pulse-soft" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed"
            >
              A fresher SDE skilled in Python, React, and C++ — building AI-powered systems
              that solve real problems. From deep learning models to high-performance
              algorithms, I write code that scales and stories that stick.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToWork}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-mono text-sm hover:bg-accent hover:text-foreground transition-all duration-300"
              >
                See My Work
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href="/resume/Rishi_Raj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-foreground/20 text-foreground font-mono text-sm hover:border-accent hover:text-accent transition-all duration-300"
              >
                <FileText size={16} />
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="logic-bloom absolute inset-0 scale-90" aria-hidden="true" />
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-[2rem] overflow-hidden shadow-2xl border border-border/40">
                <img
                  src="images\IMG_20260720_152346.jpg" 
                  class="zoom-out-image .w-full .h-full" 
                  alt="Rishi Raj — portrait in a warm, wood-accented study space"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
                <p className="font-mono text-xs text-muted-foreground">{"// now compiling"}</p>
                <p className="font-heading text-sm text-foreground italic">curiosity → code</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
