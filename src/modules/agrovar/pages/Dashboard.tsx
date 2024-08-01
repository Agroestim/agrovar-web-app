import AsideNavigationComponent from "../components/AsideNavigation";
import AsidePreviewComponent from "../components/AsidePreview";
import {
  DashboardComponentProvider,
  DashboardContextProvider
} from "../providers/DashboardProvider";
import { ApolloGrapqhlProvider } from "../providers/GrapqhlProvider";

import "sass/_index.scss";

export function DashboardPage() {
  return (
    <>
      <ApolloGrapqhlProvider>
        <DashboardContextProvider>
          <main className="container g-dashboard" id="g-dashboard">
            <AsideNavigationComponent />
            <AsidePreviewComponent />
            <DashboardComponentProvider />
          </main>
        </DashboardContextProvider>
      </ApolloGrapqhlProvider>
    </>
  );
}
