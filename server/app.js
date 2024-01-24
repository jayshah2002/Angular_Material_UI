const express = require("express");
const dotenv = require("dotenv");
const cors= require("cors");
const bodyParser=require("body-parser");
const app = express();
const port = 3000;

dotenv.config({path :'./.env'});
require('./dbconnect')

const user_routes=require('./route/user.js');
app.use(express.json());
app.use(cors());
app.use(user_routes);

app.listen(port, () => {
  console.log(`listing${port}`);
});