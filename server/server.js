const express = require('express');
const cors = require('cors');
require('dotenv').config();
//add path 
const path = require('path');
const db = require('./db/db-connection.js');
const affirmationApi = require('./routes/affirmationapi.js');


const app = express();
//after express but before port - connecting the directory name which is found in client, so go back once from here in server
//up to the project folder, then go to client, then go to build 
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(REACT_BUILD_DIR));

//calling either the process.env.PORT or 8080 if that's not available
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

//needed to install node-fetch@2 in order to do fetch on affirmationsapi.js
app.use('/random', affirmationApi);
// creates an endpoint for the route /api
app.get('/', (req, res) => {
  //res.json({ message: 'Hello from My template ExpressJS' }); Instead of the response being a json it's a 
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

//routes
const random =require( "./routes/affirmationapi.js");
app.use("/random", random)

// create the get request
app.get('/table', cors(), async (req, res) => {
  
  try {
    const { rows: affirmations } = await db.query('SELECT * FROM affirmations');
    res.send(affirmations);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// create the POST request
// app.post('/api/students', cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

//A put request - Update a student 
// app.put('/api/students/:studentId', cors(), async (req, res) =>{
//   console.log(req.params);
//   //This will be the id that I want to find in the DB - the student to be updated
//   const studentId = req.params.studentId
//   const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
//   console.log("In the server from the url - the student id", studentId);
//   console.log("In the server, from the react - the student to be edited", updatedStudent);
//   // UPDATE students SET lastname = "something" WHERE id="16";
//   const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
//   const values = [updatedStudent.lastname, updatedStudent.firstname];
//   try {
//     const updated = await db.query(query, values);
//     console.log(updated.rows[0]);
//     res.send(updated.rows[0]);

//   }catch(e){
//     console.log(e);
//     return res.status(400).json({e})
//   }
// })

// delete request
// app.delete('/api/students/:studentId', cors(), async (req, res) =>{
//   const studentId = req.params.studentId;
//   //console.log("From the delete request-url", req.params);
//   await db.query('DELETE FROM students WHERE id=$1', [studentId]);
//   res.status(200).end();

// });


// removing example db query text here
app.post('/api/me', cors(), async (req, res) => {
  const newUser = {
    lastname: req.body.family_name,
    firstname: req.body.given_name,
    email: req.body.email,
    //sub: req.body.sub
    picture: req.body.picture

  }
  //console.log(newUser);
//looks at db to see if user exists
  const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
  const valuesEmail = [newUser.email]
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  //console.log(resultsEmail);
  //question marks below are optional chaining
  //if user does exist, thank you, else add to db
  if(resultsEmail.rows[0]?.email?.length > 0){
    //console.log(`Thank you ${resultsEmail.length() > 0} for comming back`)
    console.log("does this fix the crash?")
  } else{
  const query = 'INSERT INTO users(lastname, firstname, email, picture) VALUES($1, $2, $3, $4) RETURNING *'//add photo refs here too
  const values = [newUser.lastname, newUser.firstname, newUser.email, newUser.picture] //add photo refs here too
  const result = await db.query(query, values);
  console.log(result);
  res.send('it worked')
  }

});



// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});