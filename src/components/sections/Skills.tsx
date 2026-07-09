import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench, Sparkles, Cpu, Server } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const groups = [
  {
    icon: Code2,
    title: "Programming Languages",
    items: ["Python", "C", "Java", "JavaScript", "TypeScript"],
  },
  {
    icon: Globe,
    title: "Web & App Development",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Flutter (Basics)",
      "Vite",
    ],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MongoDB", "MySQL", "Oracle", "Neo4j", "Firebase"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: [
      "GitHub",
      "VS Code",
      "Android Studio",
      "Vercel",
      "Render",
      "Netlify",
      "Cloudflare",
      "n8n",
      "Quartus",
      "Canva",
    ],
  },
  {
    icon: Cpu,
    title: "Libraries & Frameworks",
    items: ["Flask", "GTK+", "Pygame"],
  },
  {
    icon: Server,
    title: "APIs & Services",
    items: ["Firebase Authentication", "REST API Integration"],
  },
  {
    icon: Sparkles,
    title: "Soft Skills",
    items: ["Leadership", "Problem Solving", "Time Management", "Communication"],
  },
];

/* ─── Helper to generate random float animation ─── */
function getRandomFloatStyle() {
  const isDiagonal = Math.random() > 0.5;
  const name = isDiagonal ? "float-fast-diagonal" : "float-fast-visible";
  const delay = (Math.random() * 2).toFixed(2);
  return `${name} 2s ease-in-out ${delay}s infinite`;
}

/* ─── Ripple effect ─── */
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

/* ─── Floating Particles ─── */
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

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Store random float styles per card once
  const [floatStyles] = useState(() => groups.map(() => getRandomFloatStyle()));

  return (
    <section id="skills" className="relative px-4 py-28 overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb" style={{ top: "10%", left: "5%", background: "var(--color-cyan)" }} />
      <div className="orb" style={{ bottom: "10%", right: "5%", background: "var(--color-purple)" }} />
      <Particles />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title={<>A versatile <span className="text-gradient">toolkit</span>.</>}
          description="Languages, frameworks, and tools I reach for to build production-grade software."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => createRipple(e)}
              className={`
                card-interactive card-3d cursor-glow-area card-glow-pulse tap-bounce
                transition-all duration-150
                ${hoveredIndex !== null && hoveredIndex !== i ? "blur-[2px] opacity-50 scale-[0.97]" : ""}
                ${hoveredIndex === i ? "scale-105 z-10" : ""}
              `}
              style={{
                animation: floatStyles[i], // unique float per card
              }}
            >
              <GlassCard glow className="h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-background shadow-glow">
                    <g.icon size={18} />
                  </div>
                  <h3 className="font-display text-base font-semibold hover-gradient-text">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s, j) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + j * 0.04 }}
                      className="rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs text-foreground/90 btn-shimmer"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
