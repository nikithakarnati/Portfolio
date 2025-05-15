import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: { opacity: 0, y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0, x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };
};

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 w-full h-screen flex flex-col md:flex-row items-center justify-between text-gray-800 px-8 md:px-20"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #4A6BE1, #E14A65)',
      }}
    >
      
      <motion.div
        variants={fadeIn("right", 0.2)}
        className="space-y-4 md:mt-0"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, This is <span className="text-purple-400">Nikitha Karnati</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          I am an Invested{" "}
          <span className="text-purple-300">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>

        <div className="flex gap-4">
          <motion.a
            href="/Nikitha_Karnati_Resume.pdf"
            download
            className="flex items-center gap-2 border px-4 py-2 rounded-lg border-purple-400 hover:bg-purple-500 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <FaDownload />
            Download Resume
          </motion.a>
          <motion.a
            href="https://github.com/nikithakarnati"
            className="flex items-center gap-2 border px-4 py-2 rounded-lg border-purple-400 hover:bg-purple-500 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub />
            Visit Projects
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.4)}
        className="w-full md:w-1/2 md:mt-0 flex justify-center"
        style={{ maxHeight: 'calc(100vh - 60px)' }} 
      >
        <motion.img
          src="/image.png"
          alt="developer"
          className="object-contain max-h-full"
          style={{ maxWidth: '100%' }} 
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;