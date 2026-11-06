// All projects shown on the Projects page.
// To add a project, copy one block and change the details.
//   image:    import the screenshot at the top of this file
//   live:     link to the live site/demo, or "" if there isn't one
//   category: used by the filter buttons ("Full Stack" or "Frontend")
//   status:   "" for finished, or something like "In progress"

import chatImg from "../../public/images/projects/Chat_.png";
import quizImg from "../../public/images/projects/React_quiz.png";
import splitImg from "../../public/images/projects/eat-n-split.png";
import smartshalaImg from "../../public/images/projects/smartshala.png";
import helperImg from "../../public/images/projects/helper.png";
import swiggyImg from "../../public/images/projects/swiggy clone.png";

// The big project shown at the top
export const featuredProject = {
  title: "Decision Support Tool for Cyber Security Investment",
  label: "MSc Research Project · 2025",
  summary:
    "A web app that helps organisations decide which security controls to invest in. It applies linear programming over probabilistic attack graphs to recommend cost-effective, resilience-aware control portfolios — and explains why each control was picked.",
  highlights: [
    "Multi-objective MILP models solved with PuLP in under 2 minutes for 30+ controls",
    "Scenario storage and side-by-side comparison in MongoDB",
    "Explanation module breaking down each control's cost-effectiveness",
    "CI/CD deployment on AWS with EC2, CodePipeline, CodeDeploy and Elastic Beanstalk",
  ],
  tech: ["Python", "FastAPI", "PuLP", "MongoDB", "React", "TypeScript", "AWS"],
  github: "https://github.com/Decoder-25/Decision_Support_Tool",
  live: "",
};

export const projects = [
  {
    title: "Chat-A-Chat",
    category: "Full Stack",
    image: chatImg,
    summary: "Real-time one-on-one chat app with instant messaging over Socket.io and a clean Chakra UI interface.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    github: "https://github.com/Decoder-25/Chat-App_Socket.Io",
    live: "",
    status: "",
  },
  {
    title: "Helper",
    category: "Full Stack",
    image: helperImg,
    summary: "Hack4Bengal project connecting people with household helpers — cooks, drivers, tutors and caregivers — searchable by location, availability and experience.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/Decoder-25/Helper_Hack4Bengal",
    live: "",
    status: "In progress",
  },
  {
    title: "Swiggy Clone",
    category: "Full Stack",
    image: swiggyImg,
    summary: "Food delivery app inspired by Swiggy — browse local restaurants and cuisines, and place orders.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/Decoder-25/Food-Delivery",
    live: "",
    status: "In progress",
  },
  {
    title: "React Quiz App",
    category: "Frontend",
    image: quizImg,
    summary: "Interactive quiz game with scoring and a high score, built with React and a mock API server.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/Decoder-25/Quiz-App",
    live: "https://the-react-quiz.netlify.app/",
    status: "",
  },
  {
    title: "Eat-N-Split",
    category: "Frontend",
    image: splitImg,
    summary: "Split bills with friends — manage your friend list, pick who you're splitting with, and track who owes what.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/Decoder-25/eat-n-split",
    live: "https://eat-n-split-dun-one.vercel.app/",
    status: "",
  },
  {
    title: "SmartShala",
    category: "Frontend",
    image: smartshalaImg,
    summary: "Smart India Hackathon app that lets teachers track how well students follow the class, while students answer with pen and paper. I designed the interface.",
    tech: ["Flutter", "Python", "UI/UX"],
    github: "https://github.com/SmartShala",
    live: "https://www.youtube.com/watch?v=FgbjfAlIFVY",
    status: "",
  },
];
