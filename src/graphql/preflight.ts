import { TypedDocumentNode, gql } from "@apollo/client";
import { PreflightOptionsType } from "@type/graphql/PreflightOptionsQuery";

export const PREFLIGHT_OPTIONS_QUERY: TypedDocumentNode<
  PreflightOptionsType,
  null
> = gql`
  query PreflightOptionsquery($limit: Int!, $cursor: String) {
    preflightOptions {
      campaignOptions(limit: $limit, cursor: $cursor) {
        options {
          cropVariant
          dateOrigin
          id
          locationOrigin
          reference
        }
      }
      varietyOptions(limit: $limit, cursor: $cursor) {
        options {
          id
          tradename
          variantName
        }
      }
      locationOptions(limit: $limit, cursor: $cursor) {
        options {
          id
          regionName
        }
      }
    }
  }
`;
