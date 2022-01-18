import { getLocationFromId, getTable } from "../helpers/table";
import { TableReducer, TableDispatchActionType } from "../models/reducer";

const tableReducer: TableReducer = (state, action) => {
  switch(action.type) {
    case(TableDispatchActionType.DELETE):
      const copy     = JSON.parse(JSON.stringify(state)),
            location = getLocationFromId(action.id),
            rowIndx  = location.pop() as number,
            table    = getTable(copy, location);
      table.splice(rowIndx, 1);
      if (!table.length) {
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