import React from "react";

const QuoteItem = (props) => (
  <div style={{color: "#f18973"}}>
    <span>{props.quote.quote}</span>
    <span>{props.quote.source}</span>
  </div>
);

export default QuoteItem;
