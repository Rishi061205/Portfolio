import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/70 py-10 border-t border-background/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs">
          {"// © 2026 Rishi Raj — built with"}{" "}
          <Heart size={12} className="inline text-accent fill-accent" />{" "}
          {"and Python"}
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Rishi061205" target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rishiraj--/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="mailto:raj724809@gmail.com" className="font-mono text-xs hover:text-accent transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
