"use client"

import { useState, type FormEvent } from "react"
import { Send, Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {"Let's connect"}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Feedback
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-card p-12 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Thank you!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {"Your message has been sent. I'll get back to you soon."}
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border bg-card p-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-110"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                Contact Info
              </h3>
              <a
                href="mailto:jihan@example.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5 text-primary" />
                jihan@example.com
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                Socials
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
