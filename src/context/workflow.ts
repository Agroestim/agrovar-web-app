import { WorkflowContextType, WorkflowViewEnum } from "@type/context/workflow";
import { createContext } from "react";

export const InitialWorkflowContextState: WorkflowContextType = {
  view: WorkflowViewEnum.COVER_VIEW,
  dispatch: () => null,
};

export const WorkflowContext = createContext<WorkflowContextType>(
  InitialWorkflowContextState
);
