import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GitFork, BarChart2, BookOpen, FolderGit2 } from "lucide-react";

const cards = [
  {
    href: "/about",
    icon: <BarChart2 size={22} className="text-blue-600" />,
    title: "About & Resume",
    description:
      "My background in statistics and data science, skills, and work experience.",
  },
  {
    href: "/projects",
    icon: <FolderGit2 size={22} className="text-blue-600" />,
    title: "Projects",
    description:
      "Data science, machine learning, and software projects I've built.",
  },
  {
    href: "/coursework",
    icon: <BookOpen size={22} className="text-blue-600" />,
    title: "Coursework",
    description:
      "Relevant UCLA courses in statistics, math, and data science.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Hero */}
      <section className="mb-20 flex flex-col-reverse gap-12 sm:flex-row sm:items-center">
        {/* Left: text */}
        <div className="flex-1">
          <p className="mb-3 text-sm font-medium tracking-widest text-blue-600 uppercase">
            UCLA Statistics &amp; Data Science &rsquo;26
          </p>
          <h1 className="mb-5 text-5xl font-bold tracking-tight text-slate-900">
            Hi, I&rsquo;m Elijah Ang
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
            I&rsquo;m a data scientist passionate about taking real numbers,
            finding real patterns, answering real questions, and effecting real
            change. I recently graduated from UCLA with a B.S. in Statistics &amp;
            Data Science and love working at the intersection of statistics,
            machine learning, and software.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              View my projects <ArrowRight size={16} />
            </Link>
            <Link
              href="https://github.com/eang0521"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <GitFork size={16} /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/elijah-p-ang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Right: graduation photo */}
        <div className="sm:w-64 md:w-72 shrink-0">
          <Image
            src="/graduation.jpg"
            alt="Elijah Ang at UCLA graduation, Pauley Pavilion"
            width={756}
            height={1008}
            className="w-full rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
      </section>

      {/* Quick-nav cards */}
      <section>
        <h2 className="mb-6 text-xl font-semibold text-slate-900">Explore</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {cards.map(({ href, icon, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-3 rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                {icon}
                <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {title}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                {description}
              </p>
              <span className="mt-auto flex items-center gap-1 text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
