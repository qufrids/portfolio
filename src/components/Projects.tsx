import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-muted tracking-wide uppercase mb-4">
            Projects
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {projects.title}
          </p>
          <p className="text-muted max-w-2xl">
            {projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.items.map((project, index) => (
            <article
              key={index}
              className="group p-6 border border-border rounded-lg hover:border-muted transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {project.category}
                </span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                    aria-label={`Visit ${project.name}`}
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

              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-muted mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-xs px-2 py-1 bg-border-subtle rounded text-muted font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              {project.metrics && (
                <p className="text-sm font-medium text-muted-foreground">
                  {project.metrics}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
