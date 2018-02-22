import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './pages/Home.jsx';
import Cohort from './pages/Cohort.jsx';
import Student from './pages/Student.jsx';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="cohort" name="cohort1" component={Cohort}></Route>
      <Route path="Student(/:name)" name="Student" component={Student}></Route>
    </Route>
  </Router>,
app);

























ReactDOM.render(<App/>, document.getElementById('app'));
