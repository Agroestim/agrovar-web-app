import { SwitchThemeButtonComponent } from "modules/commons/view/SwitchTheme";
import { Link } from "wouter";

export function HomepageHeaderComponent() {
  return (
    <header>
      <div className="container">
        <Link to="/" aria-label="Awesome homepage">
          <picture>
            <source
              srcSet="agrovar-brand-logo-sm.svg"
              type="image/svg+xml"
              media="(min-width:576px)"
            />
            <source
              srcSet="agrovar-brand-logo-md.svg"
              type="image/svg+xml"
              media="(min-width:768px)"
            />
            <source
              srcSet="agrovar-brand-logo-lg.svg"
              type="image/svg+xml"
              media="(min-width:1024px)"
            />
            <img
              src="agrovar-brand-logo-std.svg"
              alt="AGROVAR_BRAND_LOGO_SVG"
            />
          </picture>
        </Link>

        <nav>
          <ul className="">
            <li>
              <Link to="/app" className="contrast">
                Agrovar
              </Link>
            </li>

            <li>
              <Link to="#docs" className="contrast">
                Docs
              </Link>
            </li>
          </ul>
          <ul className="rule-hidde-before-sm">
            <li>
              <a
                href="#twitter"
                rel="noopener noreferrer"
                aria-label="Twitter Account"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#github"
                rel="noopener noreferrer"
                aria-label="Twitter Account"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </li>

            <li>
              <SwitchThemeButtonComponent />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
