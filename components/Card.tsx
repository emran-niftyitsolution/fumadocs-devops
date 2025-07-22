import React from "react";

export function Card({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </a>
  );
}
