import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import {
  CLIENT_NAME,
  CLIENT_VERSION,
  GRAPHQL_SERVER_URI,
} from "config/graphql";

export function useApollo() {
  const link = new HttpLink({
    uri: GRAPHQL_SERVER_URI,
    credentials: "include",
  });

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link,
    cache,
    name: CLIENT_NAME,
    version: CLIENT_VERSION,
  });

  return client;
}
