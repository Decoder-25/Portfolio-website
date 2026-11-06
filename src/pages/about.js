import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "../../public/images/profile/about me.png";
import FadeIn from "@/components/FadeIn";
import Experience from "@/components/Experience";
import Hackathons from "@/components/Hackathons";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { intro } from "@/data/about";

const About = () => {
  return (
    <>
      <Head>
        <title>Disha | About</title>
        <meta
          name="description"
          content="About Disha Biswas — software engineer working on backend, cloud and full-stack systems."
        />
      </Head>

      <div className="mx-auto max-w-5xl px-6 pb-16 pt-12 md:pt-20">
        {/* ---------- Intro ---------- */}
        <section className="grid items-start gap-12 md:grid-cols-[1fr_320px]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              About me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-4xl font-bold leading-tight text-zinc-900 md:text-5xl"
            >
              {intro.heading}
            </motion.h1>

            <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-zinc-600">
              {intro.paragraphs.map((text, index) => (
                <FadeIn key={index} delay={0.2 + index * 0.08}>
                  <p>{text}</p>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Photo: tilted colour card behind, white frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative mx-auto w-full max-w-xs md:sticky md:top-24 md:mt-6"
          >
            <div className="absolute inset-0 rotate-6 rounded-[2rem] bg-gradient-to-br from-primary/60 to-violet-400/60 transition duration-500 group-hover:rotate-3" />

            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-2xl">
              <Image
                src={profilePic}
                alt="Disha Biswas"
                className="h-auto w-full transition duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* ---------- Quick facts ---------- */}
        <section className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {intro.facts.map((fact, index) => (
            <FadeIn
              key={fact.label}
              delay={index * 0.08}
              className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm"
            >
              <p className="text-lg font-bold text-zinc-900">{fact.value}</p>
              <p className="text-sm text-zinc-500">{fact.label}</p>
            </FadeIn>
          ))}
        </section>

        <Experience />
        <Skills />
        <Education />
        <Hackathons />
      </div>
    </>
  );
};

export default About;
