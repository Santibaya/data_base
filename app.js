const express = require("express");
const dotenv = require("dotenv").config();
const methodOverride = require('method-override');
const path = require("path");

const port = process.env.PORT || 3000;

const cancionRouter = require("./routers/cancionRouter");

const app = express();

app.set("view engine", "ejs");

app.set("views", [
path.join(__dirname, "./views/canciones"),
path.join(__dirname, "./views/partials"),
]);

app.use(express.static("public"));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use("/api", cancionRouter);

app.listen(port || 3001, () => {
    console.log(
      "Servidor escuchando en puerto " + port + "| http://localhost:" + port ||
        3001
    );
  });