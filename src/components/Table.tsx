import { useContext } from "react";
import { TableCtx } from "../contexts/table";
import { TableProps } from "../models/props";
import getLocationFromId from "../helpers/getLocationFromId";
import getTable from "../helpers/getTable";

const Table = ({ id = "" }: TableProps) => {
  
  const data = useContext(TableCtx);

  const location = getLocationFromId(id);
  const table = getTable(data, location);
  const name = getTableName(location); location[location.length - 1] || "Data";    

}

export default Table;