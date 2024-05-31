import { ControlWorkflowViewButton } from "./DashboardControlButton";

export function DashboardControlsComponent() {
  return (
    <>
      <aside id="ga-dashboard-controls">
        <nav>
          <hgroup>
            <h4>Controles</h4>
          </hgroup>
          <hr />
          <details>
            <summary>Inicio</summary>
            <ul>
              <li>
                <ControlWorkflowViewButton>Portada</ControlWorkflowViewButton>
              </li>
            </ul>
          </details>
          <details>
            <summary>Variedades</summary>
            <ul>
              <li>
                <ControlWorkflowViewButton>
                  Comparador de variedades
                </ControlWorkflowViewButton>
              </li>
              <li>
                <ControlWorkflowViewButton>
                  Ranking de variedades
                </ControlWorkflowViewButton>
              </li>
            </ul>
          </details>
          <details>
            <summary>
              <abbr title="Interacción genotipo-ambiente">GxE</abbr>
            </summary>
            <ul>
              <li>
                <ControlWorkflowViewButton>
                  Regresión Finlay-Wilkinson
                </ControlWorkflowViewButton>
              </li>
            </ul>
          </details>
        </nav>
      </aside>
    </>
  );
}
