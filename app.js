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

app.get('/about', (req, res) => {
    res.render("about", { title: "About Us" });
});

app.get('/eventdetails', (req, res) => {
    res.render("eventdetails"); // Event details page
});

app.get('/travel', (req, res) => {
    res.render("travel", { title: "Travel" });
});

app.get('/things-to-do', (req, res) => {
    res.render('things-to-do');
  });
  
app.get("/faq", (req, res) => {
    res.render("faq", { title: "Frequently Asked Questions" });
});

app.get("/registry", (req, res) => {
    res.render("registry", { title: "Registry" });
});

app.get("/rsvp", (req, res) => {
    res.render("rsvp", { title: "RSVP for Our Wedding" });
});

app.use((req, res, next) => {
    res.status(404).send("Page Not Found");
});

// Export the app as a serverless function
module.exports = app;