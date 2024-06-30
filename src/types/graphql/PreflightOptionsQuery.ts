import { CampaignOptionsType } from "./campaignOptions";
import { LocationOptionsType } from "./locationOptions";
import { VarietyOptionsType } from "./varietyOptions";

export type PaginatedOptionsQueryType<T> = {
  options: T;

  pageMeta?: {
    nextCursor: string;
  };
};

/**
 * Represents the preflight variety options query data returned by the endpoint.
 */
export type PreflightOptionsType = {
  preflightOptions: {
    varietyOptions?: PaginatedOptionsQueryType<VarietyOptionsType>;
    locationOptions?: PaginatedOptionsQueryType<LocationOptionsType>;
    campaignOptions?: PaginatedOptionsQueryType<CampaignOptionsType>;
  };
};
