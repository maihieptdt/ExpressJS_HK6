const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const morgan = require("morgan");
const handlebars = require("express-handlebars");

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));
//template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources/views"));

// route function
app.get("/", (req, res) => {
  res.render("home");
});

// localhost 127.0.0.1

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
