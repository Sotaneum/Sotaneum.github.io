import { MetadataRoute } from "next";
import { getURL } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  const url = getURL() || { protocol: "http:", host: "localhost" };
  const sitemap = `${url.protocol}//${url.host}/sitemap.xml`;
  return {
    sitemap,
    rules: {
      allow: "/",
      userAgent: "*",
    },
  };
}
