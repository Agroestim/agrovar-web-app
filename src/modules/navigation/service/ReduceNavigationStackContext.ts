import { NavigationStackContextType } from "../types/NavigationStackContextTypes";
import {
  ReducerActionNavigationStackType,
  NavigationStackReducerAction
} from "../types/ReduceNavigationContextTypes";

/**
 * A function that handle a dispatch event and returns a
 * new state with applied actions.
 *
 * @param prevState The previous state.
 * @param action A dispatch action.
 * @returns A new state.
 */
export function reduceNavigationStackContext(
  prevState: NavigationStackContextType,
  action: ReducerActionNavigationStackType
): NavigationStackContextType {
  switch (action.type) {
    case NavigationStackReducerAction.ADD_ITEM:
      return { stack: [...prevState.stack, action.payload.stack] };

    case NavigationStackReducerAction.REMOVE_ITEM:
      return {
        stack: [...prevState.stack].filter(
          value => value.name != action.payload.stack.name
        )
      };

    default:
      return prevState;
  }
}
