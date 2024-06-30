import { useState } from "react";

export type CheckboxType = "checked" | "unchecked";

export type SyncedCheckboxPropsType = {
  labelsFor: Record<CheckboxType, string>;
  valuesFor: Record<CheckboxType, string>;
  inputName: string;
  inputId: string;
};

export function SyncedCheckbox(props: SyncedCheckboxPropsType) {
  const { inputName, inputId, labelsFor, valuesFor } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(valuesFor.unchecked);

  function handleCheckEvent() {
    setIsChecked(!isChecked);

    isChecked
      ? setCheckboxValue(valuesFor.checked)
      : setCheckboxValue(valuesFor.unchecked);
  }

  return (
    <>
      <input
        type="checkbox"
        name={inputName}
        id={inputId}
        value={checkboxValue}
        onChange={handleCheckEvent}
      />{" "}
      <label htmlFor={inputId}>
        {isChecked ? labelsFor.checked : labelsFor.unchecked}
      </label>
    </>
  );
}
