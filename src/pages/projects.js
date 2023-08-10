import AnimatedText from "@/components/Animations/AnimatedText/AnimatedText";
import { GithubIcon } from "@/components/Icons/Icons";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../assets/projects/personal_portfolio.png";
import project2 from "../assets/projects/maru_weather.png";
import project3 from "../assets/projects/geek_hub.png";
import project4 from "../assets/projects/rick_and_morty_db.png";
import project5 from "../assets/projects/organo.png";
import project6 from "../assets/projects/loopstudios.png";
import project7 from "../assets/projects/burger_kenzie.png";
import project8 from "../assets/projects/manula.png";
import project9 from "../assets/projects/poke_market.png";
import project10 from "../assets/projects/node.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/Animations/TransitionEffect/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid
     border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[102%] rounded-[2.5rem] bg-dark rounded-br-3xl
       dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded=[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 coursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-3xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light
             dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article>
      <article
        className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
       bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
      >
        <div
          className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl
         dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
        />
        <Link
          href={link}
          target="_blank"
          className="w-full coursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto rounded-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline md:text-base"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Lucas Mitori | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Coding Tomorrow's Solutions!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Personal Portfolio v2"
                summary="Project for portfolio designed in React using my previous knownledge of hooks, components, animations and others. Created in early 2023 was my personal design and creation."
                link="https://personal-portfolio-lucasmitori.vercel.app/portfolio"
                img={project1}
                github="https://github.com/LucasMitori/personal_portfolio"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Maru Weather"
                summary="Project designed for portfolio, using mainly React with the use of Open Weather API for requests. This is a project created for search a specific city in the world to return in real time the local weather and other informations such as temperature, wind speed, humidity and others."
                link="https://maru-weather-lucasmitori.vercel.app/home"
                img={project2}
                github="https://github.com/LucasMitori/maru_weather"
                type="Fullstack Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Geek Hub"
                summary="Project for portfolio. Created in React this project was designed to internal project for Kenzie School, afterwards i managed to make it a lot better, it's a simple login/dashboard style used for create cards and show your tech skills and other informations."
                link="https://geek-hub.vercel.app/"
                img={project3}
                github="https://github.com/LucasMitori/geek_hub"
                type="Fullstack Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Rick and Morty Database"
                summary="Project for portfolio, designed using Rick and Morty API for requests and get all the characters of the series and show all the informations, such as characteristics, personal and episodes details."
                link="https://rick-and-morty-db-eight.vercel.app/"
                img={project4}
                github="https://github.com/LucasMitori/rick-and-morty-db"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Organo"
                summary="Project for portfolio"
                link="https://aluna-organo-react.vercel.app/"
                img={project5}
                github="https://github.com/LucasMitori/aluna-organo-react"
                type="Front-end Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Loopstudios"
                summary="Project for portfolio"
                link="https://loopstudios-portfolio.vercel.app/"
                img={project6}
                github="https://github.com/LucasMitori/loopstudios-portfolio"
                type="Front-end Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Manula"
                summary="Second big project made entirely in Javascript, HTML and CSS, it was for a kenzie course 2nd module formation, but it was one of my greatest project and achievement, since i only used the basics and POO method."
                link="https://manula-project.vercel.app/"
                img={project8}
                github="https://github.com/LucasMitori/manula-project"
                type="Front-end Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Kenzie Burger"
                summary="Project for portfolio"
                link="https://github.com/LucasMitori/hamburgueria-kenzie"
                img={project7}
                github="https://hamburgueria-kenzie-vert.vercel.app/"
                type="Front-end Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Poke Market"
                summary="Project for portfolio"
                link="/"
                img={project9}
                github="https://github.com/LucasMitori/pokemon-market"
                type="Front-end Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Lulu E-commerce"
                summary="Project designed and created in node js using TypeORM, created for e-commerce uses, well documented with Swagger, tested and running."
                link="https://github.com/LucasMitori/lulu_ecommerce_api"
                img={project10}
                github="https://github.com/LucasMitori"
                type="Back-end Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Coin Conversor"
                summary="Project for portfolio"
                link="https://github.com/LucasMitori/coin_conversor"
                img={project10}
                github="https://github.com/LucasMitori"
                type="Back-end Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pro Support"
                summary="Project for portfolio"
                link="https://github.com/LucasMitori/ProSupport"
                img={project10}
                github="https://github.com/LucasMitori"
                type="Fullstack Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
