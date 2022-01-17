import { TableReducer, TableDispatchActionType } from "../models/reducer";

const tableReducer: TableReducer = (state, action) => {
  switch(action.type) {
    case(TableDispatchActionType.DELETE):
      return state;
    default:
      return state;
  }
}

export default tableReducer;