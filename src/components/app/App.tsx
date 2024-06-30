import { ApolloProvider } from "@apollo/client";
import FooterComponent from "@components/common/Footer";
import HeaderComponent from "@components/common/Header";
import { useApollo } from "@hooks/graphql/useApollo";
import type { Children } from "@type/components/Children";

export default function WrapperComponent({ children }: Children) {
  const client = useApollo();

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
