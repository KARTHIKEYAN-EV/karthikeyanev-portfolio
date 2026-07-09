import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Crown, Activity, BookOpen, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const values = [
  { icon: Users, label: "Teamwork", desc: "Coordinates across roles to ship together." },
  { icon: Crown, label: "Leadership", desc: "Led multiple academic & project teams." },
  { icon: Activity, label: "Consistency", desc: "Daily practice, steady improvement." },
  { icon: BookOpen, label: "Continuous Learning", desc: "Always exploring new stacks." },
  { icon: Target, label: "Discipline", desc: "Owns outcomes; meets deadlines." },
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
  const particles = Array.from({ length: 20 }, (_, i) => ({
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

export function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Generate random floats for the main card + 5 value cards
  const [floatStyles] = useState(() => Array.from({ length: values.length + 1 }, () => getRandomFloatStyle()));

  return (
    <section id="about" className="relative px-4 py-28 overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb" style={{ top: "10%", left: "5%", background: "var(--color-cyan)" }} />
      <div className="orb" style={{ bottom: "10%", right: "5%", background: "var(--color-purple)" }} />
      <Particles />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title={<>Engineering with <span className="text-gradient">intent</span>.</>}
        />
        <div className="grid items-start gap-8 md:grid-cols-[1.1fr_1fr]">
          {/* Main description card – floats independently */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            onClick={createRipple}
            className="glass rounded-2xl p-8 card-interactive card-3d cursor-glow-area card-glow-pulse tap-bounce"
            style={{ animation: floatStyles[0] }}
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm an active Computer Science Engineering student with a strong foundation in
              programming, data structures, and software development. I've led multiple
              academic and project teams — coordinating tasks, unblocking teammates, and
              driving timely execution.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I practice problem solving daily and actively seek opportunities to contribute,
              learn, and grow as a dedicated IT professional. My goal is to build software
              that's not just functional, but feels effortless to use.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Open to internships", "Full Stack", "MERN", "Flutter"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground btn-shimmer"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Value cards grid with group hover blur */}
          <div className="card-group grid grid-cols-1 gap-3 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={createRipple}
                className={`
                  card-interactive card-3d cursor-glow-area card-glow-pulse tap-bounce
                  transition-all duration-150
                  ${hoveredIndex !== null && hoveredIndex !== i ? "blur-[2px] opacity-50 scale-[0.97]" : ""}
                  ${hoveredIndex === i ? "scale-[1.02] z-10" : ""}
                `}
                style={{ animation: floatStyles[i + 1] }}
              >
                <GlassCard className="h-full p-5" glow>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-background shadow-glow img-zoom-interactive">
                    <v.icon size={18} />
                  </div>
                  <h4 className="font-display mt-3 text-base font-semibold hover-gradient-text">{v.label}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
