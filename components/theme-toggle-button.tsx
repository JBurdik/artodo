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
interface Props {
  className?: string;
}
export function ModeToggle(props: Props) {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <Button
          className={props.className}
          size={"icon"}
          variant={"icon"}
          onClick={() => setTheme("dark")}
        >
          <Moon />
        </Button>
      ) : (
        <Button
          className={props.className}
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
