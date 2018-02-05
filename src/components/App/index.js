import React, { PureComponent } from "react";
import autobind from "class-autobind";
import postApi from "../../api/posts";
import PostList from "../PostList";
import TitleInput from "../TitleInput";
import BodyInput from "../BodyInput";

export default class App extends PureComponent {
  state = {
    posts: [],
    selectedPostId: undefined
  };

  constructor(props) {
    super(props);
    autobind(this);
  }

  async componentDidMount() {
    const posts = await postApi.getPosts();
    this.setState({
      posts,
      selectedPostId: posts[0].id
    });
  }

  onSelectPost(postId) {
    this.setState({
      selectedPostId: postId
    });
  }

  onChangeSelectedPostTitle(title) {
    const { posts, selectedPostId } = this.state;
    const newPosts = posts.map(p => {
      if (p.id !== selectedPostId) return p;
      return Object.assign({}, p, {
        title
      });
    });
    this.setState({
      posts: newPosts
    });
  }

  onChangeSelectedPostBody(body) {
    const { posts, selectedPostId } = this.state;
    const newPosts = posts.map(p => {
      if (p.id !== selectedPostId) return p;
      return Object.assign({}, p, {
        body
      });
    });
    this.setState({
      posts: newPosts
    });
  }

  render() {
    const { posts, selectedPostId } = this.state;
    if (!selectedPostId) return null;

    const selectedPost = posts.filter(p => p.id === selectedPostId)[0];

    return (
      <div className="container" style={{ paddingTop: 30 }}>
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <PostList
              selectedPostId={selectedPostId}
              posts={posts}
              onSelect={this.onSelectPost}
            />
          </div>
          <div className="col-sm-12 col-md-9">
            <TitleInput
              title={selectedPost.title}
              onChange={this.onChangeSelectedPostTitle}
            />
            <BodyInput
              body={selectedPost.body}
              onChange={this.onChangeSelectedPostBody}
            />
          </div>
        </div>
      </div>
    );
  }
}
