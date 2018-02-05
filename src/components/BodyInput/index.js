import React, { PureComponent } from "react";

export default class BodyInput extends PureComponent {
  render() {
    const { post, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          className="form-control"
          rows={15}
          value={post.body}
          onChange={e => onChange(post.id, e.target.value)}
        />
      </div>
    );
  }
}
