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

        <footer className="mt-10 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} Neil Mahajan
        </footer>
      </div>
    </main>
  );
}
