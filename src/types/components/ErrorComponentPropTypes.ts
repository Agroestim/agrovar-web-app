/**
 * Represents ErrorComponent props.
 */
export interface ErrorComponentPropType {
  /**
   * Represents which kind of error is it.
   */
  errorType: string;

  /**
   * A general message that partialy describes what happend.
   */
  generalizedMessage: string;

  /**
   * A full descriptive message explaining what happend
   * and how solve it.
   */
  errorDescription: string;
}
