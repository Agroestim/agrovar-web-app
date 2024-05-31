import { useQuery } from "@apollo/client";
import { PREFLIGHT_OPTIONS_QUERY } from "graphql/preflight";
import { VarietyOption } from "./options/VarietyOption";
import { LoaderComponent } from "@components/common/Loader";
import { CampaignOptionComponent } from "./options/CampaignOptions";

/**
 * This component represents the variety search formulary
 * used to search varieties for a post-comparison.
 */
export function VarietyComparation() {
  const { data, error, loading } = useQuery(PREFLIGHT_OPTIONS_QUERY);

  if (loading) return <LoaderComponent />;

  if (error) return <h1>{error.message}</h1>;

  if (!data) return;

  return (
    <>
      <form>
        <h1>Comparador de variedades</h1>
        <hr />
        <fieldset name="campaign-selector">
          <legend>Campaña</legend>
          <select
            name="campaign-selector"
            id="campaign-selector-element"
            defaultValue={["default-value"]}
            multiple
            required
          >
            <option value="default-value">Select an option</option>
            <CampaignOptionComponent data={data} />
          </select>
        </fieldset>

        <fieldset name="variety-selector">
          <legend>Variedades</legend>
          <select
            name="variety-selector"
            id="variety-selector-element"
            defaultValue={["default-value"]}
            multiple
            required
          >
            <option value="default-option">Select an option</option>
            <VarietyOption data={data} />
          </select>
        </fieldset>

        <fieldset name="comparation-mode-selector">
          <legend>Modo de comparación</legend>
          <label>
            <input
              type="checkbox"
              name="comparation-mode-by-location"
              id="comparation-mode-location-check"
            />{" "}
            Por localidad
          </label>

          <label>
            <input
              type="checkbox"
              name="comparation-mode-by-variety"
              id="comparation-mode-location-check"
            />{" "}
            Por variedad
          </label>
        </fieldset>

        <fieldset name="form-selector" className="grid">
          <input type="submit" value="Enviar" />
          <input type="reset" value="Reestablecer" />
        </fieldset>
      </form>
    </>
  );
}
