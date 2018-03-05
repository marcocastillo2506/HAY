import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";



import HeaderBar from "../components/home/HeaderBar.jsx";
import HolaCode from "../components/home/HolaCode.jsx";
import GetSingleQuote from "../components/home/GetSingleQuote.jsx";
import HomeGallery from "../components/home/HomeGallery.jsx";
import ExtraComponent from "../components/home/ExtraComponent.jsx";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <HeaderBar />
            <div id='fondoBannerMatrix'>
                  <HolaCode />
            </div>
            <div id='fondoHome'>
                <div>
                  <GetSingleQuote />
                </div>
                <div>
                  <HomeGallery />
                </div>
                <div>
                  <ExtraComponent />
                </div>
            </div>
    </div>
    );
  }
}
