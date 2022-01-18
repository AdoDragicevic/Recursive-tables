import { TableColumnsProps } from "../models/props";


const TableColumns = ({ vals, widths }: TableColumnsProps) => (
  <div className="table__columns">
    {vals.map((val, i) => (
      <div key={`${val}-${i}`} style={{ minWidth: `${widths[i]}px`}}>
        {val}
      </div>
    ))}
  </div>
)

export default TableColumns;