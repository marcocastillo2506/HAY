import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Cohort from './pages/Cohort.jsx';
import Student from './pages/Student.jsx';

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="cohort" name="cohort1" component={Cohort}></Route>
      <Route path="Student(/:name)" name="Student" component={Student}></Route>
    </Route>
  </BrowserRouter>,
app);

























ReactDOM.render(<App/>, document.getElementById('app'));
