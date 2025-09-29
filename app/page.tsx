import Image from "next/image";
import { profile } from "../data/profile";

export default function HomePage() {
  return (
    <main className="pb-24">
      <header className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        <div className="grid md:grid-cols-[280px,1fr] gap-8 items-center">
          <div className="relative w-[260px] h-[260px] rounded-2xl overflow-hidden card">
            <Image src={profile.photo} alt={profile.name} fill sizes="260px" className="object-cover" />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{profile.name}</h1>
            <p className="mt-3 text-lg md:text-xl text-gray-600">{profile.location}</p>
          </div>
        </div>

        {/* Company logos row */}
        <div className="mt-10 card p-4 flex items-center justify-center">
          <Image src="/companies.png" alt="Mphasis, IBM, Kyndryl, HCLTech" width={1100} height={180} className="w-full h-auto opacity-90" />
        </div>
      </header>
    </main>
  );
}
