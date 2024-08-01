import { gql } from "@apollo/client";
import { TypedPreflightOptions } from "../../types/GraphqlQueryTypes";

export const PREFLIGHT_OPTIONS: TypedPreflightOptions = gql`
  query PreflightOptionsquery($limit: Int!, $cursor: String!) {
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
