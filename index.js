const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");

const ProductRoute = require("./routes/product.route");
const app = express();
connectDb();
app.use(cors());

app.use(express.json());

app.use("/products", ProductRoute);

app.listen(3000, () => console.log("app started on 3000 port"));
