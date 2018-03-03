import React from "react";
import StudentThumbnail from "./StudentThumbnail.jsx"

const StudentList = (props) => (
  <div>
    {props.students.map(student => <StudentThumbnail student={student} key={student.id} match={props.match}/>)}
  </div>
);

export default StudentList;
