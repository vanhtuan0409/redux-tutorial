export default function postsReducer(state = [], action) {
  if (action.type === "RECEIVED_POSTS") {
    return action.posts;
  }
  return state;
}
