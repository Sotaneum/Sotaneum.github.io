import { DynamicProps } from "@/app/types";
import Comments from "@/components/Comments";
import Title from "@/components/Title";
import { getAllPosts, toPost } from "@/lib/data";
import DateString from "@/components/DateString";
import SearchResult from "@/components/SearchResult";
import Pagination from "@/components/Pagination";
import { isEqualGroupTags, isEqualPost } from "@/lib/is-equal";

export default function PostLayout({
  params,
  children,
}: DynamicProps<{ post: string }>) {
  const allPosts = getAllPosts();
  const currentPost = toPost(params.post);
  const { title, groupTags = [], date, coverImage } = currentPost;

  const posts = allPosts.filter((post) => isEqualGroupTags(post, currentPost));

  const currentIndex = posts.findIndex((post) =>
    isEqualPost(post, currentPost),
  );

  return (
    <div>
      <Title title={title} coverImage={coverImage} />
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateString date={date} />
        </div>
        {children}
        <Pagination
          prev={posts[currentIndex + 1]}
          next={posts[currentIndex - 1]}
        />
        <Comments />
        <SearchResult
          color="bg-red-600"
          posts={allPosts.filter((post) => !isEqualPost(post, currentPost))}
          keywords={groupTags}
          isOnlyAdd={true}
          isAndMode={true}
          selectedKeywords={groupTags}
        >
          Tag와 관련된 포스트를 소개합니다!
        </SearchResult>
      </div>
    </div>
  );
}
