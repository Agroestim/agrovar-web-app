import { useQuery } from "@apollo/client";
import { PipelineProcessEnum } from "@type/context/pipeline";
import { PipelineContext } from "context/pipeline";
import { WorkflowContext } from "context/workflow";
import { useContext } from "react";

type HandlePipelineContextProp = {
  pipelineToUpdate: PipelineProcessEnum;
};

export function useHandlePipelineContext({
  pipelineToUpdate,
}: HandlePipelineContextProp) {
  const { PipelineState, PipelineStateDispatch } = useContext(PipelineContext);
  const { WorkflowViewState, WorkflowViewDispatch } =
    useContext(WorkflowContext);

  function lazyPipelineContextHandler() {}

  function PipelineHandler() {}

  return { PipelineState };
}
