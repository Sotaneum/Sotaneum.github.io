"use client";

import { PostInfo } from "@/lib/data";
import { useEffect, useState } from "react";
import SearchResult from "@/components/SearchResult";

interface SearchResultProps {
  posts?: PostInfo[];
  color?: string;
  keywords?: string[];
  defaultSelectKeywords?: string[];
}
export default function SearchResultClient({
  color,
  posts = [],
  keywords = [],
  defaultSelectKeywords = [],
}: SearchResultProps) {
  const [selected, setSelected] = useState(defaultSelectKeywords);

  useEffect(() => {
    setSelected(defaultSelectKeywords);
  }, [defaultSelectKeywords.join(",")]);

  useEffect(() => {
    const interval = setInterval(() => {
      const hashStr = decodeURI(window.location.hash);

      if (!hashStr) {
        return;
      }
      const hashReg = /#([a-z]+)-(.*)/g.exec(hashStr);

      if (!hashReg) {
        return;
      }

      setSelected((prev) => {
        const [_, command, keyword] = hashReg;

        if (!keywords.includes(keyword)) {
          return prev;
        }

        const next = prev.filter((item) => item !== keyword);
        return command === "add" ? [...next, keyword] : next;
      });

      history.pushState("", document.title, window.location.pathname);
    });
    return () => clearInterval(interval);
  }, []);

  return (
    <SearchResult
      color={color}
      keywords={keywords}
      selectedKeywords={selected}
      posts={posts}
    />
  );
}
