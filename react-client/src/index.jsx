import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles'

import Home from "./pages/Home.jsx";
import Cohort from "./pages/Cohort.jsx";

class App extends React.Component {

render(){
  return(
    <BrowserRouter>
    <MuiThemeProvider>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/cohort" name="cohort" component={Cohort} />
    </div>
    </MuiThemeProvider>
  </BrowserRouter>
)}
};

ReactDOM.render(<App/>, document.getElementById('app'));
