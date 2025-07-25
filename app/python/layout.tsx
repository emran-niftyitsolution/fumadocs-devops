import { PythonDocsHeader } from "@/components/PythonDocsHeader";
import { pythonSource } from "@/lib/python-source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody } from "fumadocs-ui/page";
import { RootProvider } from "fumadocs-ui/provider";

export default function PythonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Filter the page tree to only show Python content
  const pythonTree = {
    ...pythonSource.pageTree,
    children:
      pythonSource.pageTree.children?.filter(
        (child) =>
          child.name &&
          (child.name === "python" || String(child.name).startsWith("day-"))
      ) || [],
  };

  return (
    <RootProvider>
      <DocsLayout tree={pythonTree} nav={{ title: "Python" }}>
        <DocsBody>
          <PythonDocsHeader />
          {children}
        </DocsBody>
      </DocsLayout>
    </RootProvider>
  );
}
