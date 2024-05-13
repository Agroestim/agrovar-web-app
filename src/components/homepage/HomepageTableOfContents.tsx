import usePreventDetailsClosure from "@hooks/usePreventDetailsClosure";

export function HomepageTableOfContentsComponent() {
  usePreventDetailsClosure();

  return (
    <aside id="ga-table-of-contents">
      <nav>
        <details open data-disabled-closure>
          <summary>Contenidos</summary>
          <ul>
            <li>
              <a href="#" className="secondary">
                Primer titulo
              </a>
            </li>
            <li>
              <a href="#" className="secondary">
                Segundo titulo
              </a>
            </li>
          </ul>
        </details>
      </nav>
    </aside>
  );
}
