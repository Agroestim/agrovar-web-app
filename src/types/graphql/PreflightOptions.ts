/**
 * Represents the preflight variety options query data returned by the endpoint.
 */
export type PreflightOptionsType = {
  preflightOptions: {
    varietyOptions?: {
      id: number;
      tradename: string;
      variantName: string;
    }[];

    locationOptions?: {
      id: number;
      regionName: string;
    }[];
  };
};
