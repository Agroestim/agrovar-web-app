// Workflow

export enum WorkflowOperations {
  ONBOARDING = "ONBOARDING_VIEW",
  OFFBOARDING = "OFFBOARDING_VIEW",

  LOADING = "LOADING_VIEW",
  ERROR = "ERROR_VIEW",

  VARIETY_COMPARATION = "VARIETY_COMPARATION_VIEW",
  LOCATION_RANKING = "LOCATION_RANKING_VIEW"
}

export type WorkflowOperationMetaType = Record<string, unknown>;

/**
 * A container for the process stack.
 * This container stores the process type and some metadata.
 */
export interface WorkflowOperationType {
  type: WorkflowOperations;
  meta: WorkflowOperationMetaType;
}

// Contexts

export interface WorkflowContextType {
  stack: WorkflowOperationType[];
}

// Reducers

export enum WorkflowActionType {
  ADD_PENDING_OPERATION = "ADD_PENDING_OPERATION",
  REMOVE_COMPLETED_OPERATION = "REMOVE_COMPLETED_OPERATION"
}

export interface ReducerActionType {
  type: WorkflowActionType;
  payload: WorkflowContextType;
}

/**
 * Represents the function that will change the state
 * each time the dispatch function is called.
 */
export type WorkflowReducerType = React.Reducer<
  WorkflowContextType,
  ReducerActionType
>;

export type WorkflowDispatchContextType = React.Dispatch<ReducerActionType>;
