import React from "react";
import { Link } from "react-router-dom";

const MentorThumbnail = (props) => (
  <div style={{color: "purple"}}>
    <Link to={`${props.match.url}/${props.mentor.id}`}>
      <img id='teachersPic' className="profile-picture" src={`https://i.imgur.com/${props.mentor.picture_path}.jpg`}/>
    </Link>
      <span style={{color: "purple"}} id='teachersFN'>{`${props.mentor.first_name} ${props.mentor.last_name}`}</span>
    </div>
)

export default MentorThumbnail;
