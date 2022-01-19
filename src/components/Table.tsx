import { useContext, useEffect, useState } from "react";
import { TableCtx } from "../contexts/table";
import { TableProps } from "../models/props";
import { getLocationFromId, getTable, getTableName, getColumnsWidths, getTableRows } from "../helpers/table";
import EmptyTable from "./EmptyTable";
import TableHeader from "./TableHeader";


const Table = ({ id = "" }: TableProps) => {

  const data = useContext(TableCtx);
  
  const [columnsWidths, setColumnWidths] = useState("");
  
  const location = getLocationFromId(id),
        table    = getTable(data, location);
  
  useEffect( () => {
    const columnsWidths = getColumnsWidths(table).join("__$__");
    setColumnWidths(columnsWidths);
  }, [] ); // I intentionally do not want to recalcuate column widths each time table row is deleted
  
  if (!data.length) return <EmptyTable />;
  
  const name      = getTableName(location) as string,
        labels    = Object.keys(table[0].data).join("__$__"),
        tableRows = getTableRows(table, id, columnsWidths);

  return (
    <div className="table">
      <TableHeader name={name} labels={labels} widths={columnsWidths} />
      {tableRows}
    </div>
  )
}

export default Table;


// Why I'm not using useCallback?
// In this case, I think turing arr into str (with labels and columnWidths) is more optimal than 
// useCallback. Reasoning that table will always be changed in setState. Even if we have one table 
// and we delete one row we will use table.filter, which would affect useCallback dependancy arr, i.e. [table]

// Why I'm using useEffect?
// Column widths are calculated dynamically, i.e. based on longest string in any table row. If one row
// has a long name, and that row is deleted, then column widths are recalucated again and that columns width
// decreases. I found this irritating from UX perspective, and applied useEffect with empty dependancy arr.