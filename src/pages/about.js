import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import pp from "../../public/images/profile/about me.png";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>Disha | About Page</title>
        <meta
          name="description"
          content="This is my portfolio website. I am a developer. If anybody needs any type of development, they can contact me."
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Devotion Sparks Objective!"
            className="mb-16"
          />

          {/* ABOUT SECTION: text wraps around image */}
          <div className="w-full">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              About Me
            </h2>

            {/* Image floats right on desktop, stacks on mobile (OLD SIZE / NO ZOOM) */}
          <div className="w-full md:float-right md:w-[420px] md:ml-10 md:mb-6">
            <div className="max-w-sm mx-auto md:mx-0 rounded-2xl border-2 border-solid border-dark overflow-hidden">
              <Image
                src={pp}
                alt="Disha"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

            <p className="font-medium">
              Hi, I&apos;m Disha, a software developer currently based in the UK. I
              moved here for my master&apos;s with a clear goal: to grow into a strong,
              reliable engineer by learning deeply, building real things, and
              improving through practice rather than just theory. My journey so
              far has been shaped by curiosity, consistency, and a willingness to
              start from scratch whenever needed.
            </p>

            <p className="font-medium my-4">
              I primarily work with JavaScript across the stack with React and
              Next.js on the frontend, Node.js on the backend and I&apos;m also
              comfortable building backend systems in Python. I&apos;ve developed
              real-world APIs using FastAPI, connected them with databases like
              MongoDB and MySQL, and taken responsibility for how different parts
              of a system work together, not just individual features.
            </p>

            <p className="font-medium my-4">
              Recently, I&apos;ve been focusing heavily on cloud and backend
              scalability. I&apos;m AWS Developer Associate certified and actively
              apply what I learn by building projects, experimenting with
              services, and understanding how systems behave in real environments.
              For me, cloud isn&apos;t just about knowing services; it&apos;s about knowing
              why to use them, how they fail, and how to design things that are
              reliable and cost-aware.
            </p>

            <p className="font-medium my-4">
              I practise problem-solving regularly and work through data
              structures and algorithms in C++, treating it as a long-term skill
              I&apos;m steadily improving rather than something I &quot;already know.&quot;
              I&apos;m naturally curious and like to understand things in depth. I&apos;m
              okay taking time to truly learn something. At the same time, I can
              adapt quickly in fast-moving environments when deadlines demand it.
            </p>

            <p className="font-medium">
              What defines me most is adaptability and ownership. I pick up new
              tools quickly, take responsibility for my work, and care about
              writing clean, maintainable code that actually helps people. I
              don&apos;t claim to know everything but I&apos;m serious about learning,
              building, and becoming better with every project I touch.
            </p>

            {/* IMPORTANT: clears float so next sections don't wrap */}
            <div className="clear-both" />
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
