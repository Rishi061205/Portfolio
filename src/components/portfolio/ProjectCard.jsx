import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index }) {
  const offset = index % 2 === 1 ? "md:mt-16" : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${offset}`}
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="relative rounded-2xl overflow-hidden bg-card border border-border/60 shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="relative h-56 md:h-64 overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm">
              <FolderOpen size={12} className="text-accent" />
              <span className="font-mono text-[10px] tracking-wider text-foreground uppercase">
                {project.category}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <ArrowUpRight size={18} className="text-foreground" />
            </div>
          </div>

          <div className="p-6 md:p-7">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack?.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-secondary text-foreground/70"
                >
                  {tech}
                </span>
              ))}
              {project.tech_stack?.length > 4 && (
                <span className="font-mono text-xs px-3 py-1 text-muted-foreground">
                  +{project.tech_stack.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}