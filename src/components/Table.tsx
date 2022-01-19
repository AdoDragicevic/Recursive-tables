import { useContext } from "react";
import { TableCtx } from "../contexts/table";
import { TableProps } from "../models/props";
import { getLocationFromId, getTable, getTableName, getColumnsWidths, getTableRows } from "../helpers/table";
import EmptyTable from "./EmptyTable";
import TableHeader from "./TableHeader";


const Table = ({ id = "" }: TableProps) => {

  console.log("Render table", id)

  const data = useContext(TableCtx);

  if (!data.length) return <EmptyTable />;
  const location = getLocationFromId(id);
  const table = getTable(data, location);
  const name = getTableName(location) as string;
  const labels = Object.keys(table[0].data).join("__$__");
  const columnsWidths = getColumnsWidths(table).join("__$__");
  const tableRows = getTableRows(table, id, columnsWidths);

  return (
    <div className="table">
      <TableHeader name={name} labels={labels} widths={columnsWidths} />
      {tableRows}
    </div>
  )
}

export default Table;

// In this case, I think turing arr into str (with labels and columnWidths) is more optimal than 
// useCallback. Reasoning that table will always be changed in setState. Even if we have one table 
// and we delete one row we will use table.filter, which would change the useCallback dependancy arr, i.e. [table]