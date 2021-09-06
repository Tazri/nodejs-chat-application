/*
 * Title: Error Handler
 * Description: Handle The Error
 * Author: Md Tazri
 * Date: 6/9/2021
 *
 */

// external dependencies
const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your Requested Content Was Not Found!"));
}

// default error handler
function errorHandler(error, req, res, next) {
  // set error in res locals
  res.locals.error =
    process.env.NODE_ENV === "development"
      ? error
      : { message: error.message, status: error.status };

  // set status
  res.status(error.status || 500);

  // if it html response
  if (!res.locals.html) {
    // html response
    res.render("error", {
      title: "Error Page",
    });
  } else {
    // json response
    res.json(res.locals.error);
  }
}

// exports
module.exports = {
  notFoundHandler,
  errorHandler,
};
