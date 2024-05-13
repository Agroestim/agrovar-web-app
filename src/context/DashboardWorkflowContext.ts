import { WorkflowContextType } from "@type/context/DashboardWorkflowContextType";
import { createContext } from "react";

export const DashboardWorkflowContext = createContext<WorkflowContextType>({
  workflowViewComponent: "",
});
