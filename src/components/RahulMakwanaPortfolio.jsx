import React, { useState, useEffect } from 'react';

export default function RahulMakwanaPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Tez Captain's",
      subtitle: "Drive & Earn App",
      period: "Jan 2024 – Present",
      role: "Solo Lead Developer",
      description: "Revolutionary ride-sharing platform with real-time tracking, SOS features, and seamless payment integration.",
      bullets: [
        "Real-time ride matching & tracking using MQTT + Google Maps",
        "Background location services with SOS emergency features",
        "OTP verification and subscription payment flows",
        "Tech: Flutter, GetX, MQTT, Razorpay, Firebase"
      ],
      link: "",
      status: "Live",
      downloads: "100K+",
      rating: "4.8",
      color: "from-blue-500 to-purple-600",
      mockup: "🚗"
    },
    {
      title: "Mraseel",
      subtitle: "Courier Delivery App",
      period: "May 2025 – Present",
      role: "Lead Developer",
      description: "Complete courier management ecosystem with real-time tracking, earnings dashboard, and live chat.",
      bullets: [
        "Advanced order management system with real-time updates",
        "Comprehensive earnings dashboard for delivery partners",
        "Live chat and push notification system",
        "Flutter Embedded Module for gradual native app migration"
      ],
      link: "",
      status: "In Development",
      downloads: "50K+",
      rating: "4.6",
      color: "from-green-500 to-teal-600",
      mockup: "📦"
    },
    {
      title: "OrthoMobileApp",
      subtitle: "VoIP Healthcare Platform",
      period: "Mar 2023 – Dec 2023",
      role: "Team Developer",
      description: "Secure healthcare communication platform with AI-powered call analytics and patient management.",
      bullets: [
        "Secure VoIP calls with Twilio integration",
        "AI-powered call analytics and insights",
        "Patient management and appointment scheduling",
        "HIPAA compliant data handling"
      ],
      link: "",
      status: "Completed",
      downloads: "25K+",
      rating: "4.7",
      color: "from-orange-500 to-red-600",
      mockup: "🏥"
    }
  ];

  const skills = [
    { name: 'Flutter', level: 95, icon: '📱', category: 'Framework' },
    { name: 'Dart', level: 90, icon: '🎯', category: 'Language' },
    { name: 'Android', level: 85, icon: '🤖', category: 'Platform' },
    { name: 'Kotlin', level: 80, icon: '⚡', category: 'Language' },
    { name: 'GetX', level: 90, icon: '🎮', category: 'State Management' },
    { name: 'Firebase', level: 85, icon: '🔥', category: 'Backend' },
    { name: 'MQTT', level: 80, icon: '📡', category: 'Protocol' },
    { name: 'Razorpay', level: 85, icon: '💳', category: 'Payment' },
    { name: 'CI/CD', level: 75, icon: '🚀', category: 'DevOps' },
    { name: 'Google Maps', level: 90, icon: '🗺️', category: 'API' }
  ];

  const experiences = [
    {
      company: "Rushkar Technology Pvt. Ltd",
      position: "Senior Flutter Developer",
      period: "Aug 2022 – Sep 2025",
      description: "Leading development of cross-platform mobile applications with focus on real-time systems and VoIP integration.",
      achievements: [
        "Developed 5+ production apps with 100K+ downloads",
        "Implemented real-time tracking using MQTT + Google Maps",
        "Integrated VoIP solutions with background handling",
        "Mentored 3 junior developers and improved team productivity by 40%"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "Intforce Software",
      position: "Android + Flutter Developer",
      period: "Aug 2020 – Aug 2022",
      description: "Built reusable UI components and integrated Firebase features across multiple applications.",
      achievements: [
        "Created reusable component library used across 10+ apps",
        "Integrated Firebase Auth, Firestore, and Cloud Functions",
        "Improved app performance by 40% through optimization",
        "Reduced development time by 30% with component library"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Shriji Engineering",
      position: "Jr. Project Manager + Software Engineer",
      period: "Aug 2019 – Aug 2020",
      description: "Managed small-scale projects and developed native Android applications.",
      achievements: [
        "Managed 3 concurrent projects successfully",
        "Developed 2 native Android apps from scratch",
        "Improved project delivery time by 25%",
        "Established development best practices"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-element w-32 h-32 top-20 left-10 animate-float"></div>
        <div className="floating-element w-24 h-24 top-40 right-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="floating-element w-40 h-40 bottom-40 left-1/4 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="floating-element w-20 h-20 bottom-20 right-1/3 animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">Rahul Makwana</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Apps</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/Money1998" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/m-rahul1316" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible ? 'animate-fadeInUp' : ''}`}>
            <div>
              <div className="text-sm font-semibold text-purple-400 mb-4 tracking-wider uppercase">Mobile Application Developer</div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Building
                <span className="gradient-text block">Mobile Apps</span>
                That Matter
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I create exceptional mobile experiences using Flutter and native Android development.
                Specializing in real-time systems, VoIP integration, and scalable architecture that powers
                millions of users across iOS and Android platforms.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="px-6 py-3 purple-card rounded-full">
                  <span className="text-purple-300 font-medium">📱 Flutter Expert</span>
                </div>
                <div className="px-6 py-3 purple-card rounded-full">
                  <span className="text-purple-300 font-medium">⚡ Real-time Systems</span>
                </div>
                <div className="px-6 py-3 purple-card rounded-full">
                  <span className="text-purple-300 font-medium">🎯 VoIP Integration</span>
                </div>
                <div className="px-6 py-3 purple-card rounded-full">
                  <span className="text-purple-300 font-medium">🚀 Team Leadership</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#contact" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 neon-glow">
                  Let's Build Together
                  <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-300 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                  Download Resume
                  <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </a>
              </div>
            </div>

            {/* Mobile App Mockup */}
            <div className="relative flex justify-center">
              <div className="phone-mockup animate-glow">
                <div className="phone-screen w-64 h-96">
                  <div className="h-full bg-gradient-to-b from-purple-900 to-black p-6 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4"></div>
                      <h3 className="text-white text-xl font-bold mb-2">Rahul Makwana</h3>
                      <p className="text-purple-300 text-sm">Mobile Developer</p>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-purple-500 rounded-full w-3/4"></div>
                      <div className="h-2 bg-purple-400 rounded-full w-1/2"></div>
                      <div className="h-2 bg-purple-300 rounded-full w-2/3"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Technical Arsenal</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies that power my mobile applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="purple-card rounded-2xl p-6 hover-lift group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{skill.icon}</span>
                    <h3 className="font-bold text-white text-lg">{skill.name}</h3>
                  </div>
                  <span className="text-purple-300 text-sm font-medium">{skill.category}</span>
                </div>
                <div className="skill-bar mb-2">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-purple-300 font-semibold">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Mobile Applications</span>
            </h2>
            <p className="text-xl text-gray-300">Apps that showcase my development expertise</p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.title} className="purple-card rounded-3xl p-8 hover-lift">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-2xl">{project.mockup}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-purple-300 text-lg">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{project.description}</p>

                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-300 font-semibold">{project.downloads}</span>
                        <span className="text-gray-400 text-sm">Downloads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-purple-300 font-semibold">{project.rating}</span>
                        <span className="text-gray-400 text-sm">Rating</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-sm text-gray-500 mb-4">{project.role} • {project.period}</div>

                    {project.link && (
                      <a href={project.link} className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group">
                        View on App Store
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className="relative">
                    <div className={`h-80 rounded-3xl bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="text-center text-white">
                        <div className="text-3xl mb-4">{project.mockup}</div>
                        <div className="text-2xl font-bold mb-2">{project.title}</div>
                        <div className="text-lg opacity-90">{project.subtitle}</div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Professional Journey</span>
            </h2>
            <p className="text-xl text-gray-300">Building mobile experiences across different companies</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="purple-card rounded-2xl p-8 hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{exp.position}</h3>
                    <div className="text-2xl text-purple-300 font-semibold mb-2">{exp.company}</div>
                    <div className="text-gray-400 text-lg">{exp.period}</div>
                  </div>
                  <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${exp.color} text-white font-semibold mt-4 lg:mt-0`}>
                    {exp.period.split(' ')[2]} - {exp.period.split(' ')[4]}
                  </div>
                </div>

                <p className="text-gray-300 mb-8 text-lg leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="font-bold text-white text-xl mb-4">Key Achievements:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Let's Build Together</span>
            </h2>
            <p className="text-xl text-gray-300">Ready to create your next mobile application?</p>
          </div>

          <div className="purple-card rounded-3xl p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
              <p className="text-gray-300 mb-8 text-lg">
                I'm available for freelance projects, full-time positions, and technical consulting.
                Let's discuss how we can bring your mobile app idea to life.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Email</h4>
                  <a href="mailto:mrahul.1613@gmail.com" className="text-purple-300 hover:text-purple-200">mrahul.1613@gmail.com</a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">LinkedIn</h4>
                  <a href="https://linkedin.com/in/m-rahul1316" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-200">Connect with me</a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">GitHub</h4>
                  <a href="https://github.com/Money1998" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-200">View my code</a>
                </div>
              </div>

              <a href="mailto:mrahul.1613@gmail.com" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 neon-glow">
                Start a Conversation
                <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold gradient-text mb-4">Rahul Makwana</div>
          <p className="text-gray-400 mb-6 text-lg">Mobile Application Developer • Flutter & Android Expert</p>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="mailto:mrahul.1613@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
            <a href="https://linkedin.com/in/m-rahul1316" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/Money1998" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">© {new Date().getFullYear()} Rahul Makwana. Crafted with ❤️ for mobile development.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}