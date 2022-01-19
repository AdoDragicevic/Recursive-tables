import { TableColumnsProps } from "../models/props";


const TableColumns = ({ vals, widths }: TableColumnsProps) => {
  const v = vals.split("-");
  const w = widths.split("-");
  return (
    <div className="table__columns">
      {v.map((val, i) => (
        <div key={`${val}-${i}`} style={{ minWidth: `${w[i]}px`}}> {val} </div>
      ))}
    </div>
  )
}

export default TableColumns;