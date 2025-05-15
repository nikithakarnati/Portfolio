import React from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: { opacity: 0, y: direction === 'up' ? 40 : -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
};

const Contact = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-gray-800 py-10 px-8 md:px-20"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #4A6BE1, #E14A65)',
      }}
    >
      <motion.h2
        variants={fadeIn('up')}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-purple-400 mb-10 text-center"
      >
        Get in Touch
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <Phone className="mx-auto text-black mb-2" size={32} />
          <p className="mb-2">+91 9640361086</p>
          <a
            href="tel:+919640361086"
            className="inline-block px-5 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-300 text-white"
          >
            Call Now
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <Mail className="mx-auto text-black mb-2" size={32} />
          <p className="mb-2">karnatinikitha10@gmail.com</p>
          <a
            href="mailto:karnatinikitha10@gmail.com"
            className="inline-block px-5 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-300 text-white"
          >
            Email Me
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <Linkedin className="mx-auto text-black mb-2" size={32} />
          <p className="mb-2">karnatinikitha</p>
          <a
            href="https://www.linkedin.com/in/karnatinikitha/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-300 text-white"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;