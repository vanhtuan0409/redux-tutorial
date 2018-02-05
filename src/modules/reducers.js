import { combineReducers } from "redux";
import selectedPostReducer from "./selectedPost/reducer";

export default combineReducers({
  selectedPost: selectedPostReducer
});
