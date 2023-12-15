import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/context/ThemeProvider";
import { QueryProvider } from "@/providers/queryProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson's portifolio",
  description: "Personal projects",
};
export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "pt-br" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <>
      <html lang={params.lang} suppressHydrationWarning>
        <head>
          {/* <!-- Google tag (gtag.js) --> */}
          <script
            defer
            src="https://www.googletagmanager.com/gtag/js?id=G-KPS91VT7PC"
          ></script>

          <script
            defer
            dangerouslySetInnerHTML={{
              __html: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KPS91VT7PC');`,
            }}
          ></script>
        </head>
        <body className={inter.className}>
          <ThemeProvider>
            <TooltipProvider>
              <Header />
              <QueryProvider>{children}</QueryProvider>
            </TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
