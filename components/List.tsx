import { PostInfo } from "@/lib/data";
import ShortPost from "@/components/ShortPost";

interface ListProps {
  posts?: PostInfo[];
}
export default function List({ posts = [] }: ListProps) {
  const sort = posts.reduce<PostInfo[][]>((acc, post, idx) => {
    if (idx % 2 === 0) {
      return [...acc, posts.length - 1 > idx ? [post, posts[idx + 1]] : [post]];
    }
    return acc;
  }, []);

  return (
    <div>
      {sort.map((items) => (
        <div
          key={items.map(({ url }) => url).join(",")}
          className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8"
        >
          {items.map((post) => (
            <ShortPost
              key={post.url}
              url={post.url}
              date={post.date}
              title={post.title}
              desc={post.excerpt}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
