import { PythonDocsHeader } from "@/components/PythonDocsHeader";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody } from "fumadocs-ui/page";
import { RootProvider } from "fumadocs-ui/provider";

export default function PythonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a filtered page tree that only shows Python content
  const pythonTree = {
    ...source.pageTree,
    children:
      source.pageTree.children
        ?.filter((child) => child.name === "python")
        .map((child) => ({
          ...child,
          children:
            child.children?.filter((grandChild) =>
              grandChild.name.startsWith("day-")
            ) || [],
        })) || [],
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
