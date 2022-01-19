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