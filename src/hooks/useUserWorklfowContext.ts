import { UserWorkflowContext } from "@context/UserWorkflowContext";
import { useContext } from "react";

export function useUserWorkflowContext() {
  return useContext(UserWorkflowContext);
}
