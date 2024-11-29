import { Pathnames } from "next-intl/routing";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = "en" as const;
export const locales = ["uk", "ru", "en"] as const;

export const pathnames = {
  "/": "/",
  "/home": "/",
  "/notification": "/notification",
} satisfies Pathnames<typeof locales> & {
  [key: string]: string;
};

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
