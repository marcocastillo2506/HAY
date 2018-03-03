import React from "react";
import $ from "jquery";



class GetSingleQuote extends React.Component {
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

  getQuotes() {
    $.ajax({
      type:'GET',
      url: '/home',
      success: (data) => {
        data = data.map((quoteObj) => [quoteObj.quote, quoteObj.source]);
        setInterval(() => this.randomQuote(data), 5000);
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



export default GetSingleQuote;
