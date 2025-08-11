import Image from "next/image";
import { ArrowUpRight } from "@/app/ui/icons";

const links: Array<{
  label: string;
  href: string;
  ringClass: string; // explicit tailwind class
}> = [
  {
    label: "Portfolio",
    href: "https://neilsmahajan.com",
    ringClass: "focus-visible:ring-blue-400/60",
  },
  {
    label: "GitHub",
    href: "https://github.com/neilsmahajan",
    ringClass: "focus-visible:ring-slate-400/60",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neil-mahajan/",
    ringClass: "focus-visible:ring-sky-400/60",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/neilsmahajan/",
    ringClass: "focus-visible:ring-pink-400/60",
  },
  {
    label: "X",
    href: "https://x.com/Neilsmahajan",
    ringClass: "focus-visible:ring-zinc-400/60",
  },
];

export default function Home() {
  return (
    <main className="min-h-svh bg-[radial-gradient(40rem_40rem_at_50%_-10%,rgba(56,189,248,.15),transparent),radial-gradient(35rem_35rem_at_10%_110%,rgba(216,180,254,.15),transparent),radial-gradient(30rem_30rem_at_110%_90%,rgba(134,239,172,.12),transparent)] p-6 sm:p-8">
      <div className="mx-auto max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400 via-fuchsia-400 to-emerald-300 opacity-70 blur-xl"
              aria-hidden
            />
            <Image
              src="/profile-picture.jpeg"
              width={120}
              height={120}
              alt="Neil Mahajan profile"
              className="relative rounded-full ring-2 ring-white/10 shadow-2xl"
              priority
            />
          </div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
            Neil Mahajan
          </h1>
          <p className="mt-2 max-w-prose text-balance text-sm text-foreground/70">
            Builder. Developer. Sharing things I work on and care about.
          </p>
        </div>

        <ul className="mt-8 space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition",
                  "hover:border-white/20 hover:bg-white/10",
                  "focus-visible:outline-none focus-visible:ring-2",
                  link.ringClass,
                ].join(" ")}
              >
                <span className="text-sm font-medium">{link.label}</span>
                <ArrowUpRight className="h-4 w-4 text-foreground/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Cards */}
        <div className="mt-8 space-y-3">
          <a
            href="mailto:neilsmahajan@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-emerald-900 dark:text-emerald-100 backdrop-blur-sm hover:bg-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 transition"
          >
            <svg
              className="h-5 w-5 text-emerald-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <span className="text-sm font-medium">neilsmahajan@gmail.com</span>
          </a>
          <a
            href="tel:16232354581"
            className="flex items-center gap-3 rounded-xl border border-sky-400/30 bg-sky-400/10 px-5 py-4 text-sky-900 dark:text-sky-100 backdrop-blur-sm hover:bg-sky-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition"
          >
            <svg
              className="h-5 w-5 text-sky-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-sm font-medium">(623) 235-4581</span>
          </a>
        </div>

        <footer className="mt-10 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} Neil Mahajan
        </footer>
      </div>
    </main>
  );
}
