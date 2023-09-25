import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, location, work }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-aauto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl">
                    {position}&nbsp;{" "}
                    <a
                        href={companyLink}
                        target="-blank"
                        className="text-primary capitalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {location}
                </span>
                <ul className="list-disc list-inside">
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

    const workDetails = [
        [
            "Developed integrated Chat application (One-on-One chat) for E-commerce website using Socket.io and NodeJS, integrating with MongoDB Atlas in the backend and in the frontend developing chat ui using ReactJS.",
            "Added oAuth authentication using Google and JWT authentication for user login.",
            "Used agile methodologies and best practices to deliver quality solutions on time and within budget.",
            "Designed and developed features, ensuring code adhered to standards.",
        ],
        [
            "Contributed my expertise by co-instructing a computer course for underprivileged students at a non-profit organization, empowering them with essential digital skills.",
            "In this rewarding experience, I helped bridge the digital divide, equipping these students with valuable knowledge to navigate the digital landscape.",
            "Witnessing their newfound confidence and potential was a testament to the impact of education and empowerment.",
        ],
        [
            "We built the app by using Flutter(frontend) and Python(backend). My part was to build the design.",
            "This is an educational app that allows the Teacher to track the student’s performance in a classroom to know who’s understanding the class work and who’s not.",
            "But here the teacher only has access to the smart device and the student will give the answer asked by the teacher by using pen-paper mode.",
        ],
        [
            "In this hackathon we built a web app which will help you to find a Helper to help in your daily household activities(as per your need, e.g. - house help, driver, cook, nightguard, home tutors, caretaker, etc.).",
            "The person who wants to help can open their account by submitting a form and their expectations from the job and the person who wants help can search them by watching their profiles, location, availability, and experience.",
            "We have used the popular stack MERN stack and I handled the Backend part.",
            "I built REST apis and stored the user data in MongoDB database. And have implemented the JWT authentication.",
        ],
    ];

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
                />
                <ul className="w-full flex flex-col items-center justify-between ml-4">
                    <Details
                        position="FullStack Developer"
                        company="Zigy Prints"
                        companyLink="https://www.linkedin.com/company/zigycustoms/about/"
                        time="Aug, 2023 - Present"
                        location="Remote"
                        work={workDetails[0]}
                    />
                    <Details
                        position="Teaching Assistant"
                        company="Rangmashal Foundation"
                        companyLink="https://www.rangmashal.org/"
                        time="Feb, 2023 - Sept, 2023"
                        location="Kolkata, India"
                        work={workDetails[1]}
                    />
                    <Details
                        position="UI/UX Designer"
                        company="Smart India Hackathon"
                        companyLink="https://www.sih.gov.in/"
                        time="Aug, 2022"
                        location="Chennai, India"
                        work={workDetails[2]}
                    />
                    <Details
                        position="Backend Developer"
                        company="Hack4bengal"
                        companyLink="https://www.hack4bengal.tech/"
                        time="July, 2023"
                        location="Kolkata, India"
                        work={workDetails[3]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
