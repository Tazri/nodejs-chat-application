/*
 * Title: App
 * Description: This is application file where handle server
 * Author: Md Tazri
 * Date: 6/9/2021
 *
 */

// external dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal dependencies
const { printError } = require("./lib/errorLib");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./route/loginRouter");

// config .env file by dotenv
dotenv.config();

// connection with mongodb
mongoose
  .connect(process.env.MONGO_CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("🗃️  Database Connection Successfully! 🗃️");
  })
  .catch((connectionError) => {
    console.log("❌ Database Conncetion Failure! ❌\n");

    // print error message
    printError(connectionError);
  });

// create express app
const app = express();

// parse request for json and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// routing setup
app.use("/", loginRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handling
app.use(errorHandler);

// listen the app
app.listen(process.env.PORT, () => {
  // clear the console
  console.clear();

  // print message
  console.log("\n\n🖥️ App Was Litening On Port " + process.env.PORT + " 🖥️");
  console.log("\n\n\n");
  console.log("🚎 URL : http://localhost:" + process.env.PORT);
  console.log("\n\n");
});
