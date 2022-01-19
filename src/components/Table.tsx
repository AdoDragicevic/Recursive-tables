import { useContext } from "react";
import { TableCtx } from "../contexts/table";
import { TableProps } from "../models/props";
import { getLocationFromId, getTable, getTableName, getColumnsWidths, getTableRows } from "../helpers/table";
import EmptyTable from "./EmptyTable";
import TableHeader from "./TableHeader";


const Table = ({ id = "" }: TableProps) => {

  const data = useContext(TableCtx);

  if (!data.length) return <EmptyTable />;
  const location = getLocationFromId(id);
  const table = getTable(data, location);
  const name = getTableName(location) as string;
  const labels = Object.keys(table[0].data);
  const columnsWidths = getColumnsWidths(table);
  const tableRows = getTableRows(table, id, columnsWidths);

  return (
    <div className="table">
      <TableHeader name={name} labels={labels} widths={columnsWidths} />
      {tableRows}
    </div>
  )
}

export default Table;