import { mission } from "@/data/content";

export function Mission() {
  return (
    <section id="mission" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm font-mono text-foreground-subtle tracking-wider">
            {mission.title}
          </span>
        </div>

        {/* Main Statement */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16 max-w-4xl">
          {mission.statement}
        </h2>

        {/* Paragraphs */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              {mission.paragraphs[0]}
            </p>
          </div>
          <div className="space-y-6">
            {mission.paragraphs.slice(1).map((paragraph, index) => (
              <p key={index} className="text-lg text-foreground-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Keep backward compatible export
export { Mission as About };
