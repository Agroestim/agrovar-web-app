import { PipelineProcessEnum } from "@type/context/pipeline";

export type PipelineContextReducerActionType = {
  type: "PIPELINE/UPDATE";
  payload: PipelineProcessEnum;
};
