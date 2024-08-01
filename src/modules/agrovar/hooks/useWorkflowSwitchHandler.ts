import {
  WorkflowActionType,
  WorkflowOperationMetaType,
  WorkflowOperations
} from "../types/WorkflowTypes";
import { useWorkflowContext } from "./useWorkflowContext";

export function useWorkflowSwitchHandler() {
  const { dispatch } = useWorkflowContext();

  function handleOnClick(
    operation: WorkflowOperations,
    meta: WorkflowOperationMetaType
  ) {
    function onClick(event: React.MouseEvent<HTMLButtonElement>) {
      event.preventDefault();

      meta["caller"] = event.currentTarget.id;

      dispatch({
        type: WorkflowActionType.ADD_PENDING_OPERATION,
        payload: {
          stack: [{ type: operation, meta: meta }]
        }
      });
    }

    return onClick;
  }

  return { handleOnClick };
}
