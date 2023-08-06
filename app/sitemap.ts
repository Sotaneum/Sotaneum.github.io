import { MetadataRoute } from "next";
import { getPostFilenames, getURL, toDate } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getURL() || { host: "localhost", protocol: "http:" };
  const host = `${url.protocol}//${url.host}`;

  const posts = getPostFilenames().map((filename) => ({
    lastModified: toDate(filename),
    url: `${host}/posts/${filename}`,
  }));

  return [
    {
      url: host,
      lastModified: new Date(),
    },
    {
      url: `${host}/posts`,
      lastModified: new Date(),
    },
    ...posts,
  ];
}
