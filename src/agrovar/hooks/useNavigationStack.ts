import { NavigationStackContext } from "agrovar/context/NavigationStack";
import { useContext } from "react";

export function useNavigationStack() {
  return useContext(NavigationStackContext);
}
