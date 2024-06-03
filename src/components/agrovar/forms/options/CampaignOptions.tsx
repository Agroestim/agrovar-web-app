import { WorkflowOptionsPropType } from "@type/components/WorkflowOptionsPropType";

export function CampaignOptionComponent({ data }: WorkflowOptionsPropType) {
  return data.preflightOptions.campaingOptions?.map((entry) => {
    return (
      <option key={entry.id} value={entry.id}>
        {entry.id} — asdasdsad
      </option>
    );
  });
}
