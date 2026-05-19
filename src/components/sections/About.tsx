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

export function About() {
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title={<>Engineering with <span className="text-gradient">intent</span>.</>}
        />
        <div className="grid items-start gap-8 md:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
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
                  className="rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <GlassCard className="h-full p-5" glow>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-background shadow-glow">
                    <v.icon size={18} />
                  </div>
                  <h4 className="font-display mt-3 text-base font-semibold">{v.label}</h4>
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
