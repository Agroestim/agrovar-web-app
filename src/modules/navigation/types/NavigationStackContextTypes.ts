export type NavigationStackItemType = {
  name: string;

  component: React.ReactElement;
};

export interface NavigationStackContextType {
  stack: NavigationStackItemType[];
}

export interface NavigationStackDispatchContextType {
  /**
   * A fucntion that updates the context state.
   */
  dispatch: React.Dispatch<NavigationStackContextType>;
}
