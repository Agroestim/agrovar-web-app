import { DocumentNode, TypedDocumentNode, useQuery } from "@apollo/client";
import {
  PREFLIGHT_CAMPAIGN_OPTIONS,
  PREFLIGHT_LOCATION_OPTIONS,
  PREFLIGHT_VARIETY_OPTIONS
} from "../api/gql/preflight-options";
import { PaginationVariables } from "../types/GraphqlQueryTypes";

export enum Queries {
  "PREFLIGHT_CAMPAINGS" = 1,
  "PREFLIGHT_VARIETIES" = 2,
  "PREFLIGHT_LOCATIONS" = 3
}

interface PreflightDashboardQueryHookProps {
  query: Queries;
  initialLimit: number;
  initialCursor: string;
}

/**
 * This hook provides a easy way to fetch data from the API using the
 * integrated pagination system.
 *
 * Each time a query is required, the cursor returned in the
 * previous response must be provided in the refetch method.
 *
 */
export function useDashboardPreflightQuery(
  initialProps: PreflightDashboardQueryHookProps
) {
  let preferredQuery;

  switch (initialProps.query) {
    case Queries.PREFLIGHT_CAMPAINGS:
      preferredQuery = PREFLIGHT_CAMPAIGN_OPTIONS;
      break;

    case Queries.PREFLIGHT_VARIETIES:
      preferredQuery = PREFLIGHT_VARIETY_OPTIONS;
      break;

    case Queries.PREFLIGHT_LOCATIONS:
      preferredQuery = PREFLIGHT_LOCATION_OPTIONS;
      break;
  }

  return useQuery(preferredQuery, {
    variables: {
      limit: initialProps.initialLimit,
      cursor: initialProps.initialCursor
    } as PaginationVariables
  });
}
