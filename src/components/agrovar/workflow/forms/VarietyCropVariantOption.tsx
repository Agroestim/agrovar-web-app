import { PreflightOptionsType } from "@type/graphql/PreflightOptions";

type VarietyCropVariantOptionProps = {
  data: PreflightOptionsType;
};

export function VarietyCropVariantOption({
  data,
}: VarietyCropVariantOptionProps) {
  return data.preflightOptions.varietyOptions?.map((entry) => {
    return (
      <option key={entry.id} value={entry.id}>
        {entry.tradename} — {entry.variantName}
      </option>
    );
  });
}
