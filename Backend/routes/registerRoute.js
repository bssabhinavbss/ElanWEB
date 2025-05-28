const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/registerController");

router.post("/", registerUser); // <-- Add '/register' here

module.exports = router;
