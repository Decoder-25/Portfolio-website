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
          content="This is my portfolio website. I am a developer, If anybody needs any type of development, they can contact me."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Devotion Sparks Objective!"
            className="!text-7xl mb-16"
          />
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-center md:text-left md:w-2/3">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
                - Greetings, I&apos;m Disha Biswas, a proficient FullStack
                developer and a dedicated UI/UX designer, driven by a fervor for
                crafting exquisite, pragmatic, and user-centric digital
                interfaces. I am perpetually in pursuit of novel and pioneering
                methods to breathe life into my clients&apos; creative
                aspirations.
              </p>
              <p className="font-medium my-4">
                - I hold the conviction that design transcends mere aesthetics;
                it&apos;s a means to tackle challenges and foster seamless,
                delightful interactions for users.
              </p>
              <p className="font-medium mb-4">
                - I have extensive experience in web development using various
                technologies such as React, Node.js, Socket.io, Express,
                MongoDB, MySQL, Next.js, and Docker. These tools enable me to
                create dynamic and efficient web applications, and I&apos;m
                always eager to explore new technologies and expand my skill
                set.
              </p>
              <p className="font-medium">
                - My overarching vision centers on aiding individuals by
                translating code into solutions, while my ultimate purpose
                revolves around continuous technological enlightenment and
                growth.
              </p>
            </div>
            <div className="text-center md:text-right md:w-1/3 flex justify-end">
              <div className="max-w-sm mx-auto md:mx-0 rounded-2xl border-2 border-solid border-dark">
                <Image
                  src={pp}
                  alt="Disha"
                  className="w-full h-auto object-cover rounded-2xl"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <Skills />
          <Experience/>
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default about;
