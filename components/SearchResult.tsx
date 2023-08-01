"use client";

import Keywords from "@/components/Keywords";
import List from "@/components/List";
import { PostInfo } from "@/lib/data";
import { useEffect, useState } from "react";

interface SearchResultProps {
  posts?: PostInfo[];
  color?: string;
  keywords?: string[];
  defaultSelected?: string[];
}
export default function SearchResult({
  color,
  posts = [],
  keywords = [],
  defaultSelected = [],
}: SearchResultProps) {
  const [selected, setSelected] = useState(defaultSelected);
  const filteredPosts = posts.filter((post) => {
    const allTags = [
      ...(post.groupTags || []).filter(
        (tag) => !(post.tags || []).includes(tag),
      ),
      ...(post.tags || []),
    ];
    return selected.every((tag) => allTags.includes(tag));
  });

  useEffect(() => {
    setSelected(defaultSelected);
  }, [defaultSelected]);

  return (
    <div>
      <Keywords color={color} keywords={keywords} selected={selected} />
      <List posts={filteredPosts} />
    </div>
  );
}
