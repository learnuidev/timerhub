"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

export const Banner = () => {
  const { t } = useTranslation(["banner"]);
  return (
    <section>
      <h1>{t("banner:title")}</h1>
    </section>
  );
};
