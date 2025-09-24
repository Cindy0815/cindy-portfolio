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
      title: "HealthFlow - Medical App Redesign",
      description:
        "Complete UX/UI redesign of a telemedicine platform, improving user satisfaction by 85% and reducing task completion time by 40%.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      technologies: [
        "User Research",
        "Figma",
        "Prototyping",
        "Usability Testing",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: true,
      gradient: "from-blue-500 to-teal-500",
      type: "Mobile App",
      duration: "3 months",
      role: "Lead UX/UI Designer",
    },
    {
      title: "EcoCommerce - Sustainable Shopping",
      description:
        "End-to-end design of an eco-friendly e-commerce platform with innovative sustainability tracking features.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      technologies: [
        "Design Systems",
        "User Journey Mapping",
        "A/B Testing",
        "Figma",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: true,
      gradient: "from-green-500 to-emerald-500",
      type: "Web Platform",
      duration: "4 months",
      role: "Senior UX Designer",
    },
    {
      title: "LearningPath - EdTech Dashboard",
      description:
        "Comprehensive learning management system design focusing on student engagement and teacher efficiency.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      technologies: [
        "Information Architecture",
        "Wireframing",
        "Visual Design",
        "User Testing",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: false,
      gradient: "from-purple-500 to-pink-500",
      type: "Web App",
      duration: "6 months",
      role: "UX Designer",
    },
    {
      title: "FinanceTracker - Personal Banking",
      description:
        "Mobile-first design for a personal finance app with focus on accessibility and financial literacy.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      technologies: [
        "Mobile Design",
        "Accessibility",
        "Micro-interactions",
        "Design Systems",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: false,
      gradient: "from-indigo-500 to-purple-500",
      type: "Mobile App",
      duration: "2 months",
      role: "UI Designer",
    },
    {
      title: "WorkSpace - Collaboration Tool",
      description:
        "Enterprise collaboration platform design with focus on remote team productivity and seamless communication.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
      technologies: [
        "Enterprise UX",
        "Collaboration Design",
        "Design Tokens",
        "Prototyping",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: false,
      gradient: "from-blue-600 to-cyan-500",
      type: "Web Platform",
      duration: "5 months",
      role: "Lead UX Designer",
    },
    {
      title: "MindfulMoments - Wellness App",
      description:
        "Meditation and wellness app design emphasizing calm, accessible interfaces and personalized user experiences.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
      technologies: [
        "Emotional Design",
        "Mindfulness UX",
        "Motion Design",
        "User Psychology",
      ],
      github: "#",
      live: "#",
      behance: "#",
      featured: false,
      gradient: "from-green-400 to-blue-400",
      type: "Mobile App",
      duration: "3 months",
      role: "UX/UI Designer",
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
              Cindy Wu
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
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
              {["home", "about", "skills", "projects", "contact"].map(
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
        className="relative pt-20 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
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
                  Cindy Chen
                </span>
              </h1>

              <div className="text-xl md:text-3xl text-gray-600 mb-8 font-light">
                <span className="inline-block animate-typewriter">
                  UI/UX Designer
                </span>
                <span className="mx-4 text-gray-400">•</span>
                <span
                  className="inline-block animate-typewriter"
                  style={{ animationDelay: "1s" }}
                >
                  Design Systems Expert
                </span>
                <span className="mx-4 text-gray-400">•</span>
                <span
                  className="inline-block animate-typewriter"
                  style={{ animationDelay: "2s" }}
                >
                  User Advocate
                </span>
              </div>

              <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              I create digital experiences that are simple, thoughtful, and human centered, making technology feel approachable and meaningful!
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
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <span className="text-sm font-medium text-gray-700">
                    🏆 UX Design Awards 2023
                  </span>
                </div>
                <div className="px-6 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <span className="text-sm font-medium text-gray-700">
                    � Mobile Design Expert
                  </span>
                </div>
                <div className="px-6 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <span className="text-sm font-medium text-gray-700">
                    ♿ Accessibility Advocate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative">
                Skills & Expertise
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Skills by category */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  🎨 Design Skills
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === "Design")
                    .map((skill, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-medium text-gray-800">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-lg font-bold text-blue-600">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  🔍 Research Skills
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === "Research")
                    .map((skill, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-medium text-gray-800">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-lg font-bold text-green-600">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  🛠️ Tools
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === "Tools")
                    .map((skill, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-medium text-gray-800">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-lg font-bold text-purple-600">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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

            {/* Additional tools showcase */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                Design Tools & Software
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Figma",
                  "Adobe XD",
                  "Sketch",
                  "Framer",
                  "Principle",
                  "InVision",
                  "Miro",
                  "Notion",
                  "Maze",
                  "Hotjar",
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
                Featured Projects
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
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
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
                  cindy.wu.design@email.com
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
                <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
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
                  Visit Me
                </h3>
                <p className="text-gray-600 text-sm">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:shadow-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:shadow-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Project Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:shadow-lg"
                  >
                    <option>UI/UX Design</option>
                    <option>Web Development</option>
                    <option>Mobile App Design</option>
                    <option>Branding & Identity</option>
                    <option>Consultation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:shadow-lg resize-none"
                    placeholder="Tell me about your project, goals, and how I can help..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg"
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Send Message</span>
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
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand section */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Cindy Wu
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Crafting meaningful digital experiences through human-centered
                design. Always curious, always learning, always designing with
                purpose.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "behance", href: "#" },
                  { icon: "dribbble", href: "#" },
                  { icon: "linkedin", href: "#" },
                  { icon: "medium", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social.icon === "behance" && (
                        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.498 1.22.906.26 1.576.72 2.022 1.37.448.66.672 1.45.672 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.62.16-1.25.24-1.85.24H0V4.51h6.938v-.007zM3.495 8.88h2.77c.89 0 1.55-.18 2.003-.54.448-.36.673-.87.673-1.54 0-.55-.18-.95-.54-1.26-.36-.31-.84-.47-1.44-.47H3.495V8.88zm0 9.64h3.25c.58 0 1.09-.08 1.53-.25s.8-.38 1.06-.66c.26-.28.45-.6.58-.95.13-.35.19-.72.19-1.1 0-.68-.23-1.18-.69-1.53-.46-.35-1.12-.53-1.98-.53H3.495v5.02zm14.98-8.435c.3.13.57.32.81.58.24.26.43.58.56.95.13.37.2.79.2 1.26h-4.87c0-.57.15-1.03.44-1.38.29-.35.68-.53 1.17-.53.51 0 .93.18 1.26.53.33.35.49.82.49 1.42h1.4c0-.48-.1-.91-.29-1.29s-.45-.69-.78-.93c-.33-.24-.71-.42-1.14-.54s-.88-.18-1.35-.18c-.65 0-1.23.11-1.74.34-.51.23-.94.55-1.3.96-.36.41-.63.9-.82 1.46-.19.56-.28 1.17-.28 1.83 0 .65.1 1.26.29 1.82.19.56.47 1.05.84 1.46.37.41.82.73 1.34.96.52.23 1.1.34 1.75.34.75 0 1.4-.17 1.94-.52.54-.35.95-.85 1.23-1.51h-1.44c-.09.26-.26.46-.51.61-.25.15-.54.22-.87.22-.57 0-1.02-.19-1.35-.56-.33-.37-.5-.88-.5-1.53h4.87c0-.48-.07-.91-.2-1.29s-.32-.69-.57-.93c-.25-.24-.55-.42-.9-.54s-.73-.18-1.14-.18c-.41 0-.8.06-1.17.18zm-2.95-8.08h5.31v.71h-5.31v-.71z" />
                      )}
                      {social.icon === "dribbble" && (
                        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 5.302c.846 1.353 1.336 2.947 1.336 4.653 0 .496-.047.98-.136 1.453-.273-.061-.6-.138-.988-.233-1.739-.425-3.88-.955-6.136-.955-.571 0-1.123.037-1.665.109-.154-.354-.308-.706-.473-1.058.565-.232 1.124-.473 1.667-.723 2.139-.984 3.751-2.076 4.395-2.246zM12 2.259c1.804 0 3.45.62 4.759 1.656-.571.143-2.081 1.178-4.133 2.101-.533.24-1.075.462-1.618.67C9.671 4.337 8.168 2.673 6.743 1.656 8.204 1.84 10.05 2.259 12 2.259zm-5.61.756c1.378.984 2.845 2.584 4.147 4.823-2.634.994-5.547 1.538-7.352 1.696C3.503 7.015 4.887 4.688 6.39 3.015zM2.259 12c0-.137.006-.273.016-.409 1.943-.178 5.188-.756 8.067-1.842.136.283.266.572.39.866-3.185 1.322-5.998 3.679-7.332 5.660C2.756 15.188 2.259 13.657 2.259 12zm1.742 7.725c1.198-1.817 3.85-4.054 6.895-5.291.904-.367 1.832-.691 2.78-.962.667 1.691 1.167 3.527 1.391 5.528-1.354.585-2.853.916-4.439.916-2.311 0-4.429-.809-6.127-2.191zm8.877-.423c-.218-1.883-.698-3.64-1.331-5.252.506-.071 1.025-.108 1.553-.108 2.048 0 4.018.479 5.648.878.103.378.157.773.157 1.18 0 2.588-.994 4.946-2.625 6.702-.437-1.178-.896-2.301-1.402-3.4z" />
                      )}
                      {social.icon === "linkedin" && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      )}
                      {social.icon === "medium" && (
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About", "Skills", "Projects", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.toLowerCase())}
                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                      >
                        <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200"></span>
                        <span>{link}</span>
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  "UX Research & Strategy",
                  "UI Design & Prototyping",
                  "Design Systems",
                  "User Testing & Validation",
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 flex items-center space-x-2 group hover:text-white transition-colors">
                      <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-200"></span>
                      <span>{service}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                <p>
                  &copy; 2024 Cindy Wu. All rights reserved. Made with ❤️ and ☕
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Sitemap
                </a>
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
