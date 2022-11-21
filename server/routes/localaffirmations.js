const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

// GET REQUEST FOR LOCAL AFFIRMATIONS TABLE
router.get('/', (req, res) => {
  let URL = "";
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
  });


module.exports = router;