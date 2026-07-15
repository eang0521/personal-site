import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coursework | Elijah Ang",
  description: "UCLA coursework in statistics, data science, mathematics, and CS.",
};

const courses = [
  {
    code: "STATS 100C",
    title: "Linear Models",
    url: "https://catalog.registrar.ucla.edu/course/2024/stats100c",
    topics: [
      "Model fitting",
      "Extra sums of squares",
      "General linear hypothesis",
      "Inference procedures",
      "Gauss-Markov theorem",
      "Residual analysis",
      "Principal component regression",
      "Stepwise procedures",
    ],
    takeaway:
      "Anyone can learn how to code a regression model; the real challenge is understanding the math that lies under the hood. This class is notorious for being one of the most difficult in the major. Grasping the complex proofs and theorems behind linear models took grit and determination, but it made me a much stronger statistician and data scientist.",
  },
  {
    code: "STATS 101B",
    title: "Introduction to Design and Analysis of Experiments",
    url: "https://catalog.registrar.ucla.edu/course/2024/stats101b",
    topics: [
      "Components of experiments",
      "Randomization & blocking",
      "Completely randomized design",
      "ANOVA",
      "Multiple comparisons",
      "Power & sample size",
      "Block designs",
    ],
    takeaway:
      "Simple linear regression can be powerful, but only when used correctly. This class taught me the importance of experiment design, understanding how data is collected and how it should be analyzed. Messing up a block design can lead to disastrously invalid conclusions; I learned the hard way.",
  },
  {
    code: "STATS 101C",
    title: "Introduction to Statistical Models and Data Mining",
    url: "https://catalog.registrar.ucla.edu/course/2025/stats101c",
    topics: [
      "Multiple regression",
      "Logistic regression",
      "Regression diagnostics",
      "Graphical procedures",
      "Bootstrapping",
    ],
    takeaway:
      "How can you tell species of penguin apart? (Besides looking at them, of course.) The answer is regression analysis! There is something intensely satisfying about creating and then using a decision tree to classify a penguin as Gentoo or a Star Wars character as a droid.",
  },
  {
    code: "STATS 102B",
    title: "Introduction to Computation and Optimization for Statistics",
    url: "https://catalog.registrar.ucla.edu/course/2024/stats102b",
    topics: [
      "Vector/matrix computation",
      "Multivariate normal distribution",
      "Principal component analysis",
      "Clustering analysis",
      "Gradient-based optimization",
      "EM algorithm",
      "Dynamic programming",
    ],
    takeaway:
      "This class featured one of my favorite homework assignments across all my classes at UCLA. We were tasked with creating an MLP (multi-layer perceptron) to distinguish handwritten drawings of different digits, specifically 3 vs 5 and 4 vs 9. After lots of testing and tweaking, my MLP achieved an AUC of 0.9996 for the digits 3 and 5. R code had never felt so powerful!",
  },
  {
    code: "STATS 102C",
    title: "Introduction to Monte Carlo Methods",
    url: "https://catalog.registrar.ucla.edu/course/2025/stats102c",
    topics: [
      "Random number generation",
      "Rejection sampling",
      "Importance sampling",
      "Markov chain theory",
      "Metropolis algorithm",
      "Gibbs sampling",
      "Simulated tempering",
    ],
    takeaway:
      "I've been using simple Monte Carlo Methods in sports simulation for over a decade, so learning and grasping the elaborate theory and extensive applications of MCMC was exhilarating!",
  },
  {
    code: "STATS C173",
    title: "Applied Geostatistics",
    url: "https://catalog.registrar.ucla.edu/course/2025/statsc173",
    topics: ["Geostatistical methods", "Spatially referenced data", "Kriging"],
    takeaway:
      "Spatial data is everywhere! This was one of my favorite classes at UCLA because it gave me a greater appreciation for geostatistics and the methods we use to analyze spatial data. I particularly enjoyed working with a California housing prices dataset, using kriging to interpolate property values across the state.",
  },
  {
    code: "STATS C183",
    title: "Statistical Models in Finance",
    url: "https://catalog.registrar.ucla.edu/course/2025/statsc183",
    topics: [
      "Portfolio management",
      "Risk diversification",
      "Efficient frontier",
      "Single index model",
      "CAPM",
      "Beta of a stock",
      "Black-Scholes model",
      "Binomial model",
    ],
    takeaway:
      "This class opened my eyes to the expansive world of finance and investment. I have always been interested in stock data, so getting my hands dirty with real-world market data was both illuminating and invigorating.",
  },
];

export default function CourseworkPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900">
        Coursework
      </h1>
      <p className="mb-12 text-lg text-slate-500">
        Relevant UCLA courses in statistics &amp; data science.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {courses.map(({ code, title, url, topics, takeaway }) => (
          <div
            key={code}
            className="flex flex-col gap-4 rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div>
              <span className="mb-1 inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase">
                {code}
              </span>
              <h2 className="text-base font-semibold leading-snug text-slate-900">
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline transition-colors"
                >
                  {title}
                </Link>
              </h2>
            </div>

            {/* Topic pills */}
            <div className="flex flex-wrap gap-1.5">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* Takeaway pull quote */}
            <blockquote className="mt-auto border-l-2 border-blue-300 pl-4 text-sm italic leading-relaxed text-slate-500">
              {takeaway}
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
