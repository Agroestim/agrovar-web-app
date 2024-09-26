import { useWorkflowContextMutation } from "../hooks/useWorkflowContextMutation";
import { WorkflowOperations } from "../types/WorkflowTypes";

export default function DashboardAsideNavigationComponent() {
  const { handleButtonOnClick } = useWorkflowContextMutation();
  return (
    <>
      <aside id="ga-dashboard-navigation">
        <nav>
          <details>
            <summary>{"Inicio"}</summary>
            <ul>
              <li>
                <button
                  className="outline outline-secondary"
                  onClick={handleButtonOnClick(
                    WorkflowOperations.ONBOARDING,
                    {}
                  )}
                >
                  {"Portada"}
                </button>
              </li>
            </ul>
          </details>
          <hr />
          <details>
            <summary>{"Variedades"}</summary>
            <ul>
              <li>
                <button
                  className="outline outline-secondary"
                  onClick={handleButtonOnClick(
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
                  onClick={handleButtonOnClick(
                    WorkflowOperations.LOCATION_RANKING,
                    {}
                  )}
                >
                  {"Ranking por localidad"}
                </button>
              </li>
            </ul>
          </details>
          <hr />
          <details>
            <summary>{"Preferencias"}</summary>
            <ul>
              <li>
                <button
                  className="outline outline-secondary"
                  onClick={handleButtonOnClick(
                    WorkflowOperations.OFFBOARDING,
                    {}
                  )}
                >
                  {"Habilitar caracteristicas"}
                </button>
              </li>
            </ul>
          </details>
          <hr />
        </nav>
      </aside>
    </>
  );
}
