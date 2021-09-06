/*
 * Title: Login Controller
 * Description: Control Login Page
 * Author: Md Tazri
 * Date: 6/9/2021
 *
 */

// getlogin
function getlogin(req, res, next) {
  res.render("index", {
    title: "Login - Chat Application",
  });
}

// exports
module.exports = {
  getlogin,
};
