import { ErrorComponentPropType } from "@type/components/ErrorComponentPropTypes";

/**
 * Represents a fully informative component that describes what happend an how solve the problem.
 */
export default function ErrorComponent(props: ErrorComponentPropType) {
  const { errorType, generalizedMessage, errorDescription } = props;
  return (
    <>
      <div className="container g-errorpage">
        <hgroup>
          <i>{errorType}</i>
          <h1>{generalizedMessage}</h1>
          <p>{errorDescription}</p>
        </hgroup>
      </div>
    </>
  );
}
