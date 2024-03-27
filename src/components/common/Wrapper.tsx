import { Link } from "wouter";

import { ChildNodeProp } from "@type/ChildNode";

export default function WrapperComponent({ children }: ChildNodeProp) {
  return (
    <>
      <header>
        <div className="container">
          {/* Brand */}
          <Link to="/" aria-label="Awesome Agrovar Homepage">
            {/* TODO: Use the official brand logo asset instead of heading */}
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

          {/* Menu */}
          <nav>
            {/* Application links */}
            <ul>
              <li className="hidde-before-sm">
                <Link
                  to="#agrovar"
                  aria-label="Agrovar Application"
                  className="contrast"
                >
                  Agrovar
                </Link>
              </li>

              <li className="hidde-before-sm">
                <Link
                  to="#docs"
                  aria-label="Documentation"
                  className="contrast"
                >
                  Docs
                </Link>
              </li>
            </ul>

            {/* Social links */}
            <ul className="social-links">
              <li>
                <a href="#twitter">ico</a>
              </li>
              <li>
                <a href="#github">ico</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {children}

      <footer>
        <div className="container">
          <section></section>
          <section></section>
        </div>
      </footer>
    </>
  );
}
