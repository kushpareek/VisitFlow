import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      
      { userAgent: "GPTBot", allow: "/" },
    ],
    sitemap: "https://visitflow.pengence.com/sitemap.xml",
  };
}
