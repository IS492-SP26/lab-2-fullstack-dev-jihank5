const skillGroups = [
  {
    category: "Development",
    skills: ["HTML", "Python", "SQL", "Git", "WordPress"],
  },
  {
    category: "Design Tools",
    skills: ["Figma", "Photoshop"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What I work with
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-card-foreground md:text-4xl">
            {"Skills & Technologies"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="mx-auto max-w-2xl space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
