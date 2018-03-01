import React from "react";

const Student = (props) => (
  <div style={{color: "#FEFEFE"}}>
    <img id='studentsPic' className="profile-picture" src={`https://i.imgur.com/${props.student.picture_path}.jpg`}/>
    <span id='studentsFN'>{props.student.first_name}</span>
    <span id='studentsLN'>{props.student.last_name}</span>
    <span id='studentsGH'>{props.student.github_link}</span>
  </div>
);

export default Student;
