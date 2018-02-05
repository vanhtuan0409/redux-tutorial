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

export function changePostTitle(postId, title) {
  return {
    type: "CHANGE_POST_TITLE",
    postId,
    title
  };
}

export function changePostBody(postId, body) {
  return {
    type: "CHANGE_POST_BODY",
    postId,
    body
  };
}
