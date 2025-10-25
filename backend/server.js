
const http = require("http");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const querystring = require("querystring");

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/details")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Define schema
const signupschema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  mobile: String,
});
const dbmodel = mongoose.model("registrations", signupschema);

// ✅ Correct path to frontend
const frontendDir = path.join(__dirname, "../frontend");

// ✅ Create HTTP Server
const server = http.createServer((req, res) => {
  // Serve main index page
  if (req.url === "/" && req.method === "GET") {
    const filePath = path.join(frontendDir, "index.html");
    return fs.createReadStream(filePath)
      .on("error", () => {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("index.html not found");
      })
      .pipe(res);
  }

  // Serve home, about pages
  if (req.url === "/home.html" || req.url === "/aboutus.html") {
    const filePath = path.join(frontendDir, req.url);
    return fs.createReadStream(filePath).pipe(res);
  }

  // Serve CSS / JS
  if (req.url.endsWith(".css") || req.url.endsWith(".js")) {
    const filePath = path.join(frontendDir, req.url);
    const ext = path.extname(filePath);
    const contentType =
      ext === ".css" ? "text/css" : "application/javascript";
    res.writeHead(200, { "Content-Type": contentType });
    return fs.createReadStream(filePath).pipe(res);
  }

  // Handle signup form submission
  if (req.url === "/signin" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const data = querystring.parse(body);
      dbmodel
        .create(data)
        .then(() => {
          res.writeHead(302, { Location: "/home.html" });
          res.end();
        })
        .catch((err) => {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end(`<h1>Database Error</h1><p>${err}</p>`);
        });
    });
    return;
  }

  // View registered users
  if (req.url === "/view") {
    dbmodel
      .find()
      .then((users) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Registered Users</h2>");
        res.write("<table border='1'><tr><th>Name</th><th>Email</th><th>Mobile</th></tr>");
        users.forEach((u) => {
          res.write(`<tr><td>${u.name}</td><td>${u.email}</td><td>${u.mobile}</td></tr>`);
        });
        res.end("</table>");
      })
      .catch(() => {
        res.writeHead(500);
        res.end("Error loading users");
      });
    return;
  }

  // Fallback for unknown routes
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 Not Found");
});

// ✅ Start Server
server.listen(7000, () => {
  console.log("✅ Server running at http://localhost:7000/");
});
