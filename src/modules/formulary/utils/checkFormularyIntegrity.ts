import { FormStructure } from "../types/FormularyTypes";

export function checkFormularyIntegrity(
  initialStruct: FormStructure,
  currentStruct: FormStructure
): boolean {
  const $keysFromStruct = Object.keys(initialStruct);
  const $keysFromForm = Object.keys(currentStruct);

  return (
    $keysFromForm.length == $keysFromStruct.length &&
    $keysFromStruct.every((element, index) => element == $keysFromForm[index])
  );
}
