import { WorkflowContextReducerActionType } from "@type/store/WorkflowContextReducer";
import { Dispatch } from "react";

export enum WorkflowViewEnum {
  COVER_VIEW,
  LOADING_VIEW,
  RESULTS_VIEW,
  ERROR_VIEW,

  VARIETY_COMPARATION_VIEW,
  VARIETY_LOCATION_RANKING_VIEW,
}

export interface WorkflowContextType {
  view: WorkflowViewEnum;

  dispatch: Dispatch<WorkflowContextReducerActionType>;
}
