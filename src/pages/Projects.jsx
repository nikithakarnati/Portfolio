import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Travel App (Mobile and Web)',
    description: `Built a comprehensive travel planning platform for web and mobile that
    allows users to organize entire trips seamlessly. Integrated modules for itinerary planning, hotel bookings,
    car rentals, medical emergency info, and local language guide. Implemented secure login, editable day-wise schedules,
    real-time updates, and downloadable trip summaries (PDF format). Designed responsive and user-friendly interfaces using React.js (web) and React Native (mobile).`,
    techStack: ['React.js', 'React Native', 'HTML', 'CSS', 'JavaScript', 'Authentication'],
    liveLink: 'https://travel-nikithakarnati-nikithas-projects-693e44d1.vercel.app/',
    githubLink: 'https://github.com/nikithakarnati/Travel',
    image: '/Travel.PNG', // Path to your Travel App image in the public folder
  },
  {
    title: 'Quizzie',
    description: `Implemented UI designs with HTML, CSS, and JavaScript for responsiveness.
    Developed an interactive quiz platform with secure authentication, real-time analytics, and intuitive quiz management features.
    Built a responsive dashboard for tracking quizzes, user activity, and instant feedback on quiz attempts.`,
    techStack: ['HTML', 'CSS', 'React.js'],
    githubLink: 'https://github.com/nikithakarnati/August-Project',
    image: '/Quiz.PNG', // Add path to your Quizzie image here when you have it
  },
];

const fadeInCard = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
});

const Projects = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (imageSrc) => {
    setPreviewImage(imageSrc);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <section
      className="text-gray-800 py-10 px-8 md:px-20"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #4A6BE1, #E14A65)',
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-transparent rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            variants={fadeInCard(index * 0.2)} // Apply fade-in to each card
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div
              className="h-48 bg-transparent rounded-xl mb-4 flex items-center justify-center text-gray-400 cursor-pointer"
              onClick={() => openPreview(project.image)}
            >
              {project.image ? (
                <motion.img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="rounded-xl h-full w-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                />
              ) : (
                <span>Screenshot Coming Soon</span>
              )}
            </div>
            <h3 className="text-2xl font-semibold text-purple-400">{project.title}</h3>
            <p className="text-sm mt-3 mb-4 text-gray-300 whitespace-pre-wrap">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="bg-purple-800 text-white text-xs px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Live Demo
                </motion.a>
              )}
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center cursor-pointer"
            onClick={closePreview}
          >
            <motion.img
              src={previewImage}
              alt="Project Preview"
              className="max-w-screen-lg max-h-screen object-contain rounded-lg shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            />
            <motion.button
              onClick={closePreview}
              className="absolute top-4 right-4 text-white text-xl font-bold bg-gray-800 bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80"
            >
              &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;