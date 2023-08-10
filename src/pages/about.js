import AnimatedText from "@/components/Animations/AnimatedText/AnimatedText";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePicture from "../assets/img/personal_photo.png";
import Image from "next/image";
import {
  inView,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import TransitionEffect from "@/components/Animations/TransitionEffect/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Lucas Mitori | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Turning Dreams Into Code."
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                - Hello! I&apos;m Lucas Mitori, a dedicated Fullstack Web
                Developer with a passion for turning ideas into innovative
                digital experiences. Graduating from Kenzie Academy Brazil,
                I&apos;ve honed my skills and expertise to create web solutions
                that make a difference.
              </p>
              <p className="my-4 font-medium">
                - My journey into the world of development started with a thirst
                for knowledge, which led me to embark on a journey at Kenzie
                Academy. There, I immersed myself in the intricacies of web
                development, learning the ins and outs of both front-end and
                back-end technologies. This comprehensive training has given me
                the tools to craft seamless, user-friendly applications that
                delight users.
              </p>
              <p className="font-medium">
                - During my time at a fintech company, I had the incredible
                opportunity to contribute to diverse projects that spanned the
                e-commerce landscape. From crafting captivating landing pages
                that capture attention, to architecting back-end solutions using
                Node.js, I embraced every challenge with enthusiasm. This
                experience has not only refined my technical skills but has also
                equipped me with a deep understanding of creating impactful
                solutions in a fast-paced environment.
              </p>
              <p className="font-medium">
                - What truly drives me is my passion for programming. The thrill
                of transforming abstract concepts into functional, elegant code
                is what keeps me motivated. The ever-evolving nature of
                technology presents endless opportunities for learning, growth,
                and innovation, and I&apos;m committed to staying at the
                forefront of this dynamic field.
              </p>
              <p className="font-medium">
                - As a Fullstack Web Developer, I bring a unique blend of
                creativity, technical acumen, and a solutions-driven mindset to
                every project I undertake. Whether it&apos;s collaborating with
                a team, tackling complex coding challenges, or brainstorming new
                ways to enhance user experiences, I&apos;m dedicated to
                delivering results that make a positive impact.
              </p>
              <p className="font-medium">
                - Feel free to reach out I&apos;m always excited to connect with
                fellow developers, entrepreneurs, and tech enthusiasts.
                Let&apos;s work together to create exceptional digital solutions
                that drive success and elevate user experiences.
              </p>

              <p className="font-medium text-center w-full">
                - Let&apos;s code the future together!
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
               dark:bg-light "
              />
              <Image
                src={profilePicture}
                alt="Lucas"
                className="w-full h-auto rounded-2xl bg-black"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
