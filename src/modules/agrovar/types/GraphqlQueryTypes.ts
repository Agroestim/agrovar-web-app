import {
  PaginatedDocumentNode,
  PaginatedOptions
} from "./GraphqlPaginationTypes";

export interface VarietyOptionsQueryType {
  id: number;
  tradename: string;
  varianName: string;
}

export interface LocationOptionsQueryType {
  id: number;
  regionName: string;
}

export interface CampaignOptionsQueryType {
  id: number;
  reference: string;
  dateOrigin: string;
  locationOrigin: string;
}

/**
 * This is a final type which represents a set of varieties.
 */
export type VarietyOptionsPreflightQuery = PaginatedDocumentNode<{
  varietyOptions?: PaginatedOptions<VarietyOptionsQueryType>;
}>;

/**
 * This is a final type which represents a set of locations.
 */
export type LocationOptionsPreflightQuery = PaginatedDocumentNode<{
  locationOptions?: PaginatedOptions<LocationOptionsQueryType>;
}>;

/**
 * This is a final type which represents a set of campaigns.
 */
export type CampaignOptionsPreflightQuery = PaginatedDocumentNode<{
  campaignOptions?: PaginatedOptions<CampaignOptionsQueryType>;
}>;
