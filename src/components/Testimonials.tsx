import { trust } from "@/data/content";

export function Trust() {
  return (
    <section id="trust" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border bg-background-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm font-mono text-foreground-subtle tracking-wider">
            {trust.title}
          </span>
        </div>

        {/* Quotes */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {trust.quotes.map((quote, index) => (
            <article
              key={index}
              className="bg-background-subtle p-8 md:p-10 hover:bg-background group"
            >
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 group-hover:text-foreground text-foreground-muted">
                &ldquo;{quote.text}&rdquo;
              </blockquote>

              {/* Author */}
              <p className="text-sm font-mono text-foreground-subtle">
                — {quote.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Keep backward compatible export
export { Trust as Testimonials };
