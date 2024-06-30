import { Reducer } from "react";
import {
  NavigationStackContextType,
  NavigationStackItemType,
} from "./NavigationStackContextTypes";

export enum NavigationStackReducerAction {
  ADD_ITEM,
  REMOVE_ITEM,
}

export type ReduceNavigationStackPayloadType = {
  stack: NavigationStackItemType;
};

export type ReducerActionNavigationStackType = {
  type: NavigationStackReducerAction;
  payload: ReduceNavigationStackPayloadType;
};

export type NavigationStackReducerType = Reducer<
  NavigationStackContextType,
  ReducerActionNavigationStackType
>;
