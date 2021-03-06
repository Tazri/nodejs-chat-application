/*
 * Title: Error Handling Fuction
 * Description: Function for handling the errors in server side
 * Author: Md Tazri
 * Date: 6/9/2021
 *
 */

// errorLib object - module scaffolding
const errorLib = {};

// printError Function
errorLib.printError = (error) => {
  console.log("\nš£ There was a error š£");
  console.log("š Name : " + error.name);
  console.log("\nāļø  Message : " + error.message);
  console.log("\nš Stack : \n");
  console.log(error.stack);
  console.log("\n\n");
};

// export errorLib
module.exports = errorLib;
