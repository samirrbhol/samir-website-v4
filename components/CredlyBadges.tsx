'use client';
import { useEffect, useState } from "react";

type Badge = {
  id: string;
  name: string;
  image_url: string;
  public_url: string;
  issuer?: string;
};

export default function CredlyBadges({ username }: { username: string }) {
  const [badges, setBadges] = useState<Badge[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/credly?username=${encodeURIComponent(username)}`);
        if (!res.ok) {
          const t = await res.text();
          throw new Error(t || `HTTP ${res.status}`);
        }
        const json = await res.json();
        // Keep only fields we show (no issued/expires)
        const items = (json.data || []).map((b: any) => ({
          id: b.id,
          name: b.name,
          image_url: b.image_url,
          public_url: b.public_url,
          issuer: b.issuer,
        }));
        setBadges(items);
      } catch (e: any) {
        setError(e.message || "Failed to fetch");
      }
    })();
  }, [username]);

  if (error) return <div className="text-sm text-red-600">Failed to load badges: {error}</div>;
  if (!badges) return <div className="text-sm text-gray-600">Loading badges…</div>;
  if (badges.length === 0) return <div className="text-sm text-gray-700">No public badges found on Credly.</div>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {badges.map((b) => (
        <a key={b.id} href={b.public_url} target="_blank" className="card p-4 hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <img src={b.image_url} alt={b.name} className="w-12 h-12 rounded" />
            <div>
              <div className="font-medium">{b.name}</div>
              {b.issuer && <div className="text-xs text-gray-600">{b.issuer}</div>}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
