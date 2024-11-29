import { Roboto, Roboto_Mono } from "next/font/google";
import "../styles/globals.css";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

const ROBOTO_TTF = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["cyrillic-ext", "latin-ext"],
});

const ROBOTO_MONO_TTF = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto-mono",
  subsets: ["cyrillic-ext", "latin-ext"],
});
type Props = {
  children: ReactNode;
  params: { locale: string };
};

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

// export async function generateMetadata({
//   params: { locale },
// }: Omit<Props, "children">) {
//   const t = await getTranslations({ locale });

//   return {
//     title: t("title"),
//   };
// }

const RootLayout = async ({ children, params: { locale } }: Props) => {
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ROBOTO_TTF.variable} ${ROBOTO_MONO_TTF.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
