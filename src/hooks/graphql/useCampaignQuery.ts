import { useQuery } from "@apollo/client";
import { CAMPAIGN_QUERY } from "graphql/queries";

export function useCampaignQuery(variables: { limit: number; cursor: string }) {
  return useQuery(CAMPAIGN_QUERY, { variables });
}
