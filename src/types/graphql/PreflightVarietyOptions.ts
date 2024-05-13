/**
 * Represents the preflight variety options query data returned by the endpoint.
 */
export interface VarietyOption {
  /**
   * Represents the crop variety id
   */
  id: number;

  /**
   * Represents the crop variety tradename name.
   */
  tradename: string;

  /**
   * Represents the crop variety variant name.
   */
  variant_name: string;
}
