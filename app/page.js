"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaMedal, FaCertificate, FaCode, FaJava, FaReact, FaNodeJs, FaGitAlt, FaHome, FaFileAudio, FaLeaf, FaBookOpen } from 'react-icons/fa';
import { SiMongodb, SiJavascript } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import {
  FaShoppingCart,
  FaStickyNote,
  FaQuestionCircle,
  FaComments,
  FaRobot,
  FaGlobe,
  FaCalendarAlt,
  FaUniversity,
  FaGraduationCap,
  FaTrophy,
  FaFileAlt
} from 'react-icons/fa';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentKhushIndex, setCurrentKhushIndex] = useState(0);

  useEffect(() => {
    const carousel = document.getElementById('khush-carousel');
    const dots = document.querySelectorAll('.khush-dot-indicator');

    if (!carousel) return;

    const updateActiveDot = () => {
      const scrollPos = carousel.scrollLeft;
      const itemWidth = carousel.clientWidth;
      const currentIndex = Math.round(scrollPos / itemWidth);

      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('opacity-100');
          dot.classList.remove('opacity-50');
        } else {
          dot.classList.add('opacity-50');
          dot.classList.remove('opacity-100');
        }
      });
    };

    // Initialize dots
    if (dots.length > 0) {
      dots[0].classList.add('opacity-100');
      dots[0].classList.remove('opacity-50');
      for (let i = 1; i < dots.length; i++) {
        dots[i].classList.add('opacity-50');
      }
    }

    carousel.addEventListener('scroll', updateActiveDot);

    return () => {
      carousel.removeEventListener('scroll', updateActiveDot);
    };
  }, [khush.length]);

  useEffect(() => {
    const carousel = document.getElementById('image-carousel');
    const dots = document.querySelectorAll('.dot-indicator');

    if (!carousel) return;

    const updateActiveDot = () => {
      const scrollPos = carousel.scrollLeft;
      const itemWidth = carousel.clientWidth;
      const currentIndex = Math.round(scrollPos / itemWidth);

      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('opacity-100');
          dot.classList.remove('opacity-50');
        } else {
          dot.classList.add('opacity-50');
          dot.classList.remove('opacity-100');
        }
      });
    };

    // Initialize dots
    if (dots.length > 0) {
      dots[0].classList.add('opacity-100');
      dots[0].classList.remove('opacity-50');
      for (let i = 1; i < dots.length; i++) {
        dots[i].classList.add('opacity-50');
      }
    }

    carousel.addEventListener('scroll', updateActiveDot);

    return () => {
      carousel.removeEventListener('scroll', updateActiveDot);
    };
  }, [kvImages.length]);

  useEffect(() => {
    const handleScroll = () => {

      const sections = ['home', 'experience', 'skills', 'achievements', 'gallery', 'projects', 'certificates'];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (sectionId) => {
    // First close the menu
    setIsMenuOpen(false);

    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(sectionId);
      }
    }, 100); // 100ms delay
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Navigation */}
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo Section - Made more compact */}
            <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
              <motion.img
                src="https://c7.alamy.com/comp/J8685J/ornate-letter-c-J8685J.jpg"
                alt="Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              />
              <span className="font-bold text-gray-800 text-sm sm:text-base truncate max-w-[120px] sm:max-w-[200px]">
                Chanakya Das Sahu
              </span>
            </div>

            {/* Desktop Menu - Now with responsive container */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4 overflow-x-auto scrollbar-hide flex-1 justify-end ml-4">
              {['home', 'experience', 'skills', 'achievements', 'gallery', 'projects', 'certificates'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium whitespace-nowrap transition-colors ${activeSection === item
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex-shrink-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white shadow-lg border-t border-gray-100"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
                {['home', 'experience', 'skills', 'achievements', 'gallery', 'projects', 'certificates'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left capitalize px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeSection === item
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Main Content */}
      <main className="pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
          {/* Removed max-w-7xl to allow full width, used w-full and px-6 for fluid breathing room */}
          <div className="w-full px-6 lg:px-16 grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 mb-4 leading-tight">
                Chanakya Das Sahu
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 mb-6">
                MERN Stack Developer
              </h2>
              <p className="text-lg text-gray-600 mb-8 w-full">
                Skilled in effective communication, with proven strengths in group discussions,
                idea pitching, and delivering impactful presentations.
              </p>

              {/* Responsive Icon Container */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                {[
                  { href: "tel:+919399553896", icon: "fas fa-phone-alt" },
                  { href: "mailto:ccccsahu@gmail.com", icon: "fas fa-envelope" },
                  { href: "https://wa.me/919399553896", icon: "fab fa-whatsapp" },
                  { href: "https://www.linkedin.com/in/chanakya-das-sahu-a56470252", icon: "fab fa-linkedin" },
                  { href: "https://github.com/chanakya-das-sahu", icon: "fab fa-github" }
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-3xl text-blue-600 hover:text-indigo-700 transition-colors"
                  >
                    <i className={link.icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center w-full"
            >
              <div className="relative w-full aspect-square sm:w-4/5 md:w-full mx-2">
                {/* <div className="absolute -inset-4 bg-blue-200 rounded-3xl transform rotate-6 opacity-30"></div> */}
                <img
                  src="/images/photo.jpg"
                  alt="Chanakya Das Sahu"
                  className="relative rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </section>

        <section id="experience" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
                  <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-8`}>
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full ring-4 ring-white mx-auto md:mx-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                      <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                        <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                        <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
                        <div className="mb-4">
                          {/* <h4 className="font-semibold text-gray-700 mb-2">Projects:</h4> */}
                          <ul className="list-disc list-inside text-gray-600">
                            {exp.projects.map((project, i) => (
                              <li key={i}>{project}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Responsibilities:</h4>
                          <ul className="list-disc list-inside text-gray-600">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        <section id="skills" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <FaCode className="mr-2 text-blue-500" /> Skills
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="text-4xl mb-3 text-blue-600">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <FaMedal className="mr-2 text-yellow-500" /> Achievements
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
                >
                  <div className="text-yellow-500 mb-4">
                    <FaMedal size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Gallery</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>


            <div className="grid md:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Khush Gallery - Second Item */}
              <motion.div
                key="khush"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="h-64 relative overflow-hidden">
                  <div
                    className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    id="khush-carousel"
                  >
                    {khush.map((image, index) => (
                      <div key={index} className="flex-shrink-0 w-full h-full snap-start">
                        <img
                          src={`/khush/${image}`}
                          alt={`Khush Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-1.5 rounded-full hover:bg-opacity-80 transition-opacity"
                    onClick={() => {
                      const container = document.getElementById('khush-carousel');
                      const scrollAmount = container.clientWidth;
                      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-1.5 rounded-full hover:bg-opacity-80 transition-opacity"
                    onClick={() => {
                      const container = document.getElementById('khush-carousel');
                      const scrollAmount = container.clientWidth;
                      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Indicator Dots */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                    {khush.map((_, index) => (
                      <button
                        key={index}
                        className="w-2 h-2 rounded-full bg-white transition-all duration-300 khush-dot-indicator"
                        onClick={() => {
                          const container = document.getElementById('khush-carousel');
                          const scrollAmount = container.clientWidth * index;
                          container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{khushDetails.title}</h3>
                  <p className="text-gray-600 text-sm">{khushDetails.description}</p>
                </div>
              </motion.div>

              {/* KV Images Gallery - Third Item */}
              <motion.div
                key={2}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2 * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="h-64 relative overflow-hidden">
                  <div
                    className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    id="image-carousel"
                  >
                    {kvImages.map((image, index) => (
                      <div key={index} className="flex-shrink-0 w-full h-full snap-start">
                        <img
                          src={`/images/${image}`}
                          alt={`Gallery Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-1.5 rounded-full hover:bg-opacity-80 transition-opacity"
                    onClick={() => {
                      const container = document.getElementById('image-carousel');
                      const scrollAmount = container.clientWidth;
                      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-1.5 rounded-full hover:bg-opacity-80 transition-opacity"
                    onClick={() => {
                      const container = document.getElementById('image-carousel');
                      const scrollAmount = container.clientWidth;
                      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Indicator Dots */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                    {kvImages.map((_, index) => (
                      <button
                        key={index}
                        className="w-2 h-2 rounded-full bg-white transition-all duration-300 dot-indicator"
                        onClick={() => {
                          const container = document.getElementById('image-carousel');
                          const scrollAmount = container.clientWidth * index;
                          container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{kvDetails.title}</h3>
                  <p className="text-gray-600 text-sm">{kvDetails.description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Video Portfolio Section */}
        <section id="videos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Video Portfolio
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Watch Demonstration of Presentation and Communication
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-t-xl">
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dn4trwbmw&public_id=fqbaavdcglvragehaapv&profile=cld-default&autoplay=false&muted=false"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Project Demonstration 1"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Project Presentation</h3>
                  <p className="text-gray-600">Presentation of The Project to Honorable Cabinate Minister</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-t-xl">
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dn4trwbmw&public_id=q4zg5jsjzzdr9ajxznnr&profile=cld-default&autoplay=false&muted=false"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Project Demonstration 2"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Conference Presentation</h3>
                  <p className="text-gray-600">Presenting SDLC ( Software Development Life Cycle ) in Conference</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section id="projects" className="bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col"
                    >
                      <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{project.title}</h3>
                      <p className="text-gray-600 mb-4 text-center text-sm flex-grow">{project.description}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <FaGithub className="mr-1" /> Code
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-green-600 hover:text-green-800 text-sm"
                        >
                          <FiExternalLink className="mr-1" /> Live Demo
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>



        {/* Certificates Section */}
        <section id="certificates" className=" my-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


            {/* Certificates Section */}
            <section id="certificates" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                    <FaCertificate className="mr-2 text-green-500" /> Certificates
                  </h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center"
                    >
                      <div className="text-4xl text-green-600 mb-4">
                        {cert.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{cert.title}</h3>
                      <p className="text-gray-600 mb-2 text-center text-sm">{cert.issuer}</p>
                      <span className="text-sm text-gray-500 mb-4">{cert.date}</span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                      >
                        View Certificate <FiExternalLink className="ml-1" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="text-gray-400">© 2024 Chanakya Das Sahu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Data
const achievements = [
  {
    title: "Selected in TGC Hackathon",
    description: "Organized by Ministry of Education & Ministry of Food Corporation & Current Affairs (Govt of India)"
  },
  {
    title: "2nd Rank in Poster Making",
    description: "Certificate by CEO of CREDA (Chhattisgarh Renewable Energy Development Agency)"
  },
  {
    title: "2nd Rank in Reel Making",
    description: "Annual Function, MATS University 2024"
  }
];

const galleryItems = [
  {
    title: "Meeting with Dignitaries",
    description: "Mr. Pagaria Sir (Chancellor of MATS University), Mr. OP Choudhari Sir (Finance Minister CG) and Mr. Dharmjeet Singh Thakur (MLA CG)",
    image: '/images/OP.jpeg'
  },
  {
    title: "With Mr. Rana Sir",
    description: "IAS Officer & CEO of CREDA (Chhattisgarh Renewable Energy Development Agency)",
    image: "/images/Poster_Making.jpg"
  }
];

const kvImages = ['One.jpg', 'Two.jpg', 'Three.jpg', 'Four.jpg', 'Five.jpg', 'Six.jpg', 'Seven.jpg', 'Eight.jpg', 'Nine.jpg', 'Ten.jpg', 'Eleven.jpg'];

const khush = ['one.png', 'two.png', 'three.png', 'four.png']

const khushDetails = {
  title: "Cabinet Minister , C.G.",
  description: "Honorable Guru Khushwant Saheb, Cabinet Minister for Skill Development, Technical Education & Employment, and Scheduled Caste Development, Government of Chhattisgarh"
}

const kvDetails = {
  title: "Training Session",
  description: "Trainer of National Institute of Ele. & IT (Bhubaneswar, Odisha, India) KVS Kurud & KVS Dhamtari (Chhattisgarh, India)",
  image: "https://images.unsplash.com/photo-1524179091875-b4949860b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
}

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Java", icon: <FaJava /> }
];

const projects = [
  {
    title: "Room Rental System (App-Dost)",
    icon: <FaHome />,
    description: "A comprehensive room rental platform featuring Supabase SQL database integration and secure authentication.",
    githubLink: "https://github.com/Chanakya-Das-Sahu/app-dost",
    liveLink: "https://chanakya-app-dost.vercel.app/"
  },
  {
    title: "YouTube Transcriptor",
    icon: <FaFileAudio />,
    description: "Tool to extract and generate text transcripts from YouTube videos for easy content consumption.",
    githubLink: "https://github.com/Chanakya-Das-Sahu/YoutubeTranscriptor",
    liveLink: "https://youtube-transcriptor.netlify.app/transcript"
  },
  {
    title: "AI Based Education Chatbot ( vocal )",
    icon: <FaBookOpen />,
    description: "An AI-driven educational platform featuring a specialized chatbot and vocal support for an interactive learning experience.",
    githubLink: "https://github.com/Chanakya-Das-Sahu/Sage",
    liveLink: "https://citrine-sage.netlify.app/"
  },
  {
    title: "MCQ Generator",
    icon: <FaQuestionCircle />,
    description: "AI-powered multiple choice question generator from text paragraphs",
    githubLink: "https://github.com/Chanakya-Das-Sahu/Paragraph-MCQ-Generator---AI--",
    liveLink: "https://chanakya-mcq-generator.netlify.app"
  },
  {
    title: "Customer Care Chatbot",
    icon: <FaComments />,
    description: "AI chatbot for customer support with natural language processing",
    githubLink: "https://github.com/Chanakya-Das-Sahu/MATS_GPT",
    liveLink: "https://matsgpt.netlify.app"
  },
  {
    title: "General Chatbot ( Gemini API )",
    icon: <FaRobot />,
    description: "Conversational AI assistant for general queries and information",
    githubLink: "",
    liveLink: "https://chanakya-chatbot.netlify.app"
  },
  {
    title: "Company Website",
    icon: <FaGlobe />,
    description: "Professional website for Technocratic Solutions with services and portfolio",
    githubLink: "https://github.com/Chanakya-Das-Sahu/TechnoCreaticsSolution",
    liveLink: "https://technocratic-solutions.netlify.app"
  },
  {
    title: "TechFest Website",
    icon: <FaCalendarAlt />,
    description: "Event website for MSEIT TechFest with registration and schedule",
    githubLink: "https://github.com/Chanakya-Das-Sahu/TechFest-WebSite-",
    liveLink: "https://mseit-techfest-2025.netlify.app"
  },
  {
    title: "International Conference Website",
    icon: <FaUniversity />,
    description: "Website for International Conference on Sustainable Development Practices",
    githubLink: "https://github.com/chanakya-das-sahu/ICSDP",
    liveLink: "https://chanakya-das-sahu.github.io/ICSDP"
  }
];

// Update your certificates data
const certificates = [
  {
    title: "Academic Certificates",
    icon: <FaGraduationCap />,
    issuer: "MATS University, CGBSE, Springboard & Infosys",
    date: "2024",
    link: "https://drive.google.com/file/d/1WCN7Vd6EjzYh6-MUICUbBkTNnuJw7Nnp/view"
  },
  {
    title: "Cultural Achievements",
    icon: <FaTrophy />,
    issuer: "CREDA, IGKV, MATS University",
    date: "2023",
    link: "https://drive.google.com/file/d/1x_46Y7T8VEppzrnY31h4cy9Fi2LkedE8/view"
  },
  {
    title: "Professional Resume",
    icon: <FaFileAlt />,
    issuer: "",
    date: "2024",
    link: "https://drive.google.com/file/d/1bIl52tP0aV7HGeSvkMUey9mm3Bdv35zZ/view"
  }
];

const experiences = [
  {
    position: "Nextjs Full Stack Developer",
    company: "Zenix Automotive Pvt.Ltd. ( Noida , India )",
    duration: "Jan 2026 to Present",
    projects: ["ChargeFlow - EV Powerstations Management and Supplychain"],
    responsibilities: [
      "Powerstations rendering on Map with various filters",
      "Profile Creation , Frontend Components Design",
      , "Responsive Design"
    ]
  },
  {
    position: "React Firebase Developer ",
    company: "Crakcode ( Delhi , India )",
    duration: "June 2025 to Dec 2025",
    projects: ["EdTech Platform ( Web App )"],
    responsibilities: [
      "Firebase Schemas",
      "Ticket Support System", "Resume Parser", "Bulk Email Sending",
      , "DB Schema design",
      "Responsive Web Designs"
    ]
  },
  {
    position: "Trainer",
    company: "National Institute of Ele. & IT (Bhubaneswar, Odisha, India)",
    duration: "February, 2025",
    projects: ["Artificial Intelligence & Machine Learning with Python"],
    responsibilities: [
      "Teaching",
      "Presentation",
      "Python Programming"
    ]
  }
];

export default Portfolio;