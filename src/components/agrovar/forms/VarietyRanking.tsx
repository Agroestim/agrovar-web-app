import { useQuery } from "@apollo/client";
import { CampaignOptionComponent } from "./options/CampaignOptions";
import { PREFLIGHT_OPTIONS_QUERY } from "graphql/preflight";
import { LoaderComponent } from "@components/common/Loader";
import { LocationOptionsComponent } from "./options/LocationOptions";
import { VarietyOption } from "./options/VarietyOption";
import { useFormOnSubmitHandler } from "@hooks/useFormOnSubmitHandler";

/**
 *
 */
export function VarietyRanking() {
  const { handleFormOnSubmit } = useFormOnSubmitHandler();
  const { data, loading, error } = useQuery(PREFLIGHT_OPTIONS_QUERY);

  if (loading) return <LoaderComponent />;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return;

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
            <CampaignOptionComponent data={data} />
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
            <LocationOptionsComponent data={data} />
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
            <VarietyOption data={data} />
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
