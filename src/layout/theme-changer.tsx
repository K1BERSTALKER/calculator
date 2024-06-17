import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

function ThemeChanger() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const { setTheme } = useTheme();

  const handleThemeChange = () => {
    setToggleTheme(!toggleTheme);
    setTheme(toggleTheme ? "light" : "dark");
  };

  return (
    <Button
      variant="default"
      size="icon"
      onClick={handleThemeChange}
      className="text-primary bg-transparent hover:bg-transparent"
    >
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Button>
  );
}
export default ThemeChanger;
