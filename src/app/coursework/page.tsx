import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coursework | Elijah Ang",
  description: "UCLA coursework in statistics, data science, mathematics, and CS.",
};

// Populate this array as coursework is added
const courses: {
  code: string;
  title: string;
  category: "Statistics" | "Mathematics" | "Computer Science" | "Data Science";
  description?: string;
}[] = [];

const categoryColors: Record<string, string> = {
  Statistics: "bg-blue-50 text-blue-700",
  Mathematics: "bg-purple-50 text-purple-700",
  "Computer Science": "bg-green-50 text-green-700",
  "Data Science": "bg-orange-50 text-orange-700",
};

export default function CourseworkPage() {
  const categories = [
    "Statistics",
    "Data Science",
    "Mathematics",
    "Computer Science",
  ] as const;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900">
        Coursework
      </h1>
      <p className="mb-12 text-lg text-slate-500">
        Relevant UCLA courses — details coming soon.
      </p>

      {courses.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 py-24 text-center">
          <p className="text-slate-500 font-medium">Course list coming soon.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {categories.map((cat) => {
            const catCourses = courses.filter((c) => c.category === cat);
            if (catCourses.length === 0) return null;
            return (
              <section key={cat}>
                <h2 className="mb-5 text-xl font-semibold text-slate-900">
                  {cat}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {catCourses.map(({ code, title, description }) => (
                    <div
                      key={code}
                      className="rounded-xl border border-slate-200 p-5"
                    >
                      <div className="mb-2 flex items-start gap-3">
                        <span
                          className={`mt-0.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[cat]}`}
                        >
                          {code}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {title}
                        </span>
                      </div>
                      {description && (
                        <p className="text-sm leading-relaxed text-slate-500">
                          {description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
