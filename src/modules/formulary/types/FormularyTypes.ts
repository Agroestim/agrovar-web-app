/**
 * Represents a change event for select events.
 */
export type SelectEvent = React.ChangeEvent<HTMLSelectElement>;
/**
 * Represents a submition event for formulary events.
 */
export type SubmitEvent = React.FormEvent<HTMLFormElement>;

/**
 * A container for the formulary field elements.
 */
export interface FormField {
  name: string;
  type: string;
  id: string;
}

export interface FieldElement extends Element, FormField {}
export interface FormElement extends HTMLFormElement {
  readonly elements: HTMLCollectionOf<FieldElement>;
}

export interface FormStructure {
  [x: string]: unknown;
}
export interface FieldStructure extends FormField {
  group?: string;
}
