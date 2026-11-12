import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import profilePic from "../../public/images/profile/avatar2.png";
import FadeIn from "@/components/FadeIn";
import { experience } from "@/data/about";
import { featuredProject } from "@/data/projects";

// The three cards under the intro. They read from the data files,
// so they update automatically when you change your experience or projects.
const highlights = [
  {
    label: "Latest role",
    title: `${experience[0].role} at ${experience[0].company}`,
    text: `${experience[0].date} · ${experience[0].location}`,
    href: "/about",
    cta: "See experience",
  },
  {
    label: "Featured project",
    title: featuredProject.title,
    text: featuredProject.tech.slice(0, 4).join(" · "),
    href: "/projects",
    cta: "See projects",
  },
  {
    label: "Certified",
    title: "AWS Certified Developer – Associate",
    text: "Issued Nov 2025 · valid until Nov 2028",
    href: "https://www.credly.com/badges/473ef46f-5436-4413-b1a9-ffd683f7a88b/public_url",
    cta: "View badge",
  },
];

// Used to fade the intro in, one line after another
const appear = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Disha Biswas | Software Engineer</title>
        <meta
          name="description"
          content="Disha Biswas — software engineer building reliable backend and cloud systems with Java, Spring Boot, Next.js, AWS and Azure."
        />
      </Head>

      <div className="mx-auto max-w-5xl overflow-x-hidden px-6 pb-24 pt-12 md:overflow-visible md:pt-20">
        {/* ---------- Hero ---------- */}
        <section className="grid items-center gap-14 md:grid-cols-[1fr_340px]">
          <div>
            <motion.span
              {...appear(0)}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-700 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Software Engineer · London, UK
            </motion.span>

            <motion.h1
              {...appear(0.1)}
              className="mt-6 text-4xl font-bold leading-tight text-zinc-900 md:text-6xl"
            >
              Turning vision into reality with{" "}
              <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
                code and cloud.
              </span>
            </motion.h1>

            <motion.p {...appear(0.25)} className="mt-6 max-w-xl text-[17px] leading-relaxed text-zinc-600">
              I&apos;m Disha, a software engineer with an MSc in Advanced Computer Science
              (Distinction) and an AWS Developer certification. I build scalable backend and
              cloud systems with Java, Spring Boot, Next.js, AWS and Azure — with a focus on
              clean code and reliable architecture.
            </motion.p>

            <motion.div {...appear(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/Disha_Resume.pdf"
                download
                className="rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-700"
              >
                Download resume ↓
              </a>
              <a
                href="mailto:bidisha2125@gmail.com"
                className="rounded-full border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.p {...appear(0.55)} className="mt-8 text-sm text-zinc-500">
              Now at <span className="font-semibold text-zinc-800">Valvenok</span> · previously{" "}
              <span className="font-semibold text-zinc-800">SumUp</span> and{" "}
              <span className="font-semibold text-zinc-800">Avalanche</span>
            </motion.p>
          </div>

          {/* ---------- Photo ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[260px] md:max-w-[300px]"
          >
            {/* slowly spinning gradient ring behind the photo */}
            <motion.div
              className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,#B63E96,#7c3aed,#38bdf8,#B63E96)] opacity-80 blur-sm"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative overflow-hidden rounded-full border-[6px] border-white bg-white shadow-2xl">
              <Image src={profilePic} alt="Disha Biswas" className="h-auto w-full" priority />
            </div>
          </motion.div>
        </section>

        {/* ---------- Highlights ---------- */}
        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.1}>
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="group flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {item.label}
                </p>
                <h2 className="mt-3 flex-1 text-lg font-bold leading-snug text-zinc-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-500">{item.text}</p>
                <p className="mt-5 text-sm font-semibold text-zinc-800 transition group-hover:text-primary">
                  {item.cta}{" "}
                  <span className="inline-block transition group-hover:translate-x-1">→</span>
                </p>
              </Link>
            </FadeIn>
          ))}
        </section>
      </div>
    </>
  );
}
