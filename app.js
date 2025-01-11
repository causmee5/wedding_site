const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

// Route to render the RSVP page
app.get('/rsvp', (req, res) => {
    res.render('rsvp', { title: 'RSVP for Our Wedding' });  // Pass dynamic data to the view if needed
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});