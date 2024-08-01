import { useDashboardPreflightQuery } from "modules/agrovar/hooks/useDashboardPreflightGraphq";
import { ErrorView } from "modules/commons/view/ErrorView";
import { LoadingView } from "modules/commons/view/LoadingView";
import { useState } from "react";

export function VarietyComparationForm() {
  const [$campaignOptions, setCampaignOption] = useState<number[]>([0]);
  const [$varietyOptions, setVarietyOptions] = useState<number[]>([0]);
  const [$locationOptions, setLocationOptions] = useState<number[]>([0]);
  const [$comparationMode, setComparationMode] = useState<boolean>(false);

  const { data, loading, error } = useDashboardPreflightQuery({
    initialCursor: "",
    initialLimit: 10
  });

  if (loading) return <LoadingView />;
  if (!data)
    return (
      <ErrorView
        message={"Error del servidor"}
        name={"El servidor no ha entredado los datos necesarios"}
      />
    );
  if (error) return <ErrorView message={""} name={""} />;

  const { campaignOptions, varietyOptions, locationOptions } =
    data.preflightOptions;

  return (
    <div id="ga-dashbard-main">
      <hgroup>
        <h1>{"Comparador de variedades"}</h1>
        <p>
          {"Dado una campaña y una o mas variedades, "}
          {"puedes determinar de forma relativa el rendimiento de estas."}
        </p>
      </hgroup>
      <hr />
      <form
        id={"ag-form"}
        name={"variety-comparation-form"}
        onSubmit={(e) => {
          e.preventDefault();
          console.log();
        }}
        onReset={(e) => {
          e.preventDefault();
          console.log("Reseted");
        }}
      >
        <fieldset name={"campaign-form-fieldset"} id={"campaign-form-fieldset"}>
          <legend>{"Campañas"}</legend>
          <select
            name={"campaign-selection"}
            id={"campaing-selection"}
            required
          >
            <option value={"0"}>{"Seleccione una opción"}</option>
            {campaignOptions?.options.map((value) => (
              <option key={value.id} value={value.id}>
                {value.reference} — {value.dateOrigin} {value.locationOrigin}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset name={"variety-form-fieldset"} id={"variety-form-fieldset"}>
          <legend>{"Variedades"}</legend>
          <select
            name={"variety-selection"}
            id={"variety-selection"}
            required
            multiple
            defaultValue={["0"]}
          >
            <option value={"0"}>{"Seleccione una opción"}</option>
            {varietyOptions?.options.map((value) => (
              <option key={value.id} value={value.id}>
                {value.tradename} — {value.varianName}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset
          name={"comparation-mode-form-fieldset"}
          id={"comparation-mode-form-fieldset"}
        >
          <legend>Modo de operacion</legend>
          <input
            type="checkbox"
            role="switch"
            name={"compare-by-variety-checkbox"}
            id={"compare-by-variety-checkbox"}
            onChange={(e) =>
              setComparationMode(e.target.value == "on" && !$comparationMode)
            }
            checked={$comparationMode}
          />
          <label htmlFor={"compare-by-variety-checkbox"}>
            {$comparationMode
              ? "Comparara por localidad"
              : "Comparar por variedad"}
          </label>
        </fieldset>

        <fieldset
          name={"location-form-fieldset"}
          id={"location-form-fieldset"}
          disabled={!$comparationMode}
        >
          <legend>{"Localidades"}</legend>
          <select
            name={"location-selection"}
            id={"location-selection"}
            required
            multiple
            defaultValue={["0"]}
          >
            <option value={"0"}>{"Seleccione una opción"}</option>
            {locationOptions?.options.map((value) => (
              <option key={value.id} value={value.id}>
                {value.regionName}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset
          id={"control-form-fieldset"}
          name={"control-form-fieldset"}
          className="d-flex"
        >
          <input type="submit" value={"Enviar formulario"} />
          <hr />
          <input type="reset" value={"Reestablecer campos"} />
        </fieldset>
      </form>
    </div>
  );
}
