import { UserWorkflowContext } from "@context/UserWorkflowContext";
import { MetadataType } from "@type/MetadataType";
import { DashboardOperationsType } from "@type/contexts/DashboardContextTypes";
import { ReducerAction } from "@type/reducers/DashboardContextReducerTypes";
import { useContext } from "react";

export function useUserWorkflowContextQuickDispatch() {
  const { state, dispatch } = useContext(UserWorkflowContext);

  function lazyDashboardContextOperationUpdate(
    operation: DashboardOperationsType,
    metadata: MetadataType
  ) {
    dispatch({
      type: ReducerAction.ADD_PENDING_OPERATION,
      payload: {
        operation: operation,
        metadata: metadata,
      },
    });
  }

  return {
    state,
    lazyDashboardContextOperationUpdate,
  };
}
