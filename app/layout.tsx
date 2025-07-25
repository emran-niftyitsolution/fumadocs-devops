import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocHub - Master Modern Technologies",
  description:
    "The ultimate destination for mastering modern technologies through comprehensive, hands-on learning experiences. Learn DevOps, JavaScript, TypeScript, Python, MongoDB, MySQL and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
