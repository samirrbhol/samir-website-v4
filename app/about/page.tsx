import { aboutParas } from "../../data/about";

export const metadata = {
  title: "About Me — Samir Ranjan Bhol",
  description: "About Samir"
};

export default function AboutPage() {
  return (
    <main className="pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-16 md:pt-24">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <div className="space-y-4 text-gray-800">
          {aboutParas.length === 0 && (<p>No content found. Please update About Me.docx.</p>)}
          {aboutParas.map((p, i) => (<p key={i}>{p}</p>))}
        </div>
      </div>
    </main>
  );
}
