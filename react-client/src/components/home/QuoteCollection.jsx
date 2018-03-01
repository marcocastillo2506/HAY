import React from "react";
import QuoteItem from "./QuoteItem.jsx";

const QuoteCollection = ({quotes}) => {
  var getQuotes = function(quotes) {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomIndex]);
  }
  return (
  <div>
    //{getQuotes(quotes)}
  </div>
 );
}
export default QuoteCollection;
