import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = Omit<HTMLMotionProps<"div">, "children"> & { glow?: boolean; children?: ReactNode };

export function GlassCard({ className, glow, children, ...rest }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        "glass group relative overflow-hidden rounded-2xl p-6 transition-shadow duration-300",
        glow && "hover:shadow-glow",
        className,
      )}
      {...rest}
    >
      <div className="pointer-events-none absolute inset-px rounded-[calc(theme(borderRadius.2xl)-1px)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,0%), oklch(0.72 0.18 240 / 0.12), transparent 40%)",
        }}
      />
      {children}
    </motion.div>
  );
}
