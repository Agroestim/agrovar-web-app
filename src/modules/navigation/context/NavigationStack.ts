import {
  NavigationStackContextType,
  NavigationStackDispatchContextType
} from "modules/navigation/types/NavigationStackContextTypes";
import { createContext } from "react";

export const NavigationStackContext = createContext<
  NavigationStackContextType
>({ stack: [] });
export const NavigationStackDispatchContext = createContext<
  NavigationStackDispatchContextType
>({
  dispatch: () => {}
});
