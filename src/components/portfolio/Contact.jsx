import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";

const CONTACT_EMAIL = "raj724809@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent | error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }
    setError("");
    // Static site — no backend, so we open a pre-filled email as the send action.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-foreground text-background relative overflow-hidden">
      <div className="logic-bloom absolute top-0 right-0 w-[600px] h-[600px] opacity-40" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-widest text-accent uppercase">04</span>
            <div className="h-px flex-1 max-w-[80px] bg-background/20" aria-hidden="true" />
            <span className="font-mono text-xs tracking-widest text-background/50 uppercase">The Signal</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-balance"
          >
            Let's initialize a conversation.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-xl text-background/60 text-lg leading-relaxed"
          >
            Hiring? Collaborating? Just curious? Drop a message — I read every one and reply within a day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <p className="font-mono text-xs text-background/40 uppercase tracking-wider mb-2">Email</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-heading text-xl text-background hover:text-accent transition-colors">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs text-background/40 uppercase tracking-wider mb-2">Location</p>
              <p className="font-heading text-xl text-background">Bengaluru, India</p>
            </div>
            <div>
              <p className="font-mono text-xs text-background/40 uppercase tracking-wider mb-2">Find me</p>
              <div className="flex gap-3">
                <a href="https://github.com/Rishi061205" target="_blank" rel="noopener noreferrer" className="font-mono text-sm px-4 py-2 rounded-full border border-background/20 text-background hover:border-accent hover:text-accent transition-all">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/rishiraj--/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm px-4 py-2 rounded-full border border-background/20 text-background hover:border-accent hover:text-accent transition-all">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 animate-pulse-soft">
                    <Check size={28} className="text-foreground" />
                  </div>
                  <h3 className="font-heading text-3xl text-background mb-3">Opening your email client</h3>
                  <p className="text-background/60 max-w-sm">
                    Your message has been compiled — finish sending it from your email app.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <label className="font-mono text-xs text-background/50 uppercase tracking-wider block mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Recruiter"
                      className="w-full bg-transparent border-0 border-b border-background/20 px-0 py-3 text-lg text-background placeholder-background/30 focus:border-accent focus:outline-none transition-colors font-body"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-background/50 uppercase tracking-wider block mb-3">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full bg-transparent border-0 border-b border-background/20 px-0 py-3 text-lg text-background placeholder-background/30 focus:border-accent focus:outline-none transition-colors font-body"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-background/50 uppercase tracking-wider block mb-3">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me about the role, the team, or just say hi..."
                      className="w-full bg-transparent border-0 border-b border-background/20 px-0 py-3 text-lg text-background placeholder-background/30 focus:border-accent focus:outline-none transition-colors font-body resize-none"
                    />
                  </div>

                  {error && (
                    <p className="font-mono text-sm text-accent">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="group flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-foreground font-mono text-sm hover:bg-background hover:text-foreground transition-all duration-300"
                  >
                    Initialize Conversation
                    <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
