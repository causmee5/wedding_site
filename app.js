const express = require("express");
const path = require("path");

const app = express();

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/rsvp", (req, res) => {
    res.render("rsvp", { title: "RSVP for Our Wedding" });
});

// Export the app as a serverless function
module.exports = app;