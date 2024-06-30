import { useState } from "react";

export function useOnSelectChangeHandler() {
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  function handleSelectOnChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    setSelectedOptions([...selectedOptions, value]);
  }

  return { selectedOptions, handleSelectOnChange };
}
