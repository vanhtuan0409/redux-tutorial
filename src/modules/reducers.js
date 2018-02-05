import { combineReducers } from "redux";
import selectedPostReducer from "./selectedPost/reducer";
import postsReducer from "./posts/reducer";

export default combineReducers({
  selectedPostId: selectedPostReducer,
  posts: postsReducer
});
