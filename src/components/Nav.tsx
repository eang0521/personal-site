"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/coursework", label: "Coursework" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap text-base font-semibold tracking-tight text-slate-900 hover:text-blue-600 transition-colors sm:text-lg"
        >
          Elijah Ang
        </Link>
        <ul className="flex items-center gap-3 sm:gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "whitespace-nowrap text-xs font-medium transition-colors hover:text-blue-600 sm:text-sm",
                  pathname === href
                    ? "text-blue-600"
                    : "text-slate-600"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
