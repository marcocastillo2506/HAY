import React from "react";
import MentorThumbnail from "./MentorThumbnail.jsx"

const MentorList = (props) => (
  <div>
    {props.mentors.map(mentor => <MentorThumbnail match={props.match} mentor={mentor} key={mentor.id} />)}
  </div>
);

export default MentorList;
