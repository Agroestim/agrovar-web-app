import { useState, FormEvent } from "react";

/**
 * This hooks handles the form event on submit and return the queried form data.
 */
export function useFormOnSubmitHandler() {
  const [formData, setFormData] = useState<Record<string, string | Blob>[]>();

  function handleFormOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const dataEntries = new FormData(event.currentTarget);
    const newDataEntries: Record<string, string | Blob>[] = [];

    for (const [key, value] of dataEntries.entries()) {
      newDataEntries.push({ key, value });
    }

    setFormData(newDataEntries);
  }

  return {
    formData,
    setFormData,
    handleFormOnSubmit,
  };
}
