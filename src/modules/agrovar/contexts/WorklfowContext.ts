import { createContext } from "react";
import { ReducerActionType, WorkflowContextType } from "../types/WorkflowTypes";

export const DEFAULT_WORKFLOW_STATE_CONTEXT: WorkflowContextType = {
  stack: []
};

export const WorkflowStateContext = createContext(
  DEFAULT_WORKFLOW_STATE_CONTEXT
);

export const DEFAULT_WORKFLOW_REDUCER_CONTEXT: React.Dispatch<ReducerActionType> =
  function () {};

export const WorkflowDispatchContext = createContext(
  DEFAULT_WORKFLOW_REDUCER_CONTEXT
);
