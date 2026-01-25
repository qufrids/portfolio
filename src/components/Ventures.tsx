import { ventures } from "@/data/content";

export function Ventures() {
  return (
    <section id="ventures" className="py-24 px-6 bg-border-subtle">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-muted tracking-wide uppercase mb-4">
            Ventures
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {ventures.title}
          </p>
          <p className="text-muted max-w-2xl">
            {ventures.subtitle}
          </p>
        </div>

        {/* Ventures List */}
        <div className="space-y-8">
          {ventures.items.map((venture, index) => (
            <article
              key={index}
              className="p-6 sm:p-8 bg-background rounded-lg border border-border hover:border-muted transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-semibold">{venture.name}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        venture.status === "Active"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      }`}
                    >
                      {venture.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted">
                    {venture.role} · {venture.period}
                  </p>
                </div>
                {venture.url && (
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors shrink-0"
                  >
                    Visit
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

              <p className="text-muted mb-4">{venture.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {venture.highlights.map((highlight, hIndex) => (
                  <span
                    key={hIndex}
                    className="text-xs px-3 py-1 bg-border-subtle rounded-full text-muted"
                  >
                    {highlight}
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
