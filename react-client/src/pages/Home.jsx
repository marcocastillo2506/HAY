import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";


import QuoteCollection from "../components/home/QuoteCollection.jsx";
import HomeGallery from "../components/home/HomeGallery.jsx";
import HolaCode from "../components/home/HolaCode.jsx";
import AppBarTest from "../components/home/AppBar.jsx";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
    this.getQuotes = this.getQuotes.bind(this);
  }

  componentDidMount(){
    this.getQuotes();
  }

  getQuotes() {
    $.ajax({
      type:'GET',
      url: '/home',
      success: function(data) {
        this.setState({ quotes: data })
      }.bind(this),
      error: function(xhr, status, err){
        console.error(err)
      }.bind(this)
    });
  }

  render() {
    return (
      <div>

          <AppBarTest />
    
      <div id='fondoHome'>
        <div>
          <HolaCode />
        </div>
        <div>
          <QuoteCollection quotes={this.state.quotes}/>
        </div>
        <div>
          <HomeGallery />
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
