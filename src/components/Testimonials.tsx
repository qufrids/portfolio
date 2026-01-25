import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-muted tracking-wide uppercase mb-4">
            Testimonials
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {testimonials.title}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.items.map((testimonial, index) => (
            <article
              key={index}
              className="p-6 border border-border rounded-lg"
            >
              {/* Quote */}
              <blockquote className="text-muted leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-sm">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
