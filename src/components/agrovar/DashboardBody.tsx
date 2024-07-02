import { UserWorkflowContext } from "@context/UserWorkflowContext";
import { useContext } from "react";
import { DisplayCurrentDashboardView } from "./flow/RenderDashboardProcess";
import { DashboardOperationsType } from "@type/contexts/DashboardContextTypes";

export function DashboardBodyComponent() {
  const { state } = useContext(UserWorkflowContext);

  const currentViewState =
    state.stack[-1]?.operation ?? DashboardOperationsType.COVER_OP;

  return (
    <>
      <div className="ga-dashboard-body">
        <DisplayCurrentDashboardView state={currentViewState} />
      </div>
    </>
  );
}
