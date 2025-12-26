import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.classygames.gg/</loc>
  </url>
  <url>
    <loc>https://www.classygames.gg/games/orbital</loc>
  </url>
  <url>
    <loc>https://www.classygames.gg/games/orbital/orbital-mission</loc>
  </url>
  <url>
    <loc>https://www.classygames.gg/games/sillysuspects</loc>
  </url>
  <url>
    <loc>https://www.classygames.gg/about</loc>
  </url>
  <url>
    <loc>https://www.classygames.gg/contact</loc>
  </url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
