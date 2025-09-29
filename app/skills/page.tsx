import { skillsList } from "../../data/skills";
import CredlyBadges from "../../components/CredlyBadges";

export const metadata = { title: "Skills & Achievements — Samir Ranjan Bhol" };

export default function SkillsPage() {
  return (
    <main className="pb-24">
      <div className="max-w-5xl mx-auto px-6 pt-16 md:pt-24">
        <h1 className="text-3xl font-bold mb-6">Skills & Achievements</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          {skillsList.length === 0 && (
            <p className="text-gray-700">No structured skills parsed yet — keep editing <code>Skills.docx</code> and ask me to rebuild, or edit <code>data/skills.ts</code>.</p>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {skillsList.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm font-medium">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-3 mt-1">
                  <div className="bg-ibmBlue h-3 rounded" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Certifications & Badges</h2>
          <CredlyBadges username="samir-bhol" />
        </section>
      </div>
    </main>
  );
}
