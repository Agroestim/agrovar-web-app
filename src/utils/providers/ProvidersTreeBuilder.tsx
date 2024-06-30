/**
 * Represents a fixed array with whe provider element and their props.
 */
type ProviderType = [React.ElementType, Record<string, unknown>];

/**
 * A helper component that returns
 * @param props An object with the children node.
 * @returns
 */
function InitialComponent({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

/**
 * @param Accumulated
 * @param A fixed array with the provider element and their props.
 * @returns A JSX Element.
 */
function reduceProvidersArray(
  Accumulated: React.ElementType,
  [Provider, props = {}]: ProviderType
) {
  return function ({ children }: React.PropsWithChildren) {
    return (
      <Accumulated>
        <Provider {...props}>{children}</Provider>
      </Accumulated>
    );
  };
}

/**
 * @returns A React Element.
 */
export function ProvidersTreeBuilder(componentWithProps: Array<ProviderType>) {
  return componentWithProps.reduce(reduceProvidersArray, InitialComponent);
}
