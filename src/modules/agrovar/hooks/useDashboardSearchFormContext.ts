import {
  DashboardFormularyDispatchContext,
  DashboardFormularyStateContext
} from "modules/agrovar/context/DashboardSearchForm";
import { useContext } from "react";

export function useDashboardSearchFormStateContext() {
  return useContext(DashboardFormularyStateContext);
}

export function useDashboardSearchFormDispatchContext() {
  return useContext(DashboardFormularyDispatchContext);
}
