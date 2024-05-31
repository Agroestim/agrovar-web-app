import { WorkflowViewState } from "@type/WorkflowContextState";
import { ReactNode } from "react";

export type ControllerProp = {
  view: WorkflowViewState;
  children: ReactNode;
};
