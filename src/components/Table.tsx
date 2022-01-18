import { useContext } from "react";
import { TableCtx } from "../contexts/table";
import { TableProps } from "../models/props";
import { getLocationFromId, getTable, getTableName, getColumnsWidths, getTableRows } from "../helpers/table";
import TableRow from "./TableRow";


const Table = ({ id = "" }: TableProps) => {

  const data = useContext(TableCtx);

  /*
  if (!data.length) {
    localStorage.clear();
    window.location.reload();
    // return <p className="table__no-data-msg"> Table is empty </p>;
  }
  */

  const location = getLocationFromId(id);
  const table = getTable(data, location);
  const name = getTableName(location);
  const labels = Object.keys(table[0].data);
  const columnsWidths = getColumnsWidths(table);
  const tableRows = getTableRows(table, id, columnsWidths);

  return (
    <div className="table">
      <p className="table__name"> {name} </p>
      <TableRow id={`${name}-label`} vals={labels} kidsIds={[]} isDeletable={false} widths={columnsWidths} />
      {tableRows}
    </div>
  )
}

export default Table;