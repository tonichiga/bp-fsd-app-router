import { createNavigation } from "next-intl/navigation";
import { localePrefix, locales, pathnames } from "../config/config";

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation({
    locales,
    pathnames,
    localePrefix,
  });
