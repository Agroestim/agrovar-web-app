import { useEffect, useState } from "react";

type DataTheme = "light" | "dark";

export function useThemeSwitch() {
  const doc = document.querySelector("html")!;

  const [themeState, setThemeState] = useState<DataTheme>(
    <DataTheme>doc.getAttribute("data-theme") ?? "light"
  );

  useEffect(() => {
    doc.setAttribute("data-theme", themeState);
  }, [themeState]);

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
