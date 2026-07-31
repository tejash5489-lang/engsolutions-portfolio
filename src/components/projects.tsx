import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

export type Project = {
  id: string;
  icon: "workflow" | "inventory" | "ecommerce";
  title: string;
  description: string;
  stack: string[];
  metrics: { label: string; value: string }[];
};

const PROJECTS: Project[] = [
  {
    id: "automated-workflow-engine",
    icon: "workflow",
    title: "Automated Workflow Engine",
    description:
      "Replaced a manual, spreadsheet-driven approval process with an event-driven workflow engine — cutting cycle time and removing status-tracking guesswork for the ops team.",
    stack: ["Node.js", "PostgreSQL", "Redis", "AWS Lambda", "Terraform"],
    metrics: [
      { label: "Manual processing", value: "-68%" },
      { label: "Approval cycle", value: "4.5x faster" },
      { label: "Error rate", value: "0.2%" },
    ],
  },
  {
    id: "cloud-inventory-portal",
    icon: "inventory",
    title: "Cloud Inventory Portal",
    description:
      "Built a real-time inventory platform across multiple warehouses, replacing nightly batch reconciliation with live stock visibility for the fulfillment team.",
    stack: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "AWS ECS"],
    metrics: [
      { label: "Stock accuracy", value: "99.7%" },
      { label: "Sync latency", value: "<2s" },
      { label: "Warehouses live", value: "12" },
    ],
  },
  {
    id: "ecommerce-framework",
    icon: "ecommerce",
    title: "E-commerce Framework",
    description:
      "Designed a headless commerce framework that lets the marketing team launch new storefronts without waiting on engineering, cutting go-live time from weeks to days.",
    stack: ["React", "Next.js", "Stripe", "Contentful", "Vercel"],
    metrics: [
      { label: "Launch time", value: "-80%" },
      { label: "Checkout conversion", value: "+18%" },
      { label: "Core Web Vitals", value: "All green" },
    ],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border bg-background px-6 py-24 md:px-16 md:py-32"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          ( 03 ) — Work
        </p>
        <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Featured Projects
        </h2>
      </Reveal>

      <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
