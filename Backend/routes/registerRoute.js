const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/registerController");

router.post("/register", registerUser); // <-- Add '/register' here

module.exports = router;