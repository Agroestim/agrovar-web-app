import { useUserWorkflowContextQuickDispatch } from "@hooks/useUserWorkflowContextQuickDispatch";
import { DashboardControlButtonProps } from "@type/components/DashboardControlButtonPropType";
import { MouseEvent } from "react";

export function UpdateDashboardProcessButton({
  operation,
  children,
}: DashboardControlButtonProps) {
  const { lazyDashboardContextOperationUpdate } =
    useUserWorkflowContextQuickDispatch();

  function HandleWorkflowController(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    lazyDashboardContextOperationUpdate(operation, {});
  }

  return <button onClick={HandleWorkflowController}>{children}</button>;
}
