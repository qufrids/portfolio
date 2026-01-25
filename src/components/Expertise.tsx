import { expertise } from "@/data/content";

export function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-muted tracking-wide uppercase mb-4">
            Skills
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {expertise.title}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="text-muted">
                    {skill}
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
