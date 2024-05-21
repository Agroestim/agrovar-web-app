import { WorkflowViewEnum } from "@type/context/workflow";
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
                <ControlWorkflowViewButton toView={WorkflowViewEnum.COVER_VIEW}>
                  Portada
                </ControlWorkflowViewButton>
              </li>
            </ul>
          </details>
          <details>
            <summary>Variedades</summary>
            <ul>
              <li>
                <ControlWorkflowViewButton
                  toView={WorkflowViewEnum.VARIETY_COMPARATION_VIEW}
                >
                  Comparador de variedades
                </ControlWorkflowViewButton>
              </li>
              <li>
                <ControlWorkflowViewButton
                  toView={WorkflowViewEnum.VARIETY_LOCATION_RANKING_VIEW}
                >
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
                <ControlWorkflowViewButton toView={WorkflowViewEnum.COVER_VIEW}>
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
