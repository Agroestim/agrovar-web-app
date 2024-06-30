import { LocationOptionsType } from "@type/graphql/locationOptions";

export function LocationOptionsComponent(options: {
  locations: LocationOptionsType;
}) {
  return options.locations.map((entry) => {
    return (
      <option key={entry.id} value={entry.id}>
        {entry.id} — {entry.regionName}
      </option>
    );
  });
}
