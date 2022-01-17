import { TableReducer, TableDispatchActionType } from "../models/reducet";

const tableReducer: TableReducer = (state, action) => {
  switch(action.type) {
    case(TableDispatchActionType.DELETE):
      return state;
    default:
      return state;
  }
}

export default tableReducer;