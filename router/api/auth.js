const express = require("express");
const {registrationController,loginController} = require("../../controllers/authController");
const router = express.Router();

// localhost:5000/api/v1/auth/login
router.post("/registration",registrationController)
router.post("/login",loginController)

module.exports = router;