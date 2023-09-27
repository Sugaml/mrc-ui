import { Component } from "react";
import "./WhatStyles.css";

class Data extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="what-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="pic" src={this.props.img1} />
          <img alt="pic2" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default Data;
