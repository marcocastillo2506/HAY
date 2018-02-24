import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";

import QuoteCollection from "../components/home/QuoteCollection.jsx";
import HomeGallery from "../components/home/HomeGallery.jsx";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h1> &lt;HOLACODE /&gt; YEARBOOK </h1>
        </div>
        <QuoteCollection />
        <div>
          <h2><Link to='cohort'>GET TO KNOW OUR COHORT</Link></h2>
        </div>
        <HomeGallery />
      </div>
    );
  }
}
