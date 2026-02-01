import { ventures } from "@/data/content";

export function Ventures() {
  return (
    <section id="ventures" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="text-sm font-mono text-foreground-subtle tracking-wider">
              {ventures.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
              {ventures.subtitle}
            </h2>
          </div>
        </div>

        {/* Ventures Grid */}
        <div className="space-y-px bg-border">
          {ventures.items.map((venture, index) => (
            <article
              key={index}
              className="bg-background p-8 md:p-12 group hover:bg-background-elevated"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Left column - Name & Role */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-active">
                      {venture.name}
                    </h3>
                    {venture.status === "Active" && (
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-active rounded-full" />
                        <span className="text-xs font-mono text-active">LIVE</span>
                      </div>
                    )}
                    {venture.status === "Acquired" && (
                      <span className="text-xs font-mono text-foreground-muted px-2 py-0.5 border border-border rounded">
                        EXIT
                      </span>
                    )}
                  </div>
                  <p className="text-foreground-muted mb-2">{venture.role}</p>
                  <p className="text-sm font-mono text-foreground-subtle">{venture.period}</p>
                </div>

                {/* Middle column - Description */}
                <div className="md:col-span-5">
                  <p className="text-lg text-foreground-muted leading-relaxed">
                    {venture.description}
                  </p>
                </div>

                {/* Right column - Metrics */}
                <div className="md:col-span-3">
                  <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
                    {venture.metrics.map((metric, mIndex) => (
                      <div key={mIndex}>
                        <div className="text-2xl md:text-3xl font-bold tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-xs font-mono text-foreground-subtle uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
