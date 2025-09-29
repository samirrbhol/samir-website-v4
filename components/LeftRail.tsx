'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftRail() {
  const pathname = usePathname();
  const link = (href: string, label: string) => (
    <Link href={href} className={"" + (pathname === href ? "bg-ibmBlue text-white" : "")}>
      {label}
    </Link>
  );
  return (
    <nav className="rail">
      {link("/", "Home")}
      {link("/about", "About Me")}
      {link("/skills", "Skills & Achievements")}
      {link("/connect", "Let’s Connect")}
    </nav>
  );
}
