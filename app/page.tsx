import PhotoGallery from "./photo-gallery";

type Project = {
  title: string;
  description: string;
  images: string[];
  github: string;
  live?: string;
  color: string;
  gradientTo?: string;
  dark?: boolean;
  gallery?: boolean;
};

const projects: Project[] = [
  {
    title: "betterfy",
    description: "A web app that uses the Spotify API to make a more customizable and better-looking UI for the web player. Built with Next.js, Tailwind CSS, and Node.js.",
    images: ["/bullets-betterfy.png"],
    github: "https://github.com/retekant/betterfy",
    color: "#708995",
    gradientTo: "#905368",
    dark: true,
  },
  {
    title: "trackr",
    description: "An open-source time tracker designed to give users full access to their data and useful analytics. Built with Next.js and Tailwind CSS, and deployed on Vercel.",
    images: ["/trackr1.png", "/trackr2.png", "/trackr3.png"],
    github: "https://github.com/retekant/trackr",
    live: "https://trackr-nu.vercel.app",
    color: "#141318",
    dark: true,
    gallery: true,
  },
  {
    title: "simple",
    description: "An Electron-based browser focused on customization, tab management, and lower active RAM use.",
    images: ["/simple.png"],
    github: "https://github.com/retekant/simple",
    color: "#282e4a",
    dark: true,
  },
  {
    title: "inked",
    description: "A real-time drawing site where friends can create and join lobbies. Built to learn more about WebSockets and multiplayer lobby hosting with Fresh and Tailwind CSS.",
    images: ["/inked1.png", "/inked2.png", "/inked3.png"],
    github: "https://github.com/retekant/inked",
    live: "https://inked.connosssss.deno.net",
    color: "#273346",
    dark: true,
    gallery: true,
  },
  {
    title: "Next Step",
    description: "An experiment using linear regression and random forest models to train on historic stock data and predict price movements. The frontend uses Next.js and the backend uses Python.",
    images: ["/NextStep.png", "/NextStep2.png"],
    github: "https://github.com/connosssss/Next-Step",
    color: "#6ee7b7",
  },
  {
    title: "noteable",
    description: "A Markdown note editor that saves notes locally in the browser. Built with Fresh and Tailwind CSS.",
    images: ["/noteable.png"],
    github: "https://github.com/retekant/noteable",
    live: "https://noteable.deno.dev",
    color: "#334155",
    dark: true,
  },
];

const hackathons: Project[] = [
  {
    title: "UCI Commit the Change 2026 Promptathon: plani",
    description: "A volunteer-scheduling app for nonprofits. It handles schedules, AI-assisted event planning, volunteer matching, and turns email or SMS responses into assignment schedules.",
    images: ["/planilogin.png", "/planiplanner.png", "/planiassign.png"],
    github: "https://github.com/connosssss/plani",
    color: "#fff4ec",
    gallery: true,
  },
  {
    title: "UCLA Glitch Gemini Hackathon 2026: chiika",
    description: "A language-learning app using Gemini Live to simulate natural, real-time foreign-language conversations rather than pre-recorded lessons.",
    images: ["/chiika1.png", "/chiika2.png", "/chiika3.png"],
    github: "https://github.com/connosssss/chiika",
    live: "https://chiika.vercel.app",
    color: "#873a3a",
    dark: true,
    gallery: true,
  },
  {
    title: "Irvine Hacks 2026: muve",
    description: "An AI-assisted accessibility report for home listings that scans photos and surrounding-area context for potential barriers based on each user’s needs.",
    images: ["/muv1.png", "/muv5.png", "/muv2.png"],
    github: "https://github.com/ParzivalPerhaps/muve",
    live: "https://devpost.com/software/muve-frx3n0",
    color: "#ffffff",
    gallery: true,
  },
];

function Links({ project, dark }: { project: Project; dark: boolean }) {
  const filter = dark ? "invert" : "";
  return (
    <div className="flex gap-5">
      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
        <img src="/github.svg" alt="" width="32" height="32" className={`transition hover:scale-125 ${filter}`} />
      </a>
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
          <img src="/link-svgrepo-com.svg" alt="" width="32" height="32" className={`transition hover:scale-125 ${filter}`} />
        </a>
      )}
    </div>
  );
}

