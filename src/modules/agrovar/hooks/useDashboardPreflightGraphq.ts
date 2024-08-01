import { useQuery } from "@apollo/client";
import { PREFLIGHT_OPTIONS } from "../api/gql/preflight-options";

interface PreflightDashboardQueryHookProps {
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
  props: PreflightDashboardQueryHookProps
) {
  return useQuery(PREFLIGHT_OPTIONS, {
    defaultOptions: {
      variables: {
        limit: props.initialLimit,
        cursor: props.initialCursor
      }
    }
  });
}
