import React from "react";

const Mentor = (props) => (
  <div style={{color: "black"}}>
    <img id='teachersPic' className="profile-picture" src={`https://i.imgur.com/${props.mentor.picture_path}.jpg`}/>
    <span id='teachersFN'>{props.mentor.first_name}</span>
    <span id='teachersLN'>{props.mentor.last_name}</span>
    <span id='teachersGH'>{props.mentor.github_link}</span>
  </div>
);

export default Mentor;
