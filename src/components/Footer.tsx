import Link from "next/link";
import { GitFork, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Ethan Ang
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/eang0521"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <GitFork size={18} />
          </Link>
          <Link
            href="mailto:eang0521@gmail.com"
            aria-label="Email"
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <Mail size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/eang0521"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors"
          >
            in
          </Link>
        </div>
      </div>
    </footer>
  );
}
