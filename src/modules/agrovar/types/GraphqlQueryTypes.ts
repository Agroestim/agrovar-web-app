import { TypedDocumentNode } from "@apollo/client";
import { PaginatedOptions, PreflightOptionsWrapper } from "./GraphqlTypes";

export interface PreflightVarietyOptionsQuery {
  id: number;
  tradename: string;
  varianName: string;
}

export interface PreflightLocationOptionsQuery {
  id: number;
  regionName: string;
}

export interface PreflightCampaignOptionsQuery {
  id: number;
  reference: string;
  dateOrigin: string;
  locationOrigin: string;
}

export type PreflightDashboardOptions = PreflightOptionsWrapper<{
  varietyOptions?: PaginatedOptions<PreflightVarietyOptionsQuery>;
  locationOptions?: PaginatedOptions<PreflightLocationOptionsQuery>;
  campaignOptions?: PaginatedOptions<PreflightCampaignOptionsQuery>;
}>;

export interface TypedPreflightVariables {
  limit: number;
  cursor: string;
}

export type TypedPreflightOptions = TypedDocumentNode<
  PreflightDashboardOptions,
  TypedPreflightVariables
>;
