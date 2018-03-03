import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";


import SingleQuote from "../components/home/GetSingleQuote.jsx";
import HomeGallery from "../components/home/HomeGallery.jsx";
import HolaCode from "../components/home/HolaCode.jsx";
import HeaderBar from "../components/home/HeaderBar.jsx";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <HeaderBar />
        <div>
          <HolaCode />
        </div>
        <div>
          <SingleQuote />
        </div>
        <div>
          <HomeGallery />
        </div>
      </div>
    );
  }
}
