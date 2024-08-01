import { CursorType } from "../types/PaginationCursorType";

/**
 * An utility class for pagination cursor encoding and decoding.
 */
export class Pagination {
  static VALID_CURSOR_FIELDS = ["id", "select_by_related_field"];
  static VALID_CURSOR_VALUES = ["number", "string"];

  /**
   * Determines if a given cursor is valid.
   * @param cursor A decoded cursor.
   * @returns true then the cursor is valid, false otherwise.
   */
  public static isValidCursor(cursor: CursorType): boolean {
    const validCursorFields = Object.keys(cursor).map(
      (key) => key in Pagination.VALID_CURSOR_FIELDS
    );

    const validCursorValues = Object.values(cursor).map(
      (value) => typeof value in Pagination.VALID_CURSOR_VALUES
    );

    return (
      validCursorValues.some((truth) => truth) &&
      validCursorFields.some((truth) => truth)
    );
  }

  /**
   * Encodes the given cursor object in base64.
   * @param cursor A cursor object.
   * @returns An encoded cursor object.
   * @throws {Error} when the cursor argument given is not valid.
   */
  public static encodeCursor(cursor: CursorType): string {
    if (!Pagination.isValidCursor(cursor)) throw new Error();

    const serialized_cursor = JSON.stringify(cursor);

    return btoa(serialized_cursor);
  }

  /**
   * Decodes the given cursor encoded in base64.
   * @param cursor A encoded cursor string.
   * @returns A decoded cursor object.
   * @throws {Error} when the cursor argument given is not valid.
   */
  public static decodeCursor(cursor: string): CursorType {
    const deserialized_cursor = JSON.parse(atob(cursor));

    if (!Pagination.isValidCursor(deserialized_cursor)) throw new Error();

    return deserialized_cursor;
  }
}
