import TableColumns from "./TableColumns";
import { useContext } from "react";
import { TableDispatchCtx } from "../contexts/table";
import { TableDispatchActionType } from "../models/reducer";
import { TableRowProps } from "../models/props";


const TableRow = ({ vals, isExpandable, isDeletable, widths, id }: TableRowProps) => {
  
  const dispatch = useContext(TableDispatchCtx);
  
  const [isExpanded, toggleExpanded] = useToggle(false);

  const onEdit = () => alert("edit");

  const onDelete = () => {
    dispatch({ type: TableDispatchActionType.DELETE, id });
  } 

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
    </>
  )
}

export default TableRow;