export type PaginatedEntriesQueryType<T> = {
  entries: T;

  pageMeta?: {
    nextCursor: string;
  };
};

export type CampaignQueryEntryType = {
  id: number;
  reference: string;
  paperType: string;
  paperCreationYear: Date;
  locationOrigin: string;
  latitude: number;
  longitude: number;
  paperRepetition: number;
  cropVariety: string;
  humidityPercentageStat: number;
  performanceStat: number;
  relativePerformanceStat: number;
  grainCountCropStat: number;
  grainCountPerSpikeStat: number;
  weightPerThousandGrainsStat: number;
  proteinsPercentageStat: number;
  phStat: number;
}[];

export type CampaignQueryType = {
  campaignDocuments: PaginatedEntriesQueryType<CampaignQueryEntryType>;
};
