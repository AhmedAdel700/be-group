"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [rotating, setRotating] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        alt="Loading Light/Dark Toggle"
      />
    );
  }

  const handleClick = () => {
    setRotating(true);

    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setTimeout(() => setRotating(false), 500);
  };

  const iconClass = `cursor-pointer ${rotating ? "rotate-once" : ""}`;

  return resolvedTheme === "dark" ? (
    <div className="ms-3 w-10 h-10 flex justify-center items-center rounded-full border border-[#343434] bg-[linear-gradient(125deg,#000,#000,#343434,#9A9A9A)] overflow-hidden">
      <Sun onClick={handleClick} className={iconClass} size={20} />
    </div>
  ) : (
    <div className="w-10 h-10 flex justify-center items-center rounded-full border border-[#E8E8E8]">
      <Moon onClick={handleClick} className={iconClass} size={20} />
    </div>
  );
}
