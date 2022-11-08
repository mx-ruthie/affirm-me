const express = require("express");
const fetch = require("node-fetch");
//import express from "express";
//import cors from 'cors';
//import db from "../db/db-connection.js";
// import { restart } from "nodemon";
// import db from "../db/db-connection.js";
const router = express.Router();

// GET REQUEST FOR AFFIRMATIONS API
router.get('/', (req, res) => {
  let URL = "https://www.affirmations.dev/";
  //console.log(process.env.REACT_APP_API_KEY, "API SAN DIEGO")
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
  });


module.exports = router;