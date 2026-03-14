"use client";

import { useEffect, useState } from "react";

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

const QUARANTINE_CMD =
  "xattr -dr com.apple.quarantine /Applications/QuickCull.app";

export default function Download() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(QUARANTINE_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
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
      <section className="px-6 pb-10">
        <div
          className="fade-in-up delay-2 mx-auto max-w-2xl rounded-2xl p-6 sm:p-8"
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

      {/* ─── Unsigned App Notice ─── */}
      <section className="px-6 pb-10">
        <div
          className="scroll-reveal-scale mx-auto max-w-2xl rounded-2xl p-6 sm:p-8"
          style={{
            background: "rgba(201, 148, 58, 0.04)",
            border: "1px solid rgba(201, 148, 58, 0.15)",
          }}
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-lg">🔓</span>
            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-base font-semibold tracking-tight">
                Important: app is currently unsigned
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Code signing is coming in the next release. For now, macOS will
                block the app from opening because it&apos;s from an
                unidentified developer. After installing, open Terminal and run
                the command below.
              </p>

              {/* ─── How to open Terminal ─── */}
              <div
                className="mt-4 rounded-lg p-4"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Step 1 &mdash; Open Terminal
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Press{" "}
                  <kbd>⌘</kbd>{" "}
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>+</span>{" "}
                  <kbd>Space</kbd>{" "}
                  to open Spotlight, then type{" "}
                  <span style={{ color: "var(--accent-light)" }}>&ldquo;Terminal&rdquo;</span>{" "}
                  and hit{" "}
                  <kbd>Return</kbd>
                </p>

                {/* Spotlight mockup */}
                <div
                  className="mx-auto mt-4 max-w-sm overflow-hidden rounded-xl"
                  style={{
                    background: "#1c1c1e",
                    border: "1px solid #333338",
                    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {/* Search bar */}
                  <div
                    className="flex items-center gap-2.5 px-4 py-3"
                    style={{ borderBottom: "1px solid #333338" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#999"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="7" cy="7" r="5" />
                      <path d="M11 11l3 3" />
                    </svg>
                    <span
                      className="font-[family-name:var(--font-outfit)] text-sm"
                      style={{ color: "var(--text)" }}
                    >
                      Terminal
                    </span>
                  </div>
                  {/* Result row */}
                  <div
                    className="flex items-center gap-3 px-4 py-2.5"
                    style={{ background: "rgba(59, 130, 246, 0.2)" }}
                  >
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-md text-base"
                      style={{ background: "#1a1a1a" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect width="18" height="18" rx="4" fill="#000" />
                        <path d="M4 13l4-4-4-4" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 13h5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                        Terminal
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        Application
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── Step 2 label ─── */}
              <p
                className="mb-0 mt-5 text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "var(--text-muted)" }}
              >
                Step 2 &mdash; Paste and run this command
              </p>

              {/* ─── Terminal UI ─── */}
              <div
                className="mt-4 overflow-hidden rounded-lg"
                style={{
                  background: "#0a0a0e",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center justify-between px-4 py-2.5"
                  style={{ borderBottom: "1px solid var(--border-subtle)" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span
                        className="block h-3 w-3 rounded-full"
                        style={{ background: "#ff5f57" }}
                      />
                      <span
                        className="block h-3 w-3 rounded-full"
                        style={{ background: "#febc2e" }}
                      />
                      <span
                        className="block h-3 w-3 rounded-full"
                        style={{ background: "#28c840" }}
                      />
                    </div>
                    <span
                      className="ml-2 font-[family-name:var(--font-ibm-plex-mono)] text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Terminal
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs transition-all"
                    style={{
                      color: copied ? "#28c840" : "var(--text-muted)",
                      background: copied
                        ? "rgba(40, 200, 64, 0.1)"
                        : "rgba(255, 255, 255, 0.04)",
                      border: `1px solid ${copied ? "rgba(40, 200, 64, 0.2)" : "var(--border-subtle)"}`,
                    }}
                  >
                    {copied ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8.5l3.5 3.5 6.5-8" />
                      </svg>
                    ) : (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="5" y="5" width="9" height="9" rx="1.5" />
                        <path d="M5 11H3.5A1.5 1.5 0 0 1 2 9.5V3.5A1.5 1.5 0 0 1 3.5 2h6A1.5 1.5 0 0 1 11 3.5V5" />
                      </svg>
                    )}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Command area */}
                <div className="overflow-x-auto px-4 py-4">
                  <pre className="font-[family-name:var(--font-ibm-plex-mono)] text-sm leading-relaxed">
                    <span style={{ color: "#28c840" }}>$</span>{" "}
                    <span style={{ color: "var(--text)" }}>
                      {QUARANTINE_CMD}
                    </span>
                  </pre>
                </div>
              </div>

              <p
                className="mt-3 text-xs leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                This removes the quarantine flag that macOS sets on downloaded
                apps. You only need to run it once.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div
        className="divider-line scroll-reveal-line mx-auto h-px max-w-2xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border), transparent)",
        }}
      />

      {/* ─── Release Notes ─── */}
      <section className="px-6 py-10 md:py-14">
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
      <footer className="px-6 pb-10 pt-4">
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
