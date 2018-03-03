import React from "react";
import $ from "jquery";

export default class GetSingleQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    }
    this.randomQuote = this.randomQuote.bind(this);
  }

  componentDidMount(){
    this.getQuotes();
  }

  componentWillUnmount(){
    clearInterval(this.quoteTimer)
  }

  getQuotes() {
    $.ajax({
      type:'GET',
      url: '/home',
      success: (data) => {
        data = data.map((quoteObj) => [quoteObj.quote, quoteObj.source]);
        this.quoteTimer = setInterval(() => this.randomQuote(data), 2000);
      },
      error: (xhr, status, err) => {
        console.error(err)
      }
    });
  }

  randomQuote(quotes) {
    let randomIdx = Math.floor(Math.random() * quotes.length)
    this.setState({ quote: quotes[randomIdx] })
  }

  render() {
    return (
      <div>
        {this.state.quote}
      </div>
    );
  }
}
