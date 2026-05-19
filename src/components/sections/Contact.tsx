import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const channels = [
  { icon: Mail, label: "Email", value: "karthikeyan@example.com", href: "mailto:karthikeyanev.ev@gamil.com" },
  { icon: Github, label: "GitHub", value: "@karthikeyan-ev", href: "https://github.com/KARTHIKEYAN-EV" },
  { icon: Linkedin, label: "LinkedIn", value: "in/karthikeyan-ev", href: "https://www.linkedin.com/in/karthikeyanev/" },
  { icon: Instagram, label: "Instagram", value: "@karthikeyan.ev", href: "https://instagram.com/" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build something <span className="text-gradient">great</span>.</>}
          description="I'm open to internships, collaborations, and interesting conversations. Reach out — I respond quickly."
        />
        <div className="grid gap-4 sm:grid-cols-2">
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
              whileHover={{ y: -4 }}
              className="glass-strong group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl p-5 transition-shadow hover:shadow-glow"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-background shadow-glow transition-transform group-hover:scale-110">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-display mt-0.5 text-base font-semibold">{c.value}</div>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
