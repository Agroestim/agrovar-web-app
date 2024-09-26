import { ApolloClient, ApolloProvider } from "@apollo/client";
import {
  SERVER_LINK,
  CACHE,
  CLIENT_NAME,
  CLIENT_VERSION
} from "../api/graphql";

import { PropsWithChildren } from "react";

const ApolloGrapqhlClient = new ApolloClient({
  link: SERVER_LINK,
  cache: CACHE,
  name: CLIENT_NAME,
  version: CLIENT_VERSION
});

export function ApolloGrapqhlProvider({ children }: PropsWithChildren) {
  return (
    <ApolloProvider client={ApolloGrapqhlClient}>{children}</ApolloProvider>
  );
}
