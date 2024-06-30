import { MetadataType } from "@type/MetadataType";
import { useUserWorkflowContext } from "./useUserWorklfowContext";
/**
 * This hook is used to get the metadata from the top workflow stack element.
 *
 * @returns A {@link MetadataType} object or null if there is no a metadata object present.
 * @throws Error When there is no elements in the stack.
 */
export function useUserWorkflowStackMedatata(): MetadataType {
  const { state } = useUserWorkflowContext();

  const lastStackItem = state.stack.at(-1);

  // Javascript has their mental issues and i have to check the
  // stack lenght or the last element nullability.
  if (state.stack.length == 0 || !lastStackItem) {
    throw new Error("there is an illegal state of the navigation stack");
  }

  return lastStackItem.metadata;
}
