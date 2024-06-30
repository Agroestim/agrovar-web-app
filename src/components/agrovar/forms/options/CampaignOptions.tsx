import { CampaignOptionsType } from "@type/graphql/campaignOptions";

export function CampaignOptionComponent(options: {
  campaigns: CampaignOptionsType;
}) {
  return options.campaigns.map((entry) => {
    return (
      <option key={entry.id} value={entry.id}>
        {entry.id} — {entry.reference} / {entry.dateOrigin}
      </option>
    );
  });
}
