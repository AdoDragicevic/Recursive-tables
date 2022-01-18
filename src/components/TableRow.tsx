import TableColumns from "./TableColumns";
import useToggle from "../hooks/useToggle";
import { useContext } from "react";
import Table from "./Table";
import { TableDispatchCtx } from "../contexts/table";
import { TableDispatchActionType } from "../models/reducer";
import { TableRowProps } from "../models/props";

const TableRow = ({ id, vals, kids, widths, isDeletable }: TableRowProps) => {
  
  const dispatch = useContext(TableDispatchCtx);
  
  const [isExpanded, toggleExpanded] = useToggle(false);

  const onEdit = () => alert("edit");

  const onDelete = () => {
    dispatch({ type: TableDispatchActionType.DELETE, id });
  }

  return (
    <>
      <div className="table__row">
        { kids.length ?
          <button className="table__btn" onClick={toggleExpanded}> {">"} </button> : 
          <div style={{ width: "7rem" }} /> 
        }
        <TableColumns vals={vals} widths={widths} onClick={onEdit} />
        { isDeletable ?
          <button className="table__btn" onClick={onDelete}> x </button> : 
          <div style={{ width: "7rem" }} /> 
        }
      </div>
      {isExpanded && kids.map(id => <Table key={id} id={id} />)}
    </>
  )
}

export default TableRow;