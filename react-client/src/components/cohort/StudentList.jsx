import React from "react";
import Student from "./Student.jsx"

const StudentList = (props) => (
  <div style={{color: "#ff0000"}}>
    {props.students.map(student => <Student student={student} key={student.id} />)}
  </div>
);

export default StudentList;
