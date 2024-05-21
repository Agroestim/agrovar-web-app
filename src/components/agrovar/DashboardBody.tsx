import { WorkflowViewController } from "./workflow/WorkflowController";

export function DashboardBodyComponent() {
  return (
    <>
      <div id="ga-dashboard-body">
        <WorkflowViewController />
      </div>
    </>
  );
}
