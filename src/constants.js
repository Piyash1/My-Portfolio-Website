// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import djnagoLogo from './assets/tech_logo/django.png';
import dockerLogo from './assets/tech_logo/docker.png';
import flaskLogo from './assets/tech_logo/flask.png';
import motionLogo from './assets/tech_logo/motion.png';

// Education Section Logo's
import uniLogo from './assets/education_logo/logo-1.png';
import collegeLogo from './assets/education_logo/ngdc.png';
import schoolLogo from './assets/education_logo/school.png';

// Project Section Logo's
import portfolioLogo from './assets/work_logo/portfolio.png';
import stockLogo from './assets/work_logo/stock_predict.png';
import taskLogo from './assets/work_logo/tasknest.png';
import asteroidmartLogo from './assets/work_logo/asteroidmart.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Motion', logo: motionLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name : 'Django', logo: djnagoLogo },
      { name : 'Flask', logo: flaskLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name : 'Docker', logo: dockerLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  
  
  export const education = [
    {
      id: 0,
      img: uniLogo,
      school: "Lovely Professional University, Punjab",
      date: "Aug 2020 - July 2024",
      grade: "76%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Tech) from Lovely Professional University, Punjab. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at LPU allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.TECH (Computer Science)",
    },
    {
      id: 1,
      img: collegeLogo,
      school: "New Govt. Degree College, Rajshahi",
      date: "July 2017 - Aug 2019",
      grade: "GPA 5",
      desc: "I completed my 12th grade from New Govt. Degree College, Rajshahi, with a science background. My studies included core subjects like Physics, Chemistry, and Mathematics, which strengthened my analytical and problem-solving skills. This academic foundation has equipped me with strong scientific knowledge and prepared me for higher education in technical and professional fields.",
      degree: "Higher Secondary Certificate - HSC",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "Santhia Pilot Model High School, Pabna",
      date: "Jan 2013 - Feb 2016",
      grade: "GPA 5",
      desc: "I completed my 10th grade from Santhia Pilot Model High School, Pabna, where I built a strong academic foundation and developed essential skills for future studies.",
      degree: "Secondary School Certificate - SSC",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "My Portfolio",
      description:
        "This is my personal portfolio website that help others to know about me and my works.",
      image: portfolioLogo,
      tags: ["React JS", "Tailwind CSS", "Framer Motion", "Gsap"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "AsteroidMart",
      description:
        "AsteroidMart is a fullstack ecommerce platform built with Django REST Framework for the backend and Next.js for the frontend. It delivers a smooth shopping experience with features like product listings, categories, cart management, secure user authentication, and order handling. The project demonstrates seamless API integration, a modern responsive UI, and scalable architecture—making it a solid foundation for real-world ecommerce applications. 🚀🛒",
      image: asteroidmartLogo,
      tags: ["Next JS", "Tailwind CSS", "Django", "Django REST framework", "PostgreSQL", "Stripe",],
      github: "https://github.com/Piyash1/AsTeroidMart",
      webapp: "https://asteroidmart.vercel.app/",
    },
    {
      id: 2,
      title: "Forecast Flow",
      description:
        "ForcastFlow is an intuitive stock prediction portal that leverages advanced machine learning to forecast market trends, empowering users with data-driven insights for smarter investment decisions and informed trading strategies in real-time.",
      image: stockLogo,
      tags: ["React JS", "Tailwind CSS", "Django", "Django REST framework", "PostgreSQL", "TensorFlow", "API"],
      github: "https://github.com/Piyash1/Stock-Price-Prediction-Portal",
      webapp: "https://forecastflow-5r9u.onrender.com/",
    },
    {
      id: 3,
      title: "TaskNest",
      description:
        "TaskNest is a simple yet powerful task manager that helps users organize daily activities. It allows adding, updating, and deleting tasks easily, ensuring productivity and better time management.",
      image: taskLogo,
      tags: ["Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Piyash1/TaskNest-Modern-Task_manager",
      webapp: "https://tasknest-kibp.onrender.com",
    },
  ];  