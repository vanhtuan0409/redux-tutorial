import React, { PureComponent } from "react";
import autobind from "class-autobind";
import postApi from "../../api/posts";
import PostList from "../PostList";

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

  render() {
    const { posts, selectedPostId } = this.state;
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
          <div className="col-sm-12 col-md-9">Main content</div>
        </div>
      </div>
    );
  }
}
