import { useState } from "react";

type CheckboxValues = Record<"on" | "off", string>;

export function useOnChangeHandler(value: CheckboxValues) {
  const [checkboxValues, setCheckboxValues] = useState(value);

  /**
   * Handle the checkbox event and set the checked state based on this.
   * @param event The change event.
   */
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const targetId = event.currentTarget.id;

    if (checkboxValues["on"] != targetId) {
      setCheckboxValues({ on: targetId, off: checkboxValues.on });
    }
  }

  /**
   * Check if the checkbox is checked.
   * @param id The checkbox id that it will be checked.
   * @returns true if the current checkbox is checked, false otherwise.
   */
  function isChecked(id: string): boolean {
    return id == checkboxValues.on;
  }

  return { handleOnChange, isChecked };
}
