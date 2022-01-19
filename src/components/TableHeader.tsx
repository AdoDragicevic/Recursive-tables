import { TableHeaderProps } from "../models/props";
import TableColumns from "./TableColumns";

const TableHeader = ({ name, labels, widths }: TableHeaderProps) => (
  <>
    <p className="table__name">{ name }</p>
    <div className="table__labels">
      <TableColumns vals={labels} widths={widths} />
    </div>
  </>
)

export default TableHeader;