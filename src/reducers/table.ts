import { getLocationFromId, getTable } from "../helpers/table";
import { TableReducer, TableDispatchActionType } from "../models/reducer";

const tableReducer: TableReducer = (state, action) => {
  switch(action.type) {
    case(TableDispatchActionType.DELETE):
      const copy = JSON.parse(JSON.stringify(state));
      const location = getLocationFromId(action.id);
      const rowIndx = location.pop() as number;
      const table = getTable(copy, location);
      table.splice(rowIndx, 1);
      if (!table.length) {
        const tableName = location.pop() as string;
        const row = location.pop() as number;
        const parentTable = getTable(copy, location);
        delete parentTable[row].kids[tableName];
      }
      console.log(state, copy);
      return copy;
    default:
      return state;
  }
}

export default tableReducer;