import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle scroll to update active section and parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      setScrollY(window.scrollY);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    {
      name: "User Experience Design",
      level: 95,
      icon: "🎨",
      category: "Design",
    },
    {
      name: "User Interface Design",
      level: 98,
      icon: "🎭",
      category: "Design",
    },
    { name: "Prototyping", level: 92, icon: "�", category: "Design" },
    { name: "User Research", level: 88, icon: "🔍", category: "Research" },
    { name: "Figma", level: 95, icon: "🎪", category: "Tools" },
    { name: "Adobe Creative Suite", level: 90, icon: "🎨", category: "Tools" },
  ];

  const projects = [
    {
      title: "Expedia Save and Compare",
      description:
        "Designed flight comparison and saving workflows, improving discoverability and helping users make faster, informed booking decisions.",
      image:
        "expedia_header_img.png",
      technologies: [
        "User Research",
        "Figma",
        "Prototyping",
        "Usability Testing",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: false,
      gradient: "from-blue-500 to-teal-500",
      type: "Web Platform",
      duration: "",
      role: "UX Designer",
    },
    {
      title: "Tiktok Shop Rewards",
      description:
        "End-to-end design of a social commerce rewards program to boost customer loyalty and streamline the shopping experience.",
      image:
        "tiktok_header_img.png",
      technologies: [
        "User Journey Mapping",
        "A/B Testing",
        "Figma",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: false,
      gradient: "from-green-500 to-emerald-500",
      type: "Mobile App",
      duration: "",
      role: "UX/UI Designer",
    },
    {
      title: "Hershey's - Personalized E-Commerce Flow",
      description:
        "Comprehensive learning management system design focusing on student engagement and teacher efficiency.",
      image:
        "hershey_header_img.png",
      technologies: [
        "Information Architecture",
        "Wireframing",
        "Visual Design",
        "User Testing",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      type: "Web Platform",
      duration: "",
      role: "UX/UI Design Intern",
    },
    {
      title: "Cysana - Malware Dectection Dashboard",
      description:
        "Mobile-first design for a personal finance app with focus on accessibility and financial literacy.",
      image:
        "cysana_header_img.png",
      technologies: [
        "Accessibility",
        "Design Systems",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: true,
      gradient: "from-indigo-500 to-purple-500",
      type: "Web Platform",
      duration: "",
      role: "Product Designer Intern",
    },
    {
      title: "NYU Mobile Print",
      description:
        "Simplifying printing workflows and improve usability for students.",
      image:
        "nyu_header_img.png",
      technologies: [
        "🏆 Hackathon Win",
        "User Journey Mapping",
        "Usuability Testing",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: false,
      gradient: "from-blue-600 to-cyan-500",
      type: "Moblie App",
      duration: "",
      role: "Lead UX Designer",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gray-50 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300 ${
          scrollY > 50 ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cindy C.
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "projects", "about", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 relative ${
                      activeSection === section
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {section}
                    {activeSection === section && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300"></span>
                    )}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fadeIn">
              {["home", "projects", "about", "contact"].map(
                (section, index) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-3 px-4 capitalize text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg mx-2 my-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-45 pb-45 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
      >
        {/* Floating elements */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative mb-8 inline-block"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            </div>

            <div className="space-y-6 animate-slideUp">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Cindy
                </span>
              </h1>

              <div className="text-xl md:text-3xl text-gray-600 mb-8 font-light">
                <span
                  className="inline-block animate-typewriter"
                  style={{ animationDelay: "0.3s" }}
                >
                  Product Designer 
                </span>

             
              </div>

              <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              Human centered, approachable, and impactful technology, one interface at a time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-semibold"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-semibold bg-white/50 backdrop-blur-sm"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full -translate-x-1/2 opacity-30"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-100 to-blue-100 rounded-full translate-x-1/2 opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative">
                Recent Works
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              A selection of projects that showcase my design thinking and
              development skills
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              🌟 Featured Case Studies
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden rounded-t-3xl">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                      ></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                          ⭐ Featured
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                          {project.type}
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="text-sm text-gray-500">
                          {project.duration}
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {project.role}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 text-sm rounded-full border border-blue-200 hover:shadow-md transition-shadow"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project.behance}
                          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-medium transition-colors group/link"
                        >
                          <svg
                            className="w-5 h-5 group-hover/link:scale-110 transition-transform"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.498 1.22.906.26 1.576.72 2.022 1.37.448.66.672 1.45.672 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.62.16-1.25.24-1.85.24H0V4.51h6.938v-.007zM3.495 8.88h2.77c.89 0 1.55-.18 2.003-.54.448-.36.673-.87.673-1.54 0-.55-.18-.95-.54-1.26-.36-.31-.84-.47-1.44-.47H3.495V8.88zm0 9.64h3.25c.58 0 1.09-.08 1.53-.25s.8-.38 1.06-.66c.26-.28.45-.6.58-.95.13-.35.19-.72.19-1.1 0-.68-.23-1.18-.69-1.53-.46-.35-1.12-.53-1.98-.53H3.495v5.02zm14.98-8.435c.3.13.57.32.81.58.24.26.43.58.56.95.13.37.2.79.2 1.26h-4.87c0-.57.15-1.03.44-1.38.29-.35.68-.53 1.17-.53.51 0 .93.18 1.26.53.33.35.49.82.49 1.42h1.4c0-.48-.1-.91-.29-1.29s-.45-.69-.78-.93c-.33-.24-.71-.42-1.14-.54s-.88-.18-1.35-.18c-.65 0-1.23.11-1.74.34-.51.23-.94.55-1.3.96-.36.41-.63.9-.82 1.46-.19.56-.28 1.17-.28 1.83 0 .65.1 1.26.29 1.82.19.56.47 1.05.84 1.46.37.41.82.73 1.34.96.52.23 1.1.34 1.75.34.75 0 1.4-.17 1.94-.52.54-.35.95-.85 1.23-1.51h-1.44c-.09.26-.26.46-.51.61-.25.15-.54.22-.87.22-.57 0-1.02-.19-1.35-.56-.33-.37-.5-.88-.5-1.53h4.87c0-.48-.07-.91-.2-1.29s-.32-.69-.57-.93c-.25-.24-.55-.42-.9-.54s-.73-.18-1.14-.18c-.41 0-.8.06-1.17.18zm-2.95-8.08h5.31v.71h-5.31v-.71z" />
                          </svg>
                          <span>Case Study</span>
                        </a>
                        <a
                          href={project.live}
                          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-medium transition-colors group/link"
                        >
                          <svg
                            className="w-5 h-5 group-hover/link:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          <span>Live Project</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              💼 Additional Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      ></div>
                      <div className="absolute top-3 left-3">
                        <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          {project.type}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {project.duration}
                        </span>
                      </div>

                      <div className="mb-3">
                        <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                          {project.role}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex space-x-4 text-sm">
                        <a
                          href={project.behance}
                          className="text-gray-500 hover:text-blue-600 font-medium transition-colors"
                        >
                          View Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-semibold">
              <span className="flex items-center space-x-2">
                <span>View All Projects</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative">
                About Me
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm a passionate UI/UX designer with over 4 years of experience
              creating human-centered digital experiences. I believe great
              design is invisible – it just works, feels natural, and solves
              real problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop"
                alt="Working"
                className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="group p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🚀</span>
                    My Journey
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Started as a graphic designer, I discovered my passion for
                    user experience design through watching how people interact
                    with digital products. Now I focus on creating inclusive,
                    accessible designs that make technology more human.
                  </p>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="text-2xl mr-3">💡</span>
                    What I Do
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-gray-600">User Research</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Interface Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <span className="text-gray-600">Design Systems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                      <span className="text-gray-600">Usability Testing</span>
                    </div>
                  </div>
                </div>

                     {/* Additional tools showcase */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                Design Tools & Software
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Figma",
                  "Illustrator",
                  "InDesign",
                  "Photoshop",
                  "Miro",
                  "HTML/CSS",
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-gray-100"
                  >
                    <span className="text-gray-700 font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
              </div>

           
            </div>
          </div>
          {/* Design Process */}
          <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                My Design Process
              </h3>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  {
                    step: "01",
                    title: "Research",
                    icon: "🔍",
                    desc: "User interviews, competitive analysis",
                  },
                  {
                    step: "02",
                    title: "Define",
                    icon: "🎯",
                    desc: "Problem definition, user personas",
                  },
                  {
                    step: "03",
                    title: "Ideate",
                    icon: "💡",
                    desc: "Brainstorming, concept development",
                  },
                  {
                    step: "04",
                    title: "Prototype",
                    icon: "🔧",
                    desc: "Wireframes, interactive prototypes",
                  },
                  {
                    step: "05",
                    title: "Test",
                    icon: "🧪",
                    desc: "Usability testing, iteration",
                  },
                ].map((process, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{process.icon}</div>
                    <div className="text-sm font-bold text-blue-600 mb-2">
                      {process.step}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {process.title}
                    </h4>
                    <p className="text-sm text-gray-600">{process.desc}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>

        
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative">
                Let's Work Together
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Have a project in mind? I'd love to hear about it and discuss how
              we can bring your vision to life.
            </p>

            {/* Contact methods */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Email Me
                </h3>
                <p className="text-gray-600 text-sm">
                  cindychenc9@gmail.com
                </p>
              </div>

              <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Call Me
                </h3>
                <p className="text-gray-600 text-sm">+1 (718) 508-2218</p>
              </div>

              <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Let's Connect!
                </h3>
                <p className="text-gray-600 text-sm">Visit LinkedIn Page</p>
              </div>
            </div>
          </div>

            {/* Response time note */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>I typically respond within 24 hours</span>
              </p>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Bottom footer */}
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                <p>
                  &copy; {new Date().getFullYear()} Cindy Chen. Made with ☕
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => scrollToSection("home")}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 z-40"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </footer>
    </div>
  );
}

export default App;
