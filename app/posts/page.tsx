import SearchResult from "@/components/SearchResult";
import { getAllPosts } from "@/lib/data";
// TODO : 클라이언트 사이드 컴포넌트와 서버사이드 컴포넌트를 분리해서 관리하는 방향으로 진행해보면 좋을듯.
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

  return <SearchResult posts={posts} keywords={keywords} />;
}
