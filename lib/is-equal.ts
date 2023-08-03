import { PostInfo } from "@/lib/data";

export function isEqualPost(a: PostInfo, b: PostInfo) {
  return a.date.toString() === b.date.toString();
}

export function isEqualGroupTags(a: PostInfo, b: PostInfo) {
  const aGroupTags = a.groupTags?.sort() || [];
  const bGroupTags = b.groupTags?.sort() || [];
  if (aGroupTags.length !== bGroupTags.length) {
    return false;
  }
  return aGroupTags.every((tag, idx) => tag === bGroupTags[idx]);
}
