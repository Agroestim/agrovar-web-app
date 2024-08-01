export enum SelectByRelatedField {
  BY_VARIETY = "crop_variety",
  BY_LOCATION = "location_origin"
}

export interface CursorType {
  id: number;
  select_related_by_field: string;
}

export interface UsePreflightQueryHookProps {
  limit: number;
  cursor: CursorType | undefined;
  encodedCursor: string | undefined;
}
