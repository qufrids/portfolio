import { credentials } from "@/data/content";

export function Credentials() {
  return (
    <section id="credentials" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm font-mono text-foreground-subtle tracking-wider">
            {credentials.title}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-8">
              Education
            </h3>
            <div className="space-y-8">
              {credentials.education.map((edu, index) => (
                <div key={index} className="group">
                  <p className="text-xl font-bold mb-1 group-hover:text-active">
                    {edu.degree}
                  </p>
                  <p className="text-foreground-muted mb-1">{edu.school}</p>
                  <p className="text-sm font-mono text-foreground-subtle">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-8">
              Certifications
            </h3>
            <div className="space-y-6">
              {credentials.certifications.map((cert, index) => (
                <div key={index} className="group">
                  <p className="font-medium mb-1 group-hover:text-active">
                    {cert.name}
                  </p>
                  <p className="text-sm font-mono text-foreground-subtle">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-8">
              Publications
            </h3>
            <div className="space-y-6">
              {credentials.publications.map((pub, index) => (
                <div key={index} className="group">
                  <p className="font-medium mb-1 group-hover:text-active">
                    {pub.title}
                  </p>
                  <p className="text-sm text-foreground-muted">
                    {pub.venue} · <span className="font-mono">{pub.year}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
