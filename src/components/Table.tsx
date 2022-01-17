import { useContext } from "react";
import { TableCtx } from "../contexts/table";
import { TableProps } from "../models/props";

const Table = ({ id = "" }: TableProps) => {
  
  const data = useContext(TableCtx);

  const location = getLocationFromId(id);

  

}

export default Table;