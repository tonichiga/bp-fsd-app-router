import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./i18n-config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: await (
      locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../../../dictionaries/en.json")
        : import(`../../../dictionaries/${locale}.json`)
    ).then((module) => module.default),
  };
});
