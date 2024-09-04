import { Roboto, Roboto_Mono } from "next/font/google";
import "./styles/globals.css";
import { ReactNode } from "react";

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

// export async function generateMetadata({
//   params: { locale },
// }: Omit<Props, "children">) {
//   const t = await getTranslations({ locale });

//   return {
//     title: t("title"),
//   };
// }

const RootLayout = async ({ children, params: { locale } }: Props) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
