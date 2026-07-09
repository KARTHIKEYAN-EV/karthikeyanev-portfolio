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

export function Education() {
  return (
    <section id="education" className="relative px-4 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title={<>Academic <span className="text-gradient">foundation</span>.</>}
        />

        <div className="flex flex-col gap-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl"
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
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-glow ${
                        item.highlight
                          ? "bg-gradient-primary text-background"
                          : "bg-white/10 text-foreground"
                      }`}
                    >
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{item.degree}</h3>
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
                  <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
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
