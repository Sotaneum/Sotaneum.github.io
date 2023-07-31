import TopPost from "@/components/TopPost";
import ShortPost from "@/components/ShortPost";

export default function RootPage() {
  const minimalPosts: string[] = ["1", "2"];
  return (
    <main>
      <TopPost />
      {minimalPosts.map((post) => (
        <ShortPost key={post} />
      ))}
    </main>
  );
}
