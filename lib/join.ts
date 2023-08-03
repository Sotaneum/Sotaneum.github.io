import { PostInfo } from "@/lib/data";

function joinTags(postInfo: PostInfo) {
  const { tags = [], groupTags = [] } = postInfo;
  return tags.filter((tag) => groupTags.includes(tag)).concat(groupTags);
}

export function joinTagsWithPosts(postInfos: PostInfo[]) {
  return postInfos.reduce<string[]>(
    (acc, postInfo) =>
      acc.concat(...joinTags(postInfo).filter((tag) => !acc.includes(tag))),
    [],
  );
}
