export function HeroBackground({ tone = "inverse" }: { tone?: "inverse" | "default" }) {
  if (tone === "default") {
    return (
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-accent1-50/60 dark:from-brand-950/30 dark:via-gray-950 dark:to-accent1-950/20"
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(var(--color-brand-200)_1px,transparent_1px)] [background-size:28px_28px] dark:opacity-10" />
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl dark:bg-brand-600/15" />
      </div>
    )
  }
  return (
    <div className="pointer-events-none absolute inset-0 z-0 bg-black" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(var(--hero-glow-purple),0.5) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(var(--hero-glow-pink),0.5) 2px, transparent 0)",
          backgroundSize: "100px 100px",
        }}
      />
      <div
        className="hero-gradient-shift absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(120deg, rgba(var(--hero-glow-purple),0.3) 0%, rgba(var(--hero-glow-pink),0.3) 100%)",
        }}
      />
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent1-600/15 blur-3xl" />
    </div>
  )
}
