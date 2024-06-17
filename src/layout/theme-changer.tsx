import React from "react";

import { useTheme } from "@/components/theme-provider";
import { InnerMoon } from "@theme-toggles/react";
import "@theme-toggles/react/css/InnerMoon.css";

export default function ThemeChanger(props: React.SVGProps<SVGSVGElement>) {
  const [toggleTheme, setToggleTheme] = React.useState(true);
  const { setTheme } = useTheme();
  const handleTheme = () => {
    setToggleTheme(!toggleTheme);
    setTheme(toggleTheme ? "dark" : "light");
  };

  return <InnerMoon toggled={toggleTheme} toggle={handleTheme} {...props} />;
}
