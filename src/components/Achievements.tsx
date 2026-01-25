import { achievements } from "@/data/content";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-border-subtle">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-muted tracking-wide uppercase mb-4">
            Track Record
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {achievements.title}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.items.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg border border-border text-center"
            >
              <p className="text-3xl sm:text-4xl font-semibold mb-1">
                {item.metric}
              </p>
              <p className="text-sm font-medium mb-1">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Milestones</h3>
          <div className="space-y-4">
            {achievements.milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-baseline gap-4 text-sm"
              >
                <span className="text-muted-foreground font-mono w-12 shrink-0">
                  {milestone.year}
                </span>
                <span className="text-muted">{milestone.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
