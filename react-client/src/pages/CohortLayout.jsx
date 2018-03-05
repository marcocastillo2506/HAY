import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import HeaderBar from "../components/home/HeaderBar.jsx";
import HolaCoHort from "../components/cohort/HolaCohort.jsx";
import MentorList from "../components/cohort/MentorList.jsx";
import StudentList from "../components/cohort/StudentList.jsx";
import ImageCollections from "../components/cohort/ImageCollections.jsx";

const CohortLayout = (props) => (
      <div>
        <HeaderBar />
        <div>
          <HolaCoHort/>
        </div>
        <div>
        <div id='fondoHomeCH1'>
        <MentorList mentors={props.data.mentors} match={props.match}/>
        <StudentList students={props.data.students} match={props.match}/>
        <ImageCollections />
      </div>
    </div>
  </div>

)

export default CohortLayout;
