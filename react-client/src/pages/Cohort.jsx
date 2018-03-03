import $ from "jquery";
import React from 'react';
import { Route, Link } from 'react-router-dom';

import HolaCode from '../components/home/HolaCode.jsx';
import HeaderBar from "../components/home/HeaderBar.jsx";

import MentorList from "../components/cohort/MentorList.jsx";
import StudentList from "../components/cohort/StudentList.jsx";
import ImageCollections from "../components/cohort/ImageCollections.jsx";
import Profile from "./Profile.jsx"

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
        <div id='tabs'>
          <HeaderBar />
        </div>
        <div id='fondoCohort'>
        <div>
          <Link to='/'><HolaCode /></Link>
        </div>
        <div>
          <h1 style={{color: "purple"}}> COHORT 1 </h1>
        </div>
        <MentorList mentors={this.state.mentors} match={this.props.match}/>
        <StudentList students={this.state.students} match={this.props.match}/>
        <ImageCollections />

        <Route path={`${this.props.match.url}/:id`} render={(props) => <Profile {...props} data={this.state}/> } />
      </div>
    </div>
    )
  }
};
