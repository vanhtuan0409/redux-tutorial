import React, { PureComponent } from "react";
import autobind from "class-autobind";
import { connect } from "react-redux";
import { loadPosts } from "../../modules/posts/action";
import postApi from "../../api/posts";
import PostList from "../PostList";
import TitleInput from "../TitleInput";
import BodyInput from "../BodyInput";
import BodyPreview from "../BodyPreview";

class App extends PureComponent {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentDidMount() {
    this.props.dispatch(loadPosts());
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
    const { posts, selectedPostId, selectedPost } = this.props;
    if (!selectedPost) return null;

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
            <BodyPreview body={selectedPost.body} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  selectedPostId: state.selectedPostId,
  selectedPost: state.posts.filter(p => p.id === state.selectedPostId)[0]
});
export default connect(mapStateToProps)(App);
