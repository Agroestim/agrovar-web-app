import { gql } from "@apollo/client";
import { CampaignOptionsPreflightQuery } from "@modules/agrovar/types/GraphqlQueryTypes";

export const QueryCampaignOptions: CampaignOptionsPreflightQuery = gql`
  query QueryCampaigns($limit: Int!, $cursor: String!) {
    preflightOptions {
      campaignOptions(limit: $limit, cursor: $cursor) {
        options {
          id
          locationOrigin
          reference
          dateOrigin
          cropVariant
        }
        pageMeta {
          nextCursor
        }
      }
    }
  }
`;
