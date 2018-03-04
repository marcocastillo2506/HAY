import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";



import GetSingleQuote from "../components/home/GetSingleQuote.jsx";
import ExtraComponent from "../components/home/ExtraComponent.jsx";

import HomeGallery from "../components/home/HomeGallery.jsx";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <HeaderBar />
        </div>
          <div id='fondoBanner'>
                <HolaCode />
          </div>
          <div id="fondoHome">
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
