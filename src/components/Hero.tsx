import { hero } from "@/data/content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Status indicator */}
        <div className="flex items-center gap-3 mb-12 animate-fade-in">
          <div className="relative">
            <div className="w-2 h-2 bg-active rounded-full" />
            <div className="absolute inset-0 w-2 h-2 bg-active rounded-full animate-ping opacity-75" />
          </div>
          <span className="text-sm font-mono text-foreground-muted tracking-wide">
            {hero.status.label}: {hero.status.value}
          </span>
        </div>

        {/* Name */}
        <h1 className="text-lg md:text-xl font-medium text-foreground-muted mb-4 tracking-wide animate-fade-in stagger-1 opacity-0">
          {hero.name}
        </h1>

        {/* Main statement */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.9] animate-slide-up stagger-2 opacity-0">
          {hero.statement}
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-foreground-muted max-w-2xl mb-16 leading-relaxed animate-fade-in stagger-3 opacity-0">
          {hero.description}
        </p>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border animate-fade-in stagger-4 opacity-0">
          {hero.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-background p-6 md:p-8 group hover:bg-background-elevated cursor-default"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-1 group-hover:text-active">
                {metric.value}
              </div>
              <div className="text-sm text-foreground-muted font-mono uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in stagger-5 opacity-0">
          <span className="text-xs font-mono text-foreground-subtle tracking-wider">
            SCROLL
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground-subtle to-transparent" />
        </div>
      </div>
    </section>
  );
}
