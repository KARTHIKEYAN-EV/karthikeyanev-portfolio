import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail, Sparkles, Code2, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground"
          >
            <Sparkles size={14} className="text-cyan" />
            Available for internships & collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Karthikeyan <span className="text-gradient">E V</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            CSE Undergraduate &middot;{" "}
            <span className="text-foreground">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1800,
                  "MERN Stack Learner",
                  1800,
                  "Flutter Enthusiast",
                  1800,
                  "Problem Solver",
                  1800,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor
              />
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-xl text-muted-foreground"
          >
            I build elegant, performant interfaces and ship reliable full‑stack systems —
            combining clean engineering with a designer's eye for detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-background shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex items-center gap-4 text-muted-foreground"
          >
            <a href="https://github.com/KARTHIKEYAN-EV" aria-label="GitHub" className="transition-colors hover:text-foreground"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/karthikeyanev/" aria-label="LinkedIn" className="transition-colors hover:text-foreground"><Linkedin size={18} /></a>
            <span className="h-4 w-px bg-border" />
            <span className="text-xs">Chennai, India</span>
          </motion.div>
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] rounded-[28px] p-px">
            {/* Rotating gradient border */}
            <div className="absolute inset-0 overflow-hidden rounded-[28px]">
              <div
                className="animate-spin-slow absolute -inset-1/2"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.72 0.18 240), oklch(0.82 0.15 200), oklch(0.68 0.22 300), oklch(0.72 0.18 240))",
                }}
              />
            </div>

            <div className="glass-strong relative flex h-full flex-col items-center justify-between rounded-[27px] p-6">
              <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                  </span>
                  Online
                </span>
                <span>v1.0</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                  <img
                    src="/Karthikeyan E V - karthikeyanev.jpg"
                    alt="Karthikeyan E V"
                    className="h-full w-full rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm opacity-0 transition-opacity duration-300 hover:opacity-100" />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold">Karthikeyan E V</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  CSE • SSN College
                </p>
              </div>

              <div className="grid w-full grid-cols-3 gap-2 text-center">
                {[
                  { v: "8.9", l: "CGPA" },
                  { v: "5+", l: "Projects" },
                  { v: "1", l: "Internship" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-white/[0.04] p-2.5">
                    <div className="font-display text-lg font-bold text-foreground">{s.v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex w-full items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Code2 size={12} /> Building • Learning • Shipping
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
