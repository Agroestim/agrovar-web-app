import { DashboardBodyComponent } from "./DashboardBody";
import { DashboardControlsComponent } from "./DashboardControls";
import { DashboardPreviewComponent } from "./DashboardPreview";
import { WorkflowContextProvider } from "../provider/WorkflowContextProvider";

export default function DashboardComponent() {
  return (
    <>
      <main className="container g-dashboard">
        <WorkflowContextProvider>
          <DashboardControlsComponent />
          <DashboardPreviewComponent />
          <DashboardBodyComponent />
        </WorkflowContextProvider>
      </main>
    </>
  );
}
