"use client";
import Link from "next/link";
import { ModeToggle } from "../theme-toggle-button";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Nav = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-foreground text-background shadow-sm shadow-foreground sticky top-0 h-14 z-50 flex flex-row items-center justify-center">
      <div className="container flex flex-row items-center gap-7">
        <Link className="font-bold" href={"/"}>
          <Image
            src={theme === "dark" ? "/logo_black.svg" : "/logo_white.svg"}
            alt="logo"
            height={50}
            width={100}
          />
        </Link>
        <nav className="ml-auto flex flex-row gap-4">
          <Link href={""}>Produkty</Link>
          <Link href={""}>O nás</Link>
          <Link href={""}>Kontakt</Link>
        </nav>
        <ModeToggle />
      </div>
    </div>
  );
};
