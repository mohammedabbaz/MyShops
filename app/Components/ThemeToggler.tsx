"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

function ThemeToggler() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
      <Button type="button" variant={"ghost"} size={'icon'} className="hover:text-primary hover:bg-transparent " 
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
  );
}

export default ThemeToggler;
