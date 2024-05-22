import { Children } from "@type/components/Children";
import { WorkflowViewEnum } from "@type/context/workflow";
import { WorkflowContext } from "context/workflow";
import { useReducer } from "react";
import { workflowContextReducer } from "store/WorkflowContext";

export function WorkflowContextProvider({ children }: Children) {
  const [workflowContextState, workflowContextDispatch] = useReducer(
    workflowContextReducer,
    WorkflowViewEnum.COVER_VIEW
  );
  return (
    <WorkflowContext.Provider
      value={{
        view: workflowContextState,
        dispatch: workflowContextDispatch,
      }}
    >
      {children}
    </WorkflowContext.Provider>
  );
}
