import { gql } from "@apollo/client";
import { LocationOptionsPreflightQuery } from "@modules/agrovar/types/GraphqlQueryTypes";

export const QueryLocationOptions: LocationOptionsPreflightQuery = gql`
  query QueryLocations($limit: Int!, $cursor: String!) {
    preflightOptions {
      locationOptions(cursor: $cursor, limit: $limit) {
        options {
          id
          regionName
        }
        pageMeta {
          nextCursor
        }
      }
    }
  }
`;
