import { Children } from "@type/components/Children";
import { MouseEvent } from "react";

export function DashboardControlButtons({ children }: Children) {
  function HandleWorkflowController(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  return <button onClick={HandleWorkflowController}>{children}</button>;
}
