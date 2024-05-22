import { WorkflowViewEnum } from "@type/context/workflow";
import { VarietyComparation } from "./forms/VarietyComparation";
import { VarietyRanking } from "./forms/VarietyRanking";
import { LoaderComponent } from "@components/common/Loader";
import { useContext } from "react";
import { WorkflowContext } from "context/workflow";

export function WorkflowViewController() {
  const { view: WorkflowView } = useContext(WorkflowContext);

  switch (WorkflowView) {
    case WorkflowViewEnum.COVER_VIEW: {
      return <h1>Portada no implementada</h1>;
    }
    case WorkflowViewEnum.LOADING_VIEW: {
      return <LoaderComponent></LoaderComponent>;
    }
    case WorkflowViewEnum.RESULTS_VIEW: {
      return <h1>Not implemented</h1>;
    }
    case WorkflowViewEnum.ERROR_VIEW: {
      return <h1>Not implemented</h1>;
    }
    case WorkflowViewEnum.VARIETY_COMPARATION_VIEW: {
      return <VarietyComparation></VarietyComparation>;
    }
    case WorkflowViewEnum.VARIETY_LOCATION_RANKING_VIEW: {
      return <VarietyRanking></VarietyRanking>;
    }
  }
}
