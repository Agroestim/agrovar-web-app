import { ApolloProvider } from "@apollo/client";
import FooterComponent from "@components/common/Footer";
import HeaderComponent from "@components/common/Header";
import { useApollo } from "@hooks/graphql/useApollo";
import usePreventDetailsClosure from "@hooks/usePreventDetailsClosure";
import type { Children } from "@type/components/Children";
import { useEffect } from "react";

export default function WrapperComponent({ children }: Children) {
  const disableDetailsClosureEffect = usePreventDetailsClosure();
  const client = useApollo();

  useEffect(disableDetailsClosureEffect);

  return (
    <>
      <ApolloProvider client={client}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </ApolloProvider>
    </>
  );
}
