import { useContext } from "react";
import {
  WorkflowDispatchContext,
  WorkflowStateContext
} from "../contexts/WorklfowContext";

export function useWorkflowContext() {
  const state = useContext(WorkflowStateContext);
  const dispatch = useContext(WorkflowDispatchContext);

  return { state, dispatch };
}
