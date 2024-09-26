import { gql } from "@apollo/client";
import { VarietyOptionsPreflightQuery } from "@modules/agrovar/types/GraphqlQueryTypes";

export const QueryVarietyOptions: VarietyOptionsPreflightQuery = gql`
  query QueryVarieties($cursor: String!, $limit: Int!) {
    preflightOptions {
      varietyOptions(cursor: $cursor, limit: $limit) {
        pageMeta {
          nextCursor
        }
        options {
          variantName
          tradename
          id
        }
      }
    }
  }
`;
