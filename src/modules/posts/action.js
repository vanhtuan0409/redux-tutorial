import postApi from "../../api/posts";
import { selectPost } from "../selectedPost/action";

export function loadPosts() {
  return async dispatch => {
    dispatch({ type: "LOAD_POST" });
    const posts = await postApi.getPosts();
    dispatch({
      type: "RECEIVED_POSTS",
      posts
    });
    dispatch(selectPost(posts[0].id));
  };
}
