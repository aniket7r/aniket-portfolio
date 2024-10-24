import { motion } from "framer-motion";
import Tilt from "react-tilt"; // Ensure you have this package installed
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  to,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.3 }}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={() => window.open(to, "_blank")}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");