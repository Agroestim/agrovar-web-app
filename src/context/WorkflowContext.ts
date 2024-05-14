import { WorkflowContextType } from "@type/context/WorkflowContextType";
import { createContext } from "react";

export const WorkflowContext = createContext<WorkflowContextType>({});
