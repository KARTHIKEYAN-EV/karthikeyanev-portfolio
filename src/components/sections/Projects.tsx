import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Project = {
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  github?: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "CipherGuard-Encrypter cum Decrypter",
    desc: "Java-based cryptography tool for secure text and file encryption with multiple cipher schemes.",
    features: ["Caesar Cipher", "XOR Cipher", "Substitution", "File encryption", "Logging", "Exception handling"],
    tech: ["Java", "OOP"],
    github: "https://github.com/KARTHIKEYAN-EV/Inferno-Encrypter-cum-Decrypter-CipherGuard",
    accent: "from-purple/40 via-cyan/30 to-transparent",
  },
  {
    title: "Task & Habit Tracker",
    desc: "Gamified productivity app with tasks, habits, mood diary, streaks, levels, achievements, and Firebase auth.",
    features: ["Google Sign-In", "Guest mode", "Habit streaks", "Gamification", "Mood monitor", "Rewards"],
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/KARTHIKEYAN-EV/Flutter_Task-Habit-Tracker-App",
    accent: "from-blue/40 via-cyan/30 to-transparent",
  },
  {
    title: "Air Traffic Scheduling System",
    desc: "Comprehensive air traffic management simulation with GUI and SQLite integration.",
    features: ["Runway assignment", "Conflict detection", "Dynamic scheduling", "GTK+ UI", "Crew assignment", "Emergency mgmt"],
    tech: ["C", "GTK+", "SQLite"],
    github: "https://github.com/KARTHIKEYAN-EV/Air-Traffic-Scheduling",
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
    title: "RT-LMS",
    desc: "NoSQL-based real-time log management and monitoring system using MongoDB.",
    features: ["Log ingestion", "Fast querying", "Incident tracking", "Alerts", "Time-series monitoring", "Sharding"],
    tech: ["MongoDB", "NoSQL"],
    github: "https://github.com/",
    accent: "from-cyan/40 via-blue/30 to-transparent",
  },
  {
    title: "Energy Management System",
    desc: "AI-based smart charging and battery optimization system for multiple devices.",
    features: ["Battery optimization", "Priority scheduling", "Utility scoring", "Failure handling", "Dashboard", "Decision analysis"],
    tech: ["Python", "Flask", "Plotly"],
    github: "https://github.com/",
    accent: "from-purple/40 via-cyan/30 to-transparent",
  },
  {
    title: "EventHub",
    desc: "Microservice-based student event management platform with role-based access.",
    features: ["Student & faculty roles", "Event CRUD", "Responsive UI", "Authentication", "Microservices", "Dashboard"],
    tech: ["React", "TypeScript", "Spring Boot", "MongoDB"],
    github: "https://github.com/KARTHIKEYAN-EV/IP_mini_project",
    accent: "from-indigo/40 via-blue/30 to-transparent",
  },
  {
    title: "Luminary",
    desc: "Full-stack task management application with authentication and cloud database integration.",
    features: ["Authentication", "Protected dashboard", "Task CRUD", "Cloud storage", "REST APIs", "Deployment"],
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/KARTHIKEYAN-EV/Task-Manager-Luminary",
    accent: "from-sky/40 via-blue/30 to-transparent",
  },
  {
    title: "Eclipse Cipher",
    desc: "Frontend-based multimedia encryption and decryption platform for multiple file formats.",
    features: ["Text encryption", "Image encryption", "Audio encryption", "Binary processing", "Animations", "Theme modes"],
    tech: ["React", "JavaScript"],
    github: "https://github.com/KARTHIKEYAN-EV/Eclipse-Cipher",
    accent: "from-purple/40 via-blue/30 to-transparent",
  },
];

/* ─── Draggable Card Hook ─── */
function useDraggable(ref: React.RefObject<HTMLDivElement | null>) {
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // avoid text selection / ghost drag
    e.stopPropagation();
    setDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startPos.current.x;
      const dy = e.clientY - startPos.current.y;
      setDragOffset({ x: dx, y: dy });
    };

    const onMouseUp = () => {
      setDragging(false);
      setDragOffset({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging]);

  return { onMouseDown, dragOffset, dragging };
}

/* ─── Ripple Effect ─── */
function createRipple(event: React.MouseEvent<HTMLDivElement>) {
  const el = event.currentTarget;
  const ripple = document.createElement("span");
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
  ripple.className = "ripple";
  el.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

/* ─── Floating Particles Background ─── */
function Particles() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 6 + 6}s`,
    animationDelay: `${Math.random() * 5}s`,
    size: `${Math.random() * 6 + 4}px`,
  }));
  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Modal ─── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content relative" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow img-zoom-interactive">
              <span className="text-4xl font-display text-background">{project.title.charAt(0)}</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl font-bold text-gradient">{project.title}</h2>
            <p className="mt-2 text-muted-foreground">{project.desc}</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-1.5 text-sm">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs">{t}</span>
              ))}
            </div>
            {project.github && (
              <a href={project.github} target="_blank" className="mt-4 inline-flex items-center gap-1 text-sm text-cyan hover:underline">
                View on GitHub <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Helper to generate random float style ─── */
function getRandomFloatStyle() {
  // Choose between two float animations
  const isDiagonal = Math.random() > 0.5;
  const animationName = isDiagonal ? "float-fast-diagonal" : "float-fast-visible";
  const delay = (Math.random() * 2).toFixed(2) + "s"; // random delay between 0 and 2 seconds
  return {
    animationName,
    animationDelay: delay,
  };
}

/* ─── Draggable Card ─── */
function DraggableCard({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { onMouseDown, dragOffset, dragging } = useDraggable(cardRef);
  const [floatStyle] = useState(getRandomFloatStyle); // unique float per card, generated once

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only open modal if we didn't drag
    if (!dragging) {
      createRipple(e);
      onSelect(project);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseDown={onMouseDown}
      onClick={handleClick}
      className={`drag-container scroll-child w-[320px] sm:w-[380px] flex-shrink-0 mr-6 ${
        dragging ? "" : "drag-snap"
      }`}
      style={{
        userSelect: dragging ? "none" : "auto",
        transform: dragging
          ? `translate(${dragOffset.x}px, ${dragOffset.y}px)`
          : undefined,
      }}
    >
      <div
        className="group relative overflow-hidden rounded-2xl card-interactive card-3d float-fast h-full"
        style={{
          animationName: floatStyle.animationName,
          animationDelay: floatStyle.animationDelay,
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40 transition-opacity duration-300 group-hover:opacity-90`} />
        <div className="glass-strong relative m-px flex h-full flex-col rounded-[15px] p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold tracking-tight hover-gradient-text">{project.title}</h3>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:scale-110 hover:text-foreground btn-shimmer tap-bounce"
            >
              <Github size={15} />
            </a>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-1.5 text-xs text-foreground/80">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-gradient-primary" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full border border-border bg-white/[0.04] px-2.5 py-0.5 text-[11px] btn-shimmer">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs font-medium hover:text-foreground btn-shimmer"
            >
              Source <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-4 py-28 overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb" style={{ top: "10%", left: "5%", background: "var(--color-cyan)" }} />
      <div className="orb" style={{ bottom: "10%", right: "5%", background: "var(--color-purple)" }} />
      <Particles />

      <div className="mx-auto max-w-full">
        <SectionHeading
          eyebrow="Projects"
          title={<>Selected <span className="text-gradient">work</span>.</>}
          description="Drag the cards, click for details. Every card floats with its own rhythm."
        />

        <div className="scroll-container flex py-8">
          {projects.map((p, i) => (
            <DraggableCard key={p.title} project={p} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
