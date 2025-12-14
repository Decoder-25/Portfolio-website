import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, location, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75">
          {time} | {location}
        </span>

        <ul className="list-disc list-inside font-medium">
          {work.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  // Date-wise: most recent -> oldest
  const experiences = [
    {
      position: "Backend Developer (MSc Dissertation Project)",
      company: "Decision Support Tool for Cyber Security Investment",
      companyLink: "#",
      time: "2025",
      location: "University of Exeter, UK",
      work: [
        "Designed and developed a decision-support web application to optimise cyber security investment portfolios under budget constraints.",
        "Built backend services using Python and FastAPI to model security controls, indirect costs, and risk reduction, applying linear programming optimisation with PuLP.",
        "Extended the system with attack-graph–based reasoning and resilience/uncertainty handling to produce more realistic and robust investment recommendations.",
        "Containerised backend services and deployed the application on AWS using ECS with Fargate, gaining hands-on experience with cloud-native deployment patterns.",
        "Configured supporting AWS infrastructure including EC2, IAM, ECR, CloudWatch, and Application Load Balancers to enable secure and observable deployments.",
        "Experimented with CI/CD workflows using AWS CodePipeline and CodeDeploy to automate build and deployment stages, simulating real-world production pipelines.",
        "Focused on clean API design, validation, and maintainable architecture so the system can scale beyond an academic prototype into a production-ready service.",
      ],
    },
    {
      position: "FullStack Developer",
      company: "Zigy Prints",
      companyLink: "https://www.linkedin.com/company/zigycustoms/about/",
      time: "Aug 2023 – Present",
      location: "Remote",
      work: [
        "Built and shipped a real-time 1:1 chat feature for an e-commerce product using Socket.io and Node.js.",
        "Integrated MongoDB Atlas for message storage and user data, and developed the chat UI in React.",
        "Implemented secure authentication using Google OAuth and JWT-based sessions.",
        "Worked in an agile workflow, delivering features with attention to code quality, maintainability, and deadlines.",
      ],
    },
    {
      position: "Backend Developer (Hackathon Project)",
      company: "Hack4Bengal",
      companyLink: "https://www.hack4bengal.tech/",
      time: "Jul 2023",
      location: "Kolkata, India",
      work: [
        "Built REST APIs for a MERN web app that connects users with local helpers (cook, driver, tutor, caretaker, etc.).",
        "Designed backend flows for onboarding, profiles, search filters (location/availability), and basic role-based access.",
        "Implemented JWT authentication and persisted application data in MongoDB.",
        "Collaborated in a fast-paced team environment and delivered a working product within hackathon constraints.",
      ],
    },
    {
      position: "Teaching Assistant",
      company: "Rangmashal Foundation",
      companyLink: "https://www.rangmashal.org/",
      time: "Feb 2023 – Sep 2023",
      location: "Kolkata, India",
      work: [
        "Co-taught computer fundamentals to underprivileged students and supported them through practical exercises.",
        "Helped learners build confidence with basic tools, internet usage, and problem-solving with technology.",
        "Improved communication by breaking down complex concepts into simple, structured explanations.",
      ],
    },
    {
      position: "UI/UX Designer (Hackathon Team Project)",
      company: "Smart India Hackathon",
      companyLink: "https://www.sih.gov.in/",
      time: "Aug 2022",
      location: "Chennai, India",
      work: [
        "Collaborated with the team to design UI flows and screens for an education-focused application.",
        "Worked closely with developers to ensure designs were feasible and consistent across the product.",
        "Contributed to building a clean and usable interface under tight hackathon timelines.",
      ],
    },
  ];

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Experience</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4">
          {experiences.map((exp, idx) => (
            <Details
              key={idx}
              position={exp.position}
              company={exp.company}
              companyLink={exp.companyLink}
              time={exp.time}
              location={exp.location}
              work={exp.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
