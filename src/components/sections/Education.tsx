import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative px-4 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title={<>Academic <span className="text-gradient">foundation</span>.</>}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue/30 via-purple/20 to-transparent opacity-60" />
          <div className="glass-strong relative m-px rounded-[15px] p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-background shadow-glow">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">B.E Computer Science and Engineering</h3>
                  <p className="mt-1 text-foreground/80">Sri Sivasubramaniya Nadar College of Engineering</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> 2024 – 2028</span>
                    <span className="inline-flex items-center gap-1.5"><Award size={14} /> CGPA: 8.901 / 10</span>
                  </div>
                </div>
              </div>
              <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
                <div className="font-display text-3xl font-bold text-gradient">8.901</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">CGPA<br/>out of 10</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
