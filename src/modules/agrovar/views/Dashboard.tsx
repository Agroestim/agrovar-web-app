import DashboardAsideNavigationComponent from "../components/DashboardNavigation";
import { DashboardFooterComponent } from "../components/DashboardFooter";
import { DashboardHeaderComponent } from "../components/DashboardHeader";
import {
  DashboardComponentProvider,
  DashboardContextProvider
} from "../providers/DashboardProvider";
import { ApolloGrapqhlProvider } from "../providers/GrapqhlProvider";
import { DashboardBottomComponent } from "../components/DashboardBottom";

export function DashboardPage() {
  return (
    <>
      <ApolloGrapqhlProvider>
        <DashboardContextProvider>
          <DashboardHeaderComponent />
          <main className="container g-dashboard" id="g-dashboard">
            <DashboardAsideNavigationComponent />
            <DashboardComponentProvider />
            <DashboardBottomComponent />
          </main>
          <DashboardFooterComponent />
        </DashboardContextProvider>
      </ApolloGrapqhlProvider>
    </>
  );
}
