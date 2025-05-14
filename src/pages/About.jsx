import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className="text-gray-800 py-10 px-8 md:px-20"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #4A6BE1, #E14A65)',
      }}
    >
      {/* Heading */}
      <motion.h2
        variants={fadeIn('up')}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-purple-400 mb-10 text-center"
      >
        About Me
      </motion.h2>

      {/* Introduction */}
      <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-10 mb-14"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100 }}
          src="/pic.svg"
          alt="Developer illustration"
          className="w-full max-w-sm mx-auto rounded-xl shadow-xl"
        />

        <div className="text-lg space-y-4 leading-relaxed max-w-xl">
          <p>
            Hi, I’m <span className="text-purple-300 font-semibold">Nikitha Karnati</span>, a results-driven Frontend / Full Stack Developer with hands-on expertise in the MERN stack.
            I specialize in crafting high-performance, scalable, and visually engaging web applications. With a keen eye for design and a strong grasp of modern development practices,
            I’m deeply committed to building seamless user experiences that drive business impact.
          </p>
          <p>
            I’m currently seeking opportunities where I can grow as a developer, contribute to impactful projects,
            and help deliver world-class digital solutions.
          </p>
        </div>
      </motion.div>

      {/* Education and Experience */}
      <div className="flex flex-col md:flex-row gap-8 mb-14">
        {/* Education */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-2xl font-semibold text-purple-300 mb-4">🎓 Education</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <ul className="space-y-3 text-gray-300 ml-10">
              <li>
                <p className="font-bold text-white">Graduation (B.Tech - 2018–2022)</p>
                <p>Institute of Aeronautical Engineering College <br /> Stream: Electrical and Electronics Engineering</p>
                <p>GPA: 7.02/10</p>
              </li>
              <li>
                <p className="font-bold text-white">Intermediate (2016–2018)</p>
                <p>Sri Gayatri Junior College</p>
                <p>Marks: 908/1000</p>
              </li>
              <li>
                <p className="font-bold text-white">Matriculation (SSC Board) (2016)</p>
                <p>Keshava Reddy High School</p>
                <p>GPA: 9.2/10</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-2xl font-semibold text-purple-300 mb-4">💼 Experience</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <ul className="space-y-6 text-gray-300 ml-10">
              <li>
                <p className="font-bold text-white">Mu-Sigma Business Solutions – Bangalore (July 2022 – April 2023)</p>
                <p className="font-bold">Trainee Decision Scientist</p>
                <ul className="list-disc list-inside">
                  <li>Delivered 5+ data visualization presentations using Power BI.</li>
                  <li>Applied SQL and Python for data cleaning, reducing errors by 30%.</li>
                  <li>Built dashboards using Power BI and Excel.</li>
                  <li>Collaborated across teams to validate data, improving reporting speed and accuracy.</li>
                  <li>Participated in Agile delivery cycles for business-focused analytics.</li>
                </ul>
              </li>
              <li>
                <p className="font-bold text-white">Busitron IT Solutions – Hyderabad (Feb 2025 – April 2025)</p>
                <p className="font-bold">Full Stack Developer - Intern</p>
                <ul className="list-disc list-inside">
                  <li>Developed a task management app using MERN.</li>
                  <li>Implemented secure authentication and role-based access.</li>
                  <li>Created a real-time dashboard with charts and filters.</li>
                  <li>Collaborated in Agile sprints and participated in code reviews.</li>
                </ul>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Courses and Certifications */}
      <div className="flex flex-col md:flex-row gap-8 mb-14">
        {/* Courses */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-2xl font-semibold text-purple-300 mb-4">📚 Courses</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <ul className="space-y-3 text-gray-300 ml-10">
              <li>
                <p className="font-bold text-white">Cuvette Tech</p>
                <p>Full Stack Web Development – 9 months</p>
                <p>Covered MERN Stack, REST APIs, GitHub, Deployment</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Certification */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-2xl font-semibold text-purple-300 mb-4">📜 Certifications</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <ul className="space-y-3 text-gray-300 ml-10">
              <li>
                <p className="font-bold text-white">Full Stack Developer</p>
                <p>By IIT Hyderabad</p>
              </li>
              <li>
                <p className="font-bold text-white">Building Dashboards</p>
                <p>By Skill Nation</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-purple-300 mb-4">🛠️ Tech Stack</h3>
        <div className="flex flex-wrap gap-4 text-sm text-white">
          {[
            'React.js', 'Node.js', 'Express.js', 'MongoDB',
            'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'REST APIs',
            'Git & GitHub', 'SQL', 'EXCEL', 'POWER BI',
          ].map((skill) => (
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              key={skill}
              className="px-4 py-2 bg-purple-800/50 rounded-lg border border-purple-400"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Resume Buttons */}
      <motion.div
        variants={fadeIn('up', 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mt-12 space-y-4"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          href="/Nikitha_Karnati_Resume.pdf"
          download
          className="inline-block px-6 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition"
        >
          
          Download Resume
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => setShowModal(true)}
          className="inline-block ml-4 px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl hover:bg-purple-800 transition"
        >
          Preview Resume
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white rounded-xl w-[90%] md:w-[70%] h-[80%] overflow-hidden shadow-lg"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-black text-2xl font-bold hover:text-red-500 z-10"
              >
                &times;
              </button>
              <iframe
                src="/Nikitha_Karnati_Resume.pdf"
                title="Resume"
                className="w-full h-full border-none"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;