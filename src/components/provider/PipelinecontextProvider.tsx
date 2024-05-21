import { Children } from "@type/components/Children";
import { PipelineProcessEnum } from "@type/context/pipeline";
import { PipelineContext } from "context/pipeline";
import { useReducer } from "react";
import { pipelineContextReducer } from "store/PipelineContext";

export function PipelineContextProvider({ children }: Children) {
  const [pipelineContextState, pipelineContextDispatch] = useReducer(
    pipelineContextReducer,
    PipelineProcessEnum.PREFLIGHT_OPTIONS
  );
  return (
    <PipelineContext.Provider
      value={{
        PipelineState: pipelineContextState,
        PipelineStateDispatch: pipelineContextDispatch,
      }}
    >
      {children}
    </PipelineContext.Provider>
  );
}
