const express = require("express");
const path = require("path");

const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err.message));

// parse JSON bodies for /login
app.use(express.json());

// Add User Router
const userRouter = require("./routes/users");
app.use("/api/v1/user", userRouter); // NOTE the leading slash

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Server Error");
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Web Server is listening at port ${PORT}`);
});
