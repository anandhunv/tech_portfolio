import { AiFillDatabase} from "react-icons/ai";

import { FaLightbulb} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GrMultimedia } from "react-icons/gr";
import {  SiAntdesign } from "react-icons/si";
import {  TbApiApp } from "react-icons/tb";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaComputer/>,

    title: "Full-Stack Development",
    des: "Develop end-to-end web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) to create a seamless and efficient user experience.",
  },
  {
    id: 2,
    icon: <SiAntdesign />,
    title: "Frontend Development",
    des:"Build dynamic and responsive UIs with React.js, using components, state management (Redux or Context API), and integrating with backend services."
  },
  {
    id: 3,
    icon: <AiFillDatabase/>,
    title: "Backend Development",
    des: "Design and develop RESTful APIs using Node.js and Express.js, ensuring secure and efficient server-side operations and seamless integration with frontend applications.",
  },
  {
    id: 4,
    icon: <TbApiApp />,
    title: "API Development and Integration",
    des: "Create and integrate APIs for seamless communication between frontend and backend.",
  },
  {
    id: 5,
    icon: <GrMultimedia />,
    title: "Multimedia Editing",
    des: "Edit and produce engaging video content and create high-quality images",
  },
  {
    id: 6,
    icon: <FaLightbulb />,
    title: "Continuous Learning",
    des: "Stay updated with the latest industry trends, technologies, and best practices to continuously improve and innovate in software development.",
  },
];