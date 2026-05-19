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

export function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title={<>Milestones & <span className="text-gradient">wins</span>.</>}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <GlassCard glow className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-background shadow-glow">
                  <it.icon size={20} />
                </div>
                <h3 className="font-display mt-4 text-base font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
