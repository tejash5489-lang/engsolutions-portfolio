"use client";

import { motion } from "motion/react";
import { SignatureGraphic } from "@/components/signature-graphic";
import { MagneticLink } from "@/components/motion/magnetic-link";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid min-h-screen grid-cols-1 overflow-hidden pt-20 lg:grid-cols-12"
    >
      {/* Ambient background orbs — weightless, slow-drifting gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-drift-a absolute -left-24 top-24 h-96 w-96 rounded-full bg-accent/[0.12] blur-[100px]" />
        <div className="animate-drift-b absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/[0.08] blur-[120px]" />
      </div>

      {/* Left — typography */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center px-6 py-16 md:px-16 lg:col-span-7 lg:py-0"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          Software Engineer — Cloud &amp; Distributed Systems
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 text-balance font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Engineering high-performance digital solutions.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-[52ch] text-lg leading-relaxed text-foreground-muted"
        >
          I design and build cloud-native infrastructure and APIs that hold
          up under real traffic — architected for throughput, resilience,
          and years of maintainability, not just a demo.
        </motion.p>

        <motion.div variants={item} className="mt-12 flex items-center gap-6">
          <MagneticLink
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-[4px] bg-cta-bg px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-cta-fg"
          >
            Let&rsquo;s work together
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </MagneticLink>
        </motion.div>
      </motion.div>

      {/* Right — signature graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT }}
        className="hidden lg:col-span-5 lg:flex lg:items-center lg:justify-center lg:p-10"
      >
        <div className="animate-float-y">
          <SignatureGraphic />
        </div>
      </motion.div>
    </section>
  );
}
