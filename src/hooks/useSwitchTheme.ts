import { ThemeType } from "@type/ThemeTypes";
import { MouseEvent, useEffect, useState } from "react";

/**
 * This hook allows to switch the whole application color theme.
 *
 * @returns An object with a button handler, the theme state and the theme dispatch method.
 */
export function useSwitchTheme() {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const HTML_ELEMENT = document.querySelector("html");
    HTML_ELEMENT?.setAttribute("data-theme", theme);
  }, [theme]);

  /**
   * Handles the button mouse click event, changing the application color theme.
   *
   * @param e The button mouse click event.
   */
  function handleButtonClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    setTheme(() => {
      switch (theme) {
        case "light":
          return "dark";

        case "dark":
          return "light";
      }
    });
  }

  return { handleButtonClick, theme, setTheme };
}
