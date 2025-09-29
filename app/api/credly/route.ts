import { NextResponse } from "next/server";

/** GET /api/credly?username=samir-bhol */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const username = url.searchParams.get("username") || "samir-bhol";

  async function getJson(u: string) {
    const r = await fetch(u, { headers: { "user-agent": "Mozilla/5.0" } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  }
  async function getText(u: string) {
    const r = await fetch(u, { headers: { "user-agent": "Mozilla/5.0" } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.text();
  }

  try {
    let parsed: any;
    try {
      parsed = await getJson(`https://www.credly.com/users/${username}/badges.json`);
    } catch {
      const html = await getText(`https://www.credly.com/users/${username}/badges`);
      const uuidMatch = html.match(/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i);
      if (!uuidMatch) throw new Error("Could not extract user id from Credly page.");
      const userId = uuidMatch[0];
      parsed = await getJson(`https://www.credly.com/users/${userId}/badges.json`);
    }

    const items = (parsed?.data || []).map((item: any) => ({
      id: item.id,
      name: item.badge_template?.name ?? item.title ?? "Badge",
      image_url: item.image_url,
      public_url: `https://www.credly.com/badges/${item.id}/public_url`,
      issuer: item.issuer?.entities?.map((e: any) => e?.entity?.name).filter(Boolean).join(", "),
    }));

    return NextResponse.json({ data: items });
  } catch (e: any) {
    return new NextResponse(`Credly fetch error: ${e.message}`, { status: 502 });
  }
}
