import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const channels = [
  { icon: Mail, label: "Email", value: "karthikeyan@example.com", href: "mailto:karthikeyanev.ev@gmail.com" },
  { icon: Github, label: "GitHub", value: "@karthikeyan-ev", href: "https://github.com/KARTHIKEYAN-EV" },
  { icon: Linkedin, label: "LinkedIn", value: "in/karthikeyan-ev", href: "https://www.linkedin.com/in/karthikeyanev/" },
  { icon: Instagram, label: "Instagram", value: "@karthikeyan.ev", href: "https://instagram.com/" },
];

/* ─── Random float style generator ─── */
function getRandomFloatStyle() {
  const isDiagonal = Math.random() > 0.5;
  const name = isDiagonal ? "float-fast-diagonal" : "float-fast-visible";
  const delay = (Math.random() * 2).toFixed(2);
  return `${name} 2s ease-in-out ${delay}s infinite`;
}

/* ─── Ripple on click ─── */
function createRipple(event: React.MouseEvent<HTMLAnchorElement>) {
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

export function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [floatStyles] = useState(() => channels.map(() => getRandomFloatStyle()));

  return (
    <section id="contact" className="relative px-4 py-28 overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb" style={{ top: "10%", left: "5%", background: "var(--color-cyan)" }} />
      <div className="orb" style={{ bottom: "10%", right: "5%", background: "var(--color-purple)" }} />
      <Particles />

      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build something <span className="text-gradient">great</span>.</>}
          description="I'm open to internships, collaborations, and interesting conversations. Reach out — I respond quickly."
        />
        <div className="card-group grid gap-4 sm:grid-cols-2">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={createRipple}
              className={`
                glass-strong group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl p-5
                card-interactive card-3d cursor-glow-area card-glow-pulse tap-bounce
                transition-all duration-150
                ${hoveredIndex !== null && hoveredIndex !== i ? "blur-[2px] opacity-50 scale-[0.97]" : ""}
                ${hoveredIndex === i ? "scale-[1.02] z-10" : ""}
              `}
              style={{ animation: floatStyles[i] }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-background shadow-glow img-zoom-interactive">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-display mt-0.5 text-base font-semibold hover-gradient-text">{c.value}</div>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
