import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import Link from "next/link";

export function DevOpsDocsHeader() {
  return (
    <header className="mb-8 bg-neutral-50 dark:bg-neutral-900 p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-4"></div>
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
