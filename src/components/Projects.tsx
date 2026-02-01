import { products } from "@/data/content";

export function Projects() {
  return (
    <section id="products" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border bg-background-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm font-mono text-foreground-subtle tracking-wider">
            {products.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            {products.subtitle}
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {products.items.map((product, index) => (
            <article
              key={index}
              className="bg-background-subtle p-8 md:p-10 group hover:bg-background"
            >
              {/* Type badge */}
              <span className="text-xs font-mono text-foreground-subtle uppercase tracking-wider">
                {product.type}
              </span>

              {/* Name */}
              <h3 className="text-2xl font-bold mt-3 mb-2 group-hover:text-active">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-foreground-muted mb-6">
                {product.description}
              </p>

              {/* Metric */}
              <div className="mb-6">
                <span className="text-3xl font-bold tracking-tight">{product.metric}</span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {product.tech.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-xs font-mono px-2 py-1 border border-border rounded text-foreground-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
