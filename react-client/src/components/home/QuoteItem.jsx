import React from "react";

const QuoteItem = (props) => (
  <div>
    <span>{props.quote.quote}</span>
    <span>{props.quote.source}</span>
  </div>
);

export default QuoteItem;
//Renders with dummy data, needs bootstrap
