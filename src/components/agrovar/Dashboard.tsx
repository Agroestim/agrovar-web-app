import { DashboardContextProvider } from "@components/providers/DashboardContextProvider";
import { DashboardBodyComponent } from "./DashboardBody";
import { DashboardControlsComponent } from "./DashboardControls";
import { DashboardPreviewComponent } from "./DashboardPreview";

export default function DashboardComponent() {
  return (
    <>
      <main className="container g-dashboard">
        <DashboardContextProvider>
          <DashboardControlsComponent />
          <DashboardPreviewComponent />
          <DashboardBodyComponent />
        </DashboardContextProvider>
      </main>
    </>
  );
}
