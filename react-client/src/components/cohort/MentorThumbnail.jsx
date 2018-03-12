import React from "react";
import { Link } from "react-router-dom";



const MentorThumbnail = (props) => (
  //<div class="container">
  <div style={{color: "White"}}>
    <Link to={`${props.match.url}/${props.mentor.id}`}>
      <img id='teachersPic' className="profile-picture" src={`https://i.imgur.com/${props.mentor.picture_path}.jpg`}/>
    </Link>
      <span style={{color: "White"}} id='teachersFN'>{`${props.mentor.first_name} ${props.mentor.last_name}`}</span>
    </div>
  //</div>
)

export default MentorThumbnail;
