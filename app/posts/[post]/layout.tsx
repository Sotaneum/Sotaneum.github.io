import { DynamicProps } from "@/app/types";
import Keywords from "@/components/Keywords";
import Comments from "@/components/Comments";
import Title from "@/components/Title";
import { toPost } from "@/lib/data";
import DateString from "@/components/DateString";

export default function PostLayout({
  params,
  children,
}: DynamicProps<{ post: string }>) {
  const {
    title,
    groupTags = [],
    tags = [],
    date,
    coverImage,
  } = toPost(params.post);
  const keywords = [
    ...groupTags.filter((tag) => !tags.includes(tag)),
    ...tags,
  ].sort();

  return (
    <div>
      <Title title={title} coverImage={coverImage} />
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateString date={date} />
        </div>
        {children}
        <Keywords keywords={keywords} selected={keywords} />
        <Comments />
      </div>
    </div>
  );
}