function Gradient({ from, to }: { from: string; to: string }) {
  return <div className="h-96" style={{ backgroundImage: `linear-gradient(to bottom, ${from}, ${to})` }} />;
}

function ProjectSection({ project }: { project: Project }) {
  const dark = project.dark ?? false;
  return (
    <article className={dark ? "text-white" : "text-slate-950"} style={{ background: project.gradientTo ? `linear-gradient(to bottom, ${project.color}, ${project.gradientTo})` : project.color }}>
      <div className={`mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[2fr_1fr] ${project.gallery ? "min-h-[50rem]" : "min-h-[32rem]"}`}>
        {project.gallery ? (
          <PhotoGallery images={project.images} alt={`${project.title} screenshot`} />
        ) : (
          <div className="flex justify-center">
            <img src={project.images[0]} alt={`${project.title} screenshot`} className="max-h-[500px] max-w-full rounded-md shadow-xl" />
          </div>
        )}
        <div className="space-y-7">
          <h2 className="text-4xl font-bold sm:text-5xl">{project.title}</h2>
          <p className="text-lg leading-relaxed sm:text-xl">{project.description}</p>
          <Links project={project} dark={dark} />
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 z-50 flex w-full gap-6 px-6 py-5 font-semibold text-white mix-blend-difference">
        <a href="#top" className="hover:underline">Home</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#hackathons" className="hover:underline">Hackathons</a>
      </nav>

      <section id="top" className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#14161b] px-6 py-24 text-white">
        <div className="w-full max-w-2xl rounded-lg bg-[#0f1015] p-8 shadow-2xl sm:p-12">
          <h1 className="text-5xl font-semibold sm:text-6xl">I&apos;m Connor</h1>
          <p className="mt-6 text-lg">A Computer Science and Engineering student studying at UCI.</p>
          <div className="mt-8 flex items-center gap-5">
            <a href="https://github.com/connosssss" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src="/github.svg" alt="" width="32" height="32" className="invert transition hover:scale-125" />
            </a>
            <a href="https://www.linkedin.com/in/connor-griffin-a5174724b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src="/iconmonstr-linkedin-3.svg" alt="" width="32" height="32" className="invert transition hover:scale-125" />
            </a>
            <a href="mailto:connorgriffin2424@gmail.com" aria-label="Email Connor" className="group flex items-center gap-3">
              <img src="/maildotru.svg" alt="" width="32" height="32" className="invert transition group-hover:scale-125" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm opacity-0 transition-all duration-300 group-hover:max-w-64 group-hover:opacity-100 group-focus-within:max-w-64 group-focus-within:opacity-100">connorgriffin2424@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="w-full max-w-xl rounded-lg bg-[#0f1015] p-6 text-center">
          <h2 className="font-bold">Tech Stacks</h2>
          <div className="mt-5 flex items-center justify-around gap-3">
            {[{ logo: "logo.svg", invert: false }, { logo: "react-javascript-js-framework-facebook-svgrepo-com.svg", invert: false }, { logo: "nextjs-icon-svgrepo-com.svg", invert: true }, { logo: "Express.svg", invert: true }, { logo: "nodejs-icon-svgrepo-com.svg", invert: false }, { logo: "tailwindcss.svg", invert: true }].map(({ logo, invert }) => (
              <img key={logo} src={`/${logo}`} alt="" width="42" height="42" className={`max-w-10 transition hover:scale-125 ${invert ? "invert" : ""}`} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <Gradient from="#14161b" to="#708995" />
        <h2 className="bg-[#708995] px-6 py-20 text-center text-5xl font-semibold text-white sm:text-6xl">Projects</h2>
        {projects.map((project, index) => (
          <div key={project.title}>
            <ProjectSection project={project} />
            {projects[index + 1] && <Gradient from={project.gradientTo ?? project.color} to={projects[index + 1].color} />}
          </div>
        ))}
        <Gradient from={projects[projects.length - 1].color} to={hackathons[0].color} />
      </section>

      <section id="hackathons">
        <h2 className="bg-[#fff4ec] px-6 py-20 text-center text-5xl font-semibold text-black/70 sm:text-6xl">Recent Hackathons</h2>
        {hackathons.map((project, index) => (
          <div key={project.title}>
            <ProjectSection project={project} />
            {hackathons[index + 1] && <Gradient from={project.color} to={hackathons[index + 1].color} />}
          </div>
        ))}
      </section>
    </main>
  );
}
