export function ParticleBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Floating orbs */}
      <div className="animate-float-slow absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full bg-blue/30 blur-[120px]" />
      <div
        className="animate-float-slow absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-purple/25 blur-[140px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-float-slow absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[120px]"
        style={{ animationDelay: "-12s" }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background" />
    </div>
  );
}
