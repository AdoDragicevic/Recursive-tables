import { TableColumnsProps } from "../models/props";

const TableColumns = ({ vals, widths, onClick }: TableColumnsProps) => (
  <div className="table__columns" onClick={onClick}>
    {vals.map((val, i) => (
      <div key={`${val}-${i}`} style={{ minWidth: `${widths[i]}px`}}>
        {val}
      </div>
    ))}
  </div>
)

export default TableColumns;