import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  arc_company,
  upwork_company,
  miniorange,
  earnpark,
  onedelta,
  montro
} from "../assets";



import {
  nft0, nft1, nft2, tellman, gallery, bnb, appstore, sappyseals, brahma, mentorMatch, realestate,  digitaltran, moonlight, star,  supply, market, iss, analytics, games
} from "../assets/works";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
  // {
  //   title: "Blockchain Developer",
  //   icon: mobile,
  // },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Blockchain Developer",
    company_name: "EarnPark, UK",
    icon: earnpark,
    iconBg: "#383E56",
    date: "08/2022 - 01/2024",
    points: [
      "Spearheaded a joint initiative with product and development teams, enhancing platform efficiency by 20%.",
      "Engaged in over 10 open source community projects, liaised with stakeholders, and provided mentorship and guidance to 3 emerging junior developers.",
      "Enhanced to engineering a robust backend infrastructure pivotal for the convergence of Web3 and FinTech."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "1Delta, US",
    icon: onedelta,
    iconBg: "#383E56",
    date: "04/2020 - 07/2022",
    points: [
      "Reduced the time to diagnose customer's sever issues form 3 hours to 20 minutes, slashing $30k yearly in support costs.",
      "Engineered a decentralized application DApp) that enabled users to simulate crypto loans, resulting in a 10% surge in loan adoption on the platform.",
      "Architected a robust, modular Python trading engine to autonomously recalibrate RW's $23 million portfolio, capitalizing on both private and public market makers within the Ethereum network.",
      "Cultivated and sustained strategic partnerships with over 30 potential investors and 17 business partners, and generated over 20 innovative business proposals.",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "Montro Collectibles, Netherlands",
    icon: montro,
    iconBg: "#E6DEDD",
    date: "09/2018 - 03/2020",
    points: [
      "Revamped the Verse homepage utilizing HTML, Tailwind CSS and React, achieving a milestone of 8 million weekly views.",
      "Revitalized the checkout page handling $4M in daily revenue by updating the payment code, resulting in improved transaction processing.",
      "Improved user interfaces by integrating with Bitcoin.com to be more intuitive, attracting 8% more clients than the previous.",
      "Enhanced on-chain data processing efficiency by a remarkable 12% through strategic deployment of optimized smart contract functions and implementing robust persistence storage strategies."
    ],
  }
  // {
  //   title: "Full stack developer",
  //   company_name: "InvoZone (Toronto, Canada)",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Feb 2018 - July 2021",
  //   points: [
  //     "Designed and developed RESTful APIs using Python, Flask, and Django to enable seamless communication between front-end and backend applications.",
  //     "Created high-performance Python scripts for data manipulation and analytics tasks, and optimized data storage and retrieval strategies.",
  //     "Built and optimized dynamic and visually appealing user interfaces (UI) using MERN, MEAN, or MEVN technologies (MongoDB, Express.js, React/Angular/Vue.js, and Node.js).",
  //     "Developed well-structured and optimized databases on MySQL, PostgreSQL, and MongoDB while designing optimized data models and database schemas.",
  //     "Utilized containerization and microservices such as Kubernetes, Docker, and AWS Elastic Beanstalk to deploy production-level applications."
  //   ],
  // },
  // {
  //   title: "Full stack developer",
  //   company_name: "TEKHQS (Remote)",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Feb 2018 - July 2021",
  //   points: [
  //     "Designed and developed blockchain-based solutions using platforms such as Ethereum, Hyperledger Fabric, and Corda.",
  //     "Developed smart contracts in Solidity and implemented their deployment and testing on blockchain networks.",
  //     "Built decentralized applications (DApps) using blockchain technology.Integrated blockchain solutions into existing web and mobile applications, creating interfaces that displayed the data efficiently for stakeholders.",
  //     "Developed proof-of-concept and developed minimum viable products (MVPs) to analyze the feasibility of blockchain solutions.",
  //     "Designed and developed decentralized exchanges (DEX) using technologies such as 0x project, Kyber Network, and Airswap."
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Your contribution to the our project as a blockchain developer was outstanding. Great job on completing the feature ahead of schedule!",
    name: "Kevin Schellinger",
    designation: "Co-Founder and CEO",
    company: "1Delta",
    image: "https://1delta.io/wp-content/uploads/2023/05/kevin-bw.jpg",
  },
  {
    testimonial:
      "We've been thoroughly impressed with your technical prowess as a Web3 developer on our project. Your work has set a standard for maintainability and scalability, making it easy for our team to extend functionalities in the future. ",
    name: "Dmitrii Gromyko",
    designation: "CTO",
    company: "EarnPark",
    image: "https://earnpark.com/_next/static/media/dmitry-gromyko.ac2b4074.png",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Mentor Match",
    description:
      "Developed a mentorship and networking platform using JavaScript, React, and MongoDB. Integrated WebSocket for real-time communication and implemented a custom matching algorithm for effective user pairing.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "WebSocket",
        color: "pink-text-gradient",
      },
    ],
    image: mentorMatch, // Replace with the actual image variable for Mentor Match
    to: 'https://github.com/aniket7r/mentorMatch',
    source_code_link: "https://github.com/aniket7r/mentorMatch",
  },
  {
    name: "Real Estate Marketplace",
    description:
      "Minted property titles as NFTs, enabled secure property verification via zk-SNARKs, and deployed the DApp on Rinkeby test network.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ZoKrates",
        color: "green-text-gradient",
      },
      {
        name: "Polygon",
        color: "pink-text-gradient",
      },
    ],
    image: realestate, // Replace with the actual image variable for Real Estate Marketplace
    to: 'https://github.com/aniket7r/Ethereum-Real-Sate-Market-Place',
    source_code_link: "https://github.com/aniket7r/Ethereum-Real-Sate-Market-Place",
  },
  {
    name: "Digital Transaction",
    description:
      "Created an online money transaction system with robust database features ensuring data integrity and seamless transfers.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: digitaltran, // Replace with the actual image variable for Digital Transaction
    to: 'https://github.com/aniket7r/Digital-Transaction',
    source_code_link: "https://github.com/aniket7r/Digital-Transaction",
  },
  {
    name: "Ethereum SupplyChain Dapp",
    description:
      "Implemented a smart contract-based supply chain tracker featuring user permission management and state transitions.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Web3.js",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: supply, // Replace with the actual image variable for Ethereum SupplyChain Dapp
    to: 'https://github.com/aniket7r/ethereum-supply-chain-n-data-audit-dapp',
    source_code_link: "https://github.com/aniket7r/ethereum-supply-chain-n-data-audit-dapp",
  },
  {
    name: "Automated Market Maker",
    description:
      "Developed using C++ for blockchain asset management.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Asset Management",
        color: "pink-text-gradient",
      },
    ],
    image: market, // Replace with the actual image variable for Automated Market Maker
    to: 'https://github.com/aniket7r/Automated-Market-Maker',
    source_code_link: "https://github.com/aniket7r/Automated-Market-Maker",
  },
  {
    name: "Decentralized Star Notary",
    description:
      "Created NFTs based on real astronomical data with evolving properties, cross-chain integration, and mystery elements.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Ethereum",
        color: "green-text-gradient",
      },
      {
        name: "zk-SNARKs",
        color: "pink-text-gradient",
      },
    ],
    image: star, // Replace with the actual image variable for Decentralized Star Notary
    to: 'https://github.com/aniket7r/Star_Notary',
    source_code_link: "https://github.com/aniket7r/Star_Notary",
  },
  {
    name: "Data Analytics",
    description:
      "Implemented product comparison using machine learning techniques.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: analytics,
    to: 'https://github.com/aniket7r/Product-Comparison',
    source_code_link: "https://github.com/aniket7r/Product-Comparison",
  },
  {
    name: "Moonlight",
    description:
      "Designed a platform for university students to connect anonymously for stress and suicide prevention, utilizing JavaScript, React, and WebSocket for secure communication.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "WebSocket",
        color: "pink-text-gradient",
      },
    ],
    image: moonlight, // Replace with the actual image variable for Moonlight
    to: 'https://github.com/aniket7r/moonlight',
    source_code_link: "https://github.com/aniket7r/moonlight",
  },
  {
    name: "Games & Bots",
    description:
      "Developed interactive games (Breakout, Tic Tac Toe, Snake) and created a Twitter bot for automation using API integration.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "Automation",
        color: "pink-text-gradient",
      },
    ],
    image: games,
    to: 'https://github.com/aniket7r/Python-Projects',
    source_code_link: "https://github.com/aniket7r/Python-Projects",
  },
  {
    name: "ISS Tracker",
    description:
      "Built a Django-based website for tracking the ISS's real-time location and sunrise/sunset times, with automated email notifications for users.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image: iss, // Replace with the actual image variable for ISS Tracker
    to: '',
    source_code_link: "",
  },
  
  // {
  //   name: "App store",
  //   description:
  //     "App store for your favorite products.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "NEST",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Bootstrap",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: appstore,
  //   to: 'https://apps.apple.com/us/app/favorite-photos-widget/id1589994536',
  //   source_code_link: "https://github.com/superdev0816",
  // },
];

export { services, technologies, experiences, testimonials, projects };
