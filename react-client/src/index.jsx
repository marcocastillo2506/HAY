import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <h1>Render Basic View</h1>
          <h2 href=''>GET TO KNOW OUR COHORT</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

























ReactDOM.render(<App/>, document.getElementById('app'));
