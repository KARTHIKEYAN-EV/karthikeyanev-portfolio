import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Project = {
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  github?: string;
  accent: string; // tailwind gradient classes
};

const projects: Project[] = [
  {
    title: "Task & Habit Tracker",
    desc: "Gamified productivity app with tasks, habits, mood diary, streaks, levels, achievements, and Firebase auth.",
    features: ["Google Sign-In", "Guest mode", "Habit streaks", "Gamification", "Mood monitor", "Rewards"],
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/",
    accent: "from-blue/40 via-cyan/30 to-transparent",
  },
  {
    title: "Air Traffic Scheduling System",
    desc: "Comprehensive air traffic management simulation with GUI and SQLite integration.",
    features: ["Runway assignment", "Conflict detection", "Dynamic scheduling", "GTK+ UI", "Crew assignment", "Emergency mgmt"],
    tech: ["C", "GTK+", "SQLite"],
    github: "https://github.com/",
    accent: "from-purple/40 via-blue/30 to-transparent",
  },
  {
    title: "Quiz Application",
    desc: "Quiz management system with admin and student interfaces, timed sessions, and score tracking.",
    features: ["CRUD operations", "Timed quiz", "Randomized Q's", "Auth system", "Score tracking"],
    tech: ["C", "File Handling"],
    github: "https://github.com/",
    accent: "from-cyan/40 via-blue/30 to-transparent",
  },
  {
    title: "Number Match Game",
    desc: "Two-level memory and math puzzle game built with Python and Pygame.",
    features: ["Matching", "Sum challenge", "Randomized grid", "Scoring", "Timer"],
    tech: ["Python", "Pygame"],
    github: "https://github.com/",
    accent: "from-blue/40 via-purple/30 to-transparent",
  },
  {
    title: "CipherGuard",
    desc: "Java-based cryptography tool for secure text and file encryption with multiple cipher schemes.",
    features: ["Caesar Cipher", "XOR Cipher", "Substitution", "File encryption", "Logging", "Exception handling"],
    tech: ["Java", "OOP"],
    github: "https://github.com/",
    accent: "from-purple/40 via-cyan/30 to-transparent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title={<>Selected <span className="text-gradient">work</span>.</>}
          description="A snapshot of things I've shipped — from full-stack apps to systems-level builds."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-40 transition-opacity duration-500 group-hover:opacity-90`} />
              <div className="glass-strong relative m-px flex h-full flex-col rounded-[15px] p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View on GitHub"
                    className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
                  >
                    <Github size={15} />
                  </a>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

                <ul className="mt-4 grid grid-cols-2 gap-y-1.5 text-xs text-foreground/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-gradient-primary" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-foreground/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    Source <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
