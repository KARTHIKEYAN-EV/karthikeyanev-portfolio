import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const bullets = [
  "Developed NutriGo using the MERN Stack",
  "Integrated Razorpay, Firebase, Cloudinary, and OpenStreetMap",
  "Worked on API integration and real-time order tracking",
  "Built a responsive, user-friendly UI",
  "Contributed to testing and cross-team collaboration",
];

export function Internship() {
  return (
    <section id="internship" className="relative px-4 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title={<>Hands-on <span className="text-gradient">internship</span>.</>}
        />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue/60 via-purple/40 to-transparent md:left-1/2" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative pl-14 md:w-1/2 md:pl-0 md:pr-12"
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
              <h3 className="font-display mt-2 text-xl font-semibold">Full Stack Developer Intern</h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="text-foreground">Ardent Computech Pvt Ltd</span>
                <span className="inline-flex items-center gap-1"><MapPin size={12} /> Kolkata</span>
                <span className="inline-flex items-center gap-1"><Calendar size={12} /> Jun 2025 – Jul 2025</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["MongoDB", "Express", "React", "Node.js", "Razorpay", "Firebase", "Cloudinary"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-foreground/85">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
