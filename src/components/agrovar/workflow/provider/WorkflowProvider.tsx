import { Children } from "@type/components/Children";
import { WorkflowContext } from "context/WorkflowContext";

export function WorkflowProvider({ children }: Children) {
  return (
    <WorkflowContext.Provider value={}>{children}</WorkflowContext.Provider>
  );
}
