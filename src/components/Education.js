import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-aauto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-xl">
                    {type}
                </h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {place}
                </span>
                <ul className="list-disc list-inside">
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

    const infoDetails = [
        [
            "My computer science degree covered computer organization, architecture, compiler design, DBMS, operating systems, OOPs, computer networks, and programming languages like C++.",
            "I excelled in advanced data structures and algorithms (DSA), enhancing my problem-solving skills vital for practical software development."
        ],
        [
            "Completed coursework in advanced topics such as Superviced Learning in machine Learning, Python programming language, and Web Development."
        ],
    ];

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
                />
                <ul className="w-full font-medium flex flex-col items-center justify-between ml-4">
                    <Details
                        type="Bachelor of Technology In Computer Science"
                        time="2020-2024"
                        place="Maulana Abul Kalam Azad University of Technology"
                        info={infoDetails[0]}
                    />
                    <Details
                        type="Online Course Works"
                        time="2020-2024"
                        place="Coursera And Udemy"
                        info={infoDetails[1]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
