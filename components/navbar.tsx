"use client";
import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";
import { ToggleTheme } from "./toggle-theme";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export const Navbar = () => {
  const { t } = useTranslation(["banner"]);
  return (
    <nav className="flex justify-between items-center">
      <h1>{t("banner:title")}</h1>

      <div className="flex items-center gap-2">
        <ToggleTheme />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};
