import React from "react";
import { Link } from "react-router-dom";

const StudentThumbnail = (props) => (
  <div style={{color: "purple"}}>
    <Link to={`${props.match.url}/${props.student.id}`}>
      <img id='studentsPic' className="profile-picture" src={`https://i.imgur.com/${props.student.picture_path}.jpg`}/>
    </Link>

    <span id='studentsF-LN'>{`${props.student.first_name} ${props.student.last_name}`}</span>


  </div>
)

export default StudentThumbnail;
