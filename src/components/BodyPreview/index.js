import React, { PureComponent } from "react";
import ReactMarkdown from "react-markdown";

export default class BodyPreview extends PureComponent {
  render() {
    return (
      <div className="form-group">
        <label>Body Preview</label>
        <div className="card">
          <div className="card-body">
            <ReactMarkdown source={this.props.post.body} />
          </div>
        </div>
      </div>
    );
  }
}
