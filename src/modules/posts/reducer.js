export default function postsReducer(state = [], action) {
  if (action.type === "RECEIVED_POSTS") {
    return action.posts;
  }
  if (action.type === "CHANGE_POST_TITLE") {
    return state.map(p => {
      if (p.id !== action.postId) return p;
      return Object.assign({}, p, {
        title: action.title
      });
    });
  }
  if (action.type === "CHANGE_POST_BODY") {
    return state.map(p => {
      if (p.id !== action.postId) return p;
      return Object.assign({}, p, {
        body: action.body
      });
    });
  }
  return state;
}
