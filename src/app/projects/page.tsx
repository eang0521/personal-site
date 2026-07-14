import type { Metadata } from "next";
import { GitFork, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Elijah Ang",
  description: "Data science, ML, and software projects by Elijah Ang.",
};

// Populate this array as projects are added
const projects: {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}[] = [];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900">
        Projects
      </h1>
      <p className="mb-12 text-lg text-slate-500">
        Things I&rsquo;ve built — more coming soon.
      </p>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 py-24 text-center">
          <p className="mb-2 text-slate-500 font-medium">No projects listed yet.</p>
          <p className="text-sm text-slate-400">
            Check out{" "}
            <Link
              href="https://github.com/eang0521"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </Link>{" "}
            in the meantime.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map(({ title, description, tags, github, demo }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="mb-1 font-semibold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <GitFork size={14} /> Code
                  </Link>
                )}
                {demo && (
                  <Link
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ExternalLink size={14} /> Live demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
