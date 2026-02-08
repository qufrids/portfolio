import { systems } from "@/data/content";

export function Systems() {
  return (
    <section id="systems" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border bg-background-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm font-mono text-foreground-subtle tracking-wider">
            {systems.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            {systems.subtitle}
          </h2>
        </div>

        {/* Systems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {systems.categories.map((category, index) => (
            <div
              key={index}
              className="bg-background-subtle p-8 hover:bg-background group"
            >
              <h3 className="text-sm font-mono uppercase tracking-wider text-foreground-subtle mb-6 group-hover:text-active">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, iIndex) => (
                  <li key={iIndex} className="text-foreground-muted group-hover:text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Keep backward compatible export
export { Systems as Expertise };
