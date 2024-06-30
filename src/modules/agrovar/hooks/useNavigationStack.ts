import {
  NavigationStackContext,
  NavigationStackDispatchContext
} from "modules/agrovar/context/NavigationStack";
import { useContext } from "react";

export function useNavigationStack() {
  return useContext(NavigationStackContext);
}

export function useNavigationStackDispatch() {
  return useContext(NavigationStackDispatchContext);
}
