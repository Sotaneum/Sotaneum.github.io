import { DefaultProps } from "@/app/types";
import GroupKeywords from "@/components/GroupKeywords";
import List from "@/components/List";

export default function ListLayout({ children }: DefaultProps) {
  return (
    <main>
      {children}
      <GroupKeywords />
      <List />
    </main>
  );
}
