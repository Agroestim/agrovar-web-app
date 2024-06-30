import { Reducer } from "react";
import {
  DahsboardOperationType,
  DashboardContextStateType,
} from "../contexts/DashboardContextTypes";

export type DashboardContextReducerType = Reducer<
  DashboardContextStateType,
  DahsboardContextReducerActionType
>;

export enum ReducerAction {
  ADD_PENDING_OPERATION,
  REMOVE_COMPLETED_OPERATION,
}

export type DahsboardContextReducerActionType = {
  type: ReducerAction;
  payload: DahsboardOperationType;
};
