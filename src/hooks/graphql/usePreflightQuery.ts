import { useQuery } from "@apollo/client";
import { PREFLIGHT_OPTIONS_QUERY } from "graphql/preflight";

export function useDashboardWorkflowPreflightQuery(variables: {
  limit: number;
  cursor: string;
}) {
  return useQuery(PREFLIGHT_OPTIONS_QUERY, { variables });
}
