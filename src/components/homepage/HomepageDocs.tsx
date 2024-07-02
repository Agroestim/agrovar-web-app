import { Link } from "wouter";

export function HomepageDocsComponent() {
  return (
    <aside id="ga-menu">
      <nav>
        <details open>
          <summary>{"Introduccion"}</summary>
          <ul>
            <li>
              <Link href="/" className="secondary">
                {"Uso de la aplicación"}
              </Link>
            </li>
            <li>
              <Link href="/" className="secondary">
                {"Reportar problema"}
              </Link>
            </li>
          </ul>
        </details>
      </nav>
    </aside>
  );
}
