import { getPostFilenames, toHTML, toPost } from "@/lib/data";
import markdownStyles from "@/styles/markdown.module.css";
import { DynamicProps } from "@/app/types";
import { Metadata, ResolvingMetadata } from "next";
import { BLOG_NAME } from "@/lib/constants";

export default async function PostPage({
  params,
}: DynamicProps<{ post: string }>) {
  const post = toPost(params.post);
  const content = await toHTML(post.content || "");

  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
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
