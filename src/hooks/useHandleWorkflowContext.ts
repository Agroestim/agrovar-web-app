import { WorkflowViewEnum } from "@type/context/workflow";
import { WorkflowContext } from "context/workflow";
import { MouseEvent, useContext } from "react";

type HandleWorkflowContextProp = {
  viewToUpdate: WorkflowViewEnum;
};

export function useHandleWorkflowContext({
  viewToUpdate,
}: HandleWorkflowContextProp) {
  const { WorkflowView, WorkflowViewDispatcher } = useContext(WorkflowContext);

  function HandleWorkflowContext(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    WorkflowViewDispatcher({
      type: "WORKFLOW/UPDATE",
      payload: viewToUpdate,
    });
  }

  return { WorkflowView, HandleWorkflowContext };
}
