'use client';
import { useState } from "react";
import { profile } from "../../data/profile";

export default function ConnectPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("Message sent! I’ll get back to you soon.");
        e.currentTarget.reset();
      } else {
        const t = await res.text();
        setStatus("Failed to send: " + t);
      }
    } catch (err: any) {
      setStatus("Error: " + err.message);
    }
  }

  return (
    <main className="pb-24">
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        <h1 className="text-3xl font-bold mb-6">Let&apos;s Connect</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="mt-4 flex items-center gap-5 text-gray-800">
              {/* Email icon */}
              <a href={`mailto:${profile.email}`} className="text-2xl hover:text-ibmBlue" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1z"/>
                  <path d="M.05 6.555 5.708 9.94c.78.468 1.803.468 2.583 0L13.95 6.555"/>
                </svg>
              </a>
              {/* LinkedIn icon */}
              <a href={profile.linkedin} target="_blank" rel="noopener" className="text-2xl hover:text-ibmBlue" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 13.394V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>
              {/* GitHub icon */}
              <a href={profile.github} target="_blank" rel="noopener" className="text-2xl hover:text-ibmBlue" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold">Send me a message</h3>
            <form className="mt-4 grid gap-3" onSubmit={handleSubmit}>
              <input name="name" required placeholder="Your name" className="px-3 py-2 rounded-lg bg-white border border-gray-300" />
              <input name="email" required type="email" placeholder="Your email" className="px-3 py-2 rounded-lg bg-white border border-gray-300" />
              <input name="subject" required placeholder="Subject" className="px-3 py-2 rounded-lg bg-white border border-gray-300" />
              <textarea name="message" required placeholder="Message" rows={5} className="px-3 py-2 rounded-lg bg-white border border-gray-300" />
              <button type="submit" className="px-4 py-2 rounded-xl bg-[rgb(var(--accent))] text-white font-semibold hover:opacity-90 transition">
                Send
              </button>
              {status && <p className="text-sm text-gray-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
