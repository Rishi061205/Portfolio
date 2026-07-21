import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Code2 } from "lucide-react";
import { getProjectById } from "@/data/projects";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <p className="font-mono text-sm text-muted-foreground">{"// project not found"}</p>
        <Link to="/" className="font-mono text-sm text-accent hover:underline">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-28 md:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to all work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                {project.category}
              </span>
              <div className="h-px w-12 bg-border" aria-hidden="true" />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-foreground text-balance mb-5">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tech_stack?.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-16">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-accent hover:text-foreground transition-all"
                >
                  <Github size={16} />
                  View Repository
                </a>
              )}
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-full border border-foreground/20 text-foreground hover:border-accent hover:text-accent transition-all"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>

          {project.thumbnail && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl mb-16 -mx-6 md:-mx-10"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-72 md:h-[28rem] object-cover"
              />
            </motion.div>
          )}

          <div className="space-y-16">
            <CaseSection index="01" label="The Hypothesis" title="The Problem" body={project.problem} />
            <CaseSection index="02" label="The Logic" title="The Approach" body={project.approach} />
            <CaseSection index="03" label="The Artifact" title="The Outcome" body={project.outcome} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-12 border-t border-border"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {"// next step"}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground">
                  Like what you see? Let's talk.
                </h3>
              </div>
              <Link
                to="/#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-mono text-sm hover:bg-accent hover:text-foreground transition-all whitespace-nowrap"
              >
                <Code2 size={16} />
                Initialize Conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

function CaseSection({ index, label, title, body }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-4 mb-5">
        <span className="font-mono text-xs text-accent">{index}</span>
        <div className="h-px w-12 bg-border" aria-hidden="true" />
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          {label}
        </span>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-5">{title}</h2>
      <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
        {body}
      </p>
    </motion.section>
  );
}
