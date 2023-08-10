import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import CircleIcon from "../CircleIcon/CircleIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <CircleIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Education
        </h2>

        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type="Certificate in Fullstack Web Developer"
              time="05/2022 - 05/2023"
              place="Kenzie Academy Brazil"
              info="&nbsp;&nbsp;I completed Kenzie Academy Brazil's intensive Full Stack Web Developer program, a transformative journey that equipped me with a diverse skill set in front-end and back-end web development. Over the course of a year, I mastered technologies such as HTML, CSS, JavaScript, React, Node.js, and Express.js, building real-world projects that showcased my abilities. With a focus on job readiness and a supportive community, Kenzie Academy prepared me to confidently enter the tech industry as a skilled and adaptable full stack developer."
            />
            <Details
              type="Associates degree in Financial Management"
              time="06/2017 - 05/2019"
              place="FICS - Faculdades Integradas Campos Salles"
              info="&nbsp;&nbsp;I successfully earned an Associate's Degree in Financial Management from FICS - Faculdades Integradas Campos Salles, where I gained comprehensive knowledge and practical expertise in the realm of finance. Through this program, I developed a strong foundation in financial analysis, budgeting, investment strategies, and risk management. This two-year journey provided me with essential skills that enable me to navigate the complexities of the financial industry with confidence and precision, enhancing my ability to make informed decisions and contribute effectively to financial management teams."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
