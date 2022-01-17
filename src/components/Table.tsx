import { useContext } from "react";
import { TableCtx } from "../contexts/table";
import { TableProps } from "../models/props";
import getLocationFromId from "../helpers/getLocationFromId";
import getTable from "../helpers/getTable";

const Table = ({ id = "" }: TableProps) => {
  
  const data = useContext(TableCtx);

  const location = getLocationFromId(id);
  const table = location.length ? getTable(data, location) : data;
    

}

export default Table;