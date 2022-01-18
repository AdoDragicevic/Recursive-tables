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

  const onDelete = () => {
    if (isExpanded) toggleExpanded();
    dispatch({ type: TableDispatchActionType.DELETE, id });
  }

  const btn1CSS = `table__btn table__btn--${isExpanded ? "opened" : "closed"}`,
        btn2CSS = "table__btn table__btn--delete";

  return (
    <>
      <div className="table__row">

        { kidsIds.length !== 0 ?
          <button className={btn1CSS} onClick={toggleExpanded}> {">"} </button> : 
          <div style={{ width: "7rem" }} /> 
        }
      
        <TableColumns vals={vals} widths={widths} />
        
        { isDeletable ?
          <button className={btn2CSS} onClick={onDelete}> x </button> : 
          <div style={{ width: "7rem" }} /> 
        }
        
      </div>
    
      {isExpanded && kidsIds.map(id => <Table key={id} id={id} />)}
    </>
  )
}

export default TableRow;