import React, { PureComponent } from "react";

export default class BodyInput extends PureComponent {
  render() {
    const { body, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          className="form-control"
          rows={15}
          value={body}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    );
  }
}
