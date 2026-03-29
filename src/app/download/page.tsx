"use client";

import { useEffect } from "react";

const changes = [
  "Add folder tree workspace and bottom filmstrip UI",
  "Refine editing workflow and filmstrip UI",
  "Migrate analysis pipeline to wgpu",
  "Migrate image analysis to wgpu and improve throughput",
  "Improve histogram rendering and preview behavior",
  "Fix zoom refinement stutter",
  "Improve zoom cache reuse and scheduling",
  "Polish zoom upload efficiency and cache retention",
  "Bump opencv from 0.96.0 to 0.98.1",
  "Minor UI improvements",
];

export default function Download() {
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
          href="/"
          className="flex items-center gap-2 font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight"
        >
          <span className="text-xl">⚡</span>
          <span>QuickCull</span>
        </a>
        <a
          href="/#features"
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

      {/* ─── Hero ─── */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-8 pt-28 text-center">
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
          <h1
            className="fade-in-up font-[family-name:var(--font-syne)] text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl md:text-6xl"
            style={{ lineHeight: 0.95 }}
          >
            Download QuickCull
          </h1>
          <p
            className="fade-in-up delay-1 mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            The fastest way to cull your photos. macOS only.
          </p>
        </div>
      </section>

      {/* ─── Download Card ─── */}
      <section className="px-4 pb-10 sm:px-6">
        <div
          className="fade-in-up delay-2 mx-auto max-w-2xl rounded-2xl p-4 sm:p-6 md:p-8"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight">
                  v1.2.0
                </h2>
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{
                    background: "rgba(201, 148, 58, 0.15)",
                    color: "var(--accent-light)",
                    border: "1px solid rgba(201, 148, 58, 0.25)",
                  }}
                >
                  Latest
                </span>
              </div>
              <p
                className="mt-1.5 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                macOS 12+ &middot; Apple Silicon (arm64)
              </p>
            </div>
            <a
              href="/QuickCull-1.2.0-macos12-arm64.dmg"
              download
              className="cta-btn flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap"
              style={{
                background: "rgba(201, 148, 58, 0.15)",
                color: "var(--accent-light)",
                border: "1px solid rgba(201, 148, 58, 0.3)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2v9M4 8l4 4 4-4M2 14h12" />
              </svg>
              Download .dmg
            </a>
          </div>
        </div>
      </section>

      {/* ─── Install Instructions ─── */}
      <section className="px-4 pb-10 sm:px-6">
        <div
          className="scroll-reveal-scale mx-auto max-w-2xl overflow-hidden rounded-2xl p-4 sm:p-6 md:p-8"
          style={{
            background: "rgba(40, 200, 64, 0.04)",
            border: "1px solid rgba(40, 200, 64, 0.15)",
          }}
        >
          <div className="flex items-start gap-2.5 sm:gap-3">
            <span className="mt-0.5 hidden text-lg sm:block">&#x2705;</span>
            <div className="min-w-0 flex-1">
              <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold tracking-tight sm:text-base">
                <span className="sm:hidden">&#x2705; </span>Install in Seconds
              </h3>
              <p
                className="mt-2 text-xs leading-relaxed sm:text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Open the downloaded <code>.dmg</code>, drag QuickCull to your
                Applications folder, and launch it &mdash; no extra steps
                required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div
        className="divider-line scroll-reveal-line mx-auto h-px max-w-2xl px-4 sm:px-0"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border), transparent)",
        }}
      />

      {/* ─── Release Notes ─── */}
      <section className="px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-2xl">
          <h2 className="scroll-reveal font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl">
            What&apos;s Changed
          </h2>
          <ul className="mt-6 space-y-3">
            {changes.map((change, i) => (
              <li
                key={i}
                className="scroll-reveal-left flex items-start gap-3 text-sm leading-relaxed sm:text-base"
                data-delay={i * 50}
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                {change}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-4 pb-10 pt-4 sm:px-6">
        <div
          className="divider-line scroll-reveal-line mx-auto mb-8 h-px max-w-2xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border), transparent)",
          }}
        />
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="scroll-reveal text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            ⚡ QuickCull — Built with Rust for photographers who value speed.
          </p>
        </div>
      </footer>
    </div>
  );
}
