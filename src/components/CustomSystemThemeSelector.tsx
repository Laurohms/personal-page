import { Theme } from "@radix-ui/themes";
import { ReactNode, useEffect, useState } from "react";

type CustomThemeSelectorProps = {
  children: ReactNode;
};

export const CustomSystemThemeSelector = ({
  children,
}: CustomThemeSelectorProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light");
    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return <Theme appearance={theme}>{children}</Theme>;
};
