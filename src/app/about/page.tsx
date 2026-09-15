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
      "Key lesson: data is everywhere — models are critical to help us draw insights and make decisions from it",
    ],
  },
  {
    company: "Awe & Reverence",
    location: "Remote",
    role: "Software Apprentice",
    dates: "Jun 2023 – Aug 2023",
    bullets: [
      "Built full-stack websites, gaining experience with React, MySQL, and other common tools",
      "Key lesson: good communication and solid coding practices are the cornerstones of the tech world",
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
      "Key lesson: skills are most valuable when used to effect real, meaningful change",
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
      "Key lesson: high agency and dedicated drive can make a big difference in any working environment",
    ],
  },
];

const skills = {
  "Industry": ["AI Fluency", "Data Analysis", "Probability Theory", "Microsoft Excel", "R", "Python", "SQL"],
  "Interpersonal": ["Leadership", "Communication", "Administration"],
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-bold tracking-tight text-slate-900">About Me</h1>

      {/* Bio */}
      <section className="mb-12 space-y-5 text-slate-600 leading-relaxed">
        <p>
          I&rsquo;ve heard it said that data science is storytelling with numbers. You start with a bunch of numbers (data), find the patterns, answer important questions, and effect meaningful change.
        </p>
        <p>
          When I was 5 years old, I learned about square numbers. I noticed that the differences between successive square numbers followed a pattern. 1, 4, 9, 16, 25, etc. The gaps were 3, 5, 7, 9 &mdash; odd numbers. And so I took a sheet of paper and wrote out the first 50 square numbers by hand using my newfound formula. Four-year-old me couldn&rsquo;t tell you what 47 squared was. Now I knew, and I was eager to share my knowledge with all my kindergarten friends. Real numbers, real patterns, real answers, real effects.
        </p>
        <p>
          When I was 7, I was introduced to Microsoft Excel, and I immediately fell in love. I finally had an easy way to organize all of my numbers! Some of the first spreadsheets I worked with involved Pok&eacute;mon base stats. Which Pok&eacute;mon should I use for my video game playthrough? Which Pok&eacute;mon has the highest Attack stat while also having a Defense stat higher than 100? I could answer these questions and more using formulas and pivot tables.
        </p>
        <p>
          When I was 9, I started closely following NBA basketball. I didn&rsquo;t want to just watch the games &mdash; I wanted to do something with the numbers. And so I started developing a simple basketball simulator using dice. Over the course of the next decade, I refined my simulation, testing and adjusting with the goal of making it as realistic as possible. Eventually I implemented it in Python code. If the Oklahoma City Thunder had made the 2026 NBA Finals, would they have beaten the New York Knicks? My simulator has them winning in a tight 7-game series. Real numbers, real patterns, real answers, real effects.
        </p>
        <p>
          When I was 16, I graduated high school, two years early. I decided to take a gap year to hone my skills and knowledge as a data scientist. I took online courses and grew my understanding of the field. My biggest takeaway? Data science is fundamentally what I had been doing all along: taking real numbers, finding real patterns, answering real questions, and effecting real change.
        </p>
      </section>

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
            <span className="text-sm font-medium text-slate-900">SOA Financial Mathematics (FM) Exam</span>
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
