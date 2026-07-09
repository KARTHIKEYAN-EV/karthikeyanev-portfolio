import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const internshipBullets = [
  "Developed NutriGo using the MERN Stack",
  "Integrated Firebase and Cloudinary services",
  "Worked on API integration and real-time order tracking",
  "Built a responsive, user-friendly UI",
  "Contributed to testing and cross-team collaboration",
];

const volunteerBullets = [
  "Contributed as a volunteer in CS Pathshala initiatives",
  "Supported student learning and technical activities",
  "Collaborated with peers in ACM-W events and sessions",
];

const vniBullets = [
  "Working as an Intern – Technology at Vijay Nicole Imprints Pvt. Ltd.",
  "Contributing to a real-time web development project",
  "Gaining hands-on experience in industry-level software development",
  "Learning project workflows and problem-solving",
  "Working with modern web technologies and professional development practices",
  "Understanding digital publishing workflows and educational content management",
];

/* ─── Random float style generator ─── */
function getRandomFloatStyle() {
  const isDiagonal = Math.random() > 0.5;
  const name = isDiagonal ? "float-fast-diagonal" : "float-fast-visible";
  const delay = (Math.random() * 2).toFixed(2);
  return `${name} 2s ease-in-out ${delay}s infinite`;
}

/* ─── Ripple effect on click ─── */
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

export function Internship() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Three cards: index 0 = internship, 1 = volunteer, 2 = VNI
  const [floatStyles] = useState(() => Array.from({ length: 3 }, () => getRandomFloatStyle()));

  return (
    <section id="internship" className="relative px-4 py-28 overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb" style={{ top: "10%", left: "5%", background: "var(--color-cyan)" }} />
      <div className="orb" style={{ bottom: "10%", right: "5%", background: "var(--color-purple)" }} />
      <Particles />

      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Hands-on <span className="text-gradient">experience</span>.
            </>
          }
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue/60 via-purple/40 to-transparent md:left-1/2" />

          {/* Group hover effect wrapper */}
          <div className="card-group">
            {/* Internship Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => createRipple(e)}
              className={`
                relative pl-14 md:w-1/2 md:pl-0 md:pr-12
                card-interactive card-3d cursor-glow-area card-glow-pulse tap-bounce
                transition-all duration-150
                ${hoveredIndex !== null && hoveredIndex !== 0 ? "blur-[2px] opacity-50 scale-[0.97]" : ""}
                ${hoveredIndex === 0 ? "scale-[1.02] z-10" : ""}
              `}
              style={{
                animation: floatStyles[0],
              }}
            >
              {/* Node */}
              <div className="absolute left-3.5 top-3 flex h-4 w-4 items-center justify-center md:left-auto md:right-[-8px]">
                <div className="absolute inset-0 animate-ping rounded-full bg-blue/40" />
                <div className="relative h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
              </div>

              <div className="glass-strong rounded-2xl p-6">
                <div className="flex items-center gap-2 text-xs text-cyan">
                  <Briefcase size={14} /> Internship
                </div>

                <h3 className="font-display mt-2 text-xl font-semibold hover-gradient-text">
                  Full Stack Developer Intern
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="text-foreground">
                    Ardent Computech Pvt Ltd
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> Kolkata
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> Jun 2025 – Jul 2025
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                  {internshipBullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-primary" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {[
                    "MongoDB",
                    "Express",
                    "React",
                    "Node.js",
                    "Firebase",
                    "Cloudinary",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-foreground/85 btn-shimmer"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Volunteer Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => createRipple(e)}
              className={`
                relative mt-10 pl-14 md:ml-auto md:w-1/2 md:pl-12
                card-interactive card-3d cursor-glow-area card-glow-pulse tap-bounce
                transition-all duration-150
                ${hoveredIndex !== null && hoveredIndex !== 1 ? "blur-[2px] opacity-50 scale-[0.97]" : ""}
                ${hoveredIndex === 1 ? "scale-[1.02] z-10" : ""}
              `}
              style={{
                animation: floatStyles[1],
              }}
            >
              {/* Node */}
              <div className="absolute left-3.5 top-3 flex h-4 w-4 items-center justify-center md:left-[-8px]">
                <div className="absolute inset-0 animate-ping rounded-full bg-purple/40" />
                <div className="relative h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
              </div>

              <div className="glass-strong rounded-2xl p-6">
                <div className="flex items-center gap-2 text-xs text-cyan">
                  <Briefcase size={14} /> Volunteer Experience
                </div>

                <h3 className="font-display mt-2 text-xl font-semibold hover-gradient-text">
                  CS Pathshala Volunteer
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="text-foreground">
                    SSN ACM-W Student Chapter
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> Jan 2026 - Present
                  </span>

                  <span className="inline-flex items-center gap-1">
                    Part-time
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                  {volunteerBullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-primary" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {[
                    "Leadership",
                    "Teamwork",
                    "Mentoring",
                    "Community",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-foreground/85 btn-shimmer"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vijay Nicole Internship Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => createRipple(e)}
              className={`
                relative mt-10 pl-14 md:w-1/2 md:pl-0 md:pr-12
                card-interactive card-3d cursor-glow-area card-glow-pulse tap-bounce
                transition-all duration-150
                ${hoveredIndex !== null && hoveredIndex !== 2 ? "blur-[2px] opacity-50 scale-[0.97]" : ""}
                ${hoveredIndex === 2 ? "scale-[1.02] z-10" : ""}
              `}
              style={{
                animation: floatStyles[2],
              }}
            >
              {/* Node */}
              <div className="absolute left-3.5 top-3 flex h-4 w-4 items-center justify-center md:left-auto md:right-[-8px]">
                <div className="absolute inset-0 animate-ping rounded-full bg-cyan/40" />
                <div className="relative h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
              </div>

              <div className="glass-strong rounded-2xl p-6">
                <div className="flex items-center gap-2 text-xs text-cyan">
                  <Briefcase size={14} /> Internship
                </div>

                <h3 className="font-display mt-2 text-xl font-semibold hover-gradient-text">
                  Intern – Technology
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="text-foreground">
                    Vijay Nicole Imprints Pvt. Ltd.
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> Chennai
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> May 2026 – Jun 2026
                  </span>

                  <span className="inline-flex items-center gap-1">
                    On-site
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                  {vniBullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-primary" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {[
                    "React.js",
                    "Tailwind CSS",
                    "Python",
                    "FAST API",
                    "PostgreSQL",
                    "JWT-Auth",
                    "Render",
                    "Web Development",
                    "REST APIs",
                    "Problem Solving",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-foreground/85 btn-shimmer"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
