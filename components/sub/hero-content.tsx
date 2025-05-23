"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-row items-center justify-center px-20 mt-40 w-full h-[800px] z-[20]"
    >
      {/* Left content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AI-Driven Full Stack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[800px] w-auto h-auto"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              scalable AI solutions
            </span>{" "}
            that deliver real-world impact.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[900px]"
        >
          Senior AI & Python engineer with expertise in machine learning, deep learning, and end-to-end AI systems. Specialized in building and deploying production-grade ML workflows, data pipelines, and backend services using Python, with a long history of Fullstack capabilities. Proficient in integrating AI models into scalable systems, automating intelligent processes, optimizing performance, and building robust, scalable websites and web applications using modern frameworks including React and Next.js, alongside Python web frameworks such as Django, Flask, and FastAPI.
        </motion.p>

        <motion.a
          href="#projects"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          View My Work
        </motion.a>
      </div>

      {/* Right image positioned to bottom right */}
      <motion.div
        variants={slideInFromRight(0.9)}
        className="absolute right-0 bottom-[-0px] z-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="developer illustration"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
