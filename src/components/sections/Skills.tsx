import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const groups = [
  {
    icon: Code2,
    title: "Programming Languages",
    items: ["Python", "C", "Java"],
  },
  {
    icon: Globe,
    title: "Web & App Development",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Flutter", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MySQL", "Oracle", "MongoDB", "Neo4j", ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: ["GitHub", "Firebase", "n8n", "VS Code", "Android Studio", "Quartus", "Canva"],
  },
  {
    icon: Sparkles,
    title: "Soft Skills",
    items: ["Time Management", "Team Leadership", "Problem Solving"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-28">
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
              transition={{ duration: 0.55, delay: i * 0.07 }}
            >
              <GlassCard glow className="h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-background shadow-glow">
                    <g.icon size={18} />
                  </div>
                  <h3 className="font-display text-base font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s, j) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + j * 0.04 }}
                      className="rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs text-foreground/90 transition-colors hover:border-blue/40 hover:bg-white/[0.08]"
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
