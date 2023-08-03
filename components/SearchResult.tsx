import { PostInfo } from "@/lib/data";
import Keywords from "@/components/Keywords";
import List from "@/components/List";
import { DefaultProps } from "@/types/props";
import { useMemo } from "react";
import { filteredPostsFromTags } from "@/lib/filter";

interface SearchResultProps extends DefaultProps {
  posts?: PostInfo[];
  keywords?: string[];
  selectedKeywords?: string[];
  isOnlyAdd?: boolean;
  isAndMode?: boolean;
}
export default function SearchResult({
  children,
  className,
  posts = [],
  keywords = [],
  selectedKeywords = [],
  isOnlyAdd = false,
  isAndMode = false,
}: SearchResultProps) {
  const filteredPosts = useMemo(
    () => filteredPostsFromTags(posts, selectedKeywords, isAndMode),
    [posts, isAndMode, selectedKeywords],
  );

  return (
    <div>
      <Keywords
        className={className}
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
