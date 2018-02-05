export default function selectedPostReducer(state = null, action) {
  if (action.type === "SELECT_POST") {
    return action.postId;
  }
  return state;
}
