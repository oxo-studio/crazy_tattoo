export default function handler(req, res) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://www.crazyntinatattoo.it/</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>https://www.crazyntinatattoo.it/chisiamo</loc>
          <priority>0.8</priority>
        </url>
      </urlset>`;
  
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(sitemap);
  }
  