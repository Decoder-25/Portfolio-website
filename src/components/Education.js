import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
        <h3 className="font-bold text-xl">{type}</h3>

        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>

        <ul className="list-disc list-inside font-medium">
          {info.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const mscDetails = [
    "Focused on advanced computer science concepts with a strong emphasis on enterprise computing and real-world problem solving.",
    "Built and shipped projects, improving consistency, ownership, and delivery in a fast-moving environment.",
    "Strengthened backend + cloud fundamentals through hands-on labs and practical implementations.",
  ];

  const btechDetails = [
    "Covered computer organization & architecture, compiler design, DBMS, operating systems, OOP, computer networks, and C++.",
    "Built a strong base in problem-solving and DSA, supporting practical software development work.",
  ];

  const awsDetails = [
    "AWS Certified Developer – Associate (DVA-C02) — validated skills in developing, deploying, and debugging cloud applications on AWS.",
    "Hands-on experience with core services like IAM, EC2, S3, Lambda, API Gateway, DynamoDB, SQS, CloudWatch, X-Ray, CloudFormation, ECS, ECR, CodeDeploy, and Elastic Beanstalk.",
    <>
      Credential ID: <span className="font-semibold">473ef46f-5436-4413-b1a9-ffd683f7a88b</span>
    </>,
    <>
      Credly Badge:{" "}
      <a
        href="https://www.credly.com/badges/473ef46f-5436-4413-b1a9-ffd683f7a88b/public_url"
        target="_blank"
        rel="noreferrer"
        className="text-primary underline underline-offset-2"
      >
        View public badge
      </a>
    </>,
    "Issued: Nov 2025 | Expires: Nov 2028",
  ];

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full font-medium flex flex-col items-center justify-between ml-4">
          <Details
            type="MSc Advanced Computer Science"
            time="2024–2025"
            place="University of Exeter, United Kingdom"
            info={mscDetails}
          />

          <Details
            type="Bachelor of Technology in Computer Science"
            time="2020–2024"
            place="Maulana Abul Kalam Azad University of Technology"
            info={btechDetails}
          />

          <Details
            type="AWS Certified Developer – Associate (DVA-C02)"
            time="Nov 2025"
            place="Amazon Web Services Training and Certification"
            info={awsDetails}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
