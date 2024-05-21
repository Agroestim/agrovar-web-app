import { PipelineContextReducerActionType } from "@type/store/PipelineContextReducer";
import { Dispatch } from "react";

export enum PipelineProcessEnum {
  PREFLIGHT_MISC_TIPS,
  PREFLIGHT_OPTIONS,

  QUERY_VARIETY_LOCATION_RANKING,
}

export interface PipelineContextType {
  PipelineState: PipelineProcessEnum;
  PipelineStateDispatch: Dispatch<PipelineContextReducerActionType>;
}
