import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";

import QuoteCollection from "../components/home/QuoteCollection.jsx";
import HomeGallery from "../components/home/HomeGallery.jsx";

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
    console.log(this.state.quotes)
  }

  getQuotes() {
    $.get({
      url: '/',
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
        <div>
          <h1 style="color:#FEFEFE;">  &lt;HOLACODE /&gt; YEARBOOK </h1>
        </div>
        <QuoteCollection quotes={this.state.quotes}/>
        <div>
          <h2><Link to='cohort'>GET TO KNOW OUR COHORT</Link></h2>
        </div>
        <HomeGallery />
      </div>
    );
  }
}

export default Home;
