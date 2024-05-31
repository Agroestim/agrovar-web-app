import { CampaignOptions } from "./campaignOptions";
import { LocationOptionsType } from "./locationOptions";
import { VarietyOptionsType } from "./varietyOptions";

/**
 * Represents the preflight variety options query data returned by the endpoint.
 */
export type PreflightOptionsType = {
  preflightOptions: {
    varietyOptions?: VarietyOptionsType;
    locationOptions?: LocationOptionsType;
    campaingOptions?: CampaignOptions;
  };
};
