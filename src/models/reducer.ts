import { Reducer } from "react";
import { Records } from "./table";

export type TableReducer = Reducer<Records, TableDispatchAction>;

export type TableDispatchAction = { 
  type: TableDispatchActionType.DELETE; 
  id: string;
}

export enum TableDispatchActionType {
  "DELETE"
}