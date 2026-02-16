const interests = [
  { emoji: "\u{1F375}", label: "Matcha" },
  { emoji: "\u{1F457}", label: "Fashion" },
  { emoji: "\u2708\uFE0F", label: "Travel" },
  { emoji: "\u{1F4BB}", label: "Coding" },
]

export function About() {
  return (
    <section id="about" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get to know me
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-card-foreground md:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: bio */}
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              {
                "I'm a web developer and student with a passion for building digital experiences that are both beautiful and highly functional. My journey into development started with curiosity and has grown into a deep love for crafting clean, user-focused interfaces."
              }
            </p>
            <p>
              {
                "When I'm not writing code, you'll find me exploring new design trends, learning about emerging technologies, and working on creative projects that push my skills forward. I believe great software starts with empathy for the user."
              }
            </p>
            <p>
              {
                "I'm always looking for opportunities to collaborate, learn, and create something meaningful. Let's build something great together!"
              }
            </p>
          </div>

          {/* Right: interests */}
          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="mb-6 font-heading text-lg font-semibold text-foreground">
              Things I Enjoy
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40"
                >
                  <span className="text-2xl" role="img" aria-label={item.label}>
                    {item.emoji}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
