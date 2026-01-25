import { about } from "@/data/content";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-muted tracking-wide uppercase mb-4">
            About
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {about.title}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Bio */}
          <div className="md:col-span-2 space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Facts Sidebar */}
          <div className="space-y-6">
            {about.facts.map((fact, index) => (
              <div key={index}>
                <p className="text-sm text-muted-foreground mb-1">{fact.label}</p>
                <p className="font-medium">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
