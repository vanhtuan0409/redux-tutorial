import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../../modules/posts/action";
import PostList from "../PostList";
import TitleInput from "../TitleInput";
import BodyInput from "../BodyInput";
import BodyPreview from "../BodyPreview";

class App extends PureComponent {
  componentDidMount() {
    this.props.dispatch(loadPosts());
  }

  render() {
    const { posts, selectedPostId, selectedPost } = this.props;
    if (!selectedPost) return null;

    return (
      <div className="container" style={{ paddingTop: 30 }}>
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <PostList selectedPostId={selectedPostId} posts={posts} />
          </div>
          <div className="col-sm-12 col-md-9">
            <TitleInput post={selectedPost} />
            <BodyInput post={selectedPost} />
            <BodyPreview post={selectedPost} />
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
