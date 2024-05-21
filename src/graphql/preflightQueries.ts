import { TypedDocumentNode, gql } from "@apollo/client";
import { PreflightOptionsType } from "@type/graphql/PreflightOptions";

export const QUERY_VARIETIES_OPTIONS: TypedDocumentNode<PreflightOptionsType> = gql`
  query PreflightOptions {
    preflightOptions {
      locationOptions {
        regionName
        id
      }

      varietyOptions {
        id
        tradename
        variantName
      }
    }
  }
`;
