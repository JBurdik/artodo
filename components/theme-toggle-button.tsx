"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <Button size={"icon"} variant={"icon"} onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
      ) : (
        <Button
          size={"icon"}
          variant={"icon"}
          onClick={() => setTheme("light")}
        >
          <Sun />
        </Button>
      )}
    </>
  );
}
