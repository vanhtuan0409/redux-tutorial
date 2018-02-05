import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { changePostBody } from "../../modules/posts/action";

class BodyInput extends PureComponent {
  render() {
    const { post, dispatch } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          className="form-control"
          rows={15}
          value={post.body}
          onChange={e => dispatch(changePostBody(post.id, e.target.value))}
        />
      </div>
    );
  }
}

export default connect()(BodyInput);
