'use client';
export default function MarqueeQuotes() {
  const quotes = [
    "Dare to do it.",
    "Collaboration & Ownership drive outcomes.",
    "Small improvements compound into big wins.",
    "Measure what matters; automate the rest.",
    "Stay curious. Keep shipping.",
  ];
  const text = quotes.concat(quotes).join("   •   ");
  return (
    <div className="marquee">
      <div className="marquee__inner">{text}</div>
    </div>
  );
}
