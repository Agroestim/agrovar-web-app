import { LoaderComponent } from "@components/common/Loader";
import { useDashboardWorkflowPreflightQuery } from "@hooks/graphql/usePreflightQuery";
import { useOnChangeHandler } from "@hooks/useOnChangeHandler";
import { useOnSelectChangeHandler } from "@hooks/useOnSelectChangeHandler";

enum ComparisonModeType {
  COMPARE_BY_VARIETY = "operation-mode-by-variety",
  COMPARE_BY_LOCATION = "operation-mode-by-location",
}

/**
 * This component represents the variety search formulary
 * used to search varieties for a post-comparison.
 */
export function VarietyComparation() {
  const { selectedOptions, handleSelectOnChange } = useOnSelectChangeHandler();
  const { isChecked, handleOnChange } = useOnChangeHandler({
    on: ComparisonModeType.COMPARE_BY_VARIETY,
    off: ComparisonModeType.COMPARE_BY_LOCATION,
  });

  const { data, loading, error } = useDashboardWorkflowPreflightQuery({
    limit: 10,
    cursor: "",
  });

  if (loading) return <LoaderComponent />;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return <h1>No data was returned</h1>;

  const { varietyOptions, campaignOptions, locationOptions } =
    data.preflightOptions;

  return (
    <>
      <form>
        <h1>Comparador de variedades</h1>
        <hr />

        <fieldset name="campaign-fielset">
          <legend>Campaña</legend>

          <select name="campaing-selector" id="campaign-selector" required>
            <option value={0} key={0}>
              {"Seleccione una opción"}
            </option>

            {campaignOptions?.options.map((entry) => {
              return (
                <option key={entry.id} value={entry.id}>
                  {entry.locationOrigin} {entry.dateOrigin} {entry.reference} —{" "}
                  {entry.cropVariant}
                </option>
              );
            })}
          </select>
        </fieldset>

        <fieldset name="variety-fieldset">
          <legend>Variedades</legend>

          <select
            name="variety-selector"
            id="variety-selector"
            required
            multiple
            value={selectedOptions}
            onChange={handleSelectOnChange}
          >
            <option value={0} key={0}>
              {"Seleccione una opción"}
            </option>

            {varietyOptions?.options.map((entry) => {
              return (
                <option key={entry.id} value={entry.id}>
                  {entry.tradename} {entry.variantName}
                </option>
              );
            })}
          </select>
        </fieldset>

        <fieldset name="operation-mode-fieldset">
          <legend>Modo de operación</legend>

          <input
            type="checkbox"
            name="operation-mode-by-variety"
            id="operation-mode-by-variety"
            onChange={handleOnChange}
            checked={isChecked(ComparisonModeType.COMPARE_BY_VARIETY)}
          />
          <label htmlFor="operation-mode-by-variety">
            Filtrar por variedad
          </label>

          <input
            type="checkbox"
            name="operation-mode-by-location"
            id="operation-mode-by-location"
            onChange={handleOnChange}
            checked={isChecked(ComparisonModeType.COMPARE_BY_LOCATION)}
          />
          <label htmlFor="operation-mode-by-location">
            Filtrar por localidad
          </label>
        </fieldset>

        <fieldset name="location-fieldset">
          <legend aria-disabled={!isChecked(ComparisonModeType.COMPARE_BY_LOCATION)}>Localidad</legend>

          <select
            aria-disabled={!isChecked(ComparisonModeType.COMPARE_BY_LOCATION)}
            disabled={!isChecked(ComparisonModeType.COMPARE_BY_LOCATION)}
            name="location-selector"
            id="location-selector"
            required
            multiple
          >
            <option value={0} key={0}>
              {"Seleccione una opción"}
            </option>
            {locationOptions?.options.map((entry) => {
              return (
                <option key={entry.id} value={entry.id}>
                  {entry.regionName}
                </option>
              );
            })}
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
