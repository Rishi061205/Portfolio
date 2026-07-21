import { motion } from "framer-motion";

export default function SectionHeading({ index, label, title, subtitle }) {
  return (
    <div className="mb-16 md:mb-24">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          {index}
        </span>
        <div className="syntax-rule flex-1 max-w-[80px]" aria-hidden="true" />
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {label}
        </span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-muted-foreground text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}