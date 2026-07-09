import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, School } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const educationData = [
  {
    institution: "Sri Sivasubramaniya Nadar College of Engineering",
    degree: "B.E Computer Science and Engineering",
    duration: "2024 – 2028",
    grade: "8.84 / 10",
    gradeLabel: "CGPA",
    icon: GraduationCap,
    highlight: true,
  },
  {
    institution: "Sethu Bhaskara Matric. Hr. Sec. School",
    degree: "Higher Secondary (11th – 12th)",
    duration: "2022 – 2024",
    grade: "97.5%",
    gradeLabel: "Grade",
    icon: School,
    highlight: false,
  },
  {
    institution: "Sethu Bhaskara Matric. Hr. Sec. School",
    degree: "Secondary (9th – 10th)",
    duration: "2020 – 2022",
    grade: "97.8%",
    gradeLabel: "Grade",
    icon: School,
    highlight: false,
  },
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

export function Education() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [floatStyles] = useState(() => educationData.map(() => getRandomFloatStyle()));

  return (
    <section id="education" className="relative px-4 py-28 overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb" style={{ top: "10%", left: "5%", background: "var(--color-cyan)" }} />
      <div className="orb" style={{ bottom: "10%", right: "5%", background: "var(--color-purple)" }} />
      <Particles />

      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title={<>Academic <span className="text-gradient">foundation</span>.</>}
        />

        <div className="card-group flex flex-col gap-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => createRipple(e)}
              className={`
                relative overflow-hidden rounded-2xl
                card-interactive card-3d cursor-glow-area card-glow-pulse tap-bounce
                transition-all duration-150
                ${hoveredIndex !== null && hoveredIndex !== index ? "blur-[2px] opacity-50 scale-[0.97]" : ""}
                ${hoveredIndex === index ? "scale-[1.02] z-10" : ""}
              `}
              style={{
                animation: floatStyles[index],
              }}
            >
              <div
                className={`absolute inset-0 ${
                  item.highlight
                    ? "bg-gradient-to-br from-blue/30 via-purple/20 to-transparent opacity-60"
                    : "bg-gradient-to-br from-cyan/15 via-blue/10 to-transparent opacity-40"
                }`}
              />
              <div className="glass-strong relative m-px rounded-[15px] p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-glow img-zoom-interactive ${
                        item.highlight
                          ? "bg-gradient-primary text-background"
                          : "bg-white/10 text-foreground"
                      }`}
                    >
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold hover-gradient-text">{item.degree}</h3>
                      <p className="mt-1 text-foreground/80">{item.institution}</p>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={14} /> {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Award size={14} /> {item.gradeLabel}: {item.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4 btn-shimmer">
                    <div className="font-display text-3xl font-bold text-gradient">
                      {item.grade.split(" ")[0]}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {item.gradeLabel}
                      <br />
                      {item.gradeLabel === "CGPA" ? "out of 10" : ""}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
