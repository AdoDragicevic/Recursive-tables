import { Reducer } from "react";
import { Table } from "./table";

export type TableReducer = Reducer<Table, TableDispatchAction>;

export type TableDispatchAction = { 
  type: TableDispatchActionType.DELETE; 
  id: string;
}

export enum TableDispatchActionType {
  "DELETE"
}