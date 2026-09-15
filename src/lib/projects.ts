export type Section = {
  heading?: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  date: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  body: Section[];
};

export const projects: Project[] = [
  {
    slug: "housing-avm",
    title: "Contra Costa County Housing AVM",
    tagline: "An automated valuation model that predicts residential home prices across Contra Costa County using machine learning.",
    date: "2026",
    tags: ["Python", "Machine Learning", "Jupyter", "Real Estate"],
    github: "https://github.com/eang0521/housing-avm",
    body: [
      {
        paragraphs: [
          "As part of my 2025 internship with Data Detectives, I chose to work on a simple housing AVM as my data project. I started simple — very, very simple — with a dataset of just 15 homes manually entered from Redfin's website. Using these 15 house sales, I was able to implement simple tests and pipelines. I used SDV (Synthetic Data Vault) to generate synthetic data for the project and built a simple model. But I knew the project was far from complete.",
          "I've recently taken this project back up. Using a scraper and data from Realtor.com, I've updated and expanded my dataset to include more than 3,000 homes. My results can be found in the code on my Github, linked above.",
          "During my internship, I worked with a very limited set of features, selecting only the variables that were most important during my initial data analysis. These features only explain about 86% of the variance in house value in the full dataset — adding bathrooms, lot size, and neighborhood-level features will close most of the remaining gap.",
        ],
      },
    ],
  },
  {
    slug: "nba-game-sim",
    title: "NBA Game Simulator",
    tagline: "Scrapes and processes real NBA data to simulate individual games or full 82-game seasons, with a live play-by-play mode and 25 seasons of historical player data.",
    date: "2026",
    tags: ["Python", "Sports Analytics", "Simulation", "HTML"],
    github: "https://github.com/eang0521/nba-game-sim",
    demo: "https://eang0521.github.io/nba-game-sim/",
    image: "/nbasim1.png",
    body: [
      {
        paragraphs: [
          "I love sports: football, soccer, baseball, volleyball, Spikeball, you name it. But my favorite sport has always been basketball. As a younger kid, maybe 8 or 9, my love for basketball intersected with my love for numbers when I developed a simple basketball simulation using dice and pen and paper. Initially, the game was super simple: 1-on-1 basketball with simple shooting and rebounding mechanics. But as I continued to play this simulation, I realized there was potential for much more.",
          "Over the course of the next 10 years, I continued to refine my game. I added more players, turning it into a 3-on-3, and then a full 5-on-5 simulation. I started incorporating real NBA stats to make the games feel more realistic. And then in Summer 2026, I made the biggest improvement: I put the game into code. Now I could run simulations nearly instantly, collect data, and continue to tweak the rules to make the game as close to reality as possible.",
          "Since then, the project has grown well beyond a single-game simulator. I've expanded the dataset to include 25 seasons of real NBA player data, added a live simulation mode that generates play-by-play logs in real time, and built out a full season simulation feature that can simulate an entire 82-game NBA season and produce standings, statistics, and playoff seeding.",
        ],
      },
    ],
  },
  {
    slug: "quick-draw",
    title: "Quick Draw",
    tagline: "A tournament bracket creator for organizing and running single-elimination competitions.",
    date: "2026",
    tags: ["Next.js", "TypeScript", "Full-Stack", "Supabase"],
    github: "https://github.com/eang0521/quick-draw",
    demo: "https://quick-draw-tourney.vercel.app/",
    body: [
      {
        paragraphs: [
          "One of my many passions is organizing sports tournaments and competitions. I designed this simple tool to help me record and share results from single-elimination, double-elimination, round robin, and swiss format tournaments.",
        ],
      },
    ],
  },
  {
    slug: "space-trader",
    title: "Space Trader",
    tagline: "An online version of a board game I designed at age 14.",
    date: "2026",
    tags: ["Next.js", "Game Design", "Full-Stack"],
    github: "https://github.com/eang0521/space-trader-online",
    demo: "https://play-space-trader.vercel.app/",
    body: [
      {
        paragraphs: [
          "One of my many passions is board games. I love learning them, playing them, and occasionally even designing them. When I was 14, I designed a simple board game called Space Trader and entered it in a board game design contest. It didn't win any awards, but it certainly won my own heart. Recently, with the help of my friend Claude Code, I decided to create an online version of the game. This website is the result, allowing me to play my own board game online with my friends and family.",
        ],
      },
    ],
  },
  {
    slug: "pokemon-rnr",
    title: "Pokémon Roll & Roam",
    tagline: "A Pokémon-themed roll-and-move board game built for the web.",
    date: "2026",
    tags: ["JavaScript", "Game Design"],
    demo: "https://eang0521.github.io/pokemon-rnr",
    body: [
      {
        paragraphs: [
          "A Pokémon-themed take on the classic roll-and-move board game, built to play in the browser.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
