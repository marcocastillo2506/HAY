import React from "react";

const MentorThumbnail = (props) => (
  <div style={{color: "black"}}>
    <img id='teachersPic' className="profile-picture" src={`https://i.imgur.com/${props.mentor.picture_path}.jpg`}/>
    <span id='teachersFN'>{props.mentor.first_name}</span>
)

export default MentorThumbnail;
