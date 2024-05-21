import { useHandleWorkflowContext } from "@hooks/useHandleWorkflowContext";
import { WorkflowViewEnum } from "@type/context/workflow";
import { ReactNode } from "react";

type ControllerProp = {
  toView: WorkflowViewEnum;
  children: ReactNode;
};

export function ControlWorkflowViewButton({
  toView,
  children,
}: ControllerProp) {
  const { HandleWorkflowContext } = useHandleWorkflowContext({
    viewToUpdate: toView,
  });

  return <button onClick={HandleWorkflowContext}>{children}</button>;
}
