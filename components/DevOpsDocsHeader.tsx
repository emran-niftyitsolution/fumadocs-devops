"use client";

import Link from "next/link";

export function DevOpsDocsHeader() {
  return (
    <div className="mb-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">🐳</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">
              DevOps Engineering
            </h1>
            <p className="text-gray-300">
              Master CI/CD, containers, and infrastructure as code
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/javascript/docs"
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            JavaScript
          </Link>
          <Link
            href="/python/docs"
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            Python
          </Link>
        </div>
      </div>
    </div>
  );
}
