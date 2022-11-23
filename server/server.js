const express = require('express');
const cors = require('cors');
require('dotenv').config();
//add path 
const path = require('path');
const db = require('./db/db-connection.js');
const fetch = require("node-fetch");


const app = express();
//after express but before port - connecting the directory name which is found in client, so go back once from here in server
//up to the project folder, then go to client, then go to build 
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(REACT_BUILD_DIR));

//calling either the process.env.PORT or 8080 if that's not available
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// create the get request
app.get('/:category', async (req, res) => {
  let category = req.params.category.toLowerCase();
  console.log
  if(category.toLowerCase()==="random"){
    let URL = "https://www.affirmations.dev/";
    let apiAffirmation = await fetch(URL)
    .then((response) => response.json());
    console.log(apiAffirmation);
    let punctuatedAffirmation = {"affirmation": `${apiAffirmation.affirmation}.`}
    res.send(punctuatedAffirmation);
  } else {
    try {
      const affirmationQuery = 'SELECT text FROM affirmations WHERE category = $1';
  //the categories are defined and selected in the client. See category const above.
      const affirmationList = await db.query(affirmationQuery, [category]);
        console.log(affirmationList);
      let affirmationText = affirmationList.rows[Math.floor(Math.random() * affirmationList.rowCount)].text;
      console.log(affirmationText);
      res.send({"affirmation": affirmationText});
    } catch (e) {
        console.log(e);
      return res.status(400).json({ e });
  }
}
});

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  //res.json({ message: 'Hello from My template ExpressJS' }); Instead of the response being a json it's a 
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

app.post('/api/me', cors(), async (req, res) => {
  const newUser = {
    lastname: req.body.family_name,
    firstname: req.body.given_name,
    email: req.body.email,
    picture: req.body.picture

  }
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