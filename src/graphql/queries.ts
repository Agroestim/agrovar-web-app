import { TypedDocumentNode, gql } from "@apollo/client";
import { CampaignQueryType } from "@type/graphql/CampaignQuery";

export const CAMPAIGN_QUERY: TypedDocumentNode<
  CampaignQueryType,
  { limit: number; cursor: string }
> = gql`
  query CampaignQuery($limit: Int!, $cursor: String) {
    campaignDocuments(limit: $limit, cursor: $cursor) {
      entries {
        id
        cropVariety
        grainCountCropStat
        grainCountPerSpikeStat
        humidityPercentageStat
        latitude
        locationOrigin
        longitude
        paperCreationYear
        paperRepetition
        paperType
        performanceStat
        phStat
        proteinsPercentageStat
        reference
        relativePerformanceStat
        weightPerThousandGrainsStat
      }
      pageMeta {
        nextCursor
      }
    }
  }
`;
