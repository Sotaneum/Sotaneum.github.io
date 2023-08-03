import { PostInfo } from "@/lib/data";

export function filteredPostsFromTags(
  posts: PostInfo[] = [],
  tags: string[] = [],
  isAndMode = false,
) {
  if (!tags || tags.length === 0) {
    return posts;
  }
  const checkFn = (isAndMode ? tags.every : tags.some).bind(tags);
  return posts.filter((post) => checkFn((tag) => post.tags?.includes(tag)));
}
