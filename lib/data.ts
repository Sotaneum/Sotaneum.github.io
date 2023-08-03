import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export interface PostInfo {
  title: string;
  date: Date;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
  groupTags?: string[];
  content: string;
  url: string;
}

const postsDirectory = join(process.cwd(), "_posts");

export function getPostFilenames() {
  return fs
    .readdirSync(postsDirectory)
    .map((slug) => slug.replace(/\.md$/, ""));
}

function toDate(filename: string) {
  const reg = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})$/.exec(filename);
  if (!reg) {
    throw new Error("맞지 않는 포맷입니다.");
  }
  const [_, year, month, day, hour, min] = reg;
  return new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hour),
    parseInt(min),
  );
}

function convertImagePath(content: string) {
  return content.replace(/\.\.\/public/g, "");
}

export function toPost(filename: string): PostInfo {
  const fullPath = join(postsDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const createDate = toDate(filename);
  const url = `/posts/${filename}`;
  const groupTags = data.groupTags || [];
  const tags = (data.tags || [])
    .filter((tag: string) => !data.groupTags.includes(tag))
    .concat(groupTags);

  return {
    url,
    tags,
    groupTags,
    date: createDate,
    title: data.title,
    excerpt: data.excerpt,
    content: convertImagePath(content),
    coverImage: `${url}/${data.coverImage}`,
  };
}

export function getAllPosts() {
  return getPostFilenames()
    .map((filename) => toPost(filename))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
