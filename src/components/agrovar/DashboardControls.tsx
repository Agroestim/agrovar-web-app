import { DashboardOperationsType } from "@type/contexts/DashboardContextTypes";
import { UpdateDashboardProcessButton } from "./flow/UpdateDashboardProcessButton";

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
                <UpdateDashboardProcessButton
                  operation={DashboardOperationsType.COVER_OP}
                >
                  Portada
                </UpdateDashboardProcessButton>
              </li>
            </ul>
          </details>
          <details>
            <summary>Variedades</summary>
            <ul>
              <li>
                <UpdateDashboardProcessButton
                  operation={DashboardOperationsType.VARIETY_COMPARATION_OP}
                >
                  Comparador de variedades
                </UpdateDashboardProcessButton>
              </li>
              <li>
                <UpdateDashboardProcessButton
                  operation={DashboardOperationsType.LOCATION_RANKING_OP}
                >
                  Ranking de variedades
                </UpdateDashboardProcessButton>
              </li>
            </ul>
          </details>
          <details>
            <summary>
              <abbr title="Interacción genotipo-ambiente">GxE</abbr>
            </summary>
            <ul>
              <li>
                <UpdateDashboardProcessButton
                  operation={DashboardOperationsType.ERROR_OP}
                >
                  Regresión Finlay-Wilkinson
                </UpdateDashboardProcessButton>
              </li>
            </ul>
          </details>
        </nav>
      </aside>
    </>
  );
}
