export function DashboardControlsComponent() {
  return (
    <>
      <aside id="ga-dashboard-controls">
        <nav>
          <hgroup>
            <h4>Controles</h4>
            <p>Parámetros de búsqueda</p>
          </hgroup>
          <hr />
          <details>
            <summary>Variedades</summary>
            <ul>
              <li>
                <button>Comparador de variedades</button>
              </li>
              <li>
                <button>Ranking de variedades</button>
              </li>
            </ul>
          </details>
          <details>
            <summary>
              <abbr title="Interacción genotipo-ambiente">GxE</abbr>
            </summary>
            <ul>
              <li>
                <button>Regresión Finlay-Wilkinson</button>
              </li>
            </ul>
          </details>
        </nav>
      </aside>
    </>
  );
}
