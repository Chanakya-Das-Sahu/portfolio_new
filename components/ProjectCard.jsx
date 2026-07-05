import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col"
    >
      <div className="text-4xl text-blue-600 mb-4 flex justify-center">
        {project.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4 text-center text-sm flex-grow">
        {project.description}
      </p>
      <div className="flex justify-between items-center mt-auto">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          <FaGithub className="mr-1" /> Code
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-600 hover:text-green-800 text-sm font-medium"
        >
          <FiExternalLink className="mr-1" /> Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;