import React, { PureComponent } from "react";

export default class PostList extends PureComponent {
  render() {
    const { selectedPostId, posts, onSelect } = this.props;
    return (
      <div className="list-group">
        {posts.map(p => (
          <button
            key={p.id}
            className={`list-group-item list-group-item-action ${
              p.id === selectedPostId ? "active" : ""
            }`}
            onClick={() => onSelect(p.id)}
          >
            {p.title}
          </button>
        ))}
      </div>
    );
  }
}
