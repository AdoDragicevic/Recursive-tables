import { Table, Location } from "../models/table"

export const getLocationFromId = (id: string): Location => (
  id ? id.split("-").map( (s, i) => i % 2 === 0 ? parseInt(s) : s ) : []
)

export const getTable = (data: Table, location: Location): Table => {
  if (location.length === 0) return data;
  const indx = location[0];
  const key = location[1];
  const d = data[+indx].kids[key].records;
  return getTable(d, location.slice(2));
}