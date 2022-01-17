export interface TableColumnsProps {
  vals: string[];
  widths: number[];
  onClick: () => void;
}

const TableColumns = ({ vals, widths, onClick }: TableColumnsProps) => (
  <div className="table__data" onClick={onClick}>
    {vals.map((val, i) => (
      <div key={`${val}-${i}`} style={{ minWidth: `${widths[i]}px`}}>
        {val}
      </div>
    ))}
  </div>
)

export default TableColumns;