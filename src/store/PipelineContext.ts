import { PipelineProcessEnum } from "@type/context/pipeline";
import { PipelineContextReducerActionType } from "@type/store/PipelineContextReducer";

export function pipelineContextReducer(
  state: PipelineProcessEnum,
  action: PipelineContextReducerActionType
) {
  switch (action.type) {
    case "PIPELINE/UPDATE": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
