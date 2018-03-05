import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import MentorList from "../components/cohort/MentorList.jsx";
import StudentList from "../components/cohort/StudentList.jsx";
import ImageCollections from "../components/cohort/ImageCollections.jsx";

const CohortLayout = (props) => (
  <div id='fondoCohort'>
    <div>
      <h1 style={{color: "purple"}}> COHORT 1 </h1>
    </div>
    <MentorList mentors={props.data.mentors} match={props.match}/>
    <StudentList students={props.data.students} match={props.match}/>
    <ImageCollections />
  </div>
)

export default CohortLayout;
