import { WorkflowOptionsPropType } from "@type/components/WorkflowOptionsPropType";

export function VarietyOption({ data }: WorkflowOptionsPropType) {
  return data.preflightOptions.varietyOptions?.map((entry) => {
    return (
      <option key={entry.id} value={entry.id}>
        {entry.tradename} — {entry.variantName}
      </option>
    );
  });
}
