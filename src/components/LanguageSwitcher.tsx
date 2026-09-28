"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/app/[lang]/dictionaries";

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
];

export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav className="lang-switcher" aria-label={label}>
      {languages.map(({ code, label: langLabel }, i) => (
        <span key={code}>
          {i > 0 && <span className="lang-sep" aria-hidden="true">·</span>}
          <Link href={`/${code}${rest ? `/${rest}` : ""}`} className={code === lang ? "active" : ""}>
            {langLabel}
          </Link>
        </span>
      ))}
    </nav>
  );
}
