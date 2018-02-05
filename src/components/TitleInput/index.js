import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { changePostTitle } from "../../modules/posts/action";

class TitleInput extends PureComponent {
  render() {
    const { post, dispatch } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          className="form-control"
          value={post.title}
          onChange={e => dispatch(changePostTitle(post.id, e.target.value))}
        />
      </div>
    );
  }
}

export default connect()(TitleInput);
