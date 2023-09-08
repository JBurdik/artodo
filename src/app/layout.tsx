"use client";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Shantell_Sans, Solitreo } from "next/font/google";
import { ModeToggle } from "@/components/theme-toggle-button";
import { Nav } from "@/components/shared/Nav";
import { RecoilRoot } from "recoil";

const caveat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "900"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={caveat.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RecoilRoot>
            <Nav />
            {children}
          </RecoilRoot>
          {/* footer */}
          <div className="mt-10 shadow-md shadow-foreground p-10 text-center">
            <p className="text-xl">© Artodo.cz {new Date().getFullYear()}</p>
            <span className="text-sm text-gray-500">web by Jirka Burdych</span>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
