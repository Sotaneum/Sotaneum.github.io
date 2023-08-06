"use client";

import { PostInfo } from "@/lib/data";
import { useCallback, useEffect, useState } from "react";
import SearchResult from "@/components/SearchResult";
import useHash from "@/hooks/useHash";

interface SearchResultProps {
  posts?: PostInfo[];
  keywords?: string[];
  defaultSelectKeywords?: string[];
}
export default function SearchResultClient({
  posts = [],
  keywords = [],
  defaultSelectKeywords = [],
}: SearchResultProps) {
  const defaultKeywords = defaultSelectKeywords.join(",");
  const [selected, setSelected] = useState(defaultSelectKeywords);

  const keywordFilter = useCallback(
    (key: string) => keywords.includes(key),
    [keywords],
  );

  useEffect(() => {
    setSelected(defaultKeywords.split(",").filter(keywordFilter));
  }, [defaultKeywords, keywordFilter]);

  useHash((hash: string) => {
    const hashReg = /#([a-z]+)-(.*)/g.exec(hash);
    if (!hashReg) {
      return;
    }

    const [_, command, keyword] = hashReg;
    const targetKeywords = keyword.split("~");

    if (targetKeywords.length === 0) {
      return;
    }

    setSelected((prev) => {
      const next = prev.filter((item) => !targetKeywords.includes(item));
      return command === "add" ? [...next, ...targetKeywords] : next;
    });
  });

  return (
    <SearchResult
      className="mb-6 p-4 border-2 border-black"
      keywords={keywords}
      selectedKeywords={selected}
      posts={posts}
    />
  );
}
