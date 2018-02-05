import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { selectPost } from "../../modules/selectedPost/action";

class PostList extends PureComponent {
  render() {
    const { selectedPostId, posts, dispatch } = this.props;
    return (
      <div className="list-group">
        {posts.map(p => (
          <button
            key={p.id}
            className={`list-group-item list-group-item-action ${
              p.id === selectedPostId ? "active" : ""
            }`}
            onClick={() => dispatch(selectPost(p.id))}
          >
            {p.title}
          </button>
        ))}
      </div>
    );
  }
}

export default connect()(PostList);
