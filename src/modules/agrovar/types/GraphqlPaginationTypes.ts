import { TypedDocumentNode } from "@apollo/client";

/**
 * Represents the pagination metadata used by the pagination system.
 */
export interface Paginated {
  pageMeta: { nextCursor: string };
}

export interface TVariables {
  limit: number;
  cursor: string;
}

export type TFieldNode = Record<string, Paginated | undefined>;

/**
 * Reprsents an array of paginated options.
 */
export interface PaginatedOptions<T> extends Paginated {
  options: [T];
}

/**
 * Represents an array of paginated entries.
 */
export interface PaginatedEntries<T> extends Paginated {
  entries: [T];
}

/**
 * Represents the root document of any Grapqhl query.
 */
export interface RootWrapper<TField = TFieldNode> {
  preflightOptions: TField;
}

/**
 * Represents a standar wrapper for typed document nodes.
 * @see RootWrapper
 */
export interface PaginatedDocumentNode<TQuery extends TFieldNode>
  extends TypedDocumentNode<RootWrapper<TQuery>, TVariables> {}
