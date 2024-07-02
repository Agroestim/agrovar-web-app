import { useReducer } from "react";
import { NavigationStackReducerType } from "../types/ReduceNavigationContextTypes";
import { reduceNavigationStackContext } from "modules/navigation/service/ReduceNavigationStackContext";

export function useNavigationReducer() {
  const [state, dispatch] = useReducer<
    NavigationStackReducerType
  >(reduceNavigationStackContext, {
    stack: []
  });

  return [state, dispatch];
}
