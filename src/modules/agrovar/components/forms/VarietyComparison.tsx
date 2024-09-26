import { useQuery } from "@apollo/client";
import { QueryCampaignOptions } from "@modules/agrovar/api/gql/QueryCampaignOptions";
import { useState } from "react";

export function VarietyComparisonForm() {
  const [campaingOptions, setCampaignOptions] = useState([]);
  const [varietyOptions, setVarietyOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);

  const { data, loading, error } = useQuery(QueryCampaignOptions, {
    variables: { limit: 100, cursor: "" }
  });

  if (loading)
    return (
      <div id="ga-dahsboard-main">
        <span className="spinner"></span>
      </div>
    );
  if (!data)
    return (
      <div id="ga-dahsboard-main">
        <hgroup>
          <h1>Ups. Ha ocurrido un error :(</h1>
          <p>El servidor no ha proporsionado los datos necesarios.</p>
        </hgroup>
      </div>
    );
  if (error)
    return (
      <div id="ga-dahsboard-main">
        <hgroup>
          <h1>Ups. Ha ocurrido un error inesperado :(</h1>
          <p>
            No te preocupes, este error pudo haberse producido por un error en
            nuestros servidores. {""}
            Puedes intentar solucionar el problema con los siguientes pasos a
            continuación:
          </p>
        </hgroup>
        <div className="container-fluid">
          <ol>
            <li>
              <small>
                Intenta recargar la pagina haciendo <kbd>CTRL</kbd>+
                <kbd>F5</kbd> o <kbd>CTRL</kbd>+<kbd>R</kbd>
              </small>
            </li>
          </ol>
        </div>
      </div>
    );

  const { campaignOptions } = data.preflightOptions;

  return (
    <div id="ga-dashboard-main">
      <hgroup>
        <h1>{"Comparador de variedades"}</h1>
      </hgroup>
      <form
        id={"ag-form"}
        name={"variety-comparation-form"}
        // onSubmit={handlers.handleFormSubmission}
        // onReset={handlers.handleFormReseting}
      >
        <fieldset name={"campaign-form-fieldset"} id={"campaign-form-fieldset"}>
          <legend>{"Campañas"}</legend>
          <select
          // name={"campaign-selection"}
          // id={"campaing-selection"}
          // required
          // onSelect={}
          >
            <option value={"0"}>{"Seleccione una opción"}</option>]
            {campaignOptions?.options.map((value) => (
              <option key={value.id} value={value.id}>
                {value.reference} — {value.dateOrigin} {value.locationOrigin}
              </option>
            ))}
            <option value="-1">{"Cargar mas"}</option>
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

            {/* {varietyOptions?.options.map((value) => (
              <option key={value.id} value={value.id}>
                {value.tradename} — {value.varianName}
              </option>
            ))} */}

            <option value="-1">{"Cargar mas"}</option>
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
            // onChange={handlers.toggleComparisonMode}
            // checked={states.comparisonMode}
          />
          <label htmlFor={"compare-by-variety-checkbox"}>
            {/* {states.comparisonMode
              ? "Comparara por localidad"
              : "Comparar por variedad"} */}
          </label>
        </fieldset>

        {/* {states.comparisonMode ? (
          <fieldset
            name={"location-form-fieldset"}
            id={"location-form-fieldset"}
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

              <option value="-1">{"Cargar mas"}</option>
            </select>
          </fieldset>
        ) : null} */}

        <fieldset id={"control-form-fieldset"} name={"control-form-fieldset"}>
          <input type="submit" value={"Enviar formulario"} />
          <input type="reset" value={"Reestablecer campos"} />
        </fieldset>
      </form>
    </div>
  );
}
