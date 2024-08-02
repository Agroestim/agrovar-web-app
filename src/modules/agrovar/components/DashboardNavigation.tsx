import { useWorkflowSwitchHandler } from "../hooks/useWorkflowSwitchHandler";
import { WorkflowOperations } from "../types/WorkflowTypes";

export default function DashboardAsideNavigationComponent() {
  const { handleOnClick } = useWorkflowSwitchHandler();
  return (
    <>
      <aside id="ga-dashboard-navigation">
        <nav>
          <hgroup>
            <h4>{"Controles"}</h4>
          </hgroup>
          <hr />

          <details>
            <summary>{"Inicio"}</summary>
            <ul>
              <li>
                <button
                  className="outline outline-secondary"
                  onClick={handleOnClick(WorkflowOperations.ONBOARDING, {})}
                >
                  {"Portada"}
                </button>
              </li>
            </ul>
          </details>

          <details>
            <summary>{"Variedades"}</summary>
            <ul>
              <li>
                <button
                  className="outline outline-secondary"
                  onClick={handleOnClick(
                    WorkflowOperations.VARIETY_COMPARATION,
                    {}
                  )}
                >
                  {"Comparador de variedades"}
                </button>
              </li>
              <li>
                <button
                  className="outline outline-secondary"
                  onClick={handleOnClick(
                    WorkflowOperations.LOCATION_RANKING,
                    {}
                  )}
                >
                  {"Ranking por localidad"}
                </button>
              </li>
            </ul>
          </details>
        </nav>
      </aside>
    </>
  );
}
