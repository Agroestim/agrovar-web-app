import { VarietyOptionsType } from "@type/graphql/varietyOptions";

export function VarietyOption(options: { varieties: VarietyOptionsType }) {
  return options.varieties.map((entry) => {
    return (
      <option key={entry.id} value={entry.id}>
        {entry.tradename} — {entry.variantName}
      </option>
    );
  });
}
