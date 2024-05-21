import { WorkflowViewEnum } from "@type/context/workflow";

export type WorkflowContextReducerActionType = {
  type: "WORKFLOW/UPDATE";
  payload: WorkflowViewEnum;
};
