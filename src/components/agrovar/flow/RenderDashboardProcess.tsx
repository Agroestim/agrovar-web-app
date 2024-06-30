import { DisplayCurrentDashboardViewPropType } from "@type/components/DisplayDashboardViewPropType";
import { DahsboardCoverComponent } from "../DashboardCover";
import { VarietyComparation } from "../forms/VarietyComparation";
import { VarietyRanking } from "../forms/VarietyRanking";
import { DashboardOperationsType } from "@type/contexts/DashboardContextTypes";
import { DashboardResultsComponent } from "../DashboardResults";

export function DisplayCurrentDashboardView({
  state,
}: DisplayCurrentDashboardViewPropType) {
  switch (state) {
    case DashboardOperationsType.LOCATION_RANKING_OP:
      return <VarietyRanking></VarietyRanking>;

    case DashboardOperationsType.VARIETY_COMPARATION_OP:
      return <VarietyComparation></VarietyComparation>;

    case DashboardOperationsType.RESULTS_OP:
      return <DashboardResultsComponent></DashboardResultsComponent>;

    case DashboardOperationsType.COVER_OP:
      return <DahsboardCoverComponent></DahsboardCoverComponent>;
  }
}
