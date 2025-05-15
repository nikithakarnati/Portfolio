import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Travel App (Mobile and Web)',
    description: `Trav2To is a comprehensive and user-friendly travel application, a testament to my skills as a frontend developer. Designed for both web and mobile access, this project focuses on providing a streamlined and intuitive experience for all travel needs.

    The core of Trav2To is an interactive map interface, allowing users to explore destinations and discover points of interest effortlessly. A robust search functionality complements this, enabling quick access to specific locations, accommodations, dining, and essential travel services.

    Trav2To stands out with its integrated intelligent features:

    AI-Powered Assistance: An AI button offers personalized travel recommendations, answers queries, and enhances trip planning.
    Seamless Language Translation: Users can instantly switch the application's language for a globally accessible experience.
    Real-Time Currency Exchange: A built-in tool simplifies financial planning with instant currency conversions.
    Beyond these, Trav2To offers key travel functionalities: a travel planner, medical and highway assistance, and access to hotel, car booking, and restaurant information.

    As the sole frontend developer, I was responsible for the complete UI/UX design and implementation, including:

    Developing a responsive and intuitive interface for web and mobile.
    Integrating mapping libraries and location services.
    Implementing AI, language translation, and currency exchange features using relevant APIs.
    Building user interfaces for core travel services.

    Key Technologies:
     Reactjs, JavaScript, Tailwind CSS,HTML and APIs used for mapping, AI, Language translation, and currency conversion.
    
     Trav2To showcases my ability to create a feature-rich and user-friendly travel application independently, demonstrating my skills in frontend development, API integration, and UI/UX design for both web and mobile platforms.
        `,
    techStack: ['React.js', 'React Native', 'HTML', 'CSS', 'JavaScript', 'Authentication'],
    liveLink: 'https://travel-nikithakarnati-nikithas-projects-693e44d1.vercel.app/',
    githubLink: 'https://github.com/nikithakarnati/Travel', 
    image: '/Travel.PNG', 
  },
  {
    title: 'Quizzie',
    description: `Quizzie is a dynamic and engaging frontend application I independently developed to provide a user-friendly platform for creating and potentially interacting with quizzes. This project showcases my ability to build a functional and visually appealing dashboard interface.
    
    The central feature of Quizzie is its intuitive dashboard, which provides users with a clear overview of their quiz activity. Key metrics displayed include:

    Quiz Creation Count: Indicating the total number of quizzes the user has created .
    Question Creation Count: Displaying the total number of questions authored by the user across all quizzes.
    Total Impressions: Tracking the total number of times the user's quizzes have been viewed or engaged with .

    The dashboard also features a section showcasing 'Trending Quizzes.' This area dynamically displays a list of quizzes, each with a visual indicator  suggesting potential interaction or further options. The creation date for each quiz is also displayed.
    
    As the sole frontend developer for Quizzie, I was responsible for the entire user interface and user experience, encompassing:

    Designing and implementing a clean and organized dashboard layout.
    Developing the visual presentation of key metrics and quiz listings.
    Creating the navigation sidebar, providing access to 'Dashboard,' 'Analytics,' 'Create Quiz,' and 'Logout' functionalities.
    Ensuring a responsive design that adapts to different screen sizes.

    Key Technologies Used:

    HTML, CSS, JavaScript, Reactjs.

    Quizzie demonstrates my proficiency in frontend development, including UI/UX design, data visualization (presenting metrics), and the ability to structure and build a functional dashboard interface as a single developer.
    `,
    techStack: ['HTML', 'CSS', 'React.js'],
    githubLink: 'https://github.com/nikithakarnati/August-Project',
    image: '/Quiz.PNG', 
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
            variants={fadeInCard(index * 0.2)} 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div
              className="h-70 bg-transparent rounded-xl mb-4 flex items-center justify-center text-gray-400 cursor-pointer"
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
              onClick={(e) => e.stopPropagation()}
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