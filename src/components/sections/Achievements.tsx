import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Rocket, Layers, Brain } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const items = [
  { icon: Trophy, title: "Team Leadership Experience", desc: "Led multiple academic and project teams to on-time delivery." },
  { icon: Rocket, title: "Consistent Project Development", desc: "Shipped 5+ projects across web, mobile, and systems." },
  { icon: Layers, title: "MERN Stack Learning Journey", desc: "Built full-stack apps with MongoDB, Express, React, Node." },
  { icon: Brain, title: "Problem Solving Practice", desc: "Daily DSA practice across multiple platforms." },
];

/* ─── Random float style generator ─── */
function getRandomFloatStyle() {
  const isDiagonal = Math.random() > 0.5;
  const name = isDiagonal ? "float-fast-diagonal" : "float-fast-visible";
  const delay = (Math.random() * 2).toFixed(2);
  return `${name} 2s ease-in-out ${delay}s infinite`;
}

/* ─── Ripple on click ─── */
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
  const particles = Array.from({ length: 15 }, (_, i) => ({
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

export function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [floatStyles] = useState(() => items.map(() => getRandomFloatStyle()));

  return (
    <section id="achievements" className="relative px-4 py-28 overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb" style={{ top: "10%", left: "5%", background: "var(--color-cyan)" }} />
      <div className="orb" style={{ bottom: "10%", right: "5%", background: "var(--color-purple)" }} />
      <Particles />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title={<>Milestones & <span className="text-gradient">wins</span>.</>}
        />
        <div className="card-group grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
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
                ${hoveredIndex === i ? "scale-[1.02] z-10" : ""}
              `}
              style={{
                animation: floatStyles[i],
              }}
            >
              <GlassCard glow className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-background shadow-glow img-zoom-interactive">
                  <it.icon size={20} />
                </div>
                <h3 className="font-display mt-4 text-base font-semibold hover-gradient-text">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
