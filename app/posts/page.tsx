import { getAllPosts } from "@/lib/data";
import SearchResultClient from "@/components/SearchResultClient";
import { joinTagsWithPosts } from "@/lib/join";

export default function ListPage() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return <div>아직 작성된 게시글이 없습니다.</div>;
  }

  const keywords = joinTagsWithPosts(posts);

  return <SearchResultClient posts={posts} keywords={keywords} />;
}
