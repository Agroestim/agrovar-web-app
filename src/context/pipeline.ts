import {
  PipelineContextType,
  PipelineProcessEnum,
} from "@type/context/pipeline";
import { createContext } from "react";

export const InitialPipelineContextState: PipelineContextType = {
  PipelineState: PipelineProcessEnum.PREFLIGHT_MISC_TIPS,
  PipelineStateDispatch: () => null,
};

export const PipelineContext = createContext<PipelineContextType>(
  InitialPipelineContextState
);
