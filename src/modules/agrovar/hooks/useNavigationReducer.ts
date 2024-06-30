import { reduceNavigationStackContext } from "modules/agrovar/service/ReduceNavigationStackContext";
import { NavigationStackReducerType } from "modules/agrovar/types/ReduceNavigationContextTypes";
import { useReducer } from "react";

export function useNavigationReducer() {
  const [state, dispatch] = useReducer<
    NavigationStackReducerType
  >(reduceNavigationStackContext, {
    stack: []
  });

  return [state, dispatch];
}
