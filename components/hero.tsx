import Image from "next/image"
import { ArrowDown, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Subtle decorative shapes */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Text side */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Welcome
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            {"Hi, I'm "}
            <span className="text-primary">Jihan Karim</span>
          </h1>
          <p className="mt-4 font-heading text-lg font-medium text-muted-foreground md:text-xl">
            Web Developer & Student
          </p>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground lg:mx-0 mx-auto">
            I create beautiful, functional websites that help businesses grow.
            Passionate about clean code, thoughtful design, and turning ideas
            into polished digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-110"
            >
              <ArrowDown className="h-4 w-4" />
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Photo side */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl shadow-xl ring-4 ring-primary/10 md:h-80 md:w-80">
            <Image
              src="/images/hero-photo.jpg"
              alt="Jihan Karim portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative dot pattern */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-lg bg-primary/10" />
        </div>
      </div>
    </section>
  )
}
