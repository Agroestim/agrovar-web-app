import { WorkflowContextType } from "../context/DashboardWorkflowContextType";

type WorkflowReducerActionType = {
  type: "ui/switch_view";
};

export interface WorkflowReducerPropsType {
  /**
   * Represents the global state for the dashboard workflow context.
   */
  state: WorkflowContextType;

  /**
   * Represents the action that will be triggered.
   */
  action: WorkflowReducerActionType;
}
