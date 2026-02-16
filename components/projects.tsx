import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Movie Recommendation System",
    description:
      "A smart recommendation engine that suggests movies based on user preferences, viewing history, and collaborative filtering.",
    image: "/images/project-movie.jpg",
  },
  {
    title: "Constellation Visualizer",
    description:
      "An interactive star map that visualizes constellations in real-time, letting users explore the night sky from anywhere on Earth.",
    image: "/images/project-constellation.jpg",
  },
  {
    title: "Portfolio Blog",
    description:
      "A clean, content-focused blog platform with markdown support, syntax highlighting, and a minimal reading experience.",
    image: "/images/project-blog.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Selected work
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            My Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  View Project
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
