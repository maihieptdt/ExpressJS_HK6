const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const { query, urlencoded } = require("express");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

const route = require("./routes");
const db = require("./config/db");

// Connect db

db.connect();

// HTTP logger
app.use(morgan("combined"));

//template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// route function
route(app);
// localhost 127.0.0.1

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
