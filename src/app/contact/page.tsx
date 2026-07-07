import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — QuickCull",
  description:
    "Get in touch about bugs, issues, or feature requests for QuickCull.",
};

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      {/* ─── Navigation ─── */}
      <nav
        className="nav-animate fixed top-0 z-40 flex w-full items-center justify-between px-6 py-4 backdrop-blur-md md:px-10"
        style={{ background: "rgba(5, 5, 7, 0.7)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight"
        >
          <span className="text-xl">⚡</span>
          <span>QuickCull</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/#features"
            className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Features
          </Link>
          <Link
            href="/contact"
            className="cta-btn relative rounded-full px-5 py-2 text-sm font-medium"
            style={{
              background: "rgba(201, 148, 58, 0.12)",
              color: "var(--accent-light)",
              border: "1px solid rgba(201, 148, 58, 0.2)",
            }}
          >
            Contact
          </Link>
          <Link
            href="/download"
            className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Download
          </Link>
        </div>
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
            Get in Touch
          </h1>
          <p
            className="fade-in-up delay-1 mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Found a bug or have a feature request? Send it over &mdash; every
            email gets read.
          </p>
        </div>
      </section>

      {/* ─── Contact Card ─── */}
      <section className="px-4 pb-14 sm:px-6">
        <div
          className="fade-in-up delay-2 mx-auto max-w-2xl rounded-2xl p-6 text-center sm:p-8 md:p-10"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight">
            Robert Yin
          </h2>
          <p className="mt-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
            Creator of QuickCull
          </p>
          <a
            href="mailto:rystcollective@gmail.com"
            className="cta-btn mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
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
              <rect x="1.5" y="3" width="13" height="10" rx="1.5" />
              <path d="M2 4l6 5 6-5" />
            </svg>
            rystcollective@gmail.com
          </a>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/rystcollective/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — @rystcollective"
              className="flex h-11 w-11 items-center justify-center rounded-full transition-colors"
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </a>
            <a
              href="https://www.threads.com/@rystcollective"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads — @rystcollective"
              className="flex h-11 w-11 items-center justify-center rounded-full transition-colors"
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-4 pb-10 pt-4 sm:px-6">
        <div
          className="divider-line mx-auto mb-8 h-px max-w-2xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border), transparent)",
          }}
        />
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            ⚡ QuickCull — Built with Rust for photographers who value speed.
          </p>
        </div>
      </footer>
    </div>
  );
}
