import { DashboardContextStateType } from "@type/contexts/DashboardContextTypes";
import {
  DahsboardContextReducerActionType,
  ReducerAction,
} from "@type/reducers/DashboardContextReducerTypes";

export function dashboardContextReducer(
  prevState: DashboardContextStateType,
  action: DahsboardContextReducerActionType
): DashboardContextStateType {
  switch (action.type) {
    case ReducerAction.ADD_PENDING_OPERATION:
      return {
        stack: [...prevState.stack, action.payload],
      };

    default:
      return prevState;
  }
}
