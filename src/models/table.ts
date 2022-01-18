export type Table = TableRow[];

export type Kids = Record<string, { records: Table }>;

export type Data = Record<string, string>;

export interface TableRow {
  data: Data;
  kids: Kids;
}

export type Location = (number | string)[];