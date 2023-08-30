"use client";
import Link from "next/link";
import { ModeToggle } from "../theme-toggle-button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { navLinks } from "@/lib/nav";

export const Nav = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-foreground text-background shadow-sm shadow-foreground sticky top-0 h-14 z-50 flex flex-row items-center justify-center">
      <div className="container flex flex-row items-center justify-between gap-4">
        <Link className="font-bold order-2 md:order-none" href={"/"}>
          <Image
            src={theme === "dark" ? "/logo_black.svg" : "/logo_white.svg"}
            alt="logo"
            height={50}
            width={100}
          />
        </Link>
        <nav className="fixed bottom-3 inset-x-4 bg-foreground rounded-xl flex justify-between md:items-center px-5 py-3 shadow-sm shadow-muted md:shadow-none md:static md:flex flex-row md:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="flex flex-col md:flex-row items-center md:items-end md:gap-2 justify-center gap-0.5"
            >
              <span>{link.Icon ? <link.Icon /> : null}</span>
              <span className="text-sm">{link.displayName}</span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ModeToggle className="order-1" />
          <Link
            href={"/"}
            className={cn(buttonVariants({ variant: "icon" }), "order-3")}
          >
            <ShoppingBag />
          </Link>
        </div>
        <ModeToggle className="order-1 md:hidden" />
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "icon" }),
            "order-3 md:hidden"
          )}
        >
          <ShoppingBag />
        </Link>
      </div>
    </div>
  );
};
