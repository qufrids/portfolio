import { timeline } from "@/data/content";

export function Timeline() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "exit":
        return "text-active";
      case "founded":
        return "text-foreground";
      case "funding":
        return "text-foreground";
      default:
        return "text-foreground-muted";
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "exit":
        return "EXIT";
      case "founded":
        return "FOUNDED";
      case "funding":
        return "FUNDING";
      case "launch":
        return "LAUNCH";
      case "education":
        return "EDU";
      default:
        return null;
    }
  };

  return (
    <section id="timeline" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm font-mono text-foreground-subtle tracking-wider">
            {timeline.title}
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[60px] md:left-[100px] top-0 bottom-0 w-px bg-border" />

          {/* Events */}
          <div className="space-y-0">
            {timeline.events.map((event, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 md:gap-10 py-6 group"
              >
                {/* Year */}
                <div className="w-[60px] md:w-[100px] shrink-0 text-right">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground-subtle group-hover:text-foreground">
                    {event.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative z-10 mt-3">
                  <div className={`w-2 h-2 rounded-full ${event.type === "exit" ? "bg-active" : "bg-foreground-subtle"} group-hover:bg-foreground`} />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-lg md:text-xl font-medium ${getTypeColor(event.type)} group-hover:text-foreground`}>
                      {event.event}
                    </span>
                    {getTypeBadge(event.type) && (
                      <span className={`text-xs font-mono px-2 py-0.5 rounded ${event.type === "exit" ? "bg-active/10 text-active" : "border border-border text-foreground-subtle"}`}>
                        {getTypeBadge(event.type)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Keep backward compatible export
export { Timeline as Achievements };
