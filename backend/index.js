const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Store = require("./routes/almacen")
const Product = require("./routes/producto")
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/almacen", Store);
app.use("/api/producto", Product);

app.listen(process.env.PORT, () =>
  console.log("Backend server running OK, on port: ", process.env.PORT)
);

dbConnection();
