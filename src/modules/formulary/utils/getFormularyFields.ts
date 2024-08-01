import {
  FieldElement,
  FieldStructure,
  FormElement
} from "../types/FormularyTypes";

export function getFormularyFields(target: FormElement): FieldStructure[] {
  const elementCollection = target.elements;
  const elementValues = Object.values(elementCollection);

  if (elementValues.length == 0) {
    throw new Error("A formulary cannot lack any kind of field");
  }

  function mapElements(element: FieldElement): FieldStructure {
    return {
      id: element.id,
      name: element.name,
      type: element.type,
      group: element.parentElement?.id
    };
  }

  const formFields: FieldStructure[] = elementValues.map(mapElements);

  return formFields;
}
