import React from "react";

const StudentThumbnail = (props) => (
  <div style={{color: "#FEFEFE"}}>
    <img id='studentsPic' className="profile-picture" src={`https://i.imgur.com/${props.student.picture_path}.jpg`}/>
    <span id='studentsFN'>{props.student.first_name}</span>
)

export default StudentThumbnail;
