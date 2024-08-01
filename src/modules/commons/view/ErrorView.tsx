import { Link } from "wouter";

export interface ErrorViewProps extends Error {}

export function ErrorView(props: ErrorViewProps) {
  return (
    <>
      <main className="g-error-main" id="g-error-main">
        <div className="d-container align-center">
          <hgroup>
            <h1>{props?.name}</h1>
            <p>{"Si crees que esto es un error, puedes contactarnos."}</p>
            <span className="secondary">{props?.message}</span>
            <hr />
            <Link to="/">
              <span className="icon-normalize">⬅</span>{" "}
              {"Volver al sitio principal"}
            </Link>
          </hgroup>
        </div>
      </main>
    </>
  );
}
