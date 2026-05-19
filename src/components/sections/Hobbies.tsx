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

export function Hobbies() {
  return (
    <section id="hobbies" className="relative px-4 py-28">
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
              whileHover={{ y: -6 }}
              className="glass group flex flex-col items-center gap-3 rounded-2xl p-6 transition-shadow hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-background shadow-glow transition-transform group-hover:scale-110">
                <it.icon size={22} />
              </div>
              <span className="text-sm font-medium text-foreground/90">{it.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
