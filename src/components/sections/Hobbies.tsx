import { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Palette, Trophy, Code2, Languages } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { icon: Crown, label: "Chess" },
  { icon: Palette, label: "Drawing" },
  { icon: Trophy, label: "Badminton" },
  { icon: Code2, label: "Coding" },
  { icon: Languages, label: "Learning Japanese" },
];

/* ─── Random float style generator ─── */
function getRandomFloatStyle() {
  const isDiagonal = Math.random() > 0.5;
  const name = isDiagonal ? "float-fast-diagonal" : "float-fast-visible";
  const delay = (Math.random() * 2).toFixed(2);
  return `${name} 2s ease-in-out ${delay}s infinite`;
}

/* ─── Ripple on click (fixed – added overflow hidden check) ─── */
function createRipple(event: React.MouseEvent<HTMLDivElement>) {
  const el = event.currentTarget;
  // Prevent duplicate ripples
  const existingRipple = el.querySelector(".ripple");
  if (existingRipple) existingRipple.remove();

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

export function Hobbies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [floatStyles] = useState(() => items.map(() => getRandomFloatStyle()));

  return (
    <section id="hobbies" className="relative px-4 py-28 overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb" style={{ top: "10%", left: "5%", background: "var(--color-cyan)" }} />
      <div className="orb" style={{ bottom: "10%", right: "5%", background: "var(--color-purple)" }} />
      <Particles />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Hobbies"
          title={<>Outside the <span className="text-gradient">editor</span>.</>}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => createRipple(e)}
              className={`
                glass group flex flex-col items-center gap-3 rounded-2xl p-6
                card-interactive card-3d cursor-glow-area card-glow-pulse tap-bounce
                transition-all duration-150
                ${hoveredIndex !== null && hoveredIndex !== i ? "blur-[2px] opacity-50 scale-[0.97]" : ""}
                ${hoveredIndex === i ? "scale-105 z-10" : ""}
                overflow-hidden
              `}
              style={{
                animation: floatStyles[i],
                // Prevent the float animation from overriding hover/click transforms
                transformOrigin: "center center",
              }}
              // 👇 FIX: remove Framer Motion's conflicting transforms
              whileHover={undefined}
              whileTap={undefined}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-background shadow-glow img-zoom-interactive shrink-0">
                <it.icon size={22} />
              </div>
              <span className="text-sm font-medium text-foreground/90 hover-gradient-text">
                {it.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
