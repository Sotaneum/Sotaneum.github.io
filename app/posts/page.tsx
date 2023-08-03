import { getAllPosts } from "@/lib/data";
import SearchResultClient from "@/components/SearchResultClient";

export default function ListPage() {
  const posts = getAllPosts();

  const keywords = posts.reduce<string[]>(
    (acc, post) => [
      ...acc,
      ...(post.tags || []).filter((tag) => !acc.includes(tag)),
    ],
    [],
  );

  return <SearchResultClient posts={posts} keywords={keywords} />;
}
