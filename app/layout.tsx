import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson's portifolio",
  description: "Personal projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <Header />
              {children}
            </TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
