import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from "./pages/Home.jsx";
import Cohort from "./pages/Cohort.jsx";

class App extends React.Component {

render(){
  return(
    <HashRouter>
    <MuiThemeProvider>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/cohort" name="cohort" component={Cohort} />
    </div>
    </MuiThemeProvider>
  </HashRouter>
)}
};

ReactDOM.render(<App/>, document.getElementById('app'));
