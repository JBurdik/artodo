"use client";

import { ThemeProvider } from "@/components/theme-provider";
import NextAuthProvider from "@/lib/auth/Provider";
import { RecoilRoot } from "recoil";

import React from "react";
import TrpcProvider from "@/lib/trpc/Provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RecoilRoot>
        <NextAuthProvider>
          <TrpcProvider>{children}</TrpcProvider>
        </NextAuthProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default Providers;
