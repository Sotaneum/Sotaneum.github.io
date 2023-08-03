import { getAllPosts } from "@/lib/data";
import SearchResultClient from "@/components/SearchResultClient";
import { joinTagsWithPosts } from "@/lib/join";

export default function ListPage() {
  const posts = getAllPosts();
  const keywords = joinTagsWithPosts(posts);

  return <SearchResultClient posts={posts} keywords={keywords} />;
}
