import Link from "next/link";

const techStacks = [
  {
    title: "DevOps",
    description:
      "Complete 100-day DevOps learning path with CI/CD, containers, and infrastructure as code",
    icon: "🐳",
    color: "from-blue-500 to-cyan-500",
    href: "/devops/docs",
    topics: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"],
  },
  {
    title: "JavaScript",
    description:
      "Master modern JavaScript with ES6+, async programming, and web development",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    href: "/javascript/docs",
    topics: ["ES6+", "Async/Await", "DOM", "Node.js", "React"],
  },
  {
    title: "TypeScript",
    description:
      "Type-safe JavaScript development with advanced features and best practices",
    icon: "🔷",
    color: "from-blue-600 to-indigo-600",
    href: "/typescript/docs",
    topics: [
      "Types",
      "Interfaces",
      "Generics",
      "Decorators",
      "Advanced Patterns",
    ],
  },
  {
    title: "Python",
    description:
      "Python programming from basics to advanced automation and data science",
    icon: "🐍",
    color: "from-green-500 to-emerald-500",
    href: "/python/docs",
    topics: ["Basics", "OOP", "Automation", "Data Science", "Web Development"],
  },
  {
    title: "MongoDB",
    description:
      "NoSQL database mastery with aggregation, indexing, and best practices",
    icon: "🍃",
    color: "from-green-600 to-teal-600",
    href: "/mongodb/docs",
    topics: ["CRUD", "Aggregation", "Indexing", "Sharding", "Replication"],
  },
  {
    title: "MySQL",
    description: "Relational database design, optimization, and administration",
    icon: "🐬",
    color: "from-blue-500 to-cyan-600",
    href: "/mysql/docs",
    topics: ["SQL", "Indexing", "Performance", "Backup", "Replication"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechDocs
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Comprehensive documentation and learning paths for modern
            developers. Choose your tech stack and start your journey to
            mastery.
          </p>
        </div>
      </section>

      {/* Tech Stack Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack) => (
              <Link key={stack.title} href={stack.href} className="group block">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stack.color} flex items-center justify-center text-2xl mr-4`}
                    >
                      {stack.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stack.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {stack.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {stack.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    <span className="font-medium">Start Learning</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose TechDocs?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive, up-to-date, and practical learning resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Comprehensive Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                From basics to advanced concepts, with practical examples and
                real-world projects
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Hands-on Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Interactive examples, exercises, and projects to reinforce your
                learning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Always Updated
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Latest technologies, best practices, and industry standards
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
