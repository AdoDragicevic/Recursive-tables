import { Table, Location } from "../models/table"
import TableRow from "../components/TableRow";

export const getLocationFromId = (id: string): Location => (
  id ? id.split("__$__").map( (s, i) => i % 2 === 0 ? parseInt(s) : s ) : []
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

export const getTableRows = (table: Table, tableId: string, columnsWidths: string) => (
  table.map((row, i) => {
    const rowId = tableId ? `${tableId}__$__${i}` : `${i}`;
    const key = Object.values(row.data).join();
    return <TableRow key={key} id={rowId} data={row.data} widths={columnsWidths} kids={row.kids} isDeletable={true} />;
  })
);

export const deleteTableRow = (table: Table, location: Location): Table => {
  if (location.length === 1) {
    return table.filter((_row, i) => i !== location[0]);
  }
  const i = location[0] as number;
  const kid = location[1] as string;
  return table.map( (row, indx) => {
    if (indx !== i) return row;
    let r = {
      ...row,
      kids: {
        ...row.kids,
        [kid]: {
          records: deleteTableRow(row.kids[kid].records, location.slice(2))
        }
      }
    }
    if (!r.kids[kid].records.length) {
      const isOnlyKid = Object.keys(r.kids).length === 1;
      isOnlyKid ? r.kids = {} : delete r.kids[kid];
    }
    return r;
  });
}