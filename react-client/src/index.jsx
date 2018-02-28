import React from "react";
import ReactDOM from "react-dom";
import {HashRouter,Route} from 'react-router-dom';

import Home from "./pages/Home.jsx";
import Cohort from "./pages/Cohort.jsx";
import Student from "./pages/Student.jsx";

class App extends React.Component {

render(){
  return(
    <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/cohort" name="cohort" component={Cohort} />
      <Route path="/student(/:id)" name="student" component={Student} />
    </div>
  </HashRouter>
)}
}

ReactDOM.render(<App/>, document.getElementById('app'));
