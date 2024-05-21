import { WorkflowContextType, WorkflowViewEnum } from "@type/context/workflow";
import { createContext } from "react";

export const InitialWorkflowContextState: WorkflowContextType = {
  WorkflowView: WorkflowViewEnum.COVER_VIEW,
  WorkflowViewDispatcher: () => null,
};

export const WorkflowContext = createContext<WorkflowContextType>(
  InitialWorkflowContextState
);
