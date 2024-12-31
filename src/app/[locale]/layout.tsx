import modalList from "@/05.features/modal-manager/modal-list";
import { locales, routing } from "@/07.shared/config";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { ReduxProvider } from "../providers";
import "../styles/globals.css";
import { AppLayout } from "../layouts";
import { ModalProvider } from "@4i/modal-manager";
import ThemeProvider from "../providers/theme-provider";
import { Toaster } from "sonner";

const INTER = Inter({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
  subsets: ["cyrillic-ext", "latin-ext"],
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

//fake

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// fake

const RootLayout = async (props: Props) => {
  const { locale } = await props.params;
  const { children } = props;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  await setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${INTER.variable} min-h-screen flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <AppLayout>{children}</AppLayout>
            </ThemeProvider>
            <ModalProvider
              className="z-[10000010001000000]"
              modalList={modalList}
            />
            <Toaster />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
