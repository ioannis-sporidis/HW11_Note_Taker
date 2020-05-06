// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML directory
// =============================================================
const HTML_DIR = path.resolve(__dirname, "public");
const indexPath = path.join(HTML_DIR, "index.html");
const notesPath = path.join(HTML_DIR, "notes.html");

// HTML routes
// =============================================================
app.get("/", (req, res) => { res.sendFile(indexPath) });
app.get("/notes", (req, res) => { res.sendFile(notesPath) });

// API routes
// =============================================================
app.get("/api/notes", (req, res) => { });
app.post("/api/notes", (req, res) => { });
app.delete("/api/notes/:id", (req, res) => { });

// Listener
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
