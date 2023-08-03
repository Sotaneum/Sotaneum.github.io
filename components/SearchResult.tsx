import { PostInfo } from "@/lib/data";
import Keywords from "@/components/Keywords";
import List from "@/components/List";
import { DefaultProps } from "@/app/types";
import { useMemo } from "react";

interface SearchResultProps extends DefaultProps {
  posts?: PostInfo[];
  color?: string;
  keywords?: string[];
  selectedKeywords?: string[];
  isOnlyAdd?: boolean;
  isAndMode?: boolean;
}
export default function SearchResult({
  color,
  children,
  posts = [],
  keywords = [],
  selectedKeywords = [],
  isOnlyAdd = false,
  isAndMode = false,
}: SearchResultProps) {
  const filteredPosts = useMemo(
    () =>
      selectedKeywords.length > 0
        ? posts.filter(({ tags = [] }) =>
            isAndMode
              ? selectedKeywords.every((tag) => tags.includes(tag))
              : selectedKeywords.some((tag) => tags.includes(tag)),
          )
        : posts,
    [posts, selectedKeywords],
  );

  return (
    <div>
      <Keywords
        color={color}
        keywords={keywords}
        selected={selectedKeywords}
        isOnlyAdd={isOnlyAdd}
      >
        {children}
      </Keywords>
      <List posts={filteredPosts} />
    </div>
  );
}
