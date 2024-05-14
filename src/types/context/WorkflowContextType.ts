import { Dispatch } from "react";

enum WorkflowControllViewType {
  COVER_VIEW,
  ERROR_VIEW,
  LOADING_VIEW,
  VARIETY_COMPARATOR_VIEW,
  VARIETY_LOCATION_RANKING_VIEW,
}

export type WorkflowContextType = {
  workflowControllViewState: WorkflowControllViewType;
  workflowControllViewStateDispatch: Dispatch<WorkflowControllViewType>;
};
