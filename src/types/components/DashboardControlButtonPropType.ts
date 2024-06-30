import { ReactNode } from "react";
import { DashboardOperationsType } from "../contexts/DashboardContextTypes";

/**
 *
 */
export type DashboardControlButtonProps = {
  operation: DashboardOperationsType;
  children: ReactNode;
};
