import { mysqlSource } from "@/lib/mysql-source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody } from "fumadocs-ui/page";
import { RootProvider } from "fumadocs-ui/provider";

export default function MySQLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Filter the page tree to only show MySQL content
  const mysqlTree = {
    ...mysqlSource.pageTree,
    children:
      mysqlSource.pageTree.children?.filter(
        (child) =>
          child.name &&
          (child.name === "mysql" || String(child.name).startsWith("day-"))
      ) || [],
  };

  return (
    <RootProvider>
      <DocsLayout tree={mysqlTree} nav={{ title: "MySQL" }}>
        <DocsBody>{children}</DocsBody>
      </DocsLayout>
    </RootProvider>
  );
}
