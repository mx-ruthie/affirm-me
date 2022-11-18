// import { useState, useEffect } from "react";
// import Categories from "./categories";

function Splash(props) {
  let user = props.user;
  // this is my original state with an array of students 
  // const [students, setStudents] = useState([]);

  // // New State to contro the existing student Id that the user wants to edit
  // const [editStudentId, setEditStudentId] = useState(null);

  // const loadStudents = () =>{
  //   // A function to fetch the list of students that will be load anytime that list change
  //   fetch("/api/students")
  //     .then((response) => response.json())
  //     .then((students) => {
  //           setStudents(students);
  //         });
  // }

  // useEffect(() => {
  //   loadStudents();
  // }, []);

  // //A function to handle the Delete funtionality
  // const onDelete = (student) =>{
  //   return fetch(`/api/students/${student.id}`, {
  //     method: "DELETE"
  //   }).then((response) => {
  //     //console.log(response);
  //     if(response.ok){
  //       loadStudents();
  //     }
  //   })
  // }

  // const addStudent = (newStudent) => {
  //   //console.log(newStudent);
  //   //postStudent(newStudent);
  //   setStudents((students) => [...students, newStudent]);
  // };

  // //A function to control the update in the parent (student component)

  // const updateStudent = (savedStudent) =>{
  //   console.log("Line 29 savedStudent", savedStudent);
  //   // This function should update the whole list of students - 
  //   setStudents((students) => {
  //     const newArrayStudents = [];
  //     for(let student of students){
  //       if(student.id === savedStudent.id){
  //         newArrayStudents.push(savedStudent);
  //       } else {
  //         newArrayStudents.push(student);
  //       }
  //     }
  //     return newArrayStudents;
  //   })
  //   // This line is only to close the form;
  //   setEditStudentId(null);
  // }
  
  // const onEdit = (student) =>{
  //   console.log("This is line 26 on student component", student);
  //   const editingID = student.id;
  //   console.log("Just the student id", student.id)
  //   setEditStudentId(editingID);

  // }

  return (
    <div className="students">
      {/* deleted students list map from template */}
      {/* I cannot figure out why the conditional in the following line won't work. It only reads the first one. 
      If I remove the ! before user then it only reads the second one, but it doesn't switch between */}
      {user ? (<h4>Click "Affirm Me" for a new affirmation.</h4>) : (<h4>Log in to save the affirmations you believe, or click "Affirm Me" for a new affirmation.</h4>)}
    </div>
  );
}

export default Splash;
