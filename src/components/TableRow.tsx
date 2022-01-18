import TableColumns from "./TableColumns";
import useToggle from "../hooks/useToggle";
import { useContext } from "react";
import Table from "./Table";
import { TableDispatchCtx } from "../contexts/table";
import { TableDispatchActionType } from "../models/reducer";
import { TableRowProps } from "../models/props";

const TableRow = ({ id, vals, kidsIds, widths, isDeletable }: TableRowProps) => {
  
  const dispatch = useContext(TableDispatchCtx);
  
  const [isExpanded, toggleExpanded] = useToggle(false);

  const onEdit = () => alert("edit");

  const onDelete = () => {
    dispatch({ type: TableDispatchActionType.DELETE, id });
  }

  const btn1ClassName = `table__btn table__btn--${isExpanded ? "opened" : "closed"}`;
  const btn2ClassName = "table__btn table__btn--delete";

  return (
    <>
      <div className="table__row">
        { kidsIds.length ?
          <button className={btn1ClassName} onClick={toggleExpanded}> {">"} </button> : 
          <div style={{ width: "7rem" }} /> 
        }
        <TableColumns vals={vals} widths={widths} onClick={onEdit} />
        { isDeletable ?
          <button className={btn2ClassName} onClick={onDelete}> x </button> : 
          <div style={{ width: "7rem" }} /> 
        }
      </div>
      {isExpanded && kidsIds.map(id => <Table key={id} id={id} />)}
    </>
  )
}

export default TableRow;