import { UserWorkflowContext } from "@context/UserWorkflowContext";
import { Children } from "@type/components/Children";
import { DashboardOperationsType } from "@type/contexts/DashboardContextTypes";
import { DashboardContextReducerType } from "@type/reducers/DashboardContextReducerTypes";
import { useReducer } from "react";
import { dashboardContextReducer } from "reducers/dashboardContextReducer";

export function DashboardContextProvider({ children }: Children) {
  const [state, dispatch] = useReducer<DashboardContextReducerType>(
    dashboardContextReducer,
    { stack: [{ operation: DashboardOperationsType.COVER_OP, metadata: {} }] }
  );

  return (
    <UserWorkflowContext.Provider value={{ state, dispatch }}>
      {children}
    </UserWorkflowContext.Provider>
  );
}
