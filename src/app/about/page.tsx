import type { Metadata } from "next";
import { GraduationCap, Briefcase, Wrench, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Elijah Ang",
  description: "Resume and background of Elijah Ang, UCLA Statistics & Data Science graduate.",
};

const experience = [
  {
    company: "Data Detectives",
    location: "Remote",
    role: "Data Analytics Intern",
    dates: "Jun 2025 – Aug 2025",
    bullets: [
      "Built automated data pipelines in Python to clean and transform Bay Area housing datasets for predictive modeling",
      "Generated synthetic training datasets using the SDV library to augment model performance",
    ],
  },
  {
    company: "Awe & Reverence",
    location: "Remote",
    role: "Software Apprentice",
    dates: "Jun 2023 – Aug 2023",
    bullets: [
      "Built full-stack websites, gaining experience with React, MySQL, and other common tools",
    ],
  },
  {
    company: "Rooted Software",
    location: "Concord, CA (Hybrid)",
    role: "Information Technology Intern",
    dates: "May 2022 – Aug 2022",
    bullets: [
      "Developed mobile applications for a church with 1,000+ members",
      "Configured hardware for a private K–8 school with 400+ students",
    ],
  },
  {
    company: "Chick-fil-A",
    location: "Walnut Creek, CA",
    role: "Front of House",
    dates: "Mar 2022 – Aug 2022",
    bullets: [
      "Took and fulfilled orders for 100+ guests per shift",
      "Demonstrated leadership and communication in a professional environment",
    ],
  },
];

const skills = {
  "Industry": ["Data Analysis", "Probability Theory", "Microsoft Excel", "R", "Python", "SQL"],
  "Interpersonal": ["Leadership", "Communication", "Administration"],
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900">About Me</h1>
      <p className="mb-12 text-lg text-slate-500">
        UCLA Statistics &amp; Data Science graduate with a passion for data pipelines, predictive modeling, and actuarial science.
      </p>

      {/* Education */}
      <section className="mb-12">
        <div className="mb-5 flex items-center gap-2">
          <GraduationCap size={20} className="text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">Education</h2>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-slate-900">University of California, Los Angeles</p>
              <p className="text-sm text-slate-600">B.S. Statistics &amp; Data Science &mdash; 3.6 GPA</p>
              <p className="mt-1 text-sm text-slate-500">
                Relevant coursework: Linear Models, Monte Carlo Methods, Statistics in Finance, Geostatistics, Causality
              </p>
            </div>
            <span className="shrink-0 ml-4 text-sm text-slate-400">2024 – 2026</span>
          </div>
        </div>
      </section>

      {/* Actuarial Exams */}
      <section className="mb-12">
        <div className="mb-5 flex items-center gap-2">
          <FileCheck size={20} className="text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">Actuarial Exams</h2>
        </div>
        <div className="rounded-xl border border-slate-200 divide-y divide-slate-100">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-sm font-medium text-slate-900">SOA Probability (P) Exam</span>
            <span className="text-sm text-slate-400">Jan 2026</span>
          </div>
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <span className="text-sm font-medium text-slate-900">SOA Financial Mathematics (FM) Exam</span>
              <span className="ml-2 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">Sitting</span>
            </div>
            <span className="text-sm text-slate-400">Aug 2026</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <div className="mb-5 flex items-center gap-2">
          <Briefcase size={20} className="text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">Experience</h2>
        </div>
        <div className="space-y-4">
          {experience.map(({ company, location, role, dates, bullets }) => (
            <div key={company + dates} className="rounded-xl border border-slate-200 p-6">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <p className="font-semibold text-slate-900">
                    {company} <span className="font-normal text-slate-400">&bull; {location}</span>
                  </p>
                  <p className="text-sm italic text-slate-600">{role}</p>
                </div>
                <span className="shrink-0 ml-4 text-sm text-slate-400">{dates}</span>
              </div>
              <ul className="space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="mb-5 flex items-center gap-2">
          <Wrench size={20} className="text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">Skills</h2>
        </div>
        <div className="rounded-xl border border-slate-200 divide-y divide-slate-100">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex items-start gap-6 px-6 py-4">
              <span className="w-28 shrink-0 text-sm font-medium text-slate-500">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
