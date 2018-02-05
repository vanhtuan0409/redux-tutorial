import React, { PureComponent } from "react";

export default class TitleInput extends PureComponent {
  render() {
    const { title, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          className="form-control"
          value={title}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    );
  }
}
