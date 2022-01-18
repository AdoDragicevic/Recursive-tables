import { Table, Location } from "../models/table"
import TableRow from "../components/TableRow";

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

export const getTableName = (location: Location) => location[location.length - 1] || "Data";

const getTxtWidth = (text: string) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d')!;
  context.font = getComputedStyle(document.body).font;
  const width = context.measureText(text).width;
  return Math.round(width) * 1.7;
}

export const getColumnsWidths = (data: Table) => {
  const widths: number[] = [];
  data.forEach( (d, indx) => {
    Object.keys(d.data).forEach((key, i) => {
      const valWidth = getTxtWidth(d.data[key]);
      const compareTo = indx === 0 ? getTxtWidth(key) : widths[i];
      widths[i] = Math.max(valWidth, compareTo);
    });
  });
  return widths;
}

export const getTableRows = (table: Table, tableId: string, columnsWidths: number[]) => (
  table.map((row, i) => {
    const rowId = tableId ? `${tableId}-${i}` : `${i}`;
    const vals = Object.values(row.data);
    const kids = Object.keys(row.kids).map(key => `${rowId}-${key}`);
    return <TableRow key={rowId} id={rowId} vals={vals} widths={columnsWidths} kidsIds={kids} isDeletable={true} />;
  })
);