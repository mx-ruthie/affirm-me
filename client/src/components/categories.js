//import { useState } from "react";

//I will use this old Form compopnent for the drop-down form list that will allow logged in users to
//select from which category they receive an affirmation,including favorites once that is built
const Categories = () => {
//const Form = (props) => {

//One of the following states will be where I set the initial div display on the splash page to *always* be affirmation
//**This is the default text displayed in the div which changes onClick of the Affirm Me button** #1 
//exact DB query: SELECT text FROM affirmations WHERE id = 1; 

  // const {initialStudent = {id: null, 
  //                         firstname: "", 
  //                       lastname: ""}} = props;

  // This is the oroginal State with not initial student 
  // const [student, setStudent] = useState(initialStudent);

  // //create functions that handle the event of the user submitting the drop down selection
  // const handleNameChange = (event) => {
  //   const firstname = event.target.value;
  //   setStudent((student) => ({ ...student, firstname }));
  // };


  //The only post request that could potentially (props? state/hooks?) get filtered through this form is 
  //the compoent that controls adding a generated affirmation to the favorites table

  // //A function to handle the post request
  // const postStudent = (newStudent) => {
  //   //removed the local host 8080 part of the fetch call because its been added as the proxy in the package.json
  //   return fetch("/api/students", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newStudent),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("From the post ", data);
  //       props.saveStudent(data);
  //     });
  // };

    // Deleted lines of code around handling an Update request 
    // refer to template if re-adding UPDATE / PUT request A function to handle the Update request
          //Not 100% ready to remove this from template  
          //const handleSubmit = (e) => {
          //   e.preventDefault();
          //   if(student.id){
          //     updateStudent(student);
          //   } else{
          //     postStudent(student);
          //   }
            
          // };

  return ( 
    <div>"this is a div"</div>
    )
  //   <form onSubmit={handleSubmit}>
  //     <fieldset>
  //       **Will refer to this resource to build a form with a drop down selection for categories**
  //        **https://www.robinwieruch.de/react-dropdown/**
  //     </fieldset>
  //    replace following button with the Affirm Me button
  //     <button type="submit">{!student.id ? "ADD": "SAVE"}</button>
  //   </form>
  // );
};

export default Categories;
