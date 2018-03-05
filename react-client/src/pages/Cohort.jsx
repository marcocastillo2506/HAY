import $ from "jquery";
import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import HeaderBar from "../components/home/HeaderBar.jsx";
import Profile from "./Profile.jsx"
import CohortLayout from "./CohortLayout.jsx"

export default class Cohort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: [],
      students: []
    };
    this.getCohortProfiles = this.getCohortProfiles.bind(this);
  }

  componentDidMount(){
    this.getCohortProfiles();
  }

  getCohortProfiles() {
    $.ajax({
      type:'GET',
      url: '/cohort',
      success: function(data) {
        this.setState({
          mentors: data[0],
          students: data[1]
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.error(err)
      }.bind(this)
    });
  }

  render(){
    return(
      <div>
        <HeaderBar />
        <div id='fondoBannerMatrix' className="cohort-content">
          <Switch>
            <Route exact path={this.props.match.path}
              render={(props) => <CohortLayout {...props} data={this.state} /> } />
            <Route path={`${this.props.match.path}/:id`}
              render={(props) => <Profile {...props} data={this.state} /> } />
          </Switch>
        </div>
      </div>
    )
  }
};
