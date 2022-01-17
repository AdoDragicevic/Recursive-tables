import { Table, Location } from "../models/table";

const getTable = (data: Table, location: Location): Table => {
  if (location.length === 0) return data;
  const indx = location[0];
  const key = location[1];
  const d = data[+indx].kids[key].records;
  return getTable(d, location.slice(2));
}

export default getTable;