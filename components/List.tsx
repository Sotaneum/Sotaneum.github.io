import { PostInfo } from "@/lib/data";
import ShortPost from "@/components/ShortPost";

interface ListProps {
  posts?: PostInfo[];
}

export default function List({ posts = [] }: ListProps) {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
      {posts.map((post) => (
        <ShortPost
          key={post.url}
          url={post.url}
          date={post.date}
          title={post.title}
          desc={post.excerpt}
        />
      ))}
    </div>
  );
}
