import DashboardAsideNavigationComponent from "../components/DashboardNavigation";
import {
  DashboardComponentProvider,
  DashboardContextProvider
} from "../providers/DashboardProvider";
import { ApolloGrapqhlProvider } from "../providers/GrapqhlProvider";
import { DashboardBottomComponent } from "../components/DashboardBottom";
import { ApplicationHeaderComponent } from "@modules/commons/components/ApplicationHeader";
import { ApplicationFooterComponent } from "@modules/commons/components/ApplicationFooter";

export function DashboardPage() {
  return (
    <>
      <ApolloGrapqhlProvider>
        <DashboardContextProvider>
          <ApplicationHeaderComponent />
          <main className="container g-dashboard" id="g-dashboard">
            <DashboardAsideNavigationComponent />
            <DashboardComponentProvider />
            <DashboardBottomComponent />
          </main>
          <ApplicationFooterComponent />
        </DashboardContextProvider>
      </ApolloGrapqhlProvider>
    </>
  );
}
