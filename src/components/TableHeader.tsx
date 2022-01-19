import { TableHeaderProps } from "../models/props";
import TableColumns from "./TableColumns";

const TableHeader = ({ labels, widths }: TableHeaderProps) => (
  <div className="table__header">
    <div style={{ width: "7rem" }} />
    <TableColumns vals={labels} widths={widths} />
    <div style={{ width: "7rem" }} />
  </div>
)

export default TableHeader;