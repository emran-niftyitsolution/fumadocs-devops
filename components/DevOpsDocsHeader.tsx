import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import Link from "next/link";

export function DevOpsDocsHeader() {
  return (
    <header className="mb-8 bg-neutral-50 dark:bg-neutral-900 p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-2xl font-bold shadow-lg">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            TechDocs
          </span>
        </Link>
        <span className="hidden md:inline-block text-gray-400 mx-2">|</span>
        <span className="text-base text-gray-600 dark:text-gray-300 font-medium">
          100 Days of DevOps Learning Curve
        </span>
      </div>
      <nav className="flex items-center gap-6 text-sm font-semibold">
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/devops/docs"
          className="text-blue-700 dark:text-blue-300 underline underline-offset-4"
        >
          DevOps
        </Link>
        <Link
          href="/javascript/docs"
          className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
        >
          JavaScript
        </Link>
        <Link
          href="/python/docs"
          className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
        >
          Python
        </Link>
        {/* Add more links as needed */}
        <ThemeToggle className="ml-4" />
      </nav>
    </header>
  );
}
