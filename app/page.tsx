import TopPost from "@/components/TopPost";
import ShortPost from "@/components/ShortPost";
import { getAllPosts } from "@/lib/data";

export default function RootPage() {
  const posts = getAllPosts();
  const [topPost, ...shortPosts] = posts.slice(0, 3);

  return (
    <main>
      {topPost && (
        <TopPost
          url={topPost.url}
          title={topPost.title}
          desc={topPost.excerpt}
          date={topPost.date}
          imageUrl={topPost.coverImage || ""}
        />
      )}
      {shortPosts.length > 0 && (
        <section>
          <h4 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight select-none">
            다른 게시글
          </h4>
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
            {shortPosts.map((post) => (
              <ShortPost
                key={post.title}
                url={post.url}
                title={post.title}
                desc={post.excerpt}
                date={post.date}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
