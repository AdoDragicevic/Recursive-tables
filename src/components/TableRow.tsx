import { useContext } from "react";
import { TableDispatchCtx } from "../contexts/table";
import { TableDispatchActionType } from "../models/reducer";
import { TableRowProps } from "../models/props";
import useToggle from "../hooks/useToggle";
import Table from "./Table";
import TableColumns from "./TableColumns";
import { memo } from "react";

const TableRow = ({ id, data, kids, widths, isDeletable }: TableRowProps) => {

  const dispatch = useContext(TableDispatchCtx);
  
  const [isExpanded, toggleExpanded] = useToggle(false);

  const handleDelete = () => dispatch({ type: TableDispatchActionType.DELETE, id });

  const vals = Object.values(data).join("__$__"),
        kidTablesIds = Object.keys(kids).map(key => `${id}__$__${key}`),
        kidTablesKeys = Object.keys(kids),
        btn1CSS = `table__btn table__btn--${isExpanded ? "opened" : "closed"}`,
        btn2CSS = "table__btn table__btn--delete";

  return (
    <>
      <div className="table__row">
        { kidTablesIds.length ?
          <button className={btn1CSS} onClick={toggleExpanded}> {">"} </button> : 
          <div style={{ width: "7rem" }} /> 
        }
        <TableColumns vals={vals} widths={widths} />
        { isDeletable ?
          <button className={btn2CSS} onClick={handleDelete}> x </button> : 
          <div style={{ width: "7rem" }} />
        }
      </div>
      {isExpanded && kidTablesIds.map((id, i) => <Table key={kidTablesKeys[i]} id={id} />)}
    </>
  )
}

export default memo(TableRow);