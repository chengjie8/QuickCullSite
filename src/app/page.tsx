"use client";

import { useEffect } from "react";

const features = [
  {
    icon: "🖼",
    title: "Instant previews",
    description: "Flip through 10,000+ RAW files like they're JPEGs",
  },
  {
    icon: "🏷",
    title: "Tag in seconds",
    description:
      "Pick, Reject, skip, or rate 1–5 stars with a single keystroke",
  },
  {
    icon: "🔣",
    title: "Stacked filters",
    description:
      "Combine flag, star rating, and ISO filters to narrow a shoot fast",
  },
  {
    icon: "✂️",
    title: "Crop & straighten",
    description:
      "Strict-ratio or freeform crop, level horizons, and keep it non-destructive",
  },
  {
    icon: "🪄",
    title: "Auto level with auto crop",
    description:
      "Detect horizon tilt from preview JPEGs, auto-crop after rotation, and accept the crop frame with Return",
  },
  {
    icon: "📐",
    title: "Batch auto level",
    description:
      "Level one photo, a multi-selection, or a larger filtered set in the background",
  },
  {
    icon: "↩️",
    title: "Undo with history",
    description:
      "Per-photo undo/redo for picks, stars, crop, and level, restored when you reopen",
  },
  {
    icon: "🗑",
    title: "Delete with confirmation",
    description:
      "Remove the current photo or a multi-selection from disk and clean its local QuickCull history",
  },
  {
    icon: "📦",
    title: "Lightroom-ready export",
    description:
      "Export RAWs with XMP sidecars for ratings, crop, and straighten adjustments",
  },
  {
    icon: "🔍",
    title: "Zoom & inspect",
    description:
      "Pixel-peep focus, check composition, and move quickly between sharp previews",
  },
  {
    icon: "📊",
    title: "Live histogram",
    description: "See RGB/luma distribution next to the current photo",
  },
  {
    icon: "📷",
    title: "Every RAW format",
    description:
      "Sony, Canon, Nikon, Fuji, Olympus, Panasonic, Pentax, and more",
  },
  {
    icon: "📋",
    title: "Full EXIF",
    description:
      "Camera, lens, focal length, aperture, ISO, shutter speed at a glance",
  },
];

const shortcuts: { keys: string[]; action: string }[] = [
  { keys: ["←", "→", "↑", "↓"], action: "Navigate photos" },
  { keys: ["P"], action: "Pick" },
  { keys: ["X"], action: "Reject" },
  { keys: ["U"], action: "Untag" },
  { keys: ["1", "–", "5"], action: "Rate current photo with 1–5 stars" },
  {
    keys: ["⌘", "+", "1", "–", "4"],
    action: "Filter: All / Picked / Rejected / Unlabeled",
  },
  { keys: ["Z"], action: "Toggle fit / zoom" },
  { keys: ["C"], action: "Toggle crop mode" },
  {
    keys: ["Return"],
    action: "Apply current crop or accept the auto-level crop frame",
  },
  {
    keys: ["Esc"],
    action: "Cancel crop, reset level tool, reset zoom, or clear selection",
  },
  { keys: ["L"], action: "Toggle level tool" },
  { keys: ["⌘", "+", "A"], action: "Select all filtered photos" },
  { keys: ["⌘", "+", "Z"], action: "Undo last change for current photo" },
  {
    keys: ["⌘", "+", "⇧", "+", "Z"],
    action: "Redo last undone change for current photo",
  },
  {
    keys: ["⌘", "+", "⌫"],
    action: "Delete current photo or selected photos after confirmation",
  },
];

