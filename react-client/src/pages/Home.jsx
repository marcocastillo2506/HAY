import React from "react";
import { Link } from "react-router";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <h1>Render Basic View</h1>
          <h2 href=''>GET TO KNOW OUR COHORT</h2>
      </div>
    )
  }
}
