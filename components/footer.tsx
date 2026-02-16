import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Jihan Karim. All rights reserved."}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