export default function Home() {
  useEffect(() => {
    const revealClasses = [
      "scroll-reveal",
      "scroll-reveal-blur",
      "scroll-reveal-scale",
      "scroll-reveal-line",
      "scroll-reveal-left",
    ];
    const selector = revealClasses.map((c) => `.${c}`).join(",");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) {
              el.style.animationDelay = `${delay}ms`;
            }
            el.classList.add("revealed");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* ─── Navigation ─── */}
      <nav
        className="nav-animate fixed top-0 z-40 flex w-full items-center justify-between px-6 py-4 backdrop-blur-md md:px-10"
        style={{ background: "rgba(5, 5, 7, 0.7)" }}
      >
        <a
          href="#"
          className="flex items-center gap-2 font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight"
        >
          <span className="text-xl">⚡</span>
          <span>QuickCull</span>
        </a>
        <a
          href="#features"
          className="cta-btn relative rounded-full px-5 py-2 text-sm font-medium"
          style={{
            background: "rgba(201, 148, 58, 0.12)",
            color: "var(--accent-light)",
            border: "1px solid rgba(201, 148, 58, 0.2)",
          }}
        >
          Explore Features
        </a>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-8 pt-24 text-center">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2"
          style={{
            width: "clamp(400px, 50vw, 700px)",
            height: "clamp(300px, 40vw, 500px)",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(201, 148, 58, 0.07), transparent 70%)",
            animation: "gentlePulse 7s ease-in-out infinite",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <div className="fade-in-up mb-3">
            <span className="bolt-float text-4xl md:text-5xl">⚡</span>
          </div>

          <h1
            className="fade-in-up delay-1 font-[family-name:var(--font-syne)] text-5xl font-extrabold tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ lineHeight: 0.95 }}
          >
            QuickCull
          </h1>

          <p
            className="fade-in-up delay-2 mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg md:text-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            A faster, cleaner, more focused culling app for photographers who
            want to get to Lightroom quickly without Photo Mechanic&apos;s
            broader ingest and catalog complexity.
          </p>

          <div
            className="fade-in-up delay-3 mx-auto mt-5 inline-flex items-center gap-2.5 rounded-full px-5 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-sm"
            style={{
              background: "rgba(201, 148, 58, 0.08)",
              color: "var(--accent-light)",
              border: "1px solid rgba(201, 148, 58, 0.15)",
            }}
          >
            <span>🦀</span>
            <span>Built in Rust. Performance is the product.</span>
          </div>
        </div>
      </section>

      {/* ─── Philosophy Section ─── */}
      <section className="relative px-6 py-8 md:py-10">
        {/* Top rule */}
        <div
          className="divider-line scroll-reveal-line mx-auto mb-6 h-px max-w-3xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border), transparent)",
          }}
        />

        <div className="mx-auto max-w-3xl text-center">
          <p className="scroll-reveal-blur font-[family-name:var(--font-syne)] text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl">
            No catalogs. No imports.
            <br />
            No bloated ingest workflow.
          </p>
          <p
            className="scroll-reveal-blur mt-5 text-lg md:text-xl"
            data-delay="120"
            style={{ color: "var(--accent-light)" }}
          >
            Just open a folder and start culling.
          </p>
          <p
            className="scroll-reveal mt-5 mx-auto max-w-2xl text-sm leading-relaxed md:text-base"
            data-delay="220"
            style={{ color: "var(--text-muted)" }}
          >
            QuickCull is built for one job: move through large RAW shoots fast,
            make decisions quickly, apply lightweight non-destructive
            adjustments, and hand everything off to Lightroom with sidecars
            ready to go.
          </p>
        </div>

        {/* Bottom rule */}
        <div
          className="divider-line scroll-reveal-line mx-auto mt-6 h-px max-w-3xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border), transparent)",
          }}
        />
      </section>

      {/* ─── Features Section ─── */}
      <section id="features" className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="scroll-reveal font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why QuickCull?
            </h2>
            <p
              className="scroll-reveal mt-4 text-base md:text-lg"
              data-delay="100"
              style={{ color: "var(--text-muted)" }}
            >
              Every feature built around one workflow: cull fast, decide
              confidently.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="scroll-reveal-scale feature-card group rounded-xl p-4"
                data-delay={i * 50}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="feature-icon mb-2 text-xl">{feature.icon}</div>
                <h3 className="font-[family-name:var(--font-syne)] text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p
                  className="mt-1.5 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Shortcuts Section ─── */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="scroll-reveal font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
              ⌨️ Keyboard Shortcuts
            </h2>
            <p
              className="scroll-reveal mt-3 text-base"
              data-delay="100"
              style={{ color: "var(--text-muted)" }}
            >
              Your hands never leave the keyboard. Every action, one keystroke
              away.
            </p>
          </div>

          <div
            className="scroll-reveal-scale overflow-hidden rounded-xl"
            data-delay="80"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-[140px_1fr] items-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] sm:grid-cols-[180px_1fr]"
              style={{
                color: "var(--text-muted)",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <span>Key</span>
              <span>Action</span>
            </div>

            {/* Table rows */}
            {shortcuts.map((shortcut, i) => (
              <div
                key={i}
                className="shortcut-row grid grid-cols-[140px_1fr] items-center px-5 py-2.5 sm:grid-cols-[180px_1fr]"
                style={{
                  borderBottom:
                    i < shortcuts.length - 1
                      ? "1px solid var(--border-subtle)"
                      : "none",
                }}
              >
                <div className="flex flex-wrap items-center gap-1.5">
                  {shortcut.keys.map((key, j) =>
                    key === "+" || key === "–" ? (
                      <span
                        key={j}
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {key === "+" ? "+" : "–"}
                      </span>
                    ) : (
                      <kbd key={j}>{key}</kbd>
                    )
                  )}
                </div>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {shortcut.action}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-6 pb-10 pt-8">
        <div
          className="divider-line scroll-reveal-line mx-auto mb-8 h-px max-w-3xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border), transparent)",
          }}
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="scroll-reveal-blur font-[family-name:var(--font-syne)] text-xl font-bold tracking-tight sm:text-2xl">
            Stop managing catalogs.
            <br />
            Start culling.
          </p>
          <p
            className="scroll-reveal mt-4 text-sm"
            data-delay="150"
            style={{ color: "var(--text-muted)" }}
          >
            ⚡ QuickCull — Built with Rust for photographers who value speed.
          </p>
        </div>
      </footer>
    </div>
  );
}
