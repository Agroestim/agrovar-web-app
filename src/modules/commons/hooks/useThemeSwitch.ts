import { useState } from "react";

export function useThemeSwitch() {
  const [themeState, setThemeState] = useState<"light" | "dark">("light");

  function handleSwitchAction(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    switch (themeState) {
      case "dark":
        setThemeState("light");
        break;

      case "light":
        setThemeState("dark");
        break;
    }
  }

  return { handleSwitchAction, themeState };
}
