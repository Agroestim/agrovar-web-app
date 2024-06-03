import { DashboardControlButtons } from "./DashboardFlowButtons";

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
                <DashboardControlButtons>Portada</DashboardControlButtons>
              </li>
            </ul>
          </details>
          <details>
            <summary>Variedades</summary>
            <ul>
              <li>
                <DashboardControlButtons>
                  Comparador de variedades
                </DashboardControlButtons>
              </li>
              <li>
                <DashboardControlButtons>
                  Ranking de variedades
                </DashboardControlButtons>
              </li>
            </ul>
          </details>
          <details>
            <summary>
              <abbr title="Interacción genotipo-ambiente">GxE</abbr>
            </summary>
            <ul>
              <li>
                <DashboardControlButtons>
                  Regresión Finlay-Wilkinson
                </DashboardControlButtons>
              </li>
            </ul>
          </details>
        </nav>
      </aside>
    </>
  );
}
