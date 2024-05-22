import { useQuery } from "@apollo/client";
import { LoaderComponent } from "@components/common/Loader";
import { PREFLIGHT_OPTIONS_QUERY } from "graphql/preflight";
import { VarietyCropVariantOption } from "./VarietyCropVariantOption";

export function VarietyComparation() {
  const { data, error, loading } = useQuery(PREFLIGHT_OPTIONS_QUERY);

  if (loading) return <LoaderComponent></LoaderComponent>;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return;

  return (
    <>
      <form>
        <h1>Comparador de variedades</h1>
        <hr />
        <fieldset name="variety-selector">
          <legend>Variedades</legend>
          <select
            name="variety-selector"
            id="location-selector-element"
            defaultValue={["default-value"]}
            multiple
          >
            <option value="default-option">Select an option</option>
            <VarietyCropVariantOption data={data} />
          </select>
        </fieldset>

        <fieldset name="campaign-selector">
          <legend>Campaña</legend>
          <select
            name="campaign-selector"
            id="campaign-selector-element"
            defaultValue={["default-option"]}
            multiple
          >
            <option value="default-option">Select an option</option>
          </select>
        </fieldset>

        <fieldset name="location-selector">
          <legend>Localidad</legend>
          <select
            name="location-selector"
            id="location-selector-element"
            defaultValue={"default-option"}
          >
            <option value="default-option">Select an option</option>
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
