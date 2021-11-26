import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./Photowall";

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={"Photowall"} />
        <Photowall {...this.props} />
      </div>
    );
  }
}

export default Main;
