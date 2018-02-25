import $ from "jquery";
import React from 'react';
import { Link } from 'react-router-dom';

import MentorList from "../components/cohort/MentorList.jsx";
import StudentList from "../components/cohort/StudentList.jsx";
import ImageCollections from "../components/cohort/ImageCollections.jsx";

export default class Cohort extends React.Component {
  render(){
    return(
      <div>
        <div>
          <Link to='/'><h1> &lt;HOLACODE /&gt; YEARBOOK </h1></Link>
          <h1> COHORT 1 </h1>
        </div>
        <MentorList />
        <StudentList />
        <ImageCollections />
      </div>
    )
  }
}
