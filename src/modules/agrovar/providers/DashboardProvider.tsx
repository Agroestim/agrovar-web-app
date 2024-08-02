import { useReducer } from "react";
import {
  WorkflowDispatchContext,
  WorkflowStateContext
} from "../contexts/WorklfowContext";
import {
  ReducerActionType,
  WorkflowActionType,
  WorkflowContextType,
  WorkflowOperations,
  WorkflowReducerType
} from "../types/WorkflowTypes";
import { useWorkflowContext } from "../hooks/useWorkflowContext";
import { DashboardCoverView } from "../views/DashboardCover";
import { LoadingView } from "modules/commons/view/LoadingView";
import { VarietyComparationForm } from "../components/forms/VarietyComparation";

function dashboardContextReducer(
  prevState: WorkflowContextType,
  action: ReducerActionType
) {
  switch (action.type) {
    case WorkflowActionType.ADD_PENDING_OPERATION:
      return {
        stack: [...prevState.stack].concat(action.payload.stack)
      };

    case WorkflowActionType.REMOVE_COMPLETED_OPERATION:
      return {
        stack: [...prevState.stack].splice(0, prevState.stack.length - 1)
      };
  }
}

export function DashboardContextProvider(props: React.PropsWithChildren) {
  const [state, dispatch] = useReducer<WorkflowReducerType>(
    dashboardContextReducer,
    { stack: [{ type: WorkflowOperations.ONBOARDING, meta: {} }] }
  );

  return (
    <>
      <WorkflowDispatchContext.Provider value={dispatch}>
        <WorkflowStateContext.Provider value={state}>
          {props.children}
        </WorkflowStateContext.Provider>
      </WorkflowDispatchContext.Provider>
    </>
  );
}

export function DashboardComponentProvider() {
  const { state } = useWorkflowContext();

  const { type } = state.stack[state.stack.length - 1] ?? {
    type: WorkflowOperations.ONBOARDING
  };

  switch (type) {
    case WorkflowOperations.ONBOARDING:
      return <DashboardCoverView />;

    case WorkflowOperations.OFFBOARDING:
      return <></>;

    case WorkflowOperations.LOADING:
      return <LoadingView />;

    case WorkflowOperations.ERROR:
      return <LoadingView />;

    case WorkflowOperations.VARIETY_COMPARATION:
      return <VarietyComparationForm />;

    case WorkflowOperations.LOCATION_RANKING:
      return <></>;
  }
}
