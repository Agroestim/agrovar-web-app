import { useState } from "react";
import {
  FieldStructure,
  FormElement,
  FormField,
  FormStructure,
  SelectEvent,
  SubmitEvent
} from "../types/FormularyTypes";
import { getFormularyFields } from "../utils/getFormularyFields";

export function useFormulary<T extends FormStructure>(initialState: T) {
  const [structureState, setStructureState] = useState<FormField[]>();
  const [formularyState, setFormularyState] = useState<T>(initialState);

  let formularyElementsCollection: FieldStructure[];

  function handleFormOnSubmit(event: SubmitEvent) {
    event.preventDefault();

    const formularyElement = event.currentTarget as FormElement;

    formularyElementsCollection = getFormularyFields(formularyElement);
  }

  function handleSelectOnChange(event: SelectEvent) {
    event.preventDefault();
  }

  return {
    handleFormOnSubmit,
    handleSelectOnChange
  };
}
