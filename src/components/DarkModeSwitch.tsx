"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
export default function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "light" ? (
          <MdDarkMode
            className="text-xl cursor-pointer hover:fill-amber-500"
            onClick={() => {
              setTheme("dark");
            }}
          />
        ) : (
          <MdLightMode
            className="text-xl cursor-pointer hover:fill-amber-500"
            onClick={() => {
              setTheme("light");
            }}
          />
        ))}
    </>
  );
}
