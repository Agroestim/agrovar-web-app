import {
  FormularyContextDispatchType,
  FormularyContextStateType
} from "modules/agrovar/types/FormularyContextTypes";
import { createContext } from "react";

export const DashboardFormularyStateContext = createContext<
  FormularyContextStateType
>({ entries: [] });
export const DashboardFormularyDispatchContext = createContext<
  FormularyContextDispatchType
>({ dispatch: () => {} });
