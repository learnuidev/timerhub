"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";
import { Button } from "./ui/button";

export const Banner = () => {
  const { t } = useTranslation(["banner"]);
  return (
    <section className="flex flex-col sm:flex-row sm:items-center mt-32">
      <div className="flex-1 p-8 px-0 sm:px-8 lg:px-32">
        <div className="">
          <h1 className="text-5xl font-bold">{t("banner:description")}</h1>

          <p className="text-xl font-light my-8">{t("banner:details")}</p>

          <Button className="bg-green-600">{t("banner:try.for.free")}</Button>

          <p className="mt-4">{t("banner:no.credit.card")}</p>
        </div>
      </div>

      <div className="flex-1 min-h-80 bg-green-400 rounded-xl w-full">TODO</div>
    </section>
  );
};
