import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, size = "md" }) => {
  const sizeClass =
    size === "sm"
      ? "py-2 px-4 text-xs"
      : size === "lg"
      ? "py-3 px-7 text-sm"
      : "py-3 px-6 text-sm";

  return (
    <motion.div
      className={[
        "flex items-center justify-center rounded-full font-semibold bg-dark text-light",
        "shadow-dark cursor-pointer absolute whitespace-nowrap",
        sizeClass,
      ].join(" ")}
      whileHover={{ scale: 1.06 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

// Ellipse coordinates (because your rings are ovals)
const ellipseVW = (a, b, angleDeg) => {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: `${(a * Math.cos(rad)).toFixed(2)}vw`,
    y: `${(b * Math.sin(rad)).toFixed(2)}vw`,
  };
};

const Skills = () => {
  /**
   * Tune these to match your bg-circularLight rings.
   * a = horizontal radius, b = vertical radius (oval)
   */
  const R1 = { a: 12, b: 7 };   // inner ring
  const R2 = { a: 19, b: 11 };  // ring 2
  const R3 = { a: 27, b: 16 };  // ring 3
  const R4 = { a: 35, b: 21 };  // outer ring

  // Ring 1 (core dev)
  const ring1 = [
    { name: "JavaScript", ...ellipseVW(R1.a, R1.b, -90) },
    { name: "Python", ...ellipseVW(R1.a, R1.b, -30) },
    { name: "Next.js", ...ellipseVW(R1.a, R1.b, 25) },
    { name: "Node.js", ...ellipseVW(R1.a, R1.b, 90) },
    { name: "React", ...ellipseVW(R1.a, R1.b, 155) },
    { name: "C++ (DSA)", ...ellipseVW(R1.a, R1.b, -155) },
  ];

  // Ring 2 (APIs + backend + databases)
  const ring2 = [
    { name: "REST APIs", ...ellipseVW(R2.a, R2.b, -90) },
    { name: "FastAPI", ...ellipseVW(R2.a, R2.b, -15) },
    { name: "MySQL", ...ellipseVW(R2.a, R2.b, 35) },
    { name: "MongoDB", ...ellipseVW(R2.a, R2.b, 145) },
    { name: "Express", ...ellipseVW(R2.a, R2.b, -145) },
    { name: "DynamoDB", ...ellipseVW(R2.a, R2.b, 90) },
  ];

  // Ring 3 (AWS app building blocks)
  const ring3 = [
    { name: "S3", ...ellipseVW(R3.a, R3.b, -35) },
    { name: "Lambda", ...ellipseVW(R3.a, R3.b, 15) },
    { name: "API Gateway", size: "sm", ...ellipseVW(R3.a, R3.b, 55) },
    { name: "ECS", ...ellipseVW(R3.a, R3.b, 180) },
    { name: "EC2", ...ellipseVW(R3.a, R3.b, -125) },
    { name: "ECR", ...ellipseVW(R3.a, R3.b, 120) },
  ];

  // Ring 4 (DevOps / Observability / IaC) — spread evenly, no “lonely” CodeDeploy
  const ring4 = [
    { name: "X-Ray", ...ellipseVW(R4.a, R4.b, -90) },
    { name: "CloudWatch", size: "sm", ...ellipseVW(R4.a, R4.b, -55) },
    { name: "SQS", ...ellipseVW(R4.a, R4.b, -125) },

    { name: "IAM", ...ellipseVW(R4.a, R4.b, 180) },

    { name: "CloudFormation", size: "sm", ...ellipseVW(R4.a, R4.b, 145) },
    { name: "CodeDeploy", ...ellipseVW(R4.a, R4.b, 115) },

    { name: "Elastic Beanstalk", size: "sm", ...ellipseVW(R4.a, R4.b, 70) },
    { name: "Docker", ...ellipseVW(R4.a, R4.b, 25) },
  ];

  return (
    <>
      <h2 className="font-bold text-8xl mt-60 w-full text-center">Skills</h2>

      {/* overflow-visible + padding prevents top pills clipping */}
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight overflow-visible p-16">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark"
          whileHover={{ scale: 1.05 }}
        >
          Cloud & Backend
        </motion.div>

        {[...ring1, ...ring2, ...ring3, ...ring4].map((s) => (
          <Skill key={s.name} name={s.name} x={s.x} y={s.y} size={s.size} />
        ))}
      </div>
    </>
  );
};

export default Skills;
