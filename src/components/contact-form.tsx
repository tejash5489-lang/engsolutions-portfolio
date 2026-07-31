"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, projectDetails }),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[4px] border border-border bg-background-panel p-8 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Message sent
        </p>
        <h3 className="mt-4 font-display text-2xl font-medium text-foreground">
          Thanks, {fullName.trim().split(" ")[0] || "there"}.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          Your message is in. I read every note personally and reply within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="fullName"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-faint"
        >
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Jane Doe"
          className="rounded-[4px] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-faint focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-faint"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@company.com"
          className="rounded-[4px] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-faint focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="projectDetails"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-faint"
        >
          Project Details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          required
          rows={5}
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
          placeholder="What are you building, and what does success look like?"
          className="resize-none rounded-[4px] border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-foreground-faint focus:border-accent"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex w-fit items-center gap-3 rounded-[4px] bg-cta-bg px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-cta-fg transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && (
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        )}
      </button>
    </form>
  );
}
