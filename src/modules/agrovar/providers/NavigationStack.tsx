import { NavigationStackContext } from "modules/agrovar/context/NavigationStack";
import { useNavigationStack } from "modules/agrovar/hooks/useNavigationStack";
import { ChildrenPropType } from "modules/agrovar/types/ChildrenPropType";
import {
  ScreenPropsType,
  StackPropsType,
} from "modules/agrovar/types/NavigationStackTypes";
import { useEffect } from "react";

/**
 *
 * @param props
 * @returns A React element.
 */
function Stack({ children }: StackPropsType) {
  return (
    <>
      <NavigationStackContext.Provider value={{ stack: [] }}>
        {children}
      </NavigationStackContext.Provider>
    </>
  );
}

/**
 * This represents a consumer for the NavigationStackContext.
 * @param props An object with the children node.
 * @returns A React element.
 */
function Consumer({ children }: ChildrenPropType) {
  const contextState = useNavigationStack();

  useEffect(() => console.log(contextState), [contextState]);

  return <>{children}</>;
}

/**
 * Represents an item of the navigation stack.
 *
 * @param props An object with the screen name and it's component.
 * @returns
 */
function Screen({ component }: ScreenPropsType) {
  return <>{component}</>;
}

/**
 * Represents a little navbar that display the current location where the aplication is.
 * @returns A React element.
 */
function Breadcrumbs() {
  return (
    <nav aria-label="breadcrumb">
      <ul>
        <li>
          <span className="secondary">
            Breadcrumbs are currently in development
          </span>
        </li>
      </ul>
    </nav>
  );
}

// Stack component coposite.

Stack.Consumer = Consumer;
Stack.Screen = Screen;
Stack.Breadcrumbs = Breadcrumbs;

export default Stack;
