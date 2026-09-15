import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Elijah Ang",
  description: "Data science, ML, and software projects by Elijah Ang.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900">
        Projects
      </h1>
      <p className="mb-12 text-lg text-slate-500">
        Things I&rsquo;ve built — click any project to read more.
      </p>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 py-24 text-center">
          <p className="mb-2 font-medium text-slate-500">No projects listed yet.</p>
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
          {projects.map(({ slug, title, tagline, date, tags }) => (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="group flex flex-col gap-4 rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div>
                <p className="mb-1 text-xs text-slate-400">{date}</p>
                <h2 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-auto flex items-center gap-1 text-xs font-medium text-blue-600">
                Read more <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
