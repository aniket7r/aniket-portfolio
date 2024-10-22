import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

// import fullstackImage from "../../public/imgs/ai.png"

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ title, company_name, icon, iconBg, date, points }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Web Development",
      company_name: "Languages & Tools",
      icon: "/imgs/devops.png", // Placeholder, update with actual icon
      iconBg: "#FF6B6B",
      date: "",
      points: [
        "Languages: JavaScript, Python, HTML, CSS",
        "Frontend: React, HTML5, CSS3, Tailwind CSS, Bootstrap",
        "Backend: Node.js, Express.js, Django",
        "Databases: MongoDB, PostgreSQL, MySQL",
        "Real-Time Communication: WebSocket, Socket.io",
        "APIs: RESTful APIs, GraphQL",
        "Testing: Jest, Mocha, Chai",
        "Version Control: Git, GitHub, GitLab",
        "Build Tools: Webpack, Babel, npm, Yarn",
        "Cloud & DevOps: Docker, AWS, Heroku, Netlify"
      ],
    },
    {
      title: "Python Development",
      company_name: "Languages & Tools",
      icon: "/imgs/python.svg", // Placeholder, update with actual icon
      iconBg: "#d53561",
      date: "",
      points: [
        "Languages: Python",
        "Libraries: Selenium, Pandas, NumPy, Scikit-learn, TensorFlow, Keras, OpenCV, NLTK (Natural Language Toolkit)",
        "Machine Learning: Scikit-learn, TensorFlow, Keras",
        "Natural Language Processing (NLP): NLTK, spaCy",
        "Web Development: Django, Flask",
        "Web Scraping: BeautifulSoup, Scrapy, Selenium",
        "Automation & Testing: PyTest, Unittest, Selenium WebDriver",
        "Data Visualization: Matplotlib, Seaborn, Plotly",
        "Version Control: Git, GitHub, GitLab",
        "Cloud Services: AWS Lambda, Google Cloud Functions",
        "CI/CD: Jenkins, GitLab CI"
      ],
    },
    {
      title: "Blockchain Development",
      company_name: "Languages & Tools",
      icon: "/imgs/blockchain.png", // Placeholder, update with actual icon
      iconBg: "#FFC107",
      date: "",
      points: [
        "Languages: Solidity, Rust, Vyper, JavaScript (for Web3 interaction), C++, Python (for smart contract testing)",
        "Frameworks: Truffle, Hardhat, Brownie",
        "Blockchain Platforms: Ethereum, Solana, Binance Smart Chain, Polygon, Hyperledger, Avalanche",
        "Libraries: Web3.js, Ethers.js, ZoKrates (for zk-SNARKs), OpenZeppelin (for smart contract security)",
        "Smart Contract Development: Solidity, Rust (for Solana), Vyper",
        "Smart Contract Testing: Mocha, Chai, Truffle, Hardhat, Ganache",
        "Decentralized Storage: IPFS (InterPlanetary File System), Arweave",
        "Token Standards: ERC-20, ERC-721, ERC-1155, SPL Tokens (for Solana)",
        "Cross-Chain Integrations: Wormhole (Solana-Ethereum bridge), Polkadot",
        "Oracles: Chainlink, Band Protocol",
        "DevOps & Cloud: Docker, AWS, Azure, Kubernetes",
        "Security Tools: MythX, Slither (for smart contract auditing), Gnosis Safe (for multisig wallets)",
        "Development Environment: Remix IDE, Visual Studio Code, Solana CLI",
        "Version Control: Git, GitHub, GitLab"
      ],
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>My Skills.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
