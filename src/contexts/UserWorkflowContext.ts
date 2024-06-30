import {
  DahsboardContextType,
  DashboardOperationsType,
} from "@type/contexts/DashboardContextTypes";
import { createContext } from "react";

/**
 * Represents the context
 */
export const UserWorkflowContext = createContext<DahsboardContextType>({
  state: {
    stack: [
      {
        operation: DashboardOperationsType.COVER_OP,
        metadata: {},
      },
    ],
  },

  dispatch: () => {},
});
