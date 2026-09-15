import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, GitFork, ExternalLink } from "lucide-react";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Elijah Ang`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { title, tagline, date, tags, github, demo, image, body } = project;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Back link */}
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 transition-colors"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      {/* Header */}
      <header className="mb-10">
        <p className="mb-2 text-sm text-slate-400">{date}</p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="mb-5 text-lg text-slate-500">{tagline}</p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <GitFork size={15} /> View code
            </Link>
          )}
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ExternalLink size={15} /> Live demo
            </Link>
          )}
        </div>
      </header>

      <hr className="mb-10 border-slate-200" />

      {/* Project image */}
      {image && (
        <div className="mb-10 overflow-hidden rounded-xl border border-slate-200">
          <Image
            src={image}
            alt={`${title} screenshot`}
            width={1200}
            height={675}
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Article body */}
      <article className="space-y-8">
        {body.map((section, i) => (
          <section key={i}>
            {section.heading && (
              <h2 className="mb-3 text-xl font-semibold text-slate-900">
                {section.heading}
              </h2>
            )}
            <div className="space-y-4">
              {section.paragraphs.map((p, j) => (
                <p key={j} className="leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}
