import { WorkflowViewEnum } from "@type/context/workflow";
import { WorkflowContextReducerActionType } from "@type/store/WorkflowContextReducer";

export function workflowContextReducer(
  state: WorkflowViewEnum,
  action: WorkflowContextReducerActionType
) {
  switch (action.type) {
    case "WORKFLOW/UPDATE": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
