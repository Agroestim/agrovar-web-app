import { DashboardWorkflowContext } from "context/DashboardWorkflowContext";
import { DashboardBodyComponent } from "./DashboardBody";
import { DashboardControlsComponent } from "./DashboardControls";
import { DashboardPreviewComponent } from "./DashboardPreview";

export default function DashboardComponent() {
  return (
    <>
      <main className="container g-dashboard">
        <DashboardWorkflowContext.Provider
          value={{ workflowViewComponent: "" }}
        >
          <DashboardControlsComponent />
          <DashboardPreviewComponent />
          <DashboardBodyComponent />
        </DashboardWorkflowContext.Provider>
      </main>
    </>
  );
}
