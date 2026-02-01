import { contact } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm font-mono text-foreground-subtle tracking-wider">
            {contact.title}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column - Headline */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {contact.headline}
            </h2>
            <p className="text-xl text-foreground-muted mb-8">
              {contact.description}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-active rounded-full" />
              <span className="text-sm font-mono text-foreground-muted">
                {contact.status}
              </span>
            </div>
          </div>

          {/* Right column - Links */}
          <div className="space-y-0">
            {contact.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex items-center justify-between py-6 border-b border-border group hover:border-foreground-muted"
              >
                <span className="text-2xl md:text-3xl font-medium group-hover:text-active">
                  {link.label}
                </span>
                <svg
                  className="w-6 h-6 text-foreground-subtle group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
