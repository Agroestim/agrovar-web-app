import { FormEvent } from "react";
import { useUserWorkflowContextQuickDispatch } from "./useUserWorkflowContextQuickDispatch";
import { DashboardOperationsType } from "@type/contexts/DashboardContextTypes";

/**
 * This hooks handles the form event on submit and return the queried form data.
 */
export function useOnSubmitHandler() {
  const {
    lazyDashboardContextOperationUpdate
  } = useUserWorkflowContextQuickDispatch();

  /**
   * Handle the form submit event.
   * @param event The form event
   */
  function handleFormOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataEntries = new FormData(event.currentTarget);
    const newFormDataEntries: Record<string, string | number | File> = {};

    for (const [key, value] of formDataEntries.entries()) {
      newFormDataEntries[key] = value;
    }

    lazyDashboardContextOperationUpdate(
      DashboardOperationsType.RESULTS_OP,
      newFormDataEntries
    );
  }

  return {
    handleFormOnSubmit
  };
}
