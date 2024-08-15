import project1 from "../Assets/Projects/project1.png";
import project2 from "../Assets/Projects/project2.png";
import project3 from "../Assets/Projects/project3.png";
import project4 from "../Assets/Projects/project4.png";

import reactjs from '../Assets/Skills/react.png';
import sql from '../Assets/Skills/mysql.png';
import nodejs from '../Assets/Skills/node.png';
import java from '../Assets/Skills/java.png';
import mongoDB from '../Assets/Skills/MongoDB.png';
import figma from '../Assets/Skills/figma.png';
import python from '../Assets/Skills/python.png';
import ps from '../Assets/Skills/ps.png';
import NextJs from '../Assets/Skills/nextjs.png';


const info = {
  name: "Om Gore",
  title: "Software Engineer",
  profileImage: "https://i.pinimg.com/736x/55/33/5c/55335c708ac05d8f469894d08e2671fa.jpg",
  contact: {
    email: "omgore4307@gmail.com",
    phone: "+91 86694 80758",
    location: "Pune, Maharashtra."
  },
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    leetcode: "https://leetcode.com/yourusername",
    hackerrank: "https://www.hackerrank.com/yourusername"
  },
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) | Artificial Intelligence and Data Science",
      institution: "Vishwakarma Institute of Technology",
      cgpa: "8.99",
      duration: "2021-2025"
    },
    {
      degree: "12th (HSC) | Maharashtra Board",
      institution: "Laxmanrao Apte Prashala & Jr. College",
      percentage: "90%",
      duration: "2020-2021"
    },
    {
      degree: "10th (SSC) | Maharashtra Board",
      institution: "Vishwakarma Vidyalaya Marathi Secondary",
      percentage: "88.80%",
      duration: "2018-2019"
    }
  ],
  projects: [
    {
      title: "SDSS : Student Portal",
      image: project1,
      link: "https://github.com/om9011/SDSS_Portal",
      deploy: "",
      techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS"],
      description: "The SDSS Student Portal is a web application designed to display examination results for the Swami Dayananda Saraswati Shakha. It offers a user-friendly interface for viewing student information, subject-wise marks, and overall performance. Built with ReactJS for the frontend and ExpressJS with MongoDB for the backend, the portal provides an intuitive and interactive experience compared to its earlier version."
    },
    {
      title: "Jan गणना : Census System",
      image: project2,
      link: "https://github.com/siddhesh-desai/Janaganana",
      deploy: "",
      techStack: ["Java", "HTML", "CSS", "JavaScript"],
      description: "Jan गणना is a smart census system aimed at modernizing the census process in India. Utilizing Aadhar-based login for secure access, this application allows family heads to manage their family members' information easily. Developed using Java and Firebase, it ensures data accuracy and a secure framework while providing features for adding, deleting, and editing family members."
    },
    {
      title: "Dubwiz : Video Dubbing Platform",
      image: project3,
      link: "https://github.com/Om-Gujarathi/SIH_2023",
      deploy: "",
      techStack: ["ReactJS", "TailwindCSS", "Python", "Flask", "Machine Learning"],
      description: "Dubwiz is a multilingual video dubbing platform that translates spoken English in videos into various regional Indian languages. The backend is powered by Python technologies like PyTorch and Flask for speech recognition and translation, while the frontend uses ReactJS for an interactive user interface. The system handles video file processing, audio extraction, translation, and dubbing with machine learning models for a seamless dubbing experience."
    },
    {
      title: "Result 2024",
      image: project4,
      link: "https://github.com/om9011/SDSS-Result.git",
      deploy: "",
      techStack: ["ReactJS", "TailwindCSS", "JavaScript"],
      description: "Result 2024 is an advanced version of the Swami Dayananda Saraswati Shakha Result Portal, built using ReactJS and TailwindCSS. It provides enhanced functionality over its previous version by displaying detailed student information, subject-wise marks, total marks, percentage, and pass/fail status. The modern and interactive interface improves the user experience and makes result viewing more intuitive and efficient."
    }
  ],
  certifications: [
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
    },
    {
      title: "Introducion to HTML, CSS, JS",
      issuer: "IBM",
    },
    {
      title: "Introduction to Git and Github",
      issuer: "IBM",
    },
    {
      title: "Developing Front-End Apps with React",
      issuer: "IBM",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      issuer: "IBM",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
    },
    {
      title: "Developing AI Applications with Python and Flask",
      issuer: "IBM",
    },
    {
      title: "Programming Foundations: Design Patterns",
      issuer: "LinkedIn"
    },
    {
      title: "Software Design Modeling with UML",
      issuer: "LinkedIn"
    },
    {
      title: "Full Stack Web Development Certificate",
      issuer: "Udemy",
      instructor: "Analea Yu"
    }]
  ,
  skills: {
    programmingLanguages: [
      {
        name: "C",
        logo: "https://i0.wp.com/moodle.sit.ac.in/blog/wp-content/uploads/2023/06/c.png?fit=709%2C555&ssl=1",
      },
      {
        name: "Java",
        logo: java,
      },
      {
        name: "Python",
        logo: python,
      },
    ],
    developmentLanguages: [
      {
        name: "HTML",
        logo: " https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png",
      },{
        name: "CSS  ",
        logo: "https://w7.pngwing.com/pngs/473/634/png-transparent-css-hd-logo-thumbnail.png",
      },{
        name: "JavaScript",
        logo:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" ,
      },
      {
        name: "React JS",
        logo: reactjs,
      },
      {
        name: "NextJS",
        logo: NextJs,
      },
      {
        name: "Node JS",
        logo: nodejs,
      },{
        name: "Express JS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
    ],
    databases: [
      {
        name: "MySQL",
        logo: sql,
      },
      {
        name: "MongoDB",
        logo: mongoDB,
      },
    ],
    versionControls: [
      {
        name: "Git",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp2RKrzqJF2Cu3dxnk2RGK_F7SSloJG-Wyw&s",
      }, {
        name: "Github",
        logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      },
    ],
    other: [
      {
        name: "Figma",
        logo: figma,
      },{
        name: "PhotoShop",
        logo: ps,
      },
    ],
  },

};

export default info;
