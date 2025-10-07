const express = require("express");
const fs = require("fs");
const path = require("path");

const routerUser = express.Router();

// Path to user.json (put user.json in the project root)
const userFile = path.join(__dirname, "..", "user.json");
const readUser = () => JSON.parse(fs.readFileSync(userFile, "utf8"));

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get("/profile", (req, res, next) => {
  try {
    const user = readUser();
    res.json(user);
  } catch (err) {
    next(err);
  }
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and password is valid then send response as:
    { status: true,  message: "User Is valid" }
- If username is invalid:
    { status: false, message: "User Name is invalid" }
- If password is invalid:
    { status: false, message: "Password is invalid" }
*/
routerUser.post("/login", (req, res, next) => {
  try {
    const { username, password } = req.body || {};
    const user = readUser();

    if (username !== user.username) {
      return res.json({ status: false, message: "User Name is invalid" });
    }
    if (password !== user.password) {
      return res.json({ status: false, message: "Password is invalid" });
    }
    return res.json({ status: true, message: "User Is valid" });
  } catch (err) {
    next(err);
  }
});

/*
- Modify /logout route to accept username as parameter and display message
  in HTML format like <b>${username} successfully logout.</b>
*/
routerUser.get("/logout/:username", (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logout.</b>`);
});

module.exports = routerUser;
