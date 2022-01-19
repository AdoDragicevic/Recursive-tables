import { useContext } from "react";
import { TableDispatchCtx } from "../contexts/table";
import { TableDispatchActionType } from "../models/reducer";
import { TableRowProps } from "../models/props";
import useToggle from "../hooks/useToggle";
import Table from "./Table";
import TableColumns from "./TableColumns";


const TableRow = ({ id, data, kids, widths, isDeletable }: TableRowProps) => {

  const dispatch = useContext(TableDispatchCtx);
  
  const [isExpanded, toggleExpanded] = useToggle(false);

  const handleDelete = () => dispatch({ type: TableDispatchActionType.DELETE, id });

  const vals = Object.values(data);
  const kidTables = Object.keys(kids).map(key => `${id}-${key}`);

  const btn1CSS = `table__btn table__btn--${isExpanded ? "opened" : "closed"}`,
        btn2CSS = "table__btn table__btn--delete";

  return (
    <>
      <div className="table__row">
        { kidTables.length ?
          <button className={btn1CSS} onClick={toggleExpanded}> {">"} </button> : 
          <div style={{ width: "7rem" }} /> 
        }
        <TableColumns vals={vals} widths={widths} />
        { isDeletable ?
          <button className={btn2CSS} onClick={handleDelete}> x </button> : 
          <div style={{ width: "7rem" }} />
        }
      </div>
      {isExpanded && kidTables.map((id, i) => <Table key={vals.join() + i} id={id} />)}
    </>
  )
}

export default TableRow;