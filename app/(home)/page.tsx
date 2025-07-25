"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const techStacks = [
  {
    title: "DevOps",
    description: "Master CI/CD, containers, and infrastructure as code",
    icon: "🐳",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-600 via-cyan-500 to-blue-700",
    href: "/devops/docs",
    topics: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"],
    features: [
      "100-Day Learning Path",
      "Real-world Projects",
      "Industry Best Practices",
    ],
  },
  {
    title: "JavaScript",
    description: "Modern ES6+, async programming, and web development",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    href: "/javascript/docs",
    topics: ["ES6+", "Async/Await", "DOM", "Node.js", "React"],
    features: ["Interactive Examples", "Modern Patterns", "Web Development"],
  },
  {
    title: "TypeScript",
    description: "Type-safe JavaScript with advanced features",
    icon: "🔷",
    color: "from-blue-600 to-indigo-600",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    href: "/typescript/docs",
    topics: [
      "Types",
      "Interfaces",
      "Generics",
      "Decorators",
      "Advanced Patterns",
    ],
    features: ["Type Safety", "Enterprise Ready", "Advanced Patterns"],
  },
  {
    title: "Python",
    description: "From basics to advanced automation and data science",
    icon: "🐍",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    href: "/python/docs",
    topics: ["Basics", "OOP", "Automation", "Data Science", "Web Development"],
    features: ["Data Science", "Automation", "Web Development"],
  },
  {
    title: "MongoDB",
    description: "NoSQL database mastery with aggregation and indexing",
    icon: "🍃",
    color: "from-green-600 to-teal-600",
    gradient: "from-green-500 via-teal-500 to-cyan-600",
    href: "/mongodb/docs",
    topics: ["CRUD", "Aggregation", "Indexing", "Sharding", "Replication"],
    features: ["NoSQL Mastery", "Performance Tuning", "Scalability"],
  },
  {
    title: "MySQL",
    description: "Relational database design, optimization, and administration",
    icon: "🐬",
    color: "from-blue-500 to-cyan-600",
    gradient: "from-blue-400 via-cyan-500 to-blue-600",
    href: "/mysql/docs",
    topics: ["SQL", "Indexing", "Performance", "Backup", "Replication"],
    features: ["Database Design", "Performance Optimization", "Administration"],
  },
];

const heroSlides = [
  {
    title: "Master Modern Technologies",
    subtitle: "Comprehensive learning paths for today's most in-demand skills",
    description:
      "From DevOps to databases, JavaScript to Python - learn everything you need to become a tech expert.",
    image: "🚀",
    gradient: "from-purple-600 via-pink-600 to-blue-600",
  },
  {
    title: "Learn by Doing",
    subtitle: "Hands-on projects and real-world applications",
    description:
      "Build real projects, solve actual problems, and gain practical experience that employers value.",
    image: "⚡",
    gradient: "from-orange-500 via-red-500 to-purple-600",
  },
  {
    title: "Stay Ahead of the Curve",
    subtitle: "Cutting-edge content updated regularly",
    description:
      "Learn the latest technologies, frameworks, and best practices that are shaping the future of tech.",
    image: "🎯",
    gradient: "from-green-400 via-blue-500 to-purple-600",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTechStacks = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("tech-stacks");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Hero Section with Slider */}
      <section className="relative pt-20 pb-20 px-4 z-10">
        <div className="container mx-auto text-center">
          {/* Logo and Brand */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-2xl">
              <span className="text-3xl">📚</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                DocHub
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The ultimate destination for mastering modern technologies through
              comprehensive, hands-on learning experiences.
            </p>
          </div>

          {/* Hero Slider */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div
                      className={`bg-gradient-to-r ${slide.gradient} p-12 text-white`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-left max-w-2xl">
                          <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            {slide.title}
                          </h2>
                          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-100">
                            {slide.subtitle}
                          </h3>
                          <p className="text-lg text-blue-50 leading-relaxed">
                            {slide.description}
                          </p>
                        </div>
                        <div className="text-8xl opacity-80">{slide.image}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center mt-6 space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href="/docs"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 focus:from-blue-600 focus:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg"
            >
              Start Learning
            </Link>
            <button
              onClick={scrollToTechStacks}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 border border-white/20"
            >
              Explore Technologies
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "6", label: "Technologies", icon: "🚀" },
              { number: "100+", label: "Learning Days", icon: "📚" },
              { number: "50+", label: "Projects", icon: "💻" },
              { number: "24/7", label: "Access", icon: "⚡" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 delay-${
                  index * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Cards */}
      <section id="tech-stacks" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology Path
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master the technologies that are shaping the future of software
              development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <Link
                key={stack.title}
                href={stack.href}
                className={`group block transition-all duration-1000 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl group-hover:shadow-purple-500/25">
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stack.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stack.color} flex items-center justify-center text-2xl mr-4 shadow-lg`}
                      >
                        {stack.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {stack.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {stack.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">
                        Key Topics:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stack.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 bg-white/10 text-white rounded-full text-sm border border-white/20"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">
                        Features:
                      </h4>
                      <ul className="space-y-2">
                        {stack.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-gray-300 text-sm flex items-center"
                          >
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span className="font-medium">Start Learning</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-purple-900/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DocHub?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Experience the future of learning with cutting-edge features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Structured Learning",
                description:
                  "Follow carefully crafted learning paths designed by industry experts",
                features: [
                  "Progressive difficulty",
                  "Real-world projects",
                  "Industry best practices",
                ],
              },
              {
                icon: "⚡",
                title: "Interactive Experience",
                description:
                  "Learn by doing with hands-on exercises and live coding sessions",
                features: [
                  "Live examples",
                  "Interactive challenges",
                  "Instant feedback",
                ],
              },
              {
                icon: "🚀",
                title: "Always Updated",
                description:
                  "Stay current with the latest technologies and industry trends",
                features: [
                  "Regular updates",
                  "Latest frameworks",
                  "Emerging trends",
                ],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 delay-${
                  index * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-left">
                  {feature.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Career?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of developers who have already accelerated their
              careers with DocHub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 focus:from-blue-600 focus:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg"
              >
                Start Your Journey
              </Link>
              <Link
                href="/javascript/docs"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 border border-white/20"
              >
                Explore JavaScript
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
