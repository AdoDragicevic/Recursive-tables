import { createContext, Dispatch } from "react";
import { Table } from "../models/table";
import { TableReducer, TableDispatchAction } from "../models/reducer";
import { ChildrenProps } from "../models/props";
import tableReducer from "../reducers/table";
import useReducerAndLocStrg from "../hooks/useReducerAndLocStrg";
import seedData from "../data/seedData";

const SEED_DATA = JSON.parse(seedData);
const LOC_STRG_KEY = "ado_dragi_table"


export const TableCtx = createContext<Table>([]);
export const TableDispatchCtx = createContext<Dispatch<TableDispatchAction>>(() => {});

export const TableProvider = ({ children }: ChildrenProps) => {

  const [data, dispatch] = useReducerAndLocStrg<TableReducer>(tableReducer, SEED_DATA, LOC_STRG_KEY);
  
  return (
    <TableDispatchCtx.Provider value={dispatch}>
      <TableCtx.Provider value={data}>
        { children }
      </TableCtx.Provider>
    </TableDispatchCtx.Provider>
  )
}