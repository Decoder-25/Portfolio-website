import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "@/components/Icons";
import FadeIn from "@/components/FadeIn";
import { featuredProject, projects } from "@/data/projects";

const FILTERS = ["All", "Full Stack", "Frontend"];

// Small pill for a technology name
const Tag = ({ children }) => (
  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
    {children}
  </span>
);

// "GitHub" and "Live" buttons
const Links = ({ github, live }) => (
  <div className="flex items-center gap-3">
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
      >
        <span className="w-4">
          <GithubIcon />
        </span>
        Code
      </a>
    )}
    {live && (
      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-primary hover:text-primary"
      >
        Live demo ↗
      </a>
    )}
  </div>
);

// A little animated "attack graph" drawing, used because this project has no screenshot
const GraphPicture = () => {
  const nodes = [
    [60, 150], [160, 70], [160, 230], [270, 120], [270, 210], [370, 150],
  ];
  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5],
  ];

  return (
    <svg viewBox="0 0 430 300" className="h-auto w-full">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="white" strokeOpacity="0.5" strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
        />
      ))}
      {/* soft pulse around the target node */}
      <motion.circle
        cx={370} cy={150} r={22}
        fill="#fda4af"
        animate={{ r: [22, 40], opacity: [0.6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      {nodes.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x} cy={y}
          r={i === 5 ? 22 : 14}
          fill={i === 5 ? "#fda4af" : "white"}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.3 + i * 0.1 }}
        />
      ))}
    </svg>
  );
};

const FeaturedProject = ({ project }) => (
  <FadeIn>
    <article className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm md:grid-cols-2">
      <div className="flex min-h-[260px] flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary to-violet-600 p-8">
        <GraphPicture />
        <p className="text-center text-sm font-medium text-white/80">
          Attack graph → cheapest set of controls that keeps the target safe
        </p>
      </div>

      <div className="p-8 md:p-10">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          ★ Featured · {project.label}
        </span>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-zinc-900 md:text-3xl">
          {project.title}
        </h2>
        <p className="mt-3 leading-relaxed text-zinc-600">{project.summary}</p>

        <ul className="mt-5 space-y-2 text-sm text-zinc-600">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="text-primary">✓</span>
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-8">
          <Links github={project.github} live={project.live} />
        </div>
      </div>
    </article>
  </FadeIn>
);

const ProjectCard = ({ project }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="relative overflow-hidden border-b border-zinc-100">
      <Image
        src={project.image}
        alt={project.title}
        className="h-auto w-full transition duration-500 group-hover:scale-105"
      />
      {project.status && (
        <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 shadow">
          {project.status}
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        {project.category}
      </p>
      <h3 className="mt-2 text-xl font-bold text-zinc-900">{project.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-zinc-600">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-6">
        <Links github={project.github} live={project.live} />
      </div>
    </div>
  </article>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Head>
        <title>Disha | Projects</title>
        <meta
          name="description"
          content="Projects by Disha Biswas — backend, cloud and full-stack work."
        />
      </Head>

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-12 md:pt-20">
        {/* ---------- Heading ---------- */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-widest text-primary"
        >
          Projects
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-4xl font-bold text-zinc-900 md:text-5xl"
        >
          Things I&apos;ve built
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 max-w-2xl text-[17px] leading-relaxed text-zinc-600"
        >
          From optimisation engines on AWS to real-time chat apps — a mix of research,
          hackathon and side projects.
        </motion.p>

        {/* ---------- Featured ---------- */}
        <div className="mt-12">
          <FeaturedProject project={featuredProject} />
        </div>

        {/* ---------- Filter buttons ---------- */}
        <div className="mt-16 flex flex-wrap gap-2">
          {FILTERS.map((name) => (
            <button
              key={name}
              onClick={() => setFilter(name)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === name
                  ? "bg-zinc-900 text-white"
                  : "bg-white text-zinc-600 ring-1 ring-zinc-200 hover:ring-zinc-400"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* ---------- All projects ---------- */}
        <motion.div layout className="mt-8 grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {shown.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
