import { TableReducer, TableDispatchActionType } from "../models/reducer";
import { getLocationFromId, getTable } from "../helpers/table";


const tableReducer: TableReducer = (state, action) => {
  switch(action.type) {
    case(TableDispatchActionType.DELETE):
      const copy     = JSON.parse(JSON.stringify(state)),
            location = getLocationFromId(action.id),
            rowIndx  = location.pop() as number,
            table    = getTable(copy, location);
      table.splice(rowIndx, 1);
      if (!table.length) { // if table has no more rows, delete whole table
        const tableName   = location.pop() as string,
              row         = location.pop() as number,
              parentTable = getTable(copy, location);
        delete parentTable[row].kids[tableName];
      }
      return copy;
    default:
      return state;
  }

}

export default tableReducer;