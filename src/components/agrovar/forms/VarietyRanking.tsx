import { LoaderComponent } from "@components/common/Loader";
import { useOnSubmitHandler } from "@hooks/useOnSubmitHandler";
import { useDashboardWorkflowPreflightQuery } from "@hooks/graphql/usePreflightQuery";

/**
 *
 */
export function VarietyRanking() {
  const { handleFormOnSubmit } = useOnSubmitHandler();
  const { data, loading, error } = useDashboardWorkflowPreflightQuery({
    limit: 10,
    cursor: "",
  });

  if (loading) return <LoaderComponent />;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return <h1>No data was returned</h1>;

  return (
    <>
      <form onSubmit={handleFormOnSubmit}>
        <h1>Ranking por localidad</h1>
        <hr />

        <fieldset name="campaign-selector">
          <legend>Campaña</legend>
          <select
            name="campaign-selector"
            id="campaign-selector-element"
            multiple
            defaultValue={["default-value"]}
          >
            <option value="default-value">Select an option</option>
          </select>
        </fieldset>

        <fieldset name="location-selector">
          <legend>Localidad</legend>
          <select
            name="location-selector"
            id="location-selector-elemnt"
            multiple
            defaultValue={["default-value"]}
          >
            <option value="default-value">Select an option</option>
          </select>
        </fieldset>

        <fieldset name="variety-selector">
          <legend>Variedades</legend>
          <select
            name="variety-selector"
            id="variety-selector-element"
            defaultValue={["default-value"]}
            multiple
          >
            <option value="default-value">Select an option</option>
          </select>
        </fieldset>

        <fieldset name="form-selector" className="grid">
          <input type="submit" value="Enviar" />
          <input type="reset" value="Reestablecer" />
        </fieldset>
      </form>
    </>
  );
}
