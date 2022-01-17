import TableColumns from "./TableColumns";
import useToggle from "../hooks/useToggle";
import { ReactNode, useContext, useEffect, useState } from "react";
import { TableDispatchCtx } from "../contexts/table";
import { TableDispatchActionType } from "../models/reducer";
import { TableRowProps } from "../models/props";
import Table from "../components/Table";
import { getChildTablesIds } from "../helpers/table";

const TableRow = ({ vals, isExpandable, isDeletable, widths, id }: TableRowProps) => {
  
  const dispatch = useContext(TableDispatchCtx);
  
  const [isExpanded, toggleExpanded] = useToggle(false);
  const [childTables, setChildTables] = useState<ReactNode[]>([]);

  const onEdit = () => alert("edit");

  const onDelete = () => {
    dispatch({ type: TableDispatchActionType.DELETE, id });
  }

  /*
  useEffect( () => {
    if (isExpanded) {
      const idList = getChildTablesIds(id);
      const tables = idList.map(id => <Table key={id} id={id} />);
      setChildTables(tables);
    }
  }, [isExpanded, isExpandable, id]);
  */
 
  return (
    <>
      <div className="table__row">
        { isExpandable ?
          <button className="table__btn" onClick={toggleExpanded}> {">"} </button> : 
          <div style={{ width: "7rem" }} /> 
        }
        <TableColumns vals={vals} widths={widths} onClick={onEdit} />
        { isDeletable ?
          <button className="table__btn" onClick={onDelete}> x </button> : 
          <div style={{ width: "7rem" }} /> 
        }
      </div>
      {childTables}
    </>
  )
}

export default TableRow;