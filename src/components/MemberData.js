import { Component } from "react";
import "./MemberStyles.css";

class MemberData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="member-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.desc}</p>
        </div>
        <div class="circular-image">
          <img src={this.props.pers1} alt="amritesh" />
        </div>
      </div>
    );
  }
}

export default MemberData;
