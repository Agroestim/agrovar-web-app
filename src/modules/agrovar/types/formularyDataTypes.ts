import { FormularyMetadata } from "@modules/formulary/types/formularyDataType";

export interface LocationRankingFormData extends FormularyMetadata {
  CAMPAIGN_FIELDSET: Map<string, Map<string, number>>;
  LOCATION_FIELDSET: Map<string, Map<string, number[]>>;
}
