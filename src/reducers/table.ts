import { TableReducer, TableDispatchActionType } from "../models/reducer";
import { deleteTableRow, getLocationFromId } from "../helpers/table";


const tableReducer: TableReducer = (state, action) => {
  switch(action.type) {
    case(TableDispatchActionType.DELETE):
      const location = getLocationFromId(action.id);
      return deleteTableRow(state, location); 
    default:
      return state;
  }

}

export default tableReducer;




// Previous delete solution:

/*
      const copy     = JSON.parse(JSON.stringify(state)),
            location = getLocationFromId(action.id),
            rowIndx  = location.pop() as number,
            table    = getTable(copy, location);
      table.splice(rowIndx, 1);
      if (!table.length) { // if table has no more rows, delete whole table
        const tableName   = location.pop() as string,
              row         = location.pop() as number,
              parentTable = getTable(copy, location);
        if (parentTable[row]) delete parentTable[row].kids[tableName];
      }
      return copy;
      */