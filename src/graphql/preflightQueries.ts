import { gql } from "@apollo/client";

export const QUERY_VARIETIES_OPTIONS = gql`
  query ResolveCampaignDocuments($limit: Int!) {
    resolveDocument(limit: $limit) {
      cropVariety
    }
  }
`;
