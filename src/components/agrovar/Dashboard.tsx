import { DashboardBodyComponent } from "./DashboardBody";
import { DashboardControlsComponent } from "./DashboardControls";
import { DashboardPreviewComponent } from "./DashboardPreview";

export default function DashboardComponent() {
  return (
    <>
      <main className="container g-dashboard">
        <DashboardControlsComponent />
        <DashboardPreviewComponent />
        <DashboardBodyComponent />
      </main>
    </>
  );
}
