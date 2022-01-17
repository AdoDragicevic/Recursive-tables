export interface TableRow {
  data: Record<string, string>;
  kidns: Record<string, { records: TableRow[] }>;
}

/* Equivalent:

export type Table = TableRow[];

export interface TableRow {
  data: TableRowData;
  kids: TableRowKids;
}

export interface TableRowData {
  [key: string]: string;
}

export interface TableRowKids {
  [key: string]: TableRowKid;
}

export interface TableRowKid {
  records: Table;
}

Equivalent:

export type TablesData = TableRow[];

export interface TableRow {
  data: Columns;
  kids: Children;
}

export interface Columns {
  [columnName: string]: string;
}

export interface Children {
  [subTableName: string]: {
    records: TableRow[];
  }
}

*/