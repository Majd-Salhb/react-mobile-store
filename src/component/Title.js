import React, { Component } from "react";

export default class Title extends Component {
  render() {
    const { name, title } = this.props;
    return (
      <div className="row">
        <div className="col-10 mx-auto my-5 text-title text-center">
          <h1>
            {name} <strong className="text-blue">{title}</strong>
          </h1>
        </div>
      </div>
    );
  }
}
