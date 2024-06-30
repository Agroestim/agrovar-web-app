import { Dispatch } from "react";
import { DahsboardContextReducerActionType } from "../reducers/DashboardContextReducerTypes";
import { MetadataType } from "@type/MetadataType";

export enum DashboardOperationsType {
  ERROR_OP = "ERROR_OPREATION",
  RESULTS_OP = "RESULTS_OPERATION",

  VARIETY_COMPARATION_OP = "VARIETY_COMPARATION_OPERATION",
  LOCATION_RANKING_OP = "LOCATION_RANKING_OPERATION",

  COVER_OP = "COVER_OPERATION",
}

export interface DahsboardOperationType {
  /**
   * Represents the current process.
   */
  operation: DashboardOperationsType;

  /**
   * Represents a set of data collected in the formulary search process.
   */
  metadata: MetadataType;
}

/**
 * A container for the user flow operations.
 * This represents a stack of
 */
export type DashboardContextStateType = {
  stack: DahsboardOperationType[];
};

/**
 * Represents a container that holds the state and the dispatch
 * method for state for the context managment.
 */
export type DahsboardContextType = {
  state: DashboardContextStateType;
  dispatch: Dispatch<DahsboardContextReducerActionType>;
};
