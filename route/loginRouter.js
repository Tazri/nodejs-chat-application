/*
 * Title: Login Router
 * Description: Router for login
 * Author: Md Tazri
 * Date: 6/9//20021
 *
 */

// external dependencies
const express = require("express");

// internal dependencies
const { getlogin } = require("./../controller/loginController");

// create router
const router = express.Router();

// login page
router.get("/", getlogin);

// export router
module.exports = router;
