"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div style={{ minHeight: "400px" }}>
      <Giscus
        id="comments"
        repo="Sotaneum/sotaneum.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkxOTcwMjMxODE="
        category="Announcements"
        categoryId="DIC_kwDOC75Vzc4CYOm9"
        mapping="pathname"
        term="test"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}
