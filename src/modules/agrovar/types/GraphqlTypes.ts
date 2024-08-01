/**
 * Represents a container for the pagination cursor.
 */
export interface PageMeta {
  /**
   * The next cursor that points to a nex set of data.
   */
  nextCursor: string;
}

/**
 * Represents a container for the query that contains the query entries and the pagination
 * metadata.
 */
export interface PaginatedEntries<T = unknown> {
  /**
   * Represents a set of the entries that will queried.
   */
  entries: T[];

  /**
   * Represents a container for the pagination metadata.
   */
  pageMeta?: PageMeta;
}

/**
 * Represents a container for the query that contains the query options and the pagination
 * metadata.
 *
 * NOTE: This is only used for the preflight queries.
 */
export interface PaginatedOptions<T> {
  /**
   * Represents a set of the options that will queried.
   */
  options: T[];

  /**
   * Represents a container for the pagination metadata.
   */
  pageMeta?: PageMeta;
}

export interface PreflightOptionsWrapper<T extends Record<string, unknown>> {
  preflightOptions: T;
}
