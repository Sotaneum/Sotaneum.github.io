import { getPostFilenames, toPost } from "@/lib/data";
import { DynamicProps } from "@/app/types";
import { Metadata, ResolvingMetadata } from "next";
import { BLOG_NAME } from "@/lib/constants";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function PostPage({
  params,
}: DynamicProps<{ post: string }>) {
  const post = toPost(params.post);

  return (
    <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]}>
      {post.content}
    </ReactMarkdown>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPostFilenames().map((post) => ({ post }));
}

export async function generateMetadata(
  { params }: DynamicProps<{ post: string }>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { date, title, excerpt, coverImage } = toPost(params.post);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${BLOG_NAME} :: ${title}`,
    openGraph: {
      title: `${BLOG_NAME} :: ${title}`,
      locale: "ko_KR",
      siteName: BLOG_NAME,
      images: coverImage
        ? [{ url: coverImage, width: 800, height: 600 }, ...previousImages]
        : previousImages,
      description: excerpt,
      type: "article",
      publishedTime: date.toString(),
      authors: ["Sotaneum(LEE DONG GUN)"],
    },
  };
}
