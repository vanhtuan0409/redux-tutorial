import React, { PureComponent } from "react";

export default class TitleInput extends PureComponent {
  render() {
    const { post, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          className="form-control"
          value={post.title}
          onChange={e => onChange(post.id, e.target.value)}
        />
      </div>
    );
  }
}
