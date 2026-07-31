"use client";

import { useRef } from "react";
import type { Project } from "@/components/projects";

const ICON_PATHS: Record<Project["icon"], { nodes: [number, number][]; edges: [number, number][] }> = {
  // Linear chain — a pipeline moving left to right.
  workflow: {
    nodes: [
      [6, 16],
      [16, 16],
      [26, 16],
    ],
    edges: [
      [0, 1],
      [1, 2],
    ],
  },
  // Square lattice — structured, gridded records.
  inventory: {
    nodes: [
      [10, 10],
      [22, 10],
      [10, 22],
      [22, 22],
    ],
    edges: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
    ],
  },
  // Fully connected triangle — modular, composable pieces.
  ecommerce: {
    nodes: [
      [16, 7],
      [7, 25],
      [25, 25],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [0, 2],
    ],
  },
};

function ProjectIcon({ icon }: { icon: Project["icon"] }) {
  const { nodes, edges } = ICON_PATHS[icon];
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
      {edges.map(([from, to]) => {
        const [x1, y1] = nodes[from];
        const [x2, y2] = nodes[to];
        return (
          <line
            key={`${from}-${to}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--border-strong)"
            strokeWidth="1.2"
          />
        );
      })}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="var(--accent)" />
      ))}
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `${project.id}-title`;

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <div className="group flex flex-col rounded-[4px] border border-border bg-background-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_40px_-12px_rgba(91,127,255,0.25)]">
      <div className="flex h-24 w-full items-center justify-center rounded-[4px] border border-border bg-background-panel-raised transition-transform duration-300 group-hover:scale-105">
        <ProjectIcon icon={project.icon} />
      </div>

      <h3 className="mt-6 text-xl font-medium text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">
        {project.description}
      </p>

      <button
        type="button"
        onClick={openDialog}
        className="mt-6 inline-flex w-fit items-center gap-3 rounded-[4px] border border-border-strong px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        View Blueprint
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(e) => {
          // Only the true backdrop click reaches the dialog itself as
          // e.target — everything in the padded content div below stops it.
          if (e.target === e.currentTarget) closeDialog();
        }}
        className="m-auto w-full max-w-lg rounded-[4px] border border-border bg-background-panel p-0 text-foreground backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Project Blueprint
              </p>
              <h3
                id={titleId}
                className="mt-3 font-display text-2xl font-medium text-foreground"
              >
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close dialog"
              className="font-mono text-lg leading-none text-foreground-muted transition-colors hover:text-foreground"
            >
              ×
            </button>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-foreground-muted">
            {project.description}
          </p>

          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-faint">
              Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-[4px] border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-mono text-lg font-medium text-foreground">
                  {metric.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-foreground-faint">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </div>
  );
}
