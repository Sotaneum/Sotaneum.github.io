import { DynamicProps } from "@/app/types";
import Comments from "@/components/Comments";
import Title from "@/components/Title";
import { getAllPosts, toPost } from "@/lib/data";
import DateString from "@/components/DateString";
import SearchResult from "@/components/SearchResult";

export default function PostLayout({
  params,
  children,
}: DynamicProps<{ post: string }>) {
  const currentPost = toPost(params.post);
  const { title, tags = [], date, coverImage } = currentPost;

  return (
    <div>
      <Title title={title} coverImage={coverImage} />
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateString date={date} />
        </div>
        {children}
        <Comments />
      </div>
      <SearchResult
        posts={getAllPosts().filter(
          (post) => post.date.toString() !== currentPost.date.toString(),
        )}
        selectedKeywords={tags}
        keywords={tags}
        color={"bg-red-600"}
        isOnlyAdd={true}
        isAndMode={true}
      >
        Tag와 관련된 포스트를 소개합니다!
      </SearchResult>
    </div>
  );
}
