
import "./skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const mernSkills = [
  {
    name: "MongoDB",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "React",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
  }
  
];

const otherSkills = [
  {
    name: "VS Code",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Git",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "ShadCN UI",
    logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
  },
  {
    name: "DaisyUI",
    logo: "https://raw.githubusercontent.com/saadeghi/daisyui/master/logo-500.png",
  },
  {
    name: "Material UI",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
  },
];

const softSkills = [
  "Communication",
  "Problem-Solving",
  "Team Collaboration",
  "Time Management",
  "Adaptability",
  "Attention to Detail",
  "Empathy",
  "Self-Motivation",
  "User-Centered Thinking",
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="skill-component" id="skills">
      <h2 className="mern-section-title" data-aos="fade-up">MERN Stack</h2>
      <div className="skills-grid" data-aos="fade-up" data-aos-delay="100">
        {mernSkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <h2 className="tools-title mern-section-title" data-aos="fade-up" data-aos-delay="200">
        Tools & UI Libraries
      </h2>
      <div className="badges-grid" data-aos="fade-up" data-aos-delay="300">
        {otherSkills.map((skill) => (
          <div className="badge-skill" key={skill.name}>
            <img src={skill.logo} alt={skill.name} className="badge-logo" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <h2 className="soft-title mern-section-title" data-aos="fade-up" data-aos-delay="400">
        Soft Skills
      </h2>
      <div className="soft-grid" data-aos="fade-up" data-aos-delay="500">
        {softSkills.map((skill, index) => (
          <div className="soft-skill" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

