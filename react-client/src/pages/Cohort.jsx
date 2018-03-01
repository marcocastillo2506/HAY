import $ from "jquery";
import React from 'react';
import { Link } from 'react-router-dom';

import HolaCode from '../components/home/HolaCode.jsx';
import AppBarTest from "../components/home/AppBar.jsx";

import MentorList from "../components/cohort/MentorList.jsx";
import StudentList from "../components/cohort/StudentList.jsx";
import ImageCollections from "../components/cohort/ImageCollections.jsx";



class Cohort extends React.Component {
  constructor() {
    super();
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
          <AppBarTest />
        </div>
        <div id='fondoCohort'>
        <div>
          <Link to='/'><HolaCode /></Link>
        </div>
        <div>
          <h1 style={{color: "purple"}}> COHORT 1 </h1>
        </div>
        <div>
          <MentorList mentors={this.state.mentors} />
        </div>
        <div>
        <StudentList students={this.state.students}/>
        </div>
        <div>
        <ImageCollections />
        </div>
      </div>
    </div>
    )
  }
};
export default Cohort;
