import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/Chat_.png";
import project2 from "../../public/images/projects/React_quiz.png"
import project3 from "../../public/images/projects/eat-n-split.png"
import project4 from "../../public/images/projects/smartshala.png"
import project5 from "../../public/images/projects/helper.png"
import project6 from "../../public/images/projects/swiggy clone.png"

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"/>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 curser-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({title, type, img, summary, link, github}) => {
  return(
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full curser-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Disha | Projects Page</title>
        <meta
          name="description"
          content="This is my portfolio website. I am a developer, I am open for collaboration in fullstack projects."
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 " />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Chat-A-Chat"
                img={project1}
                summary="This MERN stack chat application, powered by Socket.io for real-time messaging and Chakra UI for an elegant interface, offers instant and user-friendly communication. With MongoDB, Express.js, React, and Node.js at its core, it ensures both efficient functionality and a visually appealing user experience, making it ideal for various communication needs."
                link="/"
                github="https://github.com/Decoder-25/Chat-App_Socket.Io"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project title="React Quiz App"
                img={project2}
                summary="Welcome to the React Quiz App, a fun and interactive quiz game built with React! Test your knowledge, challenge your friends, and strive for the highscore. This app is designed to help you understand how to create a simple quiz application using React and a mock server."
                link="https://the-react-quiz.netlify.app/"
                github="https://github.com/Decoder-25/Quiz-App"
                type="Featured Project" />
            </div>
            <div className="col-span-6">
              <Project 
                title="Eat-N-Split"
                img={project3}
                summary="This user-friendly React-based web application simplifies the process of splitting bills with your friends. It offers convenient features such as managing your list of friends, selecting them for bill splitting, and tracking shared expenses, making group financial planning and coordination a seamless experience."
                link="https://eat-n-split-dun-one.vercel.app/"
                github="https://github.com/Decoder-25/eat-n-split"
                type="Featured Project" />
            </div>
            <div className="col-span-12">
              <FeaturedProject 
                title="SmartShala"
                img={project4}
                summary="We developed this application using Flutter for the frontend and Python for the backend. My primary responsibility was designing the interface. The app serves as an educational tool, enabling teachers to monitor students' comprehension of classroom material. However, it comes with a unique twist: teachers can only access the application through a smart device, while students respond to questions using traditional pen-and-paper methods."
                link="https://www.youtube.com/watch?v=FgbjfAlIFVY"
                github="https://github.com/SmartShala"
                type="Featured Project" />
            </div>
            <div className="col-span-6">
              <Project 
                title="Helper"
                img={project5}
                summary="During the hackathon, we developed a web application aimed at connecting individuals in need of assistance for their daily household tasks, such as housekeeping, driving, cooking, night guarding, tutoring, or caregiving, with suitable helpers. Job seekers can create accounts by submitting detailed profiles, including their job expectations. Meanwhile, those seeking help can search for helpers based on their profiles, location, availability, and level of experience."
                link="/"
                github="https://github.com/Decoder-25/Helper_Hack4Bengal"
                type="On Progress" />
            </div>
            <div className="col-span-6">
              <Project title="Swiggy Clone"
                img={project6}
                summary="The Swiggy clone app is a food delivery application inspired by Swiggy. It allows users to order food from local restaurants, offers a variety of cuisine choices, tracks orders in real-time, and provides secure payment options. Restaurants can partner with the app to expand their customer reach, and delivery drivers can earn income by delivering orders. Overall, it replicates the core features and functionality of the popular Swiggy platform, enabling convenient and efficient food delivery services."
                link="/"
                github="https://github.com/Decoder-25/Food-Delivery"
                type="On Progress" />
              </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
