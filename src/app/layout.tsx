"use client";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Nav } from "@/components/shared/Nav";
import { RecoilRoot } from "recoil";
import NextAuthProvider from "@/lib/auth/Provider";
import TrpcProvider from "@/lib/trpc/Provider";

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
<NextAuthProvider>
<TrpcProvider>{children}</TrpcProvider>
</NextAuthProvider>
</RecoilRoot>
        </ThemeProvider>
      </body>
    </html>
  );
}
