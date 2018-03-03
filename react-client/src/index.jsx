import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple500, grey800} from 'material-ui/styles/colors';

import Home from "./pages/Home.jsx";
import Cohort from "./pages/Cohort.jsx";

const muiTheme = getMuiTheme({
  palette: {
    textColor: purple500,
  },
  appBar: {
    height: 50,
    backgroundColor: grey800
  },
});

class App extends React.Component {

render(){
  return(
    <BrowserRouter>
    <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/cohort" name="cohort" component={Cohort} />
    </div>
    </MuiThemeProvider>
  </BrowserRouter>
)}
};

ReactDOM.render(<App/>, document.getElementById('app'));
