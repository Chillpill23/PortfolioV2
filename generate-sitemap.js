const fs = require("fs");

const siteUrl = "https://Chillpill23.github.io/PortfolioV2/";
const lastMod = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemapContent);