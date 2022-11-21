const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

// GET REQUEST FOR AFFIRMATIONS API
router.get('/', (req, res) => {
  let URL = "https://www.affirmations.dev/";
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
  });


module.exports = router;