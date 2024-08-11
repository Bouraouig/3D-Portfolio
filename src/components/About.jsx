import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className=" xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn(" ", "", 0.1, 1)}
        className="
      mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello, My name is Bouraoui Gnaba. I am 28 years old. As a Front-End
        Developer with one year of experience, I have honed my skills in
        creating responsive and visually appealing web interfaces. Proficient in
        HTML, CSS, and JavaScript, I have successfully contributed to various
        projects, collaborating closely with design and back-end teams to
        deliver seamless user experiences. My experience with frameworks like
        React and Angular has enabled me to build dynamic and efficient web
        applications. With a keen eye for detail and a passion for coding, I am
        committed to continuously learning and applying new technologies to
        enhance my development capabilities.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
