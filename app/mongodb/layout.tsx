import { mongodbSource } from "@/lib/mongodb-source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody } from "fumadocs-ui/page";
import { RootProvider } from "fumadocs-ui/provider";

export default function MongoDBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Filter the page tree to only show MongoDB content
  const mongodbTree = {
    ...mongodbSource.pageTree,
    children:
      mongodbSource.pageTree.children?.filter(
        (child) =>
          child.name &&
          (child.name === "mongodb" || String(child.name).startsWith("day-"))
      ) || [],
  };

  return (
    <RootProvider>
      <DocsLayout tree={mongodbTree} nav={{ title: "MongoDB" }}>
        <DocsBody>{children}</DocsBody>
      </DocsLayout>
    </RootProvider>
  );
}
