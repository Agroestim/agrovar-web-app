import { WorkflowOptionsPropType } from "@type/components/WorkflowOptionsPropType";

export function LocationOptionsComponent({ data }: WorkflowOptionsPropType) {
  return data.preflightOptions.locationOptions?.map((entry) => {
    return (
      <option key={entry.id} value={entry.id}>
        {entry.id} — {entry.regionName}
      </option>
    );
  });
}
