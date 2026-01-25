import { credentials } from "@/data/content";

export function Credentials() {
  return (
    <section id="credentials" className="py-24 px-6 bg-border-subtle">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-muted tracking-wide uppercase mb-4">
            Background
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {credentials.title}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {credentials.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-5 bg-background rounded-lg border border-border"
                >
                  <p className="font-semibold mb-1">{edu.degree}</p>
                  <p className="text-sm text-muted mb-2">{edu.institution}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{edu.focus}</span>
                    <span>{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Certifications</h3>
            <div className="space-y-4">
              {credentials.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 bg-background rounded-lg border border-border"
                >
                  <p className="font-semibold mb-1">{cert.name}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publications */}
        {credentials.publications.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-6">Publications</h3>
            <div className="space-y-4">
              {credentials.publications.map((pub, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-4 p-5 bg-background rounded-lg border border-border"
                >
                  <div>
                    <p className="font-semibold mb-1">{pub.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {pub.venue} · {pub.year}
                    </p>
                  </div>
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors shrink-0"
                      aria-label={`Read ${pub.title}`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
