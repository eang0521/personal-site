import type { Metadata } from "next";
import { GraduationCap, Briefcase, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Ethan Ang",
  description: "Resume and background of Ethan Ang, UCLA Statistics & Data Science graduate.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900">
        About Me
      </h1>
      <p className="mb-12 text-lg text-slate-500">
        Resume &amp; background — details coming soon.
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
              <p className="font-semibold text-slate-900">
                University of California, Los Angeles
              </p>
              <p className="text-sm text-slate-600">
                B.S. Statistics &amp; Data Science
              </p>
            </div>
            <span className="text-sm text-slate-400">2021 – 2025</span>
          </div>
        </div>
      </section>

      {/* Experience — placeholder */}
      <section className="mb-12">
        <div className="mb-5 flex items-center gap-2">
          <Briefcase size={20} className="text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">Experience</h2>
        </div>
        <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-400">
          Experience entries coming soon.
        </div>
      </section>

      {/* Skills — placeholder */}
      <section>
        <div className="mb-5 flex items-center gap-2">
          <Wrench size={20} className="text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">Skills</h2>
        </div>
        <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-400">
          Skills coming soon.
        </div>
      </section>
    </div>
  );
}
