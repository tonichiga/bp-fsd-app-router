import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "./config";

export const routing = defineRouting({
  locales: locales, // Define in this line the possible languages for translation
  defaultLocale: defaultLocale, // Define in this line the default language to be shown
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
