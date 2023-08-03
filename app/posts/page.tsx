import { getAllPosts } from "@/lib/data";
import SearchResultClient from "@/components/SearchResultClient";

export default function ListPage() {
  const posts = getAllPosts();

  const keywords = posts.reduce<string[]>((acc, post) => {
    const newTags = [
      ...(post.groupTags || []).filter(
        (tag) => !(post.tags || []).includes(tag),
      ),
      ...(post.tags || []),
    ];
    return [...acc, ...newTags.filter((tag) => !acc.includes(tag))];
  }, []);

  return <SearchResultClient posts={posts} keywords={keywords} />;
}
