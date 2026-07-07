import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Add these imports

const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const ProjectCard = ({ project, index }) => {
  const videoId = getYouTubeId(project.youtube_url);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col">
      {/* Media area: video or icon */}
      <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={project.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl text-blue-600">
            {project.icon}
          </div>
        )}
      </div>

      {/* Card details */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-bold text-lg mb-2">{project.title}</h4>
        <p className="text-gray-600 text-sm flex-1">{project.description}</p>

        {/* Links with descriptive icons */}
        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors p-2 rounded-full hover:bg-gray-100"
            aria-label={`View ${project.title} source code on GitHub`}
            title="GitHub Repository"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-full hover:bg-blue-50"
              aria-label={`Open ${project.title} live demo`}
              title="Live Demo"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;