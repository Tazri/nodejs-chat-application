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
  console.log("\n💣 There was a error 💣");
  console.log("🔖 Name : " + error.name);
  console.log("\n✉️  Message : " + error.message);
  console.log("\n📃 Stack : \n");
  console.log(error.stack);
  console.log("\n\n");
};

// export errorLib
module.exports = errorLib;
